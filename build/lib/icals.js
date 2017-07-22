'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getICals = exports.addICal = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const p = _bluebird2.default.promisify;
const db = require.main.require('./src/database');
const utils = require.main.require('./public/src/utils');

const sortedSetAdd = p(db.sortedSetAdd);
const sortedSetCard = p(db.sortedSetCard);
const setObject = p(db.setObject);
const getSortedSetRange = p(db.getSortedSetRange);

const addICal = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (data) {
    const icalId = utils.generateUUID();
    const count = yield sortedSetCard('plugins:calendar:icals');
    const err = yield sortedSetAdd('plugins:calendar:icals', count + 1, icalId);
    const asd = yield setObject('plugins:calendar:ical:' + icalId, data);
  });

  return function addICal(_x) {
    return _ref.apply(this, arguments);
  };
})();

const getICals = (() => {
  var _ref2 = (0, _bluebird.coroutine)(function* () {
    const icals = yield getSortedSetRange('plugins:calendar:icals');
    console.log(icals);
  });

  return function getICals() {
    return _ref2.apply(this, arguments);
  };
})();

exports.addICal = addICal;
exports.getICals = getICals;
//# sourceMappingURL=icals.js.map