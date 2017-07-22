'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventsEndingAfter = exports.listByEndKey = exports.listExternalKey = exports.listKey = exports.getAllEvents = exports.escapeEvent = exports.getExternalEventsByDate = exports.getEventsByDate = exports.getEvent = exports.eventExists = exports.saveEvent = exports.deleteEvent = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _ical = require('ical.js');

var _ical2 = _interopRequireDefault(_ical);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _responses = require('./responses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = require.main.require('./src/database');
const plugins = require.main.require('./src/plugins');
const posts = require.main.require('./src/posts');

const p = _bluebird2.default.promisify;

const sortedSetAdd = p(db.sortedSetAdd);
const sortedSetRemove = p(db.sortedSetRemove);
const getSortedSetRangeByScore = p(db.getSortedSetRangeByScore);
const getSortedSetRange = p(db.getSortedSetRange);
const setObject = p(db.setObject);
const getObject = p(db.getObject);
const getObjects = p(db.getObjects);
const deleteKey = p(db.delete);
const exists = p(db.exists);
const fireHook = p(plugins.fireHook);
const getCidsByPids = p(posts.getCidsByPids);
const getCidByPid = p(posts.getCidByPid);

const listKey = 'plugins:calendar:events';
const listExternalKey = 'plugins:calendar:icals';
const listByEndKey = `${listKey}:byEnd`;

const saveEvent = event => {
  const objectKey = `${listKey}:pid:${event.pid}`;
  const endDate = event.repeats ? event.repeats.endDate || 9999999999999 : event.endDate;
  return _bluebird2.default.all([sortedSetAdd(listKey, event.startDate, objectKey), sortedSetAdd(listByEndKey, endDate, objectKey), setObject(objectKey, event)]);
};

const deleteEvent = data => {
  const objectKey = `${listKey}:pid:${data.post.pid}`;
  return _bluebird2.default.all([sortedSetRemove(listKey, objectKey), sortedSetRemove(listByEndKey, objectKey), deleteKey(objectKey), (0, _responses.removeAll)(data.post.pid)]);
};

const getEventsByDate = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (startDate, endDate) {
    // may be possible eventually
    // except I need to do the intersection, not the union, of the sets
    // and I want events whose start date could be before the month starts
    // and whose end date could be after the month ends

    // const keys = await getSortedSetRangeByScore([
    //   listKey,
    //   listByEndKey,
    // ], 0, -1, startDate, endDate);

    // for now we have to do this,
    // and hope it isn't too hard on memory
    var _ref2 = yield _bluebird2.default.all([
    // events that start before end date
    getSortedSetRangeByScore(listKey, 0, -1, 0, endDate),
    // events that end after start date
    getSortedSetRangeByScore(listByEndKey, 0, -1, startDate, +Infinity)]),
        _ref3 = (0, _slicedToArray3.default)(_ref2, 2);

    const byStart = _ref3[0],
          byEnd = _ref3[1];
    // filter to events that only start before the endDate and end after the startDate

    const keys = byStart.filter(function (x) {
      return byEnd.includes(x);
    });

    const events = yield getObjects(keys);

    const cids = yield getCidsByPids(events.map(function (event) {
      return event.pid;
    }));

    return events.map(function (event, i) {
      return (0, _extends3.default)({}, event, {
        cid: cids[i],
        startDate: parseInt(event.startDate, 10),
        endDate: parseInt(event.endDate, 10),
        repeats: typeof event.repeats === 'string' ? JSON.parse(event.repeats) : event.repeats,
        mandatory: event.mandatory === true || event.mandatory === 'true',
        allday: event.allday === true || event.allday === 'true'
      });
    });
  });

  return function getEventsByDate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const getExternalEventsByDate = (() => {
  var _ref4 = (0, _bluebird.coroutine)(function* (startDate, endDate) {
    const keys = yield getSortedSetRange(listExternalKey, 0, -1);
    const events = yield getObjects(keys.map(function (key) {
      return 'plugins:calendar:ical:' + key;
    }));
    const preparedEvents = [];

    yield _bluebird2.default.all(events.filter(function (event) {
      return event.url;
    }).map((() => {
      var _ref5 = (0, _bluebird.coroutine)(function* (event) {
        const body = yield (0, _requestPromise2.default)(event.url);
        const jcalData = _ical2.default.parse(body);
        const vcalendar = new _ical2.default.Component(jcalData);
        const vevents = yield _bluebird2.default.all(vcalendar.getAllSubcomponents('vevent').filter(function (vevent) {
          const dtstart = vevent.getFirstPropertyValue('dtstart');
          const dtend = vevent.getFirstPropertyValue('dtend');

          return dtstart.toUnixTime() + '000' >= startDate && dtend.toUnixTime() + '999' <= endDate;
        }).map((() => {
          var _ref6 = (0, _bluebird.coroutine)(function* (vevent) {
            const dtstart = vevent.getFirstPropertyValue('dtstart');
            const dtend = vevent.getFirstPropertyValue('dtend');
            const summary = vevent.getFirstPropertyValue('summary') || '';
            const location = vevent.getFirstPropertyValue('location') || '';
            const url = vevent.getFirstPropertyValue('url') || '';
            const description = (vevent.getFirstPropertyValue('description') || '').replace(/^\s+/g, '').replace(/\n/g, '<br>');

            return {
              external: true,
              source: event.name,
              url: url,

              allday: true,
              day: dtstart.toString().substring(0, 10),
              description: description,
              endDate: Number(dtend.toUnixTime() + '999'),
              location: location,
              name: summary,
              startDate: Number(dtstart.toUnixTime() + '000')
            };
          });

          return function (_x6) {
            return _ref6.apply(this, arguments);
          };
        })()));

        preparedEvents.push.apply(preparedEvents, (0, _toConsumableArray3.default)(vevents));
        return;
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    })()));

    return preparedEvents;
  });

  return function getExternalEventsByDate(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
})();

const getAllEvents = (() => {
  var _ref7 = (0, _bluebird.coroutine)(function* () {
    const keys = yield getSortedSetRange(listKey, 0, -1);
    const events = yield getObjects(keys);

    return events;
  });

  return function getAllEvents() {
    return _ref7.apply(this, arguments);
  };
})();

const getEvent = (() => {
  var _ref8 = (0, _bluebird.coroutine)(function* (pid) {
    const event = yield getObject(`${listKey}:pid:${pid}`);
    const cid = yield getCidByPid(event.pid);

    return (0, _extends3.default)({}, event, {
      cid: cid
    });
  });

  return function getEvent(_x7) {
    return _ref8.apply(this, arguments);
  };
})();

const getEventsEndingAfter = (() => {
  var _ref9 = (0, _bluebird.coroutine)(function* (endDate) {
    const keys = yield getSortedSetRangeByScore(listByEndKey, 0, -1, endDate, +Infinity);
    const events = yield getObjects(keys);

    return events;
  });

  return function getEventsEndingAfter(_x8) {
    return _ref9.apply(this, arguments);
  };
})();

const eventExists = pid => exists(`${listKey}:pid:${pid}`);

const escapeEvent = (() => {
  var _ref10 = (0, _bluebird.coroutine)(function* (event) {
    var _ref11 = yield _bluebird2.default.all([fireHook('filter:parse.raw', event.location || ''), fireHook('filter:parse.raw', event.description || '')]),
        _ref12 = (0, _slicedToArray3.default)(_ref11, 2);

    const location = _ref12[0],
          description = _ref12[1];


    return (0, _extends3.default)({}, event, {
      location: location,
      description: description
    });
  });

  return function escapeEvent(_x9) {
    return _ref10.apply(this, arguments);
  };
})();

exports.deleteEvent = deleteEvent;
exports.saveEvent = saveEvent;
exports.eventExists = eventExists;
exports.getEvent = getEvent;
exports.getEventsByDate = getEventsByDate;
exports.getExternalEventsByDate = getExternalEventsByDate;
exports.escapeEvent = escapeEvent;
exports.getAllEvents = getAllEvents;
exports.listKey = listKey;
exports.listExternalKey = listExternalKey;
exports.listByEndKey = listByEndKey;
exports.getEventsEndingAfter = getEventsEndingAfter;
//# sourceMappingURL=event.js.map