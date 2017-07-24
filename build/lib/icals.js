'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getICalBody = exports.getICals = exports.addICal = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _asyncFile = require('async-file');

var _asyncFile2 = _interopRequireDefault(_asyncFile);

var _cron = require('cron');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const p = _bluebird2.default.promisify;
const db = require.main.require('./src/database');
const utils = require.main.require('./public/src/utils');

const sortedSetAdd = p(db.sortedSetAdd);
const sortedSetCard = p(db.sortedSetCard);
const setObject = p(db.setObject);
const getObjects = p(db.getObjects);
const getSortedSetRange = p(db.getSortedSetRange);

const tmpDir = [_os2.default.tmpdir(), "nodebb-calendar"].join(_path2.default.sep);
_asyncFile2.default.mkdir(tmpDir).catch(() => {});

const addICal = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (data) {
    const icalId = utils.generateUUID();
    const count = yield sortedSetCard('plugins:calendar:icals');
    const err = yield sortedSetAdd('plugins:calendar:icals', count + 1, icalId);
    const ical = yield setObject('plugins:calendar:ical:' + icalId, data);
  });

  return function addICal(_x) {
    return _ref.apply(this, arguments);
  };
})();

const getICals = (() => {
  var _ref2 = (0, _bluebird.coroutine)(function* () {
    const keys = yield getSortedSetRange('plugins:calendar:icals', 0, -1);
    const icals = yield getObjects(keys.map(function (key) {
      return 'plugins:calendar:ical:' + key;
    }));
    for (let i = 0; i < icals.length; i++) {
      icals[i]._key = keys[i];
    }
    return icals;
  });

  return function getICals() {
    return _ref2.apply(this, arguments);
  };
})();

const getICalBody = (() => {
  var _ref3 = (0, _bluebird.coroutine)(function* (ical) {
    const body = yield _asyncFile2.default.readFile([tmpDir, ical._key + ".ical"].join(_path2.default.sep));
    return body;
  });

  return function getICalBody(_x2) {
    return _ref3.apply(this, arguments);
  };
})();

const downloadICal = (() => {
  var _ref4 = (0, _bluebird.coroutine)(function* (ical) {
    const body = yield (0, _requestPromise2.default)(ical.url);
    const targetFile = [tmpDir, ical._key + ".ical"].join(_path2.default.sep);
    yield _asyncFile2.default.writeFile(targetFile, body);
  });

  return function downloadICal(_x3) {
    return _ref4.apply(this, arguments);
  };
})();

const updateICalJob = new _cron.CronJob('00 00 */12 * * *', (0, _bluebird.coroutine)(function* () {
  const icals = yield getICals();
  yield _bluebird2.default.all(icals.map((() => {
    var _ref6 = (0, _bluebird.coroutine)(function* (ical) {
      try {
        yield downloadICal(ical);
      } catch (e) {
        console.error("iCal download failed " + ical._key);
        return false;
      }
      return true;
    });

    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  })()));
}), null, true, null, null, true);

exports.addICal = addICal;
exports.getICals = getICals;
exports.getICalBody = getICalBody;
//# sourceMappingURL=icals.js.map