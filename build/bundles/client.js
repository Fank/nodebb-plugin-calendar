webpackJsonp([182],Array(18).concat([
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(88)('wks')
  , uid        = __webpack_require__(65)
  , Symbol     = __webpack_require__(30).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(315)
  , defined = __webpack_require__(82);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(319)
  , enumBugKeys = __webpack_require__(83);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(398)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(316)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(307);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(31).f
  , has = __webpack_require__(37)
  , TAG = __webpack_require__(18)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(88)('keys')
  , uid    = __webpack_require__(65);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(30)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(82);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(30)
  , core           = __webpack_require__(25)
  , LIBRARY        = __webpack_require__(84)
  , wksExt         = __webpack_require__(93)
  , defineProperty = __webpack_require__(31).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(18);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(403);
var global        = __webpack_require__(30)
  , hide          = __webpack_require__(49)
  , Iterators     = __webpack_require__(50)
  , TO_STRING_TAG = __webpack_require__(18)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inPost = exports.templates = exports.tagTemplate = exports.default = undefined;

var _extends2 = __webpack_require__(309);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagTemplate = function tagTemplate(name, content) {
  return '\\s*\\[' + name + '\\](' + content + ')\\[\\/' + name + '\\]\\s*';
};

var regExps = [{ key: 'name', pattern: '.*' }, { key: 'allday', pattern: 'true|false' }, { key: 'startDate', pattern: '[0-9]+' }, { key: 'endDate', pattern: '[0-9]+' }, { key: 'reminders', pattern: '\\[[0-9, ]*\\]' }, { key: 'location', pattern: '.*' }, { key: 'description', pattern: '[\\s\\S]*' }, { key: 'mandatory', pattern: 'true|false' }].map(function (_ref) {
  var key = _ref.key,
      pattern = _ref.pattern;
  return {
    key: key,
    pattern: tagTemplate(key, pattern)
  };
});

regExps.push({
  key: 'repeats',
  pattern: '\\s*(?:\\[repeats\\](.*)\\[\\/repeats\\])?\\s*'
});

var inPost = new RegExp('(\\[event(?:\\-invalid)?\\][\\s\\S]+\\[\\/event(?:\\-invalid)?\\])');

var full = regExps.map(function (r) {
  return r.pattern;
}).join('');
var eventRegExp = tagTemplate('event', full);

var parse = function parse(text) {
  var matches = text.match(eventRegExp);
  if (!matches || !matches.length) {
    return null;
  }
  var match = matches[1];
  var results = {};
  regExps.forEach(function (_ref2) {
    var key = _ref2.key,
        pattern = _ref2.pattern;

    var m = match.match(pattern);
    results[key] = m && m[1] && m[1].trim();
  });

  results.repeats = match.match(/\[repeats\](.*)\[\/repeats\]/);
  results.repeats = results.repeats && results.repeats[1];

  try {
    return {
      name: results.name,
      allday: results.allday === 'true',
      startDate: parseInt(results.startDate, 10),
      endDate: parseInt(results.endDate, 10),
      reminders: JSON.parse(results.reminders).sort(function (a, b) {
        return b - a;
      }),
      location: results.location,
      description: results.description,
      mandatory: results.mandatory === 'true',
      repeats: results.repeats ? JSON.parse(results.repeats.replace(/&quot;/g, '"')) : null
    };
  } catch (e) {
    return null;
  }
};

var templates = (0, _extends3.default)({}, regExps, {
  event: eventRegExp
});

exports.default = parse;
exports.tagTemplate = tagTemplate;
exports.templates = templates;
exports.inPost = inPost;

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(117).then((function(require) {
	data = __webpack_require__(659);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(116).then((function(require) {
	data = __webpack_require__(660);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(115).then((function(require) {
	data = __webpack_require__(661);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(114).then((function(require) {
	data = __webpack_require__(662);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(113).then((function(require) {
	data = __webpack_require__(663);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(112).then((function(require) {
	data = __webpack_require__(664);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(111).then((function(require) {
	data = __webpack_require__(665);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(110).then((function(require) {
	data = __webpack_require__(666);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(109).then((function(require) {
	data = __webpack_require__(667);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(108).then((function(require) {
	data = __webpack_require__(668);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(107).then((function(require) {
	data = __webpack_require__(669);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(106).then((function(require) {
	data = __webpack_require__(670);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(105).then((function(require) {
	data = __webpack_require__(671);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(104).then((function(require) {
	data = __webpack_require__(672);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(103).then((function(require) {
	data = __webpack_require__(673);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(102).then((function(require) {
	data = __webpack_require__(674);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(101).then((function(require) {
	data = __webpack_require__(675);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(100).then((function(require) {
	data = __webpack_require__(676);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(99).then((function(require) {
	data = __webpack_require__(677);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(98).then((function(require) {
	data = __webpack_require__(678);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(97).then((function(require) {
	data = __webpack_require__(679);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(96).then((function(require) {
	data = __webpack_require__(680);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(95).then((function(require) {
	data = __webpack_require__(681);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(94).then((function(require) {
	data = __webpack_require__(682);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(93).then((function(require) {
	data = __webpack_require__(683);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(92).then((function(require) {
	data = __webpack_require__(684);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(91).then((function(require) {
	data = __webpack_require__(685);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(90).then((function(require) {
	data = __webpack_require__(686);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(89).then((function(require) {
	data = __webpack_require__(687);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(88).then((function(require) {
	data = __webpack_require__(688);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(87).then((function(require) {
	data = __webpack_require__(689);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(86).then((function(require) {
	data = __webpack_require__(690);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(85).then((function(require) {
	data = __webpack_require__(691);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(84).then((function(require) {
	data = __webpack_require__(692);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(83).then((function(require) {
	data = __webpack_require__(693);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(82).then((function(require) {
	data = __webpack_require__(694);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(81).then((function(require) {
	data = __webpack_require__(695);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(80).then((function(require) {
	data = __webpack_require__(696);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(79).then((function(require) {
	data = __webpack_require__(697);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(78).then((function(require) {
	data = __webpack_require__(698);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(77).then((function(require) {
	data = __webpack_require__(699);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(76).then((function(require) {
	data = __webpack_require__(700);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(75).then((function(require) {
	data = __webpack_require__(701);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(74).then((function(require) {
	data = __webpack_require__(702);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(73).then((function(require) {
	data = __webpack_require__(703);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(72).then((function(require) {
	data = __webpack_require__(704);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(71).then((function(require) {
	data = __webpack_require__(705);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(70).then((function(require) {
	data = __webpack_require__(706);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(69).then((function(require) {
	data = __webpack_require__(707);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(68).then((function(require) {
	data = __webpack_require__(708);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(67).then((function(require) {
	data = __webpack_require__(709);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(66).then((function(require) {
	data = __webpack_require__(710);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(65).then((function(require) {
	data = __webpack_require__(711);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(64).then((function(require) {
	data = __webpack_require__(712);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(63).then((function(require) {
	data = __webpack_require__(713);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(62).then((function(require) {
	data = __webpack_require__(714);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(61).then((function(require) {
	data = __webpack_require__(715);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(60).then((function(require) {
	data = __webpack_require__(716);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(59).then((function(require) {
	data = __webpack_require__(717);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(58).then((function(require) {
	data = __webpack_require__(718);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(57).then((function(require) {
	data = __webpack_require__(719);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(56).then((function(require) {
	data = __webpack_require__(720);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(55).then((function(require) {
	data = __webpack_require__(721);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(54).then((function(require) {
	data = __webpack_require__(722);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(53).then((function(require) {
	data = __webpack_require__(723);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(52).then((function(require) {
	data = __webpack_require__(724);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(51).then((function(require) {
	data = __webpack_require__(725);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(50).then((function(require) {
	data = __webpack_require__(726);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(49).then((function(require) {
	data = __webpack_require__(727);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(48).then((function(require) {
	data = __webpack_require__(728);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(47).then((function(require) {
	data = __webpack_require__(729);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(46).then((function(require) {
	data = __webpack_require__(730);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(45).then((function(require) {
	data = __webpack_require__(731);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(44).then((function(require) {
	data = __webpack_require__(732);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(43).then((function(require) {
	data = __webpack_require__(733);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(42).then((function(require) {
	data = __webpack_require__(734);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(41).then((function(require) {
	data = __webpack_require__(735);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(40).then((function(require) {
	data = __webpack_require__(736);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(39).then((function(require) {
	data = __webpack_require__(737);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(38).then((function(require) {
	data = __webpack_require__(738);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(37).then((function(require) {
	data = __webpack_require__(739);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(36).then((function(require) {
	data = __webpack_require__(740);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(35).then((function(require) {
	data = __webpack_require__(741);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(34).then((function(require) {
	data = __webpack_require__(742);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(33).then((function(require) {
	data = __webpack_require__(743);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(32).then((function(require) {
	data = __webpack_require__(744);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(31).then((function(require) {
	data = __webpack_require__(745);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(30).then((function(require) {
	data = __webpack_require__(746);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(29).then((function(require) {
	data = __webpack_require__(747);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(28).then((function(require) {
	data = __webpack_require__(748);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(27).then((function(require) {
	data = __webpack_require__(749);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(26).then((function(require) {
	data = __webpack_require__(750);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(25).then((function(require) {
	data = __webpack_require__(751);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(24).then((function(require) {
	data = __webpack_require__(752);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(23).then((function(require) {
	data = __webpack_require__(753);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(22).then((function(require) {
	data = __webpack_require__(754);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(21).then((function(require) {
	data = __webpack_require__(755);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(20).then((function(require) {
	data = __webpack_require__(756);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(19).then((function(require) {
	data = __webpack_require__(757);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(18).then((function(require) {
	data = __webpack_require__(758);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(17).then((function(require) {
	data = __webpack_require__(759);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(16).then((function(require) {
	data = __webpack_require__(760);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(15).then((function(require) {
	data = __webpack_require__(761);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(14).then((function(require) {
	data = __webpack_require__(762);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(13).then((function(require) {
	data = __webpack_require__(763);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(12).then((function(require) {
	data = __webpack_require__(764);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(11).then((function(require) {
	data = __webpack_require__(765);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(10).then((function(require) {
	data = __webpack_require__(766);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(9).then((function(require) {
	data = __webpack_require__(767);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(8).then((function(require) {
	data = __webpack_require__(768);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(7).then((function(require) {
	data = __webpack_require__(769);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(6).then((function(require) {
	data = __webpack_require__(770);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(5).then((function(require) {
	data = __webpack_require__(771);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(4).then((function(require) {
	data = __webpack_require__(772);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var cbs = [], 
	data;
module.exports = function(cb) {
	if(cbs) cbs.push(cb);
	else cb(data);
}
__webpack_require__.e/* require.ensure */(3).then((function(require) {
	data = __webpack_require__(773);
	var callbacks = cbs;
	cbs = null;
	for(var i = 0, l = callbacks.length; i < l; i++) {
		callbacks[i](data);
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/***/ }),
/* 305 */,
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 190,
	"./af.js": 190,
	"./ar": 197,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 197,
	"./az": 198,
	"./az.js": 198,
	"./be": 199,
	"./be.js": 199,
	"./bg": 200,
	"./bg.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 212,
	"./de-at": 210,
	"./de-at.js": 210,
	"./de-ch": 211,
	"./de-ch.js": 211,
	"./de.js": 212,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-au": 215,
	"./en-au.js": 215,
	"./en-ca": 216,
	"./en-ca.js": 216,
	"./en-gb": 217,
	"./en-gb.js": 217,
	"./en-ie": 218,
	"./en-ie.js": 218,
	"./en-nz": 219,
	"./en-nz.js": 219,
	"./eo": 220,
	"./eo.js": 220,
	"./es": 222,
	"./es-do": 221,
	"./es-do.js": 221,
	"./es.js": 222,
	"./et": 223,
	"./et.js": 223,
	"./eu": 224,
	"./eu.js": 224,
	"./fa": 225,
	"./fa.js": 225,
	"./fi": 226,
	"./fi.js": 226,
	"./fo": 227,
	"./fo.js": 227,
	"./fr": 230,
	"./fr-ca": 228,
	"./fr-ca.js": 228,
	"./fr-ch": 229,
	"./fr-ch.js": 229,
	"./fr.js": 230,
	"./fy": 231,
	"./fy.js": 231,
	"./gd": 232,
	"./gd.js": 232,
	"./gl": 233,
	"./gl.js": 233,
	"./gom-latn": 234,
	"./gom-latn.js": 234,
	"./he": 235,
	"./he.js": 235,
	"./hi": 236,
	"./hi.js": 236,
	"./hr": 237,
	"./hr.js": 237,
	"./hu": 238,
	"./hu.js": 238,
	"./hy-am": 239,
	"./hy-am.js": 239,
	"./id": 240,
	"./id.js": 240,
	"./is": 241,
	"./is.js": 241,
	"./it": 242,
	"./it.js": 242,
	"./ja": 243,
	"./ja.js": 243,
	"./jv": 244,
	"./jv.js": 244,
	"./ka": 245,
	"./ka.js": 245,
	"./kk": 246,
	"./kk.js": 246,
	"./km": 247,
	"./km.js": 247,
	"./kn": 248,
	"./kn.js": 248,
	"./ko": 249,
	"./ko.js": 249,
	"./ky": 250,
	"./ky.js": 250,
	"./lb": 251,
	"./lb.js": 251,
	"./lo": 252,
	"./lo.js": 252,
	"./lt": 253,
	"./lt.js": 253,
	"./lv": 254,
	"./lv.js": 254,
	"./me": 255,
	"./me.js": 255,
	"./mi": 256,
	"./mi.js": 256,
	"./mk": 257,
	"./mk.js": 257,
	"./ml": 258,
	"./ml.js": 258,
	"./mr": 259,
	"./mr.js": 259,
	"./ms": 261,
	"./ms-my": 260,
	"./ms-my.js": 260,
	"./ms.js": 261,
	"./my": 262,
	"./my.js": 262,
	"./nb": 263,
	"./nb.js": 263,
	"./ne": 264,
	"./ne.js": 264,
	"./nl": 266,
	"./nl-be": 265,
	"./nl-be.js": 265,
	"./nl.js": 266,
	"./nn": 267,
	"./nn.js": 267,
	"./pa-in": 268,
	"./pa-in.js": 268,
	"./pl": 269,
	"./pl.js": 269,
	"./pt": 271,
	"./pt-br": 270,
	"./pt-br.js": 270,
	"./pt.js": 271,
	"./ro": 272,
	"./ro.js": 272,
	"./ru": 273,
	"./ru.js": 273,
	"./sd": 274,
	"./sd.js": 274,
	"./se": 275,
	"./se.js": 275,
	"./si": 276,
	"./si.js": 276,
	"./sk": 277,
	"./sk.js": 277,
	"./sl": 278,
	"./sl.js": 278,
	"./sq": 279,
	"./sq.js": 279,
	"./sr": 281,
	"./sr-cyrl": 280,
	"./sr-cyrl.js": 280,
	"./sr.js": 281,
	"./ss": 282,
	"./ss.js": 282,
	"./sv": 283,
	"./sv.js": 283,
	"./sw": 284,
	"./sw.js": 284,
	"./ta": 285,
	"./ta.js": 285,
	"./te": 286,
	"./te.js": 286,
	"./tet": 287,
	"./tet.js": 287,
	"./th": 288,
	"./th.js": 288,
	"./tl-ph": 289,
	"./tl-ph.js": 289,
	"./tlh": 290,
	"./tlh.js": 290,
	"./tr": 291,
	"./tr.js": 291,
	"./tzl": 292,
	"./tzl.js": 292,
	"./tzm": 294,
	"./tzm-latn": 293,
	"./tzm-latn.js": 293,
	"./tzm.js": 294,
	"./uk": 295,
	"./uk.js": 295,
	"./ur": 296,
	"./ur.js": 296,
	"./uz": 298,
	"./uz-latn": 297,
	"./uz-latn.js": 297,
	"./uz.js": 298,
	"./vi": 299,
	"./vi.js": 299,
	"./x-pseudo": 300,
	"./x-pseudo.js": 300,
	"./yo": 301,
	"./yo.js": 301,
	"./zh-cn": 302,
	"./zh-cn.js": 302,
	"./zh-hk": 303,
	"./zh-hk.js": 303,
	"./zh-tw": 304,
	"./zh-tw.js": 304
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 306;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(372), __esModule: true };

/***/ }),
/* 308 */,
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(366);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(365);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(364);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(81)
  , TAG = __webpack_require__(18)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(81);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(84)
  , $export        = __webpack_require__(56)
  , redefine       = __webpack_require__(320)
  , hide           = __webpack_require__(49)
  , has            = __webpack_require__(37)
  , Iterators      = __webpack_require__(50)
  , $iterCreate    = __webpack_require__(388)
  , setToStringTag = __webpack_require__(86)
  , getPrototypeOf = __webpack_require__(397)
  , ITERATOR       = __webpack_require__(18)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(48)
  , dPs         = __webpack_require__(394)
  , enumBugKeys = __webpack_require__(83)
  , IE_PROTO    = __webpack_require__(87)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(313)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(384).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(319)
  , hiddenKeys = __webpack_require__(83).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(37)
  , toIObject    = __webpack_require__(38)
  , arrayIndexOf = __webpack_require__(381)(false)
  , IE_PROTO     = __webpack_require__(87)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(89)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(311)
  , ITERATOR  = __webpack_require__(18)('iterator')
  , Iterators = __webpack_require__(50);
module.exports = __webpack_require__(25).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(587);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(121);

var _templates = __webpack_require__(360);

var _templates2 = _interopRequireDefault(_templates);

var _setupComposerButton = __webpack_require__(359);

var _setupComposerButton2 = _interopRequireDefault(_setupComposerButton);

var _createEvent = __webpack_require__(356);

var _createEvent2 = _interopRequireDefault(_createEvent);

var _parse = __webpack_require__(122);

var _parse2 = _interopRequireDefault(_parse);

var _responses = __webpack_require__(79);

var _responses2 = _interopRequireDefault(_responses);

var _clientSideTranslation = __webpack_require__(355);

var _clientSideTranslation2 = _interopRequireDefault(_clientSideTranslation);

var _translatorModule = __webpack_require__(362);

var _translatorModule2 = _interopRequireDefault(_translatorModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = config.userLang || config.defaultLang;
jQuery.fn.size = jQuery.fn.size || function size() {
  return this.length;
};

var begin = function begin(momentLang) {
  window.requirejs(['composer', 'composer/formatting', 'translator'], function (composer, formatting, translator) {
    return $(document).ready(function () {
      (0, _translatorModule2.default)(translator.Translator);
      (0, _clientSideTranslation2.default)(translator.Translator);

      ajaxify.loadTemplate('partials/calendar/event-creation-modal', function (template) {
        return translator.translate(template, lang, function (html) {
          $('body').append(html);

          (0, _setupComposerButton2.default)(composer, translator);
          $('.plugin-calendar-event-editor-date').datetimepicker({
            icons: {
              time: 'fa fa-clock-o',
              date: 'fa fa-calendar',
              up: 'fa fa-arrow-up',
              down: 'fa fa-arrow-down',
              previous: 'fa fa-arrow-left',
              next: 'fa fa-arrow-right',
              today: 'fa fa-crosshairs',
              clear: 'fa fa-trash',
              close: 'fa fa-times'
            },
            allowInputToggle: true,
            locale: momentLang,
            sideBySide: true,
            useCurrent: true
          });
          var createEvent = (0, _createEvent2.default)();

          var prepareFormattingTools = function prepareFormattingTools() {
            if (!formatting) {
              return;
            }

            formatting.addButtonDispatch('plugin-calendar-event', function (textarea) {
              var $textarea = $(textarea);
              var oldVal = $textarea.val();
              var oldEvent = (0, _parse2.default)(oldVal.replace(/\[(\/?)event-invalid\]/g, '[$1event]'));
              createEvent(oldEvent || {}, function (event) {
                var text = event ? (0, _templates2.default)(event) : '';
                if (_parse.inPost.test(oldVal)) {
                  var newVal = oldVal.replace(/\[event(?:-invalid)?\][\s\S]+\[\/event(?:-invalid)?\]/g, text);
                  $textarea.val(newVal);
                } else {
                  $textarea.val(oldVal + '\n\n' + text);
                }
                $textarea.trigger('input');
              });
            });
          };

          $(window).on('action:composer.enhanced', prepareFormattingTools);

          (0, _responses2.default)();
        });
      });
    });
  });
};

__webpack_require__.p = RELATIVE_PATH + '/plugins/nodebb-plugin-calendar/bundles/'; // eslint-disable-line

var momentLang = lang.toLowerCase().replace(/_/g, '-');

try {
  if (momentLang === 'en-us') {
    begin('en-us');
  } else {
    __webpack_require__(306)("./" + momentLang)(function () {
      // eslint-disable-line
      _moment2.default.locale(momentLang);
      begin(momentLang);
    });
  }
} catch (e) {
  try {
    __webpack_require__(306)("./" + momentLang.split('-')[0])(function () {
      // eslint-disable-line
      _moment2.default.locale(momentLang);
      begin(momentLang);
    });
  } catch (er) {
    begin('en-us');
    throw Error('could not load locale data (' + momentLang + ') for moment');
  }
}

/***/ }),
/* 353 */,
/* 354 */,
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var init = function init(Translator) {
  var translator = Translator.create();

  var translateEvents = function translateEvents() {
    $('.plugin-calendar-event[data-translated=false]').each(function (i, elem) {
      var el = $(elem);
      el.attr('data-translated', 'true');
      translator.translateInPlace(elem).then(function () {
        el.find('.plugin-calendar-time-date-view').attr('title', function (x, val) {
          return val.replace('<br>', ' | ');
        });
      });
    });
  };

  $(window).on(['action:posts.loaded', 'action:ajaxify.end', 'action:posts.edited', 'action:calendar.event.display', 'action:composer.preview'].join(' '), function () {
    return translateEvents();
  });
  translateEvents();
};

exports.default = init;

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(310);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

var _reminders = __webpack_require__(357);

var _reminders2 = _interopRequireDefault(_reminders);

var _repetition = __webpack_require__(358);

var _repetition2 = _interopRequireDefault(_repetition);

var _validateEvent5 = __webpack_require__(363);

var _validateEvent6 = _interopRequireDefault(_validateEvent5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEvent = {
  name: '',
  allday: false,
  startDate: Date.now(),
  endDate: Date.now() + 1000 * 60 * 60,
  reminders: [],
  location: '',
  description: '',
  mandatory: false,
  repeats: null
};

var formats = {
  timeDate: 'L LT',
  date: 'L'
};

var createEventFactory = function createEventFactory() {
  var modal = $('#plugin-calendar-event-editor').modal({
    backdrop: false,
    show: false
  });
  var inputs = {
    name: modal.find('#plugin-calendar-event-editor-name'),
    allday: modal.find('#plugin-calendar-event-editor-allday'),
    startDate: modal.find('#plugin-calendar-event-editor-startDate'),
    endDate: modal.find('#plugin-calendar-event-editor-endDate'),
    reminders: modal.find('#plugin-calendar-event-editor-reminders'),
    location: modal.find('#plugin-calendar-event-editor-location'),
    description: modal.find('#plugin-calendar-event-editor-description'),
    mandatory: modal.find('#plugin-calendar-event-editor-mandatory'),
    repetition: modal.find('#plugin-calendar-event-editor-repetition'),
    repeatEndDate: modal.find('#plugin-calendar-event-editor-repetition-endDate')
  };
  var reminders = (0, _reminders2.default)(inputs.reminders);
  var repetition = (0, _repetition2.default)(inputs.repetition);

  inputs.allday.on('change', function () {
    var format = inputs.allday.prop('checked') ? formats.date : formats.timeDate;
    inputs.startDate.data('DateTimePicker').format(format);
    inputs.endDate.data('DateTimePicker').format(format);
  });

  var setInputs = function setInputs(event) {
    inputs.name.val(event.name);
    inputs.allday.prop('checked', event.allday);
    inputs.startDate.data('DateTimePicker').date((0, _moment2.default)(event.startDate));
    inputs.endDate.data('DateTimePicker').date((0, _moment2.default)(event.endDate));
    reminders.setReminders(event.reminders);
    repetition.setRepeat(event.repeats);
    inputs.location.val(event.location);
    inputs.description.val(event.description);
    inputs.mandatory.prop('checked', event.mandatory);

    var format = event.allday ? formats.date : formats.timeDate;
    inputs.startDate.data('DateTimePicker').format(format);
    inputs.endDate.data('DateTimePicker').format(format);
  };
  var getInputs = function getInputs() {
    var event = {
      name: inputs.name.val().trim(),
      allday: inputs.allday.prop('checked'),
      startDate: inputs.startDate.data('DateTimePicker').date().valueOf(),
      endDate: inputs.endDate.data('DateTimePicker').date().valueOf(),
      reminders: reminders.getReminders(),
      repeats: repetition.getRepeat(),
      location: inputs.location.val().trim(),
      description: inputs.description.val().trim(),
      mandatory: inputs.mandatory.prop('checked')
    };

    if (event.allday) {
      var s = new Date(event.startDate);
      var e = new Date(event.endDate);

      s.setHours(0, 0, 0, 0);
      e.setHours(23, 59, 59, 999);

      event.startDate = s.valueOf();
      event.endDate = e.valueOf();
    }

    return event;
  };

  var alertFailure = function alertFailure(input) {
    input.closest('.form-group').addClass('has-error');
  };

  var createEvent = function createEvent(data, callback) {
    var event = Object.assign({}, defaultEvent, data);
    setInputs(event);
    modal.find('.form-group').removeClass('has-error');
    modal.modal('show');

    var submit = modal.find('#plugin-calendar-event-editor-submit');
    var del = modal.find('#plugin-calendar-event-editor-delete');

    var onClick = function onClick() {
      var newEvent = getInputs();
      modal.find('.form-group').removeClass('has-error');

      var _validateEvent = (0, _validateEvent6.default)(newEvent),
          _validateEvent2 = (0, _slicedToArray3.default)(_validateEvent, 2),
          failed = _validateEvent2[0],
          failures = _validateEvent2[1];

      if (failed) {
        failures.map(function (failure) {
          return inputs[failure];
        }).forEach(alertFailure);
        return;
      }

      modal.modal('hide');
      submit.off('click', onClick);
      callback(newEvent);
    };

    submit.on('click', onClick);

    del.one('click', function () {
      modal.modal('hide');
      submit.off('click', onClick);
      callback(null);
    });

    var onChange = function onChange() {
      var newEvent = getInputs();
      modal.find('.form-group').removeClass('has-error');

      var _validateEvent3 = (0, _validateEvent6.default)(newEvent),
          _validateEvent4 = (0, _slicedToArray3.default)(_validateEvent3, 2),
          failed = _validateEvent4[0],
          failures = _validateEvent4[1];

      if (failed) {
        failures.map(function (failure) {
          return inputs[failure];
        }).forEach(alertFailure);
      }
    };
    modal.on('change dp.change', onChange);
  };

  return createEvent;
};

exports.default = createEventFactory;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(80);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeListElement = function makeListElement(n) {
  var zero = (0, _moment2.default)(0);
  var li = $('<li class="plugin-calendar-event-editor-reminder" data-value="' + n + '">\n      ' + zero.to(n, true) + '\n      <a class="remove" href="#">\n        <i class="fa fa-times"></i>\n      </a>\n    </li>');
  li.data('value', n);
  return li;
};

var factory = function factory($ul) {
  var addButtons = $ul.find('#plugin-calendar-event-editor-reminders-add li > a');

  var methods = {
    setReminders: function setReminders(reminders) {
      $ul.find('li.plugin-calendar-event-editor-reminder').remove();
      $ul.data('value', reminders);
      reminders.reverse().map(makeListElement).forEach(function (el) {
        return $ul.prepend(el);
      });
    },
    getReminders: function getReminders() {
      return $ul.data('value');
    },
    addReminder: function addReminder(n) {
      var nots = $ul.data('value');
      if (nots.includes(n)) {
        return;
      }

      var reminders = [].concat((0, _toConsumableArray3.default)(nots), [n]).sort(function (a, b) {
        return b - a;
      });
      var index = reminders.reverse().indexOf(n);
      $ul.data('value', reminders);

      var li = makeListElement(n);

      if (index === 0) {
        $ul.prepend(li);
      } else {
        $ul.find('li.plugin-calendar-event-editor-reminder:nth-of-type(' + index + ')').after(li);
      }
    },
    removeReminder: function removeReminder(n) {
      var nots = $ul.data('value');
      if (!nots.includes(n)) {
        return;
      }

      var reminders = nots.filter(function (not) {
        return not !== n;
      });
      $ul.data('value', reminders);

      $ul.find('li.plugin-calendar-event-editor-reminder[data-value=' + n + ']').remove();
    }
  };

  var popup = $('#plugin-calendar-event-editor-reminder-custom');
  var input = popup.find('#plugin-calendar-event-editor-reminder-custom-number');
  var radios = popup.find('#plugin-calendar-event-editor-reminder-custom-unit');
  var button = popup.find('button.btn-primary');

  radios.find('.btn').on('click', function (e) {
    $(e.target).addClass('active').siblings().removeClass('active');
  });

  var promptCustom = function promptCustom(addNotif) {
    button.on('click', function () {
      var unit = radios.find(':checked').val();
      var number = parseInt(input.val(), 10);

      var ms = {
        mm: 1000 * 60,
        hh: 1000 * 60 * 60,
        dd: 1000 * 60 * 60 * 24
      }[unit] * number;

      addNotif(ms);
      popup.slideUp(200);
      button.off('click');
    });

    popup.slideDown(200);
  };

  popup.on('click', function (e) {
    e.stopPropagation();
  });

  addButtons.on('click', function (e) {
    var el = $(e.target).closest('li');
    var n = el.data('value');

    if (n === 'custom') {
      e.preventDefault();
      e.stopPropagation();
      promptCustom(function (notif) {
        return methods.addReminder(notif);
      });
      return;
    }
    methods.addReminder(n);
  });

  $ul.on('click', 'li.plugin-calendar-event-editor-reminder .remove', function (e) {
    e.preventDefault();
    var n = $(e.target).closest('li').data('value');
    methods.removeReminder(n);
  });

  return methods;
};

exports.default = factory;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(80);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(308);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory($ul) {
  var list = $ul.find('#plugin-calendar-event-editor-repetition-change > ul');
  list.find('li[data-value=custom] > div').click(function (e) {
    e.stopPropagation();
  });

  var custom = $('#plugin-calendar-event-editor-repetition-custom');
  var changeButton = $('#plugin-calendar-event-editor-repetition-change-button');
  var changeButtonText = changeButton.find('.text');
  var daysOfWeek = $('#plugin-calendar-event-editor-repetition-custom-daysOfWeek');
  var customEnd = custom.find('.plugin-calendar-event-editor-repetition-custom-end');
  var endDate = $('#plugin-calendar-event-editor-repetition-endDate');

  endDate.data('DateTimePicker').format('L').date((0, _moment2.default)().add(7, 'day')).widgetPositioning({
    vertical: 'top',
    horizontal: 'left'
  });

  list.change(function () {
    var elem = list.find('input[name=repetition-select]:checked');
    var value = elem.val();

    changeButtonText.html(elem.siblings('span').html());

    if (value === 'custom') {
      custom.slideDown(200);
    } else {
      custom.slideUp(200);
    }
  });

  $('#plugin-calendar-event-editor-repetition-custom-daysOfWeek > ul > li > a').click(function (e) {
    e.preventDefault();
    $(e.target).toggleClass('active');
  });

  custom.find('.btn.btn-primary').click(function () {
    changeButton.dropdown('toggle');
  });

  customEnd.change(function () {
    var forever = customEnd.find('[name=repetition-end]:checked').val() === 'forever';
    endDate.toggle(!forever);
  });

  var methods = {
    setRepeat: function setRepeat(repeat) {
      if (!repeat) {
        var _elem = list.find('[name="repetition-select"][value="no-repeat"]').prop('checked', true);
        changeButtonText.html(_elem.siblings('span').html());
        return;
      }

      var key = ['day', 'week', 'month', 'year'].find(function (x) {
        return repeat.every[x];
      });
      custom.toggle(!key);
      if (key) {
        var _elem2 = list.find('[name="repetition-select"][value="' + key + '"]').prop('checked', true);
        changeButtonText.html(_elem2.siblings('span').html());
        return;
      }

      var elem = list.find('[name="repetition-select"][value="custom"]').prop('checked', true);
      changeButtonText.html(elem.siblings('span').html());

      if (repeat.every.daysOfWeek) {
        daysOfWeek.find('li > a').removeClass('active');
        repeat.every.daysOfWeek.forEach(function (day) {
          daysOfWeek.find('li[data-value=' + day + '] > a').addClass('active');
        });
        var forever = !Number.isFinite(repeat.endDate);
        customEnd.find('[name=repetition-end][value=' + (forever ? 'forever' : 'end') + ']').prop('checked', true);
        endDate.toggle(!forever);
        if (!forever) {
          endDate.data('DateTimePicker').date((0, _moment2.default)(repeat.endDate));
        }
      }
    },
    getRepeat: function getRepeat() {
      var value = list.find('[name=repetition-select]:checked').val();
      if (value === 'no-repeat') {
        return null;
      }
      if (value !== 'custom') {
        return {
          every: (0, _defineProperty3.default)({}, value, true),
          endDate: null
        };
      }

      var selected = 'weekly';
      if (selected === 'weekly') {
        var days = [].concat((0, _toConsumableArray3.default)(daysOfWeek.find('li > a.active').parent())).map(function (elem) {
          return parseInt(elem.dataset.value, 10);
        });
        var forever = customEnd.find('[name=repetition-end]:checked').val() === 'forever';
        if (forever) {
          return {
            every: {
              daysOfWeek: days
            },
            endDate: null
          };
        }
        var end = endDate.data('DateTimePicker').date().valueOf();
        return {
          every: {
            daysOfWeek: days
          },
          endDate: end
        };
      }

      return {};
    }
  };

  return methods;
};

exports.default = factory;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parse = __webpack_require__(122);

exports.default = function (composer, translator) {
  var onChange = function onChange() {
    var data = composer.posts[composer.active];
    socket.emit('plugins.calendar.canPostEvent', data, function (e, canPost) {
      $('#cmp-uuid-' + composer.active).find('.plugin-calendar-composer-edit-event').parent().toggle(canPost);
    });
  };

  var alterSubmit = function alterSubmit() {
    var uuid = composer.active;
    var comp = $('#cmp-uuid-' + uuid);
    var write = comp.find('.write-container textarea.write');
    var eventExisted = _parse.inPost.test(write.val());

    if (eventExisted) {
      var button = comp.find('.composer-submit:visible');

      var orig = $._data(button[0], 'events').click.map(function (x) {
        return x.handler;
      }); // eslint-disable-line
      var trigger = function trigger(self, e) {
        orig.forEach(function (handler) {
          handler.call(self, e);
        });
      };
      button.off('click').on('click', function onClick(e) {
        var _this = this;

        var text = write.val();
        if (!_parse.inPost.test(text)) {
          translator.translate('[[calendar:confirm_delete_event]]', function (question) {
            bootbox.confirm(question, function (okay) {
              if (okay) {
                trigger(_this, e);
              }
            });
          });
        } else {
          trigger(this, e);
        }
      });
    }
  };

  $(window).on('action:composer.post.new' + ' action:composer.post.edit' + ' action:composer.topic.new', function () {
    setTimeout(function () {
      onChange();
      alterSubmit();
    }, 400);
  });
  $(document.body).on('change', '.composer .category-list', onChange);
};

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(309);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawTemplate = function rawTemplate(event) {
  var repeats = event.repeats && (0, _extends3.default)({}, event.repeats, {
    endDate: event.repeats.endDate ? event.repeats.endDate.valueOf() : null
  });
  return '[event][name]' + event.name + '[/name][allday]' + event.allday + '[/allday]' + ('[startDate]' + event.startDate + '[/startDate][endDate]' + event.endDate + '[/endDate]') + ('[reminders]' + JSON.stringify(event.reminders) + '[/reminders]') + ('[location]' + event.location + '[/location]') + ('[description]' + event.description + '[/description][mandatory]' + event.mandatory + '[/mandatory]') + ((repeats ? '[repeats]' + JSON.stringify(repeats) + '[/repeats]' : '') + '[/event]');
};

exports.default = rawTemplate;

/***/ }),
/* 361 */,
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDates = undefined;

var _toConsumableArray2 = __webpack_require__(80);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = __webpack_require__(370);

var _toArray3 = _interopRequireDefault(_toArray2);

var _slicedToArray2 = __webpack_require__(310);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _moment = __webpack_require__(29);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var justDate = 'dddd, LL';
var justTime = 'LT';
var dateAndTime = 'LLLL';

var formatDates = function formatDates(s, e, allday, lang, utc) {
  var mom = utc ? _moment2.default.utc : _moment2.default;

  var start = mom(s).locale(lang);
  var end = mom(e).locale(lang);

  if (Math.abs(s - e) <= 60 * 1000) {
    if (allday) {
      return start.format(justDate);
    }
    return start.format(dateAndTime);
  }

  if (start.dayOfYear() === end.dayOfYear() && start.year() === end.year()) {
    if (allday) {
      return start.format(justDate);
    }
    return start.format(justDate) + '<br>' + (start.format(justTime) + ' - ' + end.format(justTime));
  }

  if (allday) {
    return start.format(justDate) + ' - ' + end.format(justDate);
  }
  return start.format(dateAndTime) + ' - ' + end.format(dateAndTime);
};

var init = function init(Translator) {
  Translator.registerModule('moment', function (lang) {
    var momentLang = lang.replace(/[_@]/g, '-');
    var zero = (0, _moment2.default)(0).locale(momentLang);

    var timeago = function timeago(key, _ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 1),
          duration = _ref2[0];

      var ms = parseInt(duration, 10);
      switch (key) {
        case 'time-ago':
          return zero.from(ms);
        case 'time-in':
          return zero.to(ms);
        case 'time-duration':
          return zero.to(ms, true);
        default:
          return '';
      }
    };

    var timeDateView = function timeDateView(key, _ref3) {
      var _ref4 = (0, _slicedToArray3.default)(_ref3, 4),
          timezone = _ref4[0],
          start = _ref4[1],
          end = _ref4[2],
          allday = _ref4[3];

      var s = parseInt(start, 10);
      var e = parseInt(end, 10);
      var isAllday = allday === 'true';

      if (timezone === 'utc') {
        return formatDates(s, e, isAllday, momentLang, true);
      }
      if (timezone === 'local') {
        return formatDates(s, e, isAllday, momentLang, false);
      }
      return '';
    };

    var data = zero.localeData();
    var localeData = function localeData(key, _ref5) {
      var _ref6 = (0, _toArray3.default)(_ref5),
          n = _ref6[0],
          a = _ref6.slice(1);

      var name = n;
      if (!data[name]) {
        name = '_' + n;
        if (!data[name]) {
          return '';
        }
      }
      var args = a.map(function (x) {
        if (x === 'true') {
          return true;
        }
        if (x === 'false') {
          return false;
        }
        if (/^[0-9]+$/.test(x)) {
          return parseInt(x, 10);
        }
        return x;
      });
      if (typeof data[name] === 'function') {
        return data[name].apply(data, (0, _toConsumableArray3.default)(args));
      }

      var _args = (0, _slicedToArray3.default)(args, 1),
          index = _args[0];

      return data[name][index];
    };

    return function (key, args) {
      switch (key) {
        case 'time-in':
        case 'time-ago':
        case 'time-duration':
          return timeago(key, args);
        case 'time-date-view':
          return timeDateView(key, args);
        case 'locale-data':
          return localeData(key, args);
        default:
          return '';
      }
    };
  });
};

exports.formatDates = formatDates;
exports.default = init;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(371);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArrayOf = function isArrayOf(arr, type) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every(function (x) {
    return (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) !== type;
  }); // eslint-disable-line valid-typeof
};

var checkDate = function checkDate(val) {
  return Number.isFinite(val) && new Date(val).getTime() === val;
};

var fields = {
  name: function name(val) {
    return typeof val === 'string' && val.length > 5;
  },
  allday: function allday(val) {
    return typeof val === 'boolean';
  },
  startDate: checkDate,
  endDate: checkDate,
  reminders: function reminders(val) {
    return isArrayOf(val, 'number');
  },
  mandatory: function mandatory(val) {
    return typeof val === 'boolean';
  },
  location: function location(val) {
    return typeof val === 'string' && !val.includes('\n');
  },
  description: function description(val) {
    return typeof val === 'string';
  },
  repeats: function repeats(val) {
    return val == null || val && Object.keys(val.every).length;
  }
};

var validateEvent = function validateEvent(event) {
  var failures = [];

  Object.keys(fields).forEach(function (key) {
    if (!fields[key](event[key])) {
      failures.push(key);
    }
  });
  if (event.startDate > event.endDate) {
    failures.push('startDate', 'endDate');
  }
  if (event.repeats && Number.isFinite(event.repeats.endDate) && event.repeats.endDate < event.startDate) {
    failures.push('repeatEndDate');
  }

  // make array unique
  failures = failures.filter(function (x, i) {
    return failures.indexOf(x) === i;
  });

  return [!!failures.length, failures];
};

exports.default = validateEvent;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(373), __esModule: true };

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(374), __esModule: true };

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(375), __esModule: true };

/***/ }),
/* 367 */,
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(377), __esModule: true };

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(378), __esModule: true };

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(307);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(369);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(368);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(402);
module.exports = __webpack_require__(25).Array.from;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
__webpack_require__(66);
module.exports = __webpack_require__(400);

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
__webpack_require__(66);
module.exports = __webpack_require__(401);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(404);
module.exports = __webpack_require__(25).Object.assign;

/***/ }),
/* 376 */,
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(407);
__webpack_require__(406);
__webpack_require__(408);
__webpack_require__(409);
module.exports = __webpack_require__(25).Symbol;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(94);
module.exports = __webpack_require__(93).f('iterator');

/***/ }),
/* 379 */,
/* 380 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(38)
  , toLength  = __webpack_require__(321)
  , toIndex   = __webpack_require__(399);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(31)
  , createDesc      = __webpack_require__(59);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(58)
  , gOPS    = __webpack_require__(85)
  , pIE     = __webpack_require__(64);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30).document && document.documentElement;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(50)
  , ITERATOR   = __webpack_require__(18)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(81);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(48);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(317)
  , descriptor     = __webpack_require__(59)
  , setToStringTag = __webpack_require__(86)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(49)(IteratorPrototype, __webpack_require__(18)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(18)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(58)
  , toIObject = __webpack_require__(38);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(65)('meta')
  , isObject = __webpack_require__(63)
  , has      = __webpack_require__(37)
  , setDesc  = __webpack_require__(31).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(57)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(58)
  , gOPS     = __webpack_require__(85)
  , pIE      = __webpack_require__(64)
  , toObject = __webpack_require__(90)
  , IObject  = __webpack_require__(315)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(57)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(31)
  , anObject = __webpack_require__(48)
  , getKeys  = __webpack_require__(58);

module.exports = __webpack_require__(36) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(64)
  , createDesc     = __webpack_require__(59)
  , toIObject      = __webpack_require__(38)
  , toPrimitive    = __webpack_require__(91)
  , has            = __webpack_require__(37)
  , IE8_DOM_DEFINE = __webpack_require__(314)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(36) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(38)
  , gOPN      = __webpack_require__(318).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(37)
  , toObject    = __webpack_require__(90)
  , IE_PROTO    = __webpack_require__(87)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(89)
  , defined   = __webpack_require__(82);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(89)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(48)
  , get      = __webpack_require__(322);
module.exports = __webpack_require__(25).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(311)
  , ITERATOR  = __webpack_require__(18)('iterator')
  , Iterators = __webpack_require__(50);
module.exports = __webpack_require__(25).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(312)
  , $export        = __webpack_require__(56)
  , toObject       = __webpack_require__(90)
  , call           = __webpack_require__(387)
  , isArrayIter    = __webpack_require__(385)
  , toLength       = __webpack_require__(321)
  , createProperty = __webpack_require__(382)
  , getIterFn      = __webpack_require__(322);

$export($export.S + $export.F * !__webpack_require__(389)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(380)
  , step             = __webpack_require__(390)
  , Iterators        = __webpack_require__(50)
  , toIObject        = __webpack_require__(38);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(316)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(56);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(393)});

/***/ }),
/* 405 */,
/* 406 */
/***/ (function(module, exports) {



/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(30)
  , has            = __webpack_require__(37)
  , DESCRIPTORS    = __webpack_require__(36)
  , $export        = __webpack_require__(56)
  , redefine       = __webpack_require__(320)
  , META           = __webpack_require__(392).KEY
  , $fails         = __webpack_require__(57)
  , shared         = __webpack_require__(88)
  , setToStringTag = __webpack_require__(86)
  , uid            = __webpack_require__(65)
  , wks            = __webpack_require__(18)
  , wksExt         = __webpack_require__(93)
  , wksDefine      = __webpack_require__(92)
  , keyOf          = __webpack_require__(391)
  , enumKeys       = __webpack_require__(383)
  , isArray        = __webpack_require__(386)
  , anObject       = __webpack_require__(48)
  , toIObject      = __webpack_require__(38)
  , toPrimitive    = __webpack_require__(91)
  , createDesc     = __webpack_require__(59)
  , _create        = __webpack_require__(317)
  , gOPNExt        = __webpack_require__(396)
  , $GOPD          = __webpack_require__(395)
  , $DP            = __webpack_require__(31)
  , $keys          = __webpack_require__(58)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(318).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(64).f  = $propertyIsEnumerable;
  __webpack_require__(85).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(84)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(49)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92)('asyncIterator');

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92)('observable');

/***/ }),
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */

(function (factory) {
  factory(jQuery, __WEBPACK_IMPORTED_MODULE_0_moment___default.a);
}(function ($, moment) {

    'use strict';
    if (!moment) {
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
    }

    var dateTimePicker = function (element, options) {
        var picker = {},
            date,
            viewDate,
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [
                {
                    clsName: 'days',
                    navFnc: 'M',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'y',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'y',
                    navStep: 10
                },
                {
                    clsName: 'decades',
                    navFnc: 'y',
                    navStep: 100
                }
            ],
            viewModes = ['days', 'months', 'years', 'decades'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            keyMap = {
                'up': 38,
                38: 'up',
                'down': 40,
                40: 'down',
                'left': 37,
                37: 'left',
                'right': 39,
                39: 'right',
                'tab': 9,
                9: 'tab',
                'escape': 27,
                27: 'escape',
                'enter': 13,
                13: 'enter',
                'pageUp': 33,
                33: 'pageUp',
                'pageDown': 34,
                34: 'pageDown',
                'shift': 16,
                16: 'shift',
                'control': 17,
                17: 'control',
                'space': 32,
                32: 'space',
                't': 84,
                84: 't',
                'delete': 46,
                46: 'delete'
            },
            keyState = {},

            /********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/

            hasTimeZone = function () {
                return moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '';
            },

            getMoment = function (d) {
                var returnMoment;

                if (d === undefined || d === null) {
                    returnMoment = moment(); //TODO should this use format? and locale?
                } else if (moment.isDate(d) || moment.isMoment(d)) {
                    // If the date that is passed in is already a Date() or moment() object,
                    // pass it directly to moment.
                    returnMoment = moment(d);
                } else if (hasTimeZone()) { // There is a string to parse and a default time zone
                    // parse with the tz function which takes a default time zone if it is not in the format string
                    returnMoment = moment.tz(d, parseFormats, options.useStrict, options.timeZone);
                } else {
                    returnMoment = moment(d, parseFormats, options.useStrict);
                }

                if (hasTimeZone()) {
                    returnMoment.tz(options.timeZone);
                }

                return returnMoment;
            },

            isEnabled = function (granularity) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            },

            hasTime = function () {
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
            },

            hasDate = function () {
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
            },

            getDatePickerTemplate = function () {
                var headTemplate = $('<thead>')
                        .append($('<tr>')
                            .append($('<th>').addClass('prev').attr('data-action', 'previous')
                                .append($('<span>').addClass(options.icons.previous))
                                )
                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
                            .append($('<th>').addClass('next').attr('data-action', 'next')
                                .append($('<span>').addClass(options.icons.next))
                                )
                            ),
                    contTemplate = $('<tbody>')
                        .append($('<tr>')
                            .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
                            );

                return [
                    $('<div>').addClass('datepicker-days')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate)
                            .append($('<tbody>'))
                            ),
                    $('<div>').addClass('datepicker-months')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-years')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-decades')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            )
                ];
            },

            getTimePickerMainTemplate = function () {
                var topRow = $('<tr>'),
                    middleRow = $('<tr>'),
                    bottomRow = $('<tr>');

                if (isEnabled('h')) {
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': options.tooltips.pickHour }).attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('m')) {
                    if (isEnabled('h')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': options.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('s')) {
                    if (isEnabled('m')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': options.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));
                }

                if (!use24Hours) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>')
                        .append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod })));
                    bottomRow.append($('<td>').addClass('separator'));
                }

                return $('<div>').addClass('timepicker-picker')
                    .append($('<table>').addClass('table-condensed')
                        .append([topRow, middleRow, bottomRow]));
            },

            getTimePickerTemplate = function () {
                var hoursView = $('<div>').addClass('timepicker-hours')
                        .append($('<table>').addClass('table-condensed')),
                    minutesView = $('<div>').addClass('timepicker-minutes')
                        .append($('<table>').addClass('table-condensed')),
                    secondsView = $('<div>').addClass('timepicker-seconds')
                        .append($('<table>').addClass('table-condensed')),
                    ret = [getTimePickerMainTemplate()];

                if (isEnabled('h')) {
                    ret.push(hoursView);
                }
                if (isEnabled('m')) {
                    ret.push(minutesView);
                }
                if (isEnabled('s')) {
                    ret.push(secondsView);
                }

                return ret;
            },

            getToolbar = function () {
                var row = [];
                if (options.showTodayButton) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': options.tooltips.today }).append($('<span>').addClass(options.icons.today))));
                }
                if (!options.sideBySide && hasDate() && hasTime()) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': options.tooltips.selectTime }).append($('<span>').addClass(options.icons.time))));
                }
                if (options.showClear) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': options.tooltips.clear }).append($('<span>').addClass(options.icons.clear))));
                }
                if (options.showClose) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': options.tooltips.close }).append($('<span>').addClass(options.icons.close))));
                }
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
            },

            getTemplate = function () {
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                    content = $('<ul>').addClass('list-unstyled'),
                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

                if (options.inline) {
                    template.removeClass('dropdown-menu');
                }

                if (use24Hours) {
                    template.addClass('usetwentyfour');
                }

                if (isEnabled('s') && !use24Hours) {
                    template.addClass('wider');
                }

                if (options.sideBySide && hasDate() && hasTime()) {
                    template.addClass('timepicker-sbs');
                    if (options.toolbarPlacement === 'top') {
                        template.append(toolbar);
                    }
                    template.append(
                        $('<div>').addClass('row')
                            .append(dateView.addClass('col-md-6'))
                            .append(timeView.addClass('col-md-6'))
                    );
                    if (options.toolbarPlacement === 'bottom') {
                        template.append(toolbar);
                    }
                    return template;
                }

                if (options.toolbarPlacement === 'top') {
                    content.append(toolbar);
                }
                if (hasDate()) {
                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
                }
                if (options.toolbarPlacement === 'default') {
                    content.append(toolbar);
                }
                if (hasTime()) {
                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
                }
                if (options.toolbarPlacement === 'bottom') {
                    content.append(toolbar);
                }
                return template.append(content);
            },

            dataToOptions = function () {
                var eData,
                    dataOptions = {};

                if (element.is('input') || options.inline) {
                    eData = element.data();
                } else {
                    eData = element.find('input').data();
                }

                if (eData.dateOptions && eData.dateOptions instanceof Object) {
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
                }

                $.each(options, function (key) {
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                    if (eData[attributeName] !== undefined) {
                        dataOptions[key] = eData[attributeName];
                    }
                });
                return dataOptions;
            },

            place = function () {
                var position = (component || element).position(),
                    offset = (component || element).offset(),
                    vertical = options.widgetPositioning.vertical,
                    horizontal = options.widgetPositioning.horizontal,
                    parent;

                if (options.widgetParent) {
                    parent = options.widgetParent.append(widget);
                } else if (element.is('input')) {
                    parent = element.after(widget).parent();
                } else if (options.inline) {
                    parent = element.append(widget);
                    return;
                } else {
                    parent = element;
                    element.children().first().after(widget);
                }

                // Top and bottom logic
                if (vertical === 'auto') {
                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                        widget.height() + element.outerHeight() < offset.top) {
                        vertical = 'top';
                    } else {
                        vertical = 'bottom';
                    }
                }

                // Left and right logic
                if (horizontal === 'auto') {
                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
                        offset.left + widget.outerWidth() > $(window).width()) {
                        horizontal = 'right';
                    } else {
                        horizontal = 'left';
                    }
                }

                if (vertical === 'top') {
                    widget.addClass('top').removeClass('bottom');
                } else {
                    widget.addClass('bottom').removeClass('top');
                }

                if (horizontal === 'right') {
                    widget.addClass('pull-right');
                } else {
                    widget.removeClass('pull-right');
                }

                // find the first parent element that has a non-static css positioning
                if (parent.css('position') === 'static') {
                    parent = parent.parents().filter(function () {
                        return $(this).css('position') !== 'static';
                    }).first();
                }

                if (parent.length === 0) {
                    throw new Error('datetimepicker component should be placed within a non-static positioned container');
                }

                widget.css({
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                    bottom: vertical === 'top' ? parent.outerHeight() - (parent === element ? 0 : position.top) : 'auto',
                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
                });
            },

            notifyEvent = function (e) {
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
                    return;
                }
                element.trigger(e);
            },

            viewUpdate = function (e) {
                if (e === 'y') {
                    e = 'YYYY';
                }
                notifyEvent({
                    type: 'dp.update',
                    change: e,
                    viewDate: viewDate.clone()
                });
            },

            showMode = function (dir) {
                if (!widget) {
                    return;
                }
                if (dir) {
                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
                }
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },

            fillDow = function () {
                var row = $('<tr>'),
                    currentDate = viewDate.clone().startOf('w').startOf('d');

                if (options.calendarWeeks === true) {
                    row.append($('<th>').addClass('cw').text('#'));
                }

                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                    currentDate.add(1, 'd');
                }
                widget.find('.datepicker-days thead').append(row);
            },

            isInDisabledDates = function (testDate) {
                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInEnabledDates = function (testDate) {
                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInDisabledHours = function (testDate) {
                return options.disabledHours[testDate.format('H')] === true;
            },

            isInEnabledHours = function (testDate) {
                return options.enabledHours[testDate.format('H')] === true;
            },

            isValid = function (targetMoment, granularity) {
                if (!targetMoment.isValid()) {
                    return false;
                }
                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
                    return false;
                }
                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
                    return false;
                }
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                    return false;
                }
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                    return false;
                }
                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                    return false;
                }
                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                    return false;
                }
                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                    return false;
                }
                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                    var found = false;
                    $.each(options.disabledTimeIntervals, function () {
                        if (targetMoment.isBetween(this[0], this[1])) {
                            found = true;
                            return false;
                        }
                    });
                    if (found) {
                        return false;
                    }
                }
                return true;
            },

            fillMonths = function () {
                var spans = [],
                    monthsShort = viewDate.clone().startOf('y').startOf('d');
                while (monthsShort.isSame(viewDate, 'y')) {
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');
                }
                widget.find('.datepicker-months td').empty().append(spans);
            },

            updateMonths = function () {
                var monthsView = widget.find('.datepicker-months'),
                    monthsViewHeader = monthsView.find('th'),
                    months = monthsView.find('tbody').find('span');

                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);

                monthsView.find('.disabled').removeClass('disabled');

                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                    monthsViewHeader.eq(0).addClass('disabled');
                }

                monthsViewHeader.eq(1).text(viewDate.year());

                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                    monthsViewHeader.eq(2).addClass('disabled');
                }

                months.removeClass('active');
                if (date.isSame(viewDate, 'y') && !unset) {
                    months.eq(date.month()).addClass('active');
                }

                months.each(function (index) {
                    if (!isValid(viewDate.clone().month(index), 'M')) {
                        $(this).addClass('disabled');
                    }
                });
            },

            updateYears = function () {
                var yearsView = widget.find('.datepicker-years'),
                    yearsViewHeader = yearsView.find('th'),
                    startYear = viewDate.clone().subtract(5, 'y'),
                    endYear = viewDate.clone().add(6, 'y'),
                    html = '';

                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);

                yearsView.find('.disabled').removeClass('disabled');

                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                    yearsViewHeader.eq(0).addClass('disabled');
                }

                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                    yearsViewHeader.eq(2).addClass('disabled');
                }

                while (!startYear.isAfter(endYear, 'y')) {
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');
                }

                yearsView.find('td').html(html);
            },

            updateDecades = function () {
                var decadesView = widget.find('.datepicker-decades'),
                    decadesViewHeader = decadesView.find('th'),
                    startDecade = moment({ y: viewDate.year() - (viewDate.year() % 100) - 1 }),
                    endDecade = startDecade.clone().add(100, 'y'),
                    startedAt = startDecade.clone(),
                    minDateDecade = false,
                    maxDateDecade = false,
                    endDecadeYear,
                    html = '';

                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);

                decadesView.find('.disabled').removeClass('disabled');

                if (startDecade.isSame(moment({ y: 1900 })) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
                    decadesViewHeader.eq(0).addClass('disabled');
                }

                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

                if (startDecade.isSame(moment({ y: 2000 })) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
                    decadesViewHeader.eq(2).addClass('disabled');
                }

                while (!startDecade.isAfter(endDecade, 'y')) {
                    endDecadeYear = startDecade.year() + 12;
                    minDateDecade = options.minDate && options.minDate.isAfter(startDecade, 'y') && options.minDate.year() <= endDecadeYear;
                    maxDateDecade = options.maxDate && options.maxDate.isAfter(startDecade, 'y') && options.maxDate.year() <= endDecadeYear;
                    html += '<span data-action="selectDecade" class="decade' + (date.isAfter(startDecade) && date.year() <= endDecadeYear ? ' active' : '') +
                        (!isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                    startDecade.add(12, 'y');
                }
                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

                decadesView.find('td').html(html);
                decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
            },

            fillDate = function () {
                var daysView = widget.find('.datepicker-days'),
                    daysViewHeader = daysView.find('th'),
                    currentDate,
                    html = [],
                    row,
                    clsNames = [],
                    i;

                if (!hasDate()) {
                    return;
                }

                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);

                daysView.find('.disabled').removeClass('disabled');
                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));

                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                    daysViewHeader.eq(0).addClass('disabled');
                }
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                    daysViewHeader.eq(2).addClass('disabled');
                }

                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');

                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
                    if (currentDate.weekday() === 0) {
                        row = $('<tr>');
                        if (options.calendarWeeks) {
                            row.append('<td class="cw">' + currentDate.week() + '</td>');
                        }
                        html.push(row);
                    }
                    clsNames = ['day'];
                    if (currentDate.isBefore(viewDate, 'M')) {
                        clsNames.push('old');
                    }
                    if (currentDate.isAfter(viewDate, 'M')) {
                        clsNames.push('new');
                    }
                    if (currentDate.isSame(date, 'd') && !unset) {
                        clsNames.push('active');
                    }
                    if (!isValid(currentDate, 'd')) {
                        clsNames.push('disabled');
                    }
                    if (currentDate.isSame(getMoment(), 'd')) {
                        clsNames.push('today');
                    }
                    if (currentDate.day() === 0 || currentDate.day() === 6) {
                        clsNames.push('weekend');
                    }
                    notifyEvent({
                        type: 'dp.classify',
                        date: currentDate,
                        classNames: clsNames
                    });
                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="' + clsNames.join(' ') + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');
                }

                daysView.find('tbody').empty().append(html);

                updateMonths();

                updateYears();

                updateDecades();
            },

            fillHours = function () {
                var table = widget.find('.timepicker-hours table'),
                    currentHour = viewDate.clone().startOf('d'),
                    html = [],
                    row = $('<tr>');

                if (viewDate.hour() > 11 && !use24Hours) {
                    currentHour.hour(12);
                }
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');
                }
                table.empty().append(html);
            },

            fillMinutes = function () {
                var table = widget.find('.timepicker-minutes table'),
                    currentMinute = viewDate.clone().startOf('h'),
                    html = [],
                    row = $('<tr>'),
                    step = options.stepping === 1 ? 5 : options.stepping;

                while (viewDate.isSame(currentMinute, 'h')) {
                    if (currentMinute.minute() % (step * 4) === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');
                }
                table.empty().append(html);
            },

            fillSeconds = function () {
                var table = widget.find('.timepicker-seconds table'),
                    currentSecond = viewDate.clone().startOf('m'),
                    html = [],
                    row = $('<tr>');

                while (viewDate.isSame(currentSecond, 'm')) {
                    if (currentSecond.second() % 20 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');
                }

                table.empty().append(html);
            },

            fillTime = function () {
                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');

                if (!use24Hours) {
                    toggle = widget.find('.timepicker [data-action=togglePeriod]');
                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');

                    toggle.text(date.format('A'));

                    if (isValid(newDate, 'h')) {
                        toggle.removeClass('disabled');
                    } else {
                        toggle.addClass('disabled');
                    }
                }
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

                fillHours();
                fillMinutes();
                fillSeconds();
            },

            update = function () {
                if (!widget) {
                    return;
                }
                fillDate();
                fillTime();
            },

            setValue = function (targetMoment) {
                var oldDate = unset ? null : date;

                // case of calling setValue(null or false)
                if (!targetMoment) {
                    unset = true;
                    input.val('');
                    element.data('date', '');
                    notifyEvent({
                        type: 'dp.change',
                        date: false,
                        oldDate: oldDate
                    });
                    update();
                    return;
                }

                targetMoment = targetMoment.clone().locale(options.locale);

                if (hasTimeZone()) {
                    targetMoment.tz(options.timeZone);
                }

                if (options.stepping !== 1) {
                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping)).seconds(0);

                    while (options.minDate && targetMoment.isBefore(options.minDate)) {
                        targetMoment.add(options.stepping, 'minutes');
                    }
                }

                if (isValid(targetMoment)) {
                    date = targetMoment;
                    viewDate = date.clone();
                    input.val(date.format(actualFormat));
                    element.data('date', date.format(actualFormat));
                    unset = false;
                    update();
                    notifyEvent({
                        type: 'dp.change',
                        date: date.clone(),
                        oldDate: oldDate
                    });
                } else {
                    if (!options.keepInvalid) {
                        input.val(unset ? '' : date.format(actualFormat));
                    } else {
                        notifyEvent({
                            type: 'dp.change',
                            date: targetMoment,
                            oldDate: oldDate
                        });
                    }
                    notifyEvent({
                        type: 'dp.error',
                        date: targetMoment,
                        oldDate: oldDate
                    });
                }
            },

            /**
             * Hides the widget. Possibly will emit dp.hide
             */
            hide = function () {
                var transitioning = false;
                if (!widget) {
                    return picker;
                }
                // Ignore event if in the middle of a picker transition
                widget.find('.collapse').each(function () {
                    var collapseData = $(this).data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        transitioning = true;
                        return false;
                    }
                    return true;
                });
                if (transitioning) {
                    return picker;
                }
                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.hide();

                $(window).off('resize', place);
                widget.off('click', '[data-action]');
                widget.off('mousedown', false);

                widget.remove();
                widget = false;

                notifyEvent({
                    type: 'dp.hide',
                    date: date.clone()
                });

                input.blur();

                viewDate = date.clone();

                return picker;
            },

            clear = function () {
                setValue(null);
            },

            parseInputDate = function (inputDate) {
                if (options.parseInputDate === undefined) {
                    if (!moment.isMoment(inputDate) || inputDate instanceof Date) {
                        inputDate = getMoment(inputDate);
                    }
                } else {
                    inputDate = options.parseInputDate(inputDate);
                }
                //inputDate.locale(options.locale);
                return inputDate;
            },

            /********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
            actions = {
                next: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                previous: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                pickerSwitch: function () {
                    showMode(1);
                },

                selectMonth: function (e) {
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
                    viewDate.month(month);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('M');
                },

                selectYear: function (e) {
                    var year = parseInt($(e.target).text(), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDecade: function (e) {
                    var year = parseInt($(e.target).data('selection'), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDay: function (e) {
                    var day = viewDate.clone();
                    if ($(e.target).is('.old')) {
                        day.subtract(1, 'M');
                    }
                    if ($(e.target).is('.new')) {
                        day.add(1, 'M');
                    }
                    setValue(day.date(parseInt($(e.target).text(), 10)));
                    if (!hasTime() && !options.keepOpen && !options.inline) {
                        hide();
                    }
                },

                incrementHours: function () {
                    var newDate = date.clone().add(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                incrementMinutes: function () {
                    var newDate = date.clone().add(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                incrementSeconds: function () {
                    var newDate = date.clone().add(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                decrementHours: function () {
                    var newDate = date.clone().subtract(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                decrementMinutes: function () {
                    var newDate = date.clone().subtract(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                decrementSeconds: function () {
                    var newDate = date.clone().subtract(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                togglePeriod: function () {
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
                },

                togglePicker: function (e) {
                    var $this = $(e.target),
                        $parent = $this.closest('ul'),
                        expanded = $parent.find('.in'),
                        closed = $parent.find('.collapse:not(.in)'),
                        collapseData;

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
                            expanded.collapse('hide');
                            closed.collapse('show');
                        } else { // otherwise just toggle in class on the two views
                            expanded.removeClass('in');
                            closed.addClass('in');
                        }
                        if ($this.is('span')) {
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                        } else {
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        }

                        // NOTE: uncomment if toggled state will be restored in show()
                        //if (component) {
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        //}
                    }
                },

                showPicker: function () {
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    widget.find('.timepicker .timepicker-picker').show();
                },

                showHours: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-hours').show();
                },

                showMinutes: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-minutes').show();
                },

                showSeconds: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-seconds').show();
                },

                selectHour: function (e) {
                    var hour = parseInt($(e.target).text(), 10);

                    if (!use24Hours) {
                        if (date.hours() >= 12) {
                            if (hour !== 12) {
                                hour += 12;
                            }
                        } else {
                            if (hour === 12) {
                                hour = 0;
                            }
                        }
                    }
                    setValue(date.clone().hours(hour));
                    actions.showPicker.call(picker);
                },

                selectMinute: function (e) {
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                selectSecond: function (e) {
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                clear: clear,

                today: function () {
                    var todaysDate = getMoment();
                    if (isValid(todaysDate, 'd')) {
                        setValue(todaysDate);
                    }
                },

                close: hide
            },

            doAction = function (e) {
                if ($(e.currentTarget).is('.disabled')) {
                    return false;
                }
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
                return false;
            },

            /**
             * Shows the widget. Possibly will emit dp.show and dp.change
             */
            show = function () {
                var currentMoment,
                    useCurrentGranularity = {
                        'year': function (m) {
                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                        },
                        'month': function (m) {
                            return m.date(1).hours(0).seconds(0).minutes(0);
                        },
                        'day': function (m) {
                            return m.hours(0).seconds(0).minutes(0);
                        },
                        'hour': function (m) {
                            return m.seconds(0).minutes(0);
                        },
                        'minute': function (m) {
                            return m.seconds(0);
                        }
                    };

                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
                    return picker;
                }
                if (input.val() !== undefined && input.val().trim().length !== 0) {
                    setValue(parseInputDate(input.val().trim()));
                } else if (unset && options.useCurrent && (options.inline || (input.is('input') && input.val().trim().length === 0))) {
                    currentMoment = getMoment();
                    if (typeof options.useCurrent === 'string') {
                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
                    }
                    setValue(currentMoment);
                }
                widget = getTemplate();

                fillDow();
                fillMonths();

                widget.find('.timepicker-hours').hide();
                widget.find('.timepicker-minutes').hide();
                widget.find('.timepicker-seconds').hide();

                update();
                showMode();

                $(window).on('resize', place);
                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
                widget.on('mousedown', false);

                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                place();
                widget.show();
                if (options.focusOnShow && !input.is(':focus')) {
                    input.focus();
                }

                notifyEvent({
                    type: 'dp.show'
                });
                return picker;
            },

            /**
             * Shows or hides the widget
             */
            toggle = function () {
                return (widget ? hide() : show());
            },

            keydown = function (e) {
                var handler = null,
                    index,
                    index2,
                    pressedKeys = [],
                    pressedModifiers = {},
                    currentKey = e.which,
                    keyBindKeys,
                    allModifiersPressed,
                    pressed = 'p';

                keyState[currentKey] = pressed;

                for (index in keyState) {
                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                        pressedKeys.push(index);
                        if (parseInt(index, 10) !== currentKey) {
                            pressedModifiers[index] = true;
                        }
                    }
                }

                for (index in options.keyBinds) {
                    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {
                        keyBindKeys = index.split(' ');
                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                            allModifiersPressed = true;
                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                    allModifiersPressed = false;
                                    break;
                                }
                            }
                            if (allModifiersPressed) {
                                handler = options.keyBinds[index];
                                break;
                            }
                        }
                    }
                }

                if (handler) {
                    handler.call(picker, widget);
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

            keyup = function (e) {
                keyState[e.which] = 'r';
                e.stopPropagation();
                e.preventDefault();
            },

            change = function (e) {
                var val = $(e.target).val().trim(),
                    parsedDate = val ? parseInputDate(val) : null;
                setValue(parsedDate);
                e.stopImmediatePropagation();
                return false;
            },

            attachDatePickerElementEvents = function () {
                input.on({
                    'change': change,
                    'blur': options.debug ? '' : hide,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? show : ''
                });

                if (element.is('input')) {
                    input.on({
                        'focus': show
                    });
                } else if (component) {
                    component.on('click', toggle);
                    component.on('mousedown', false);
                }
            },

            detachDatePickerElementEvents = function () {
                input.off({
                    'change': change,
                    'blur': blur,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? hide : ''
                });

                if (element.is('input')) {
                    input.off({
                        'focus': show
                    });
                } else if (component) {
                    component.off('click', toggle);
                    component.off('mousedown', false);
                }
            },

            indexGivenDates = function (givenDatesArray) {
                // Store given enabledDates and disabledDates as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledDates['2014-02-27'] === true)
                var givenDatesIndexed = {};
                $.each(givenDatesArray, function () {
                    var dDate = parseInputDate(this);
                    if (dDate.isValid()) {
                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    }
                });
                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
            },

            indexGivenHours = function (givenHoursArray) {
                // Store given enabledHours and disabledHours as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledHours['2014-02-27'] === true)
                var givenHoursIndexed = {};
                $.each(givenHoursArray, function () {
                    givenHoursIndexed[this] = true;
                });
                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
            },

            initFormatting = function () {
                var format = options.format || 'L LT';

                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
                        return date.localeData().longDateFormat(formatInput2) || formatInput2;
                    });
                });


                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                    parseFormats.push(actualFormat);
                }

                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);

                if (isEnabled('y')) {
                    minViewModeNumber = 2;
                }
                if (isEnabled('M')) {
                    minViewModeNumber = 1;
                }
                if (isEnabled('d')) {
                    minViewModeNumber = 0;
                }

                currentViewMode = Math.max(minViewModeNumber, currentViewMode);

                if (!unset) {
                    setValue(date);
                }
            };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function () {
            ///<summary>Destroys the widget and removes all attached event listeners</summary>
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.disable = function () {
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
            hide();
            if (component && component.hasClass('btn')) {
                component.addClass('disabled');
            }
            input.prop('disabled', true);
            return picker;
        };

        picker.enable = function () {
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {
                component.removeClass('disabled');
            }
            input.prop('disabled', false);
            return picker;
        };

        picker.ignoreReadonly = function (ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function (newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function (key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.date = function (newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.date">
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
            return picker;
        };

        picker.format = function (newFormat) {
            ///<summary>test su</summary>
            ///<param name="newFormat">info about para</param>
            ///<returns type="string|boolean">returns foo</returns>
            if (arguments.length === 0) {
                return options.format;
            }

            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
                throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.timeZone = function (newZone) {
            if (arguments.length === 0) {
                return options.timeZone;
            }

            if (typeof newZone !== 'string') {
                throw new TypeError('newZone() expects a string parameter');
            }

            options.timeZone = newZone;

            return picker;
        };

        picker.dayViewHeaderFormat = function (newFormat) {
            if (arguments.length === 0) {
                return options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            options.dayViewHeaderFormat = newFormat;
            return picker;
        };

        picker.extraFormats = function (formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.disabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
            }

            if (!dates) {
                options.disabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            options.disabledDates = indexGivenDates(dates);
            options.enabledDates = false;
            update();
            return picker;
        };

        picker.enabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
            ///<returns type="array">options.enabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
            }

            if (!dates) {
                options.enabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            options.enabledDates = indexGivenDates(dates);
            options.disabledDates = false;
            update();
            return picker;
        };

        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return options.daysOfWeekDisabled.splice(0);
            }

            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
                options.daysOfWeekDisabled = false;
                update();
                return picker;
            }

            if (!(daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'd')) {
                    date.add(1, 'd');
                    if (tries === 31) {
                        throw 'Tried 31 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.maxDate = function (maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if ((typeof maxDate === 'boolean') && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.minDate = function (minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if ((typeof minDate === 'boolean') && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone().add(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.defaultDate = function (defaultDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = getMoment();
                } else {
                    defaultDate = getMoment(defaultDate);
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if ((options.defaultDate && options.inline) || input.val().trim() === '') {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function (locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.stepping = function (stepping) {
            if (arguments.length === 0) {
                return options.stepping;
            }

            stepping = parseInt(stepping, 10);
            if (isNaN(stepping) || stepping < 1) {
                stepping = 1;
            }
            options.stepping = stepping;
            return picker;
        };

        picker.useCurrent = function (useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return options.useCurrent;
            }

            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            options.useCurrent = useCurrent;
            return picker;
        };

        picker.collapse = function (collapse) {
            if (arguments.length === 0) {
                return options.collapse;
            }

            if (typeof collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (options.collapse === collapse) {
                return picker;
            }
            options.collapse = collapse;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.icons = function (icons) {
            if (arguments.length === 0) {
                return $.extend({}, options.icons);
            }

            if (!(icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }
            $.extend(options.icons, icons);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.tooltips = function (tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, options.tooltips);
            }

            if (!(tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(options.tooltips, tooltips);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.useStrict = function (useStrict) {
            if (arguments.length === 0) {
                return options.useStrict;
            }

            if (typeof useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            options.useStrict = useStrict;
            return picker;
        };

        picker.sideBySide = function (sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function (viewMode) {
            if (arguments.length === 0) {
                return options.viewMode;
            }

            if (typeof viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (viewModes.indexOf(viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
            }

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };

        picker.toolbarPlacement = function (toolbarPlacement) {
            if (arguments.length === 0) {
                return options.toolbarPlacement;
            }

            if (typeof toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            options.toolbarPlacement = toolbarPlacement;

            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetPositioning = function (widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, options.widgetPositioning);
            }

            if (({}).toString.call(widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (widgetPositioning.horizontal) {
                if (typeof widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
            }
            if (widgetPositioning.vertical) {
                if (typeof widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                options.widgetPositioning.vertical = widgetPositioning.vertical;
            }
            update();
            return picker;
        };

        picker.calendarWeeks = function (calendarWeeks) {
            if (arguments.length === 0) {
                return options.calendarWeeks;
            }

            if (typeof calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            options.calendarWeeks = calendarWeeks;
            update();
            return picker;
        };

        picker.showTodayButton = function (showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function (showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetParent = function (widgetParent) {
            if (arguments.length === 0) {
                return options.widgetParent;
            }

            if (typeof widgetParent === 'string') {
                widgetParent = $(widgetParent);
            }

            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            options.widgetParent = widgetParent;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.keepOpen = function (keepOpen) {
            if (arguments.length === 0) {
                return options.keepOpen;
            }

            if (typeof keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            options.keepOpen = keepOpen;
            return picker;
        };

        picker.focusOnShow = function (focusOnShow) {
            if (arguments.length === 0) {
                return options.focusOnShow;
            }

            if (typeof focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            options.focusOnShow = focusOnShow;
            return picker;
        };

        picker.inline = function (inline) {
            if (arguments.length === 0) {
                return options.inline;
            }

            if (typeof inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            options.inline = inline;
            return picker;
        };

        picker.clear = function () {
            clear();
            return picker;
        };

        picker.keyBinds = function (keyBinds) {
            if (arguments.length === 0) {
                return options.keyBinds;
            }

            options.keyBinds = keyBinds;
            return picker;
        };

        picker.getMoment = function (d) {
            return getMoment(d);
        };

        picker.debug = function (debug) {
            if (typeof debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            options.debug = debug;
            return picker;
        };

        picker.allowInputToggle = function (allowInputToggle) {
            if (arguments.length === 0) {
                return options.allowInputToggle;
            }

            if (typeof allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            options.allowInputToggle = allowInputToggle;
            return picker;
        };

        picker.showClose = function (showClose) {
            if (arguments.length === 0) {
                return options.showClose;
            }

            if (typeof showClose !== 'boolean') {
                throw new TypeError('showClose() expects a boolean parameter');
            }

            options.showClose = showClose;
            return picker;
        };

        picker.keepInvalid = function (keepInvalid) {
            if (arguments.length === 0) {
                return options.keepInvalid;
            }

            if (typeof keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            options.keepInvalid = keepInvalid;
            return picker;
        };

        picker.datepickerInput = function (datepickerInput) {
            if (arguments.length === 0) {
                return options.datepickerInput;
            }

            if (typeof datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            options.datepickerInput = datepickerInput;
            return picker;
        };

        picker.parseInputDate = function (parseInputDate) {
            if (arguments.length === 0) {
                return options.parseInputDate;
            }

            if (typeof parseInputDate !== 'function') {
                throw new TypeError('parseInputDate() sholud be as function');
            }

            options.parseInputDate = parseInputDate;

            return picker;
        };

        picker.disabledTimeIntervals = function (disabledTimeIntervals) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledTimeIntervals</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
            }

            if (!disabledTimeIntervals) {
                options.disabledTimeIntervals = false;
                update();
                return picker;
            }
            if (!(disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            options.disabledTimeIntervals = disabledTimeIntervals;
            update();
            return picker;
        };

        picker.disabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
            ///<returns type="array">options.disabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
            }

            if (!hours) {
                options.disabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            options.disabledHours = indexGivenHours(hours);
            options.enabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.enabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
            ///<returns type="array">options.enabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
            }

            if (!hours) {
                options.enabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            options.enabledHours = indexGivenHours(hours);
            options.disabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };
        /**
         * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
         * @param {Takes string, viewDate, moment, null parameter.} newDate
         * @returns {viewDate.clone()}
         */
        picker.viewDate = function (newDate) {
            if (arguments.length === 0) {
                return viewDate.clone();
            }

            if (!newDate) {
                viewDate = date.clone();
                return picker;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            viewDate = parseInputDate(newDate);
            viewUpdate();
            return picker;
        };

        // initializing element and component attributes
        if (element.is('input')) {
            input = element;
        } else {
            input = element.find(options.datepickerInput);
            if (input.length === 0) {
                input = element.find('input');
            } else if (!input.is('input')) {
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (element.find('.datepickerbutton').length === 0) {
                component = element.find('.input-group-addon');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!options.inline && !input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        // Set defaults for date here now instead of in var declaration
        date = getMoment();
        viewDate = date.clone();

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

        if (input.prop('disabled')) {
            picker.disable();
        }
        if (input.is('input') && input.val().trim().length !== 0) {
            setValue(parseInputDate(input.val().trim()));
        }
        else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        if (options.inline) {
            show();
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    /**
    * See (http://jquery.com/).
    * @name jQuery
    * @class
    * See the jQuery Library  (http://jquery.com/) for full details.  This just
    * documents the function and classes that are added to jQuery by this plug-in.
    */
    /**
     * See (http://jquery.com/)
     * @name fn
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     * @memberOf jQuery
     */
    /**
     * Show comments
     * @class datetimepicker
     * @memberOf jQuery.fn
     */
    $.fn.datetimepicker = function (options) {
        options = options || {};

        var args = Array.prototype.slice.call(arguments, 1),
            isInstance = true,
            thisMethods = ['destroy', 'hide', 'show', 'toggle'],
            returnValue;

        if (typeof options === 'object') {
            return this.each(function () {
                var $this = $(this),
                    _options;
                if (!$this.data('DateTimePicker')) {
                    // create a private copy of the defaults object
                    _options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                    $this.data('DateTimePicker', dateTimePicker($this, _options));
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var $this = $(this),
                    instance = $this.data('DateTimePicker');
                if (!instance) {
                    throw new Error('bootstrap-datetimepicker("' + options + '") method was called on an element that is not using DateTimePicker');
                }

                returnValue = instance[options].apply(instance, args);
                isInstance = returnValue === instance;
            });

            if (isInstance || $.inArray(options, thisMethods) > -1) {
                return this;
            }

            return returnValue;
        }

        throw new TypeError('Invalid arguments for DateTimePicker: ' + options);
    };

    $.fn.datetimepicker.defaults = {
        timeZone: '',
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        keyBinds: {
            up: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
            },
            down: function (widget) {
                if (!widget) {
                    this.show();
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
            },
            'control up': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
            },
            'control down': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
            },
            left: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
            },
            right: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
            },
            pageUp: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
            },
            pageDown: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
            },
            enter: function () {
                this.hide();
            },
            escape: function () {
                this.hide();
            },
            //tab: function (widget) { //this break the flow of the form. disabling for now
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
            //    if(toggle.length > 0) toggle.click();
            //},
            'control space': function (widget) {
                if (!widget) {
                    return;
                }
                if (widget.find('.timepicker').is(':visible')) {
                    widget.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function () {
                this.date(this.getMoment());
            },
            'delete': function () {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };

    return $.fn.datetimepicker;
}));


/***/ }),
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(352);


/***/ })
]),[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hZi5qcz8xODRlIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci1kei5qcz9jOWYzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci1rdy5qcz9hNDc3Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci1seS5qcz9kZmMwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci1tYS5qcz83ZDIxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci1zYS5qcz85ZjU5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci10bi5qcz9lZDUwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hci5qcz9lNjMwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9hei5qcz9lZDU0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9iZS5qcz8zOWNlIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9iZy5qcz8yNzFiIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ibi5qcz9kOWMzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9iby5qcz9iNWE0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ici5qcz9iYjgxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9icy5qcz9jYTU5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9jYS5qcz80ZGE0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9jcy5qcz84NGQ2Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9jdi5qcz8yNDNmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9jeS5qcz82ZDQ5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9kYS5qcz8zNzEzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9kZS1hdC5qcz8yMjMwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9kZS1jaC5qcz9jOGZiIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9kZS5qcz9hYmIxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9kdi5qcz9jNWIzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbC5qcz82MTYwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbi1hdS5qcz83ZTg5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbi1jYS5qcz9lMmMzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbi1nYi5qcz9kMGU4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbi1pZS5qcz8xZGNkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lbi1uei5qcz82ZjM5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lby5qcz9hZjBlIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lcy1kby5qcz81OTUxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9lcy5qcz80ZGUwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ldC5qcz84YTliIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ldS5qcz84ZWY3Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9mYS5qcz81MTZhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9maS5qcz8wN2NiIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9mby5qcz9mNzkxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9mci1jYS5qcz9lMjdhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9mci1jaC5qcz9mMzExIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9mci5qcz8zNDBiIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9meS5qcz8xNmI4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9nZC5qcz85ZWE0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9nbC5qcz84ZjZkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qcz85MWMzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9oZS5qcz9lNWNhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9oaS5qcz9jYmJjIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9oci5qcz81MzRmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9odS5qcz9kYzM5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9oeS1hbS5qcz8xOWQxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9pZC5qcz9iODhkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9pcy5qcz85Yzk1Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9pdC5qcz9iMWUzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9qYS5qcz8yMGE2Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9qdi5qcz84NmQ3Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9rYS5qcz9mOGU5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ray5qcz81OTNhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9rbS5qcz80YzVhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9rbi5qcz9mM2Y0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9rby5qcz84MTc1Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9reS5qcz9lYzUyIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9sYi5qcz83M2JmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9sby5qcz9jNjJkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9sdC5qcz83NmU5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9sdi5qcz82ZTRkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tZS5qcz9jYjc4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9taS5qcz9mZjYyIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tay5qcz85NWM0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tbC5qcz9iNjdkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tci5qcz9mNWU4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tcy1teS5qcz8xMDMwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9tcy5qcz9iZWI2Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9teS5qcz8xOTUxIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9uYi5qcz81MTM5Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9uZS5qcz8yOGZiIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ubC1iZS5qcz83NzY0Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ubC5qcz9kZGMyIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ubi5qcz9jZDhhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9wYS1pbi5qcz9hNGNhIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9wbC5qcz8zZDI4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9wdC1ici5qcz8xOTYzIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9wdC5qcz85N2VmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9yby5qcz84ZTJlIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9ydS5qcz8wMDgwIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zZC5qcz8yZTExIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zZS5qcz8xMTFmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zaS5qcz9mODZkIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zay5qcz9kZTc1Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zbC5qcz9lZDM4Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zcS5qcz9lMGY2Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzPzQzZjYiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3NyLmpzPzUwNTIiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3NzLmpzPzAwYmEiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3N2LmpzPzY3ODgiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3N3LmpzP2VhZjYiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3RhLmpzPzBhMTAiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3RlLmpzP2U0YzAiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3RldC5qcz8xOWZlIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS90aC5qcz81NTk3Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS90bC1waC5qcz8yNDg1Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS90bGguanM/MWI3YyIsIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdHIuanM/OGYyOCIsIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdHpsLmpzPzgzMDYiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzP2U2NTMiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3R6bS5qcz9iNjcyIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS91ay5qcz80OGU1Iiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS91ci5qcz9mY2NmIiwid2VicGFjazovLy8uL34vbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzP2NmMTAiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3V6LmpzP2EyNDEiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3ZpLmpzP2RjMTkiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzPzFhNWEiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3lvLmpzP2ZmOWUiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3poLWNuLmpzPzJmYzAiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3poLWhrLmpzPzI2N2IiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQvbG9jYWxlL3poLXR3LmpzPzQzOWMiLCJ3ZWJwYWNrOi8vLyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY2xpZW50U2lkZVRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY3JlYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZW1pbmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZXBldGl0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2V0dXBDb21wb3NlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3RyYW5zbGF0b3JNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi92YWxpZGF0ZUV2ZW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VvbmFzZGFuLWJvb3RzdHJhcC1kYXRldGltZXBpY2tlci9zcmMvanMvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmpzIl0sIm5hbWVzIjpbInRhZ1RlbXBsYXRlIiwibmFtZSIsImNvbnRlbnQiLCJyZWdFeHBzIiwia2V5IiwicGF0dGVybiIsIm1hcCIsInB1c2giLCJpblBvc3QiLCJSZWdFeHAiLCJmdWxsIiwiciIsImpvaW4iLCJldmVudFJlZ0V4cCIsInBhcnNlIiwidGV4dCIsIm1hdGNoZXMiLCJtYXRjaCIsImxlbmd0aCIsInJlc3VsdHMiLCJmb3JFYWNoIiwibSIsInRyaW0iLCJyZXBlYXRzIiwiYWxsZGF5Iiwic3RhcnREYXRlIiwicGFyc2VJbnQiLCJlbmREYXRlIiwicmVtaW5kZXJzIiwiSlNPTiIsInNvcnQiLCJhIiwiYiIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJtYW5kYXRvcnkiLCJyZXBsYWNlIiwiZSIsInRlbXBsYXRlcyIsImV2ZW50IiwiZGVmYXVsdCIsImxhbmciLCJjb25maWciLCJ1c2VyTGFuZyIsImRlZmF1bHRMYW5nIiwialF1ZXJ5IiwiZm4iLCJzaXplIiwiYmVnaW4iLCJtb21lbnRMYW5nIiwid2luZG93IiwicmVxdWlyZWpzIiwiY29tcG9zZXIiLCJmb3JtYXR0aW5nIiwidHJhbnNsYXRvciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVHJhbnNsYXRvciIsImFqYXhpZnkiLCJsb2FkVGVtcGxhdGUiLCJ0cmFuc2xhdGUiLCJ0ZW1wbGF0ZSIsImh0bWwiLCJhcHBlbmQiLCJkYXRldGltZXBpY2tlciIsImljb25zIiwidGltZSIsImRhdGUiLCJ1cCIsImRvd24iLCJwcmV2aW91cyIsIm5leHQiLCJ0b2RheSIsImNsZWFyIiwiY2xvc2UiLCJhbGxvd0lucHV0VG9nZ2xlIiwibG9jYWxlIiwic2lkZUJ5U2lkZSIsInVzZUN1cnJlbnQiLCJjcmVhdGVFdmVudCIsInByZXBhcmVGb3JtYXR0aW5nVG9vbHMiLCJhZGRCdXR0b25EaXNwYXRjaCIsInRleHRhcmVhIiwiJHRleHRhcmVhIiwib2xkVmFsIiwidmFsIiwib2xkRXZlbnQiLCJ0ZXN0IiwibmV3VmFsIiwidHJpZ2dlciIsIm9uIiwiX193ZWJwYWNrX3B1YmxpY19wYXRoX18iLCJSRUxBVElWRV9QQVRIIiwidG9Mb3dlckNhc2UiLCJyZXF1aXJlIiwic3BsaXQiLCJlciIsIkVycm9yIiwiaW5pdCIsImNyZWF0ZSIsInRyYW5zbGF0ZUV2ZW50cyIsImVhY2giLCJpIiwiZWxlbSIsImVsIiwiYXR0ciIsInRyYW5zbGF0ZUluUGxhY2UiLCJ0aGVuIiwiZmluZCIsIngiLCJkZWZhdWx0RXZlbnQiLCJEYXRlIiwibm93IiwiZm9ybWF0cyIsInRpbWVEYXRlIiwiY3JlYXRlRXZlbnRGYWN0b3J5IiwibW9kYWwiLCJiYWNrZHJvcCIsInNob3ciLCJpbnB1dHMiLCJyZXBldGl0aW9uIiwicmVwZWF0RW5kRGF0ZSIsImZvcm1hdCIsInByb3AiLCJkYXRhIiwic2V0SW5wdXRzIiwic2V0UmVtaW5kZXJzIiwic2V0UmVwZWF0IiwiZ2V0SW5wdXRzIiwidmFsdWVPZiIsImdldFJlbWluZGVycyIsImdldFJlcGVhdCIsInMiLCJzZXRIb3VycyIsImFsZXJ0RmFpbHVyZSIsImlucHV0IiwiY2xvc2VzdCIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJPYmplY3QiLCJhc3NpZ24iLCJyZW1vdmVDbGFzcyIsInN1Ym1pdCIsImRlbCIsIm9uQ2xpY2siLCJuZXdFdmVudCIsImZhaWxlZCIsImZhaWx1cmVzIiwiZmFpbHVyZSIsIm9mZiIsIm9uZSIsIm9uQ2hhbmdlIiwibWFrZUxpc3RFbGVtZW50IiwibiIsInplcm8iLCJsaSIsInRvIiwiZmFjdG9yeSIsIiR1bCIsImFkZEJ1dHRvbnMiLCJtZXRob2RzIiwicmVtb3ZlIiwicmV2ZXJzZSIsInByZXBlbmQiLCJhZGRSZW1pbmRlciIsIm5vdHMiLCJpbmNsdWRlcyIsImluZGV4IiwiaW5kZXhPZiIsImFmdGVyIiwicmVtb3ZlUmVtaW5kZXIiLCJmaWx0ZXIiLCJub3QiLCJwb3B1cCIsInJhZGlvcyIsImJ1dHRvbiIsInRhcmdldCIsInNpYmxpbmdzIiwicHJvbXB0Q3VzdG9tIiwiYWRkTm90aWYiLCJ1bml0IiwibnVtYmVyIiwibXMiLCJtbSIsImhoIiwiZGQiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJub3RpZiIsImxpc3QiLCJjbGljayIsImN1c3RvbSIsImNoYW5nZUJ1dHRvbiIsImNoYW5nZUJ1dHRvblRleHQiLCJkYXlzT2ZXZWVrIiwiY3VzdG9tRW5kIiwiYWRkIiwid2lkZ2V0UG9zaXRpb25pbmciLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJjaGFuZ2UiLCJ2YWx1ZSIsInRvZ2dsZUNsYXNzIiwiZHJvcGRvd24iLCJmb3JldmVyIiwidG9nZ2xlIiwicmVwZWF0IiwiZXZlcnkiLCJkYXkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNlbGVjdGVkIiwiZGF5cyIsInBhcmVudCIsImRhdGFzZXQiLCJlbmQiLCJwb3N0cyIsImFjdGl2ZSIsInNvY2tldCIsImVtaXQiLCJjYW5Qb3N0IiwiYWx0ZXJTdWJtaXQiLCJ1dWlkIiwiY29tcCIsIndyaXRlIiwiZXZlbnRFeGlzdGVkIiwib3JpZyIsIl9kYXRhIiwiaGFuZGxlciIsInNlbGYiLCJjYWxsIiwicXVlc3Rpb24iLCJib290Ym94IiwiY29uZmlybSIsIm9rYXkiLCJzZXRUaW1lb3V0IiwiYm9keSIsInJhd1RlbXBsYXRlIiwic3RyaW5naWZ5IiwianVzdERhdGUiLCJqdXN0VGltZSIsImRhdGVBbmRUaW1lIiwiZm9ybWF0RGF0ZXMiLCJ1dGMiLCJtb20iLCJzdGFydCIsIk1hdGgiLCJhYnMiLCJkYXlPZlllYXIiLCJ5ZWFyIiwicmVnaXN0ZXJNb2R1bGUiLCJ0aW1lYWdvIiwiZHVyYXRpb24iLCJmcm9tIiwidGltZURhdGVWaWV3IiwidGltZXpvbmUiLCJpc0FsbGRheSIsImxvY2FsZURhdGEiLCJhcmdzIiwiaXNBcnJheU9mIiwiYXJyIiwidHlwZSIsIkFycmF5IiwiaXNBcnJheSIsImNoZWNrRGF0ZSIsImdldFRpbWUiLCJmaWVsZHMiLCJrZXlzIiwidmFsaWRhdGVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLG9COzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLGlFOzs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtREFBbUQ7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkIsUUFBUSxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFnRDtBQUNuRSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiY29uc3QgdGFnVGVtcGxhdGUgPSAobmFtZSwgY29udGVudCkgPT5cbiAgYFxcXFxzKlxcXFxbJHtuYW1lfVxcXFxdKCR7Y29udGVudH0pXFxcXFtcXFxcLyR7bmFtZX1cXFxcXVxcXFxzKmA7XG5cbmNvbnN0IHJlZ0V4cHMgPSBbXG4gIHsga2V5OiAnbmFtZScsIHBhdHRlcm46ICcuKicgfSxcbiAgeyBrZXk6ICdhbGxkYXknLCBwYXR0ZXJuOiAndHJ1ZXxmYWxzZScgfSxcbiAgeyBrZXk6ICdzdGFydERhdGUnLCBwYXR0ZXJuOiAnWzAtOV0rJyB9LFxuICB7IGtleTogJ2VuZERhdGUnLCBwYXR0ZXJuOiAnWzAtOV0rJyB9LFxuICB7IGtleTogJ3JlbWluZGVycycsIHBhdHRlcm46ICdcXFxcW1swLTksIF0qXFxcXF0nIH0sXG4gIHsga2V5OiAnbG9jYXRpb24nLCBwYXR0ZXJuOiAnLionIH0sXG4gIHsga2V5OiAnZGVzY3JpcHRpb24nLCBwYXR0ZXJuOiAnW1xcXFxzXFxcXFNdKicgfSxcbiAgeyBrZXk6ICdtYW5kYXRvcnknLCBwYXR0ZXJuOiAndHJ1ZXxmYWxzZScgfSxcbl0ubWFwKCh7IGtleSwgcGF0dGVybiB9KSA9PiAoe1xuICBrZXksXG4gIHBhdHRlcm46IHRhZ1RlbXBsYXRlKGtleSwgcGF0dGVybiksXG59KSk7XG5cbnJlZ0V4cHMucHVzaCh7XG4gIGtleTogJ3JlcGVhdHMnLFxuICBwYXR0ZXJuOiAnXFxcXHMqKD86XFxcXFtyZXBlYXRzXFxcXF0oLiopXFxcXFtcXFxcL3JlcGVhdHNcXFxcXSk/XFxcXHMqJyxcbn0pO1xuXG5jb25zdCBpblBvc3QgPSBuZXcgUmVnRXhwKFxuICAnKFxcXFxbZXZlbnQoPzpcXFxcLWludmFsaWQpP1xcXFxdW1xcXFxzXFxcXFNdK1xcXFxbXFxcXC9ldmVudCg/OlxcXFwtaW52YWxpZCk/XFxcXF0pJ1xuKTtcblxuY29uc3QgZnVsbCA9IHJlZ0V4cHMubWFwKHIgPT4gci5wYXR0ZXJuKS5qb2luKCcnKTtcbmNvbnN0IGV2ZW50UmVnRXhwID0gdGFnVGVtcGxhdGUoJ2V2ZW50JywgZnVsbCk7XG5cbmNvbnN0IHBhcnNlID0gKHRleHQpID0+IHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRleHQubWF0Y2goZXZlbnRSZWdFeHApO1xuICBpZiAoIW1hdGNoZXMgfHwgIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgbWF0Y2ggPSBtYXRjaGVzWzFdO1xuICBjb25zdCByZXN1bHRzID0ge307XG4gIHJlZ0V4cHMuZm9yRWFjaCgoeyBrZXksIHBhdHRlcm4gfSkgPT4ge1xuICAgIGNvbnN0IG0gPSBtYXRjaC5tYXRjaChwYXR0ZXJuKTtcbiAgICByZXN1bHRzW2tleV0gPSBtICYmIG1bMV0gJiYgbVsxXS50cmltKCk7XG4gIH0pO1xuXG4gIHJlc3VsdHMucmVwZWF0cyA9IG1hdGNoLm1hdGNoKC9cXFtyZXBlYXRzXFxdKC4qKVxcW1xcL3JlcGVhdHNcXF0vKTtcbiAgcmVzdWx0cy5yZXBlYXRzID0gcmVzdWx0cy5yZXBlYXRzICYmIHJlc3VsdHMucmVwZWF0c1sxXTtcblxuICB0cnkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiByZXN1bHRzLm5hbWUsXG4gICAgICBhbGxkYXk6IHJlc3VsdHMuYWxsZGF5ID09PSAndHJ1ZScsXG4gICAgICBzdGFydERhdGU6IHBhcnNlSW50KHJlc3VsdHMuc3RhcnREYXRlLCAxMCksXG4gICAgICBlbmREYXRlOiBwYXJzZUludChyZXN1bHRzLmVuZERhdGUsIDEwKSxcbiAgICAgIHJlbWluZGVyczogSlNPTi5wYXJzZShyZXN1bHRzLnJlbWluZGVycykuc29ydCgoYSwgYikgPT4gYiAtIGEpLFxuICAgICAgbG9jYXRpb246IHJlc3VsdHMubG9jYXRpb24sXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0cy5kZXNjcmlwdGlvbixcbiAgICAgIG1hbmRhdG9yeTogcmVzdWx0cy5tYW5kYXRvcnkgPT09ICd0cnVlJyxcbiAgICAgIHJlcGVhdHM6IHJlc3VsdHMucmVwZWF0cyA/IEpTT04ucGFyc2UocmVzdWx0cy5yZXBlYXRzLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKSkgOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgdGVtcGxhdGVzID0ge1xuICAuLi5yZWdFeHBzLFxuICBldmVudDogZXZlbnRSZWdFeHAsXG59O1xuXG5leHBvcnQge1xuICBwYXJzZSBhcyBkZWZhdWx0LFxuICB0YWdUZW1wbGF0ZSxcbiAgdGVtcGxhdGVzLFxuICBpblBvc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9wYXJzZS5qcyIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FmLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYWYuanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLWR6LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXItZHouanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLWt3LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXIta3cuanNcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLWx5LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXItbHkuanNcbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLW1hLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXItbWEuanNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLXNhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXItc2EuanNcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLXRuLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXItdG4uanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2FyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2F6LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYXouanNcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JlLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYmUuanNcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JnLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYmcuanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JuLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYm4uanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYm8uanNcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYnIuanNcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2JzLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvYnMuanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2NhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvY2EuanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2NzLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvY3MuanNcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2N2LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvY3YuanNcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2N5LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvY3kuanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2RhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZGEuanNcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2RlLWF0LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZGUtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2RlLWNoLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZGUtY2guanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2RlLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2R2LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZHYuanNcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VsLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZWwuanNcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VuLWF1LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW4tYXUuanNcbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VuLWNhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW4tY2EuanNcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VuLWdiLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW4tZ2IuanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VuLWllLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW4taWUuanNcbi8vIG1vZHVsZSBpZCA9IDIxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VuLW56LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW4tbnouanNcbi8vIG1vZHVsZSBpZCA9IDIxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZW8uanNcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VzLWRvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZXMtZG8uanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2VzLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2V0LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2V1LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZXUuanNcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZmEuanNcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZpLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZmkuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZm8uanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZyLWNhLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZnItY2EuanNcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZyLWNoLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZnItY2guanNcbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ZyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZnIuanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2Z5LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZnkuanNcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2dkLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZ2QuanNcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2dsLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZ2wuanNcbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2dvbS1sYXRuLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2hlLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2hpLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaGkuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2hyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaHIuanNcbi8vIG1vZHVsZSBpZCA9IDIzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2h1LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaHUuanNcbi8vIG1vZHVsZSBpZCA9IDIzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2h5LWFtLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaHktYW0uanNcbi8vIG1vZHVsZSBpZCA9IDIzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2lkLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2lzLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2l0LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvaXQuanNcbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2phLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvamEuanNcbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2p2LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvanYuanNcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2thLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva2EuanNcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2trLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva2suanNcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2ttLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva20uanNcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2tuLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva24uanNcbi8vIG1vZHVsZSBpZCA9IDI0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2tvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva28uanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2t5LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUva3kuanNcbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2xiLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbGIuanNcbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2xvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbG8uanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2x0LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbHQuanNcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL2x2LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbHYuanNcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21lLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21pLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbWkuanNcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21rLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbWsuanNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21sLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbWwuanNcbi8vIG1vZHVsZSBpZCA9IDI1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21yLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21zLW15LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbXMtbXkuanNcbi8vIG1vZHVsZSBpZCA9IDI2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL21zLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL215LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbXkuanNcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL25iLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbmIuanNcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL25lLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL25sLWJlLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbmwtYmUuanNcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL25sLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbmwuanNcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL25uLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvbm4uanNcbi8vIG1vZHVsZSBpZCA9IDI2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3BhLWluLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcGEtaW4uanNcbi8vIG1vZHVsZSBpZCA9IDI2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3BsLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcGwuanNcbi8vIG1vZHVsZSBpZCA9IDI2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3B0LWJyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcHQtYnIuanNcbi8vIG1vZHVsZSBpZCA9IDI3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3B0LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcHQuanNcbi8vIG1vZHVsZSBpZCA9IDI3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3JvLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcm8uanNcbi8vIG1vZHVsZSBpZCA9IDI3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3J1LmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvcnUuanNcbi8vIG1vZHVsZSBpZCA9IDI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NkLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc2QuanNcbi8vIG1vZHVsZSBpZCA9IDI3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NlLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NpLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc2kuanNcbi8vIG1vZHVsZSBpZCA9IDI3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NrLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc2suanNcbi8vIG1vZHVsZSBpZCA9IDI3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NsLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NxLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvc3EuanNcbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3NyLWN5cmwuanNcIik7XG5cdHZhciBjYWxsYmFja3MgPSBjYnM7XG5cdGNicyA9IG51bGw7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlciEuL34vbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXG4vLyBtb2R1bGUgaWQgPSAyODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi9zci5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3NyLmpzXG4vLyBtb2R1bGUgaWQgPSAyODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi9zcy5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3NzLmpzXG4vLyBtb2R1bGUgaWQgPSAyODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi9zdi5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3N2LmpzXG4vLyBtb2R1bGUgaWQgPSAyODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi9zdy5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3N3LmpzXG4vLyBtb2R1bGUgaWQgPSAyODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi90YS5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3RhLmpzXG4vLyBtb2R1bGUgaWQgPSAyODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi90ZS5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi90ZXQuanNcIik7XG5cdHZhciBjYWxsYmFja3MgPSBjYnM7XG5cdGNicyA9IG51bGw7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlciEuL34vbW9tZW50L2xvY2FsZS90ZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3RoLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvdGguanNcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3RsLXBoLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvdGwtcGguanNcbi8vIG1vZHVsZSBpZCA9IDI4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3RsaC5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3RsaC5qc1xuLy8gbW9kdWxlIGlkID0gMjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGNicyA9IFtdLCBcblx0ZGF0YTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0aWYoY2JzKSBjYnMucHVzaChjYik7XG5cdGVsc2UgY2IoZGF0YSk7XG59XG5yZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRkYXRhID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vcmVtb3ZlQU1ELmpzIS4vdHIuanNcIik7XG5cdHZhciBjYWxsYmFja3MgPSBjYnM7XG5cdGNicyA9IG51bGw7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlciEuL34vbW9tZW50L2xvY2FsZS90ci5qc1xuLy8gbW9kdWxlIGlkID0gMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGNicyA9IFtdLCBcblx0ZGF0YTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2IpIHtcblx0aWYoY2JzKSBjYnMucHVzaChjYik7XG5cdGVsc2UgY2IoZGF0YSk7XG59XG5yZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuXHRkYXRhID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vcmVtb3ZlQU1ELmpzIS4vdHpsLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvdHpsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi90em0tbGF0bi5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi90em0uanNcIik7XG5cdHZhciBjYWxsYmFja3MgPSBjYnM7XG5cdGNicyA9IG51bGw7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlciEuL34vbW9tZW50L2xvY2FsZS90em0uanNcbi8vIG1vZHVsZSBpZCA9IDI5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3VrLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvdWsuanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3VyLmpzXCIpO1xuXHR2YXIgY2FsbGJhY2tzID0gY2JzO1xuXHRjYnMgPSBudWxsO1xuXHRmb3IodmFyIGkgPSAwLCBsID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1bmRsZS1sb2FkZXIhLi9+L21vbWVudC9sb2NhbGUvdXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBjYnMgPSBbXSwgXG5cdGRhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNiKSB7XG5cdGlmKGNicykgY2JzLnB1c2goY2IpO1xuXHRlbHNlIGNiKGRhdGEpO1xufVxucmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0ZGF0YSA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL3JlbW92ZUFNRC5qcyEuL3V6LWxhdG4uanNcIik7XG5cdHZhciBjYWxsYmFja3MgPSBjYnM7XG5cdGNicyA9IG51bGw7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVuZGxlLWxvYWRlciEuL34vbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi91ei5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3V6LmpzXG4vLyBtb2R1bGUgaWQgPSAyOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi92aS5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3ZpLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi94LXBzZXVkby5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi95by5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3lvLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi96aC1jbi5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3poLWNuLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi96aC1oay5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3poLWhrLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2JzID0gW10sIFxuXHRkYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYikge1xuXHRpZihjYnMpIGNicy5wdXNoKGNiKTtcblx0ZWxzZSBjYihkYXRhKTtcbn1cbnJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XG5cdGRhdGEgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9yZW1vdmVBTUQuanMhLi96aC10dy5qc1wiKTtcblx0dmFyIGNhbGxiYWNrcyA9IGNicztcblx0Y2JzID0gbnVsbDtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9idW5kbGUtbG9hZGVyIS4vfi9tb21lbnQvbG9jYWxlL3poLXR3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogMTkwLFxuXHRcIi4vYWYuanNcIjogMTkwLFxuXHRcIi4vYXJcIjogMTk3LFxuXHRcIi4vYXItZHpcIjogMTkxLFxuXHRcIi4vYXItZHouanNcIjogMTkxLFxuXHRcIi4vYXIta3dcIjogMTkyLFxuXHRcIi4vYXIta3cuanNcIjogMTkyLFxuXHRcIi4vYXItbHlcIjogMTkzLFxuXHRcIi4vYXItbHkuanNcIjogMTkzLFxuXHRcIi4vYXItbWFcIjogMTk0LFxuXHRcIi4vYXItbWEuanNcIjogMTk0LFxuXHRcIi4vYXItc2FcIjogMTk1LFxuXHRcIi4vYXItc2EuanNcIjogMTk1LFxuXHRcIi4vYXItdG5cIjogMTk2LFxuXHRcIi4vYXItdG4uanNcIjogMTk2LFxuXHRcIi4vYXIuanNcIjogMTk3LFxuXHRcIi4vYXpcIjogMTk4LFxuXHRcIi4vYXouanNcIjogMTk4LFxuXHRcIi4vYmVcIjogMTk5LFxuXHRcIi4vYmUuanNcIjogMTk5LFxuXHRcIi4vYmdcIjogMjAwLFxuXHRcIi4vYmcuanNcIjogMjAwLFxuXHRcIi4vYm5cIjogMjAxLFxuXHRcIi4vYm4uanNcIjogMjAxLFxuXHRcIi4vYm9cIjogMjAyLFxuXHRcIi4vYm8uanNcIjogMjAyLFxuXHRcIi4vYnJcIjogMjAzLFxuXHRcIi4vYnIuanNcIjogMjAzLFxuXHRcIi4vYnNcIjogMjA0LFxuXHRcIi4vYnMuanNcIjogMjA0LFxuXHRcIi4vY2FcIjogMjA1LFxuXHRcIi4vY2EuanNcIjogMjA1LFxuXHRcIi4vY3NcIjogMjA2LFxuXHRcIi4vY3MuanNcIjogMjA2LFxuXHRcIi4vY3ZcIjogMjA3LFxuXHRcIi4vY3YuanNcIjogMjA3LFxuXHRcIi4vY3lcIjogMjA4LFxuXHRcIi4vY3kuanNcIjogMjA4LFxuXHRcIi4vZGFcIjogMjA5LFxuXHRcIi4vZGEuanNcIjogMjA5LFxuXHRcIi4vZGVcIjogMjEyLFxuXHRcIi4vZGUtYXRcIjogMjEwLFxuXHRcIi4vZGUtYXQuanNcIjogMjEwLFxuXHRcIi4vZGUtY2hcIjogMjExLFxuXHRcIi4vZGUtY2guanNcIjogMjExLFxuXHRcIi4vZGUuanNcIjogMjEyLFxuXHRcIi4vZHZcIjogMjEzLFxuXHRcIi4vZHYuanNcIjogMjEzLFxuXHRcIi4vZWxcIjogMjE0LFxuXHRcIi4vZWwuanNcIjogMjE0LFxuXHRcIi4vZW4tYXVcIjogMjE1LFxuXHRcIi4vZW4tYXUuanNcIjogMjE1LFxuXHRcIi4vZW4tY2FcIjogMjE2LFxuXHRcIi4vZW4tY2EuanNcIjogMjE2LFxuXHRcIi4vZW4tZ2JcIjogMjE3LFxuXHRcIi4vZW4tZ2IuanNcIjogMjE3LFxuXHRcIi4vZW4taWVcIjogMjE4LFxuXHRcIi4vZW4taWUuanNcIjogMjE4LFxuXHRcIi4vZW4tbnpcIjogMjE5LFxuXHRcIi4vZW4tbnouanNcIjogMjE5LFxuXHRcIi4vZW9cIjogMjIwLFxuXHRcIi4vZW8uanNcIjogMjIwLFxuXHRcIi4vZXNcIjogMjIyLFxuXHRcIi4vZXMtZG9cIjogMjIxLFxuXHRcIi4vZXMtZG8uanNcIjogMjIxLFxuXHRcIi4vZXMuanNcIjogMjIyLFxuXHRcIi4vZXRcIjogMjIzLFxuXHRcIi4vZXQuanNcIjogMjIzLFxuXHRcIi4vZXVcIjogMjI0LFxuXHRcIi4vZXUuanNcIjogMjI0LFxuXHRcIi4vZmFcIjogMjI1LFxuXHRcIi4vZmEuanNcIjogMjI1LFxuXHRcIi4vZmlcIjogMjI2LFxuXHRcIi4vZmkuanNcIjogMjI2LFxuXHRcIi4vZm9cIjogMjI3LFxuXHRcIi4vZm8uanNcIjogMjI3LFxuXHRcIi4vZnJcIjogMjMwLFxuXHRcIi4vZnItY2FcIjogMjI4LFxuXHRcIi4vZnItY2EuanNcIjogMjI4LFxuXHRcIi4vZnItY2hcIjogMjI5LFxuXHRcIi4vZnItY2guanNcIjogMjI5LFxuXHRcIi4vZnIuanNcIjogMjMwLFxuXHRcIi4vZnlcIjogMjMxLFxuXHRcIi4vZnkuanNcIjogMjMxLFxuXHRcIi4vZ2RcIjogMjMyLFxuXHRcIi4vZ2QuanNcIjogMjMyLFxuXHRcIi4vZ2xcIjogMjMzLFxuXHRcIi4vZ2wuanNcIjogMjMzLFxuXHRcIi4vZ29tLWxhdG5cIjogMjM0LFxuXHRcIi4vZ29tLWxhdG4uanNcIjogMjM0LFxuXHRcIi4vaGVcIjogMjM1LFxuXHRcIi4vaGUuanNcIjogMjM1LFxuXHRcIi4vaGlcIjogMjM2LFxuXHRcIi4vaGkuanNcIjogMjM2LFxuXHRcIi4vaHJcIjogMjM3LFxuXHRcIi4vaHIuanNcIjogMjM3LFxuXHRcIi4vaHVcIjogMjM4LFxuXHRcIi4vaHUuanNcIjogMjM4LFxuXHRcIi4vaHktYW1cIjogMjM5LFxuXHRcIi4vaHktYW0uanNcIjogMjM5LFxuXHRcIi4vaWRcIjogMjQwLFxuXHRcIi4vaWQuanNcIjogMjQwLFxuXHRcIi4vaXNcIjogMjQxLFxuXHRcIi4vaXMuanNcIjogMjQxLFxuXHRcIi4vaXRcIjogMjQyLFxuXHRcIi4vaXQuanNcIjogMjQyLFxuXHRcIi4vamFcIjogMjQzLFxuXHRcIi4vamEuanNcIjogMjQzLFxuXHRcIi4vanZcIjogMjQ0LFxuXHRcIi4vanYuanNcIjogMjQ0LFxuXHRcIi4va2FcIjogMjQ1LFxuXHRcIi4va2EuanNcIjogMjQ1LFxuXHRcIi4va2tcIjogMjQ2LFxuXHRcIi4va2suanNcIjogMjQ2LFxuXHRcIi4va21cIjogMjQ3LFxuXHRcIi4va20uanNcIjogMjQ3LFxuXHRcIi4va25cIjogMjQ4LFxuXHRcIi4va24uanNcIjogMjQ4LFxuXHRcIi4va29cIjogMjQ5LFxuXHRcIi4va28uanNcIjogMjQ5LFxuXHRcIi4va3lcIjogMjUwLFxuXHRcIi4va3kuanNcIjogMjUwLFxuXHRcIi4vbGJcIjogMjUxLFxuXHRcIi4vbGIuanNcIjogMjUxLFxuXHRcIi4vbG9cIjogMjUyLFxuXHRcIi4vbG8uanNcIjogMjUyLFxuXHRcIi4vbHRcIjogMjUzLFxuXHRcIi4vbHQuanNcIjogMjUzLFxuXHRcIi4vbHZcIjogMjU0LFxuXHRcIi4vbHYuanNcIjogMjU0LFxuXHRcIi4vbWVcIjogMjU1LFxuXHRcIi4vbWUuanNcIjogMjU1LFxuXHRcIi4vbWlcIjogMjU2LFxuXHRcIi4vbWkuanNcIjogMjU2LFxuXHRcIi4vbWtcIjogMjU3LFxuXHRcIi4vbWsuanNcIjogMjU3LFxuXHRcIi4vbWxcIjogMjU4LFxuXHRcIi4vbWwuanNcIjogMjU4LFxuXHRcIi4vbXJcIjogMjU5LFxuXHRcIi4vbXIuanNcIjogMjU5LFxuXHRcIi4vbXNcIjogMjYxLFxuXHRcIi4vbXMtbXlcIjogMjYwLFxuXHRcIi4vbXMtbXkuanNcIjogMjYwLFxuXHRcIi4vbXMuanNcIjogMjYxLFxuXHRcIi4vbXlcIjogMjYyLFxuXHRcIi4vbXkuanNcIjogMjYyLFxuXHRcIi4vbmJcIjogMjYzLFxuXHRcIi4vbmIuanNcIjogMjYzLFxuXHRcIi4vbmVcIjogMjY0LFxuXHRcIi4vbmUuanNcIjogMjY0LFxuXHRcIi4vbmxcIjogMjY2LFxuXHRcIi4vbmwtYmVcIjogMjY1LFxuXHRcIi4vbmwtYmUuanNcIjogMjY1LFxuXHRcIi4vbmwuanNcIjogMjY2LFxuXHRcIi4vbm5cIjogMjY3LFxuXHRcIi4vbm4uanNcIjogMjY3LFxuXHRcIi4vcGEtaW5cIjogMjY4LFxuXHRcIi4vcGEtaW4uanNcIjogMjY4LFxuXHRcIi4vcGxcIjogMjY5LFxuXHRcIi4vcGwuanNcIjogMjY5LFxuXHRcIi4vcHRcIjogMjcxLFxuXHRcIi4vcHQtYnJcIjogMjcwLFxuXHRcIi4vcHQtYnIuanNcIjogMjcwLFxuXHRcIi4vcHQuanNcIjogMjcxLFxuXHRcIi4vcm9cIjogMjcyLFxuXHRcIi4vcm8uanNcIjogMjcyLFxuXHRcIi4vcnVcIjogMjczLFxuXHRcIi4vcnUuanNcIjogMjczLFxuXHRcIi4vc2RcIjogMjc0LFxuXHRcIi4vc2QuanNcIjogMjc0LFxuXHRcIi4vc2VcIjogMjc1LFxuXHRcIi4vc2UuanNcIjogMjc1LFxuXHRcIi4vc2lcIjogMjc2LFxuXHRcIi4vc2kuanNcIjogMjc2LFxuXHRcIi4vc2tcIjogMjc3LFxuXHRcIi4vc2suanNcIjogMjc3LFxuXHRcIi4vc2xcIjogMjc4LFxuXHRcIi4vc2wuanNcIjogMjc4LFxuXHRcIi4vc3FcIjogMjc5LFxuXHRcIi4vc3EuanNcIjogMjc5LFxuXHRcIi4vc3JcIjogMjgxLFxuXHRcIi4vc3ItY3lybFwiOiAyODAsXG5cdFwiLi9zci1jeXJsLmpzXCI6IDI4MCxcblx0XCIuL3NyLmpzXCI6IDI4MSxcblx0XCIuL3NzXCI6IDI4Mixcblx0XCIuL3NzLmpzXCI6IDI4Mixcblx0XCIuL3N2XCI6IDI4Myxcblx0XCIuL3N2LmpzXCI6IDI4Myxcblx0XCIuL3N3XCI6IDI4NCxcblx0XCIuL3N3LmpzXCI6IDI4NCxcblx0XCIuL3RhXCI6IDI4NSxcblx0XCIuL3RhLmpzXCI6IDI4NSxcblx0XCIuL3RlXCI6IDI4Nixcblx0XCIuL3RlLmpzXCI6IDI4Nixcblx0XCIuL3RldFwiOiAyODcsXG5cdFwiLi90ZXQuanNcIjogMjg3LFxuXHRcIi4vdGhcIjogMjg4LFxuXHRcIi4vdGguanNcIjogMjg4LFxuXHRcIi4vdGwtcGhcIjogMjg5LFxuXHRcIi4vdGwtcGguanNcIjogMjg5LFxuXHRcIi4vdGxoXCI6IDI5MCxcblx0XCIuL3RsaC5qc1wiOiAyOTAsXG5cdFwiLi90clwiOiAyOTEsXG5cdFwiLi90ci5qc1wiOiAyOTEsXG5cdFwiLi90emxcIjogMjkyLFxuXHRcIi4vdHpsLmpzXCI6IDI5Mixcblx0XCIuL3R6bVwiOiAyOTQsXG5cdFwiLi90em0tbGF0blwiOiAyOTMsXG5cdFwiLi90em0tbGF0bi5qc1wiOiAyOTMsXG5cdFwiLi90em0uanNcIjogMjk0LFxuXHRcIi4vdWtcIjogMjk1LFxuXHRcIi4vdWsuanNcIjogMjk1LFxuXHRcIi4vdXJcIjogMjk2LFxuXHRcIi4vdXIuanNcIjogMjk2LFxuXHRcIi4vdXpcIjogMjk4LFxuXHRcIi4vdXotbGF0blwiOiAyOTcsXG5cdFwiLi91ei1sYXRuLmpzXCI6IDI5Nyxcblx0XCIuL3V6LmpzXCI6IDI5OCxcblx0XCIuL3ZpXCI6IDI5OSxcblx0XCIuL3ZpLmpzXCI6IDI5OSxcblx0XCIuL3gtcHNldWRvXCI6IDMwMCxcblx0XCIuL3gtcHNldWRvLmpzXCI6IDMwMCxcblx0XCIuL3lvXCI6IDMwMSxcblx0XCIuL3lvLmpzXCI6IDMwMSxcblx0XCIuL3poLWNuXCI6IDMwMixcblx0XCIuL3poLWNuLmpzXCI6IDMwMixcblx0XCIuL3poLWhrXCI6IDMwMyxcblx0XCIuL3poLWhrLmpzXCI6IDMwMyxcblx0XCIuL3poLXR3XCI6IDMwNCxcblx0XCIuL3poLXR3LmpzXCI6IDMwNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDMwNjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbW9tZW50L2xvY2FsZSAuL34vYnVuZGxlLWxvYWRlciEgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMzA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDMwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzExXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDMxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMzIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiaW1wb3J0ICdlb25hc2Rhbi1ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgJy4vbG9jYXRpb25IaXN0b3J5JztcbmltcG9ydCByYXdUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgc2V0dXBDb21wb3NlckJ1dHRvbiBmcm9tICcuL3NldHVwQ29tcG9zZXJCdXR0b24nO1xuaW1wb3J0IGNyZWF0ZUV2ZW50RmFjdG9yeSBmcm9tICcuL2NyZWF0ZUV2ZW50JztcbmltcG9ydCBwYXJzZSwgeyBpblBvc3QgfSBmcm9tICcuLi9saWIvcGFyc2UnO1xuaW1wb3J0IGluaXRSZXNwb25zZXMgZnJvbSAnLi9yZXNwb25zZXMnO1xuaW1wb3J0IGluaXRUcmFuc2xhdGlvbiBmcm9tICcuL2NsaWVudFNpZGVUcmFuc2xhdGlvbic7XG5pbXBvcnQgaW5pdFRyYW5zbGF0b3JNb2R1bGUgZnJvbSAnLi4vbGliL3RyYW5zbGF0b3JNb2R1bGUnO1xuXG5jb25zdCBsYW5nID0gY29uZmlnLnVzZXJMYW5nIHx8IGNvbmZpZy5kZWZhdWx0TGFuZztcbmpRdWVyeS5mbi5zaXplID0galF1ZXJ5LmZuLnNpemUgfHwgZnVuY3Rpb24gc2l6ZSgpIHsgcmV0dXJuIHRoaXMubGVuZ3RoOyB9O1xuXG5jb25zdCBiZWdpbiA9IChtb21lbnRMYW5nKSA9PiB7XG4gIHdpbmRvdy5yZXF1aXJlanMoW1xuICAgICdjb21wb3NlcicsXG4gICAgJ2NvbXBvc2VyL2Zvcm1hdHRpbmcnLFxuICAgICd0cmFuc2xhdG9yJyxcbiAgXSwgKGNvbXBvc2VyLCBmb3JtYXR0aW5nLCB0cmFuc2xhdG9yKSA9PlxuICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgaW5pdFRyYW5zbGF0b3JNb2R1bGUodHJhbnNsYXRvci5UcmFuc2xhdG9yKTtcbiAgICBpbml0VHJhbnNsYXRpb24odHJhbnNsYXRvci5UcmFuc2xhdG9yKTtcblxuICAgIGFqYXhpZnkubG9hZFRlbXBsYXRlKCdwYXJ0aWFscy9jYWxlbmRhci9ldmVudC1jcmVhdGlvbi1tb2RhbCcsIHRlbXBsYXRlID0+XG4gICAgdHJhbnNsYXRvci50cmFuc2xhdGUodGVtcGxhdGUsIGxhbmcsIChodG1sKSA9PiB7XG4gICAgICAkKCdib2R5JykuYXBwZW5kKGh0bWwpO1xuXG4gICAgICBzZXR1cENvbXBvc2VyQnV0dG9uKGNvbXBvc2VyLCB0cmFuc2xhdG9yKTtcbiAgICAgICQoJy5wbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLWRhdGUnKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgdGltZTogJ2ZhIGZhLWNsb2NrLW8nLFxuICAgICAgICAgIGRhdGU6ICdmYSBmYS1jYWxlbmRhcicsXG4gICAgICAgICAgdXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gICAgICAgICAgZG93bjogJ2ZhIGZhLWFycm93LWRvd24nLFxuICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtYXJyb3ctbGVmdCcsXG4gICAgICAgICAgbmV4dDogJ2ZhIGZhLWFycm93LXJpZ2h0JyxcbiAgICAgICAgICB0b2RheTogJ2ZhIGZhLWNyb3NzaGFpcnMnLFxuICAgICAgICAgIGNsZWFyOiAnZmEgZmEtdHJhc2gnLFxuICAgICAgICAgIGNsb3NlOiAnZmEgZmEtdGltZXMnLFxuICAgICAgICB9LFxuICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiB0cnVlLFxuICAgICAgICBsb2NhbGU6IG1vbWVudExhbmcsXG4gICAgICAgIHNpZGVCeVNpZGU6IHRydWUsXG4gICAgICAgIHVzZUN1cnJlbnQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNyZWF0ZUV2ZW50ID0gY3JlYXRlRXZlbnRGYWN0b3J5KCk7XG5cbiAgICAgIGNvbnN0IHByZXBhcmVGb3JtYXR0aW5nVG9vbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybWF0dGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdHRpbmcuYWRkQnV0dG9uRGlzcGF0Y2goJ3BsdWdpbi1jYWxlbmRhci1ldmVudCcsICh0ZXh0YXJlYSkgPT4ge1xuICAgICAgICAgIGNvbnN0ICR0ZXh0YXJlYSA9ICQodGV4dGFyZWEpO1xuICAgICAgICAgIGNvbnN0IG9sZFZhbCA9ICR0ZXh0YXJlYS52YWwoKTtcbiAgICAgICAgICBjb25zdCBvbGRFdmVudCA9IHBhcnNlKG9sZFZhbC5yZXBsYWNlKC9cXFsoXFwvPylldmVudC1pbnZhbGlkXFxdL2csICdbJDFldmVudF0nKSk7XG4gICAgICAgICAgY3JlYXRlRXZlbnQob2xkRXZlbnQgfHwge30sIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50ID8gcmF3VGVtcGxhdGUoZXZlbnQpIDogJyc7XG4gICAgICAgICAgICBpZiAoaW5Qb3N0LnRlc3Qob2xkVmFsKSkge1xuICAgICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBvbGRWYWwucmVwbGFjZShcbiAgICAgICAgICAgICAgICAvXFxbZXZlbnQoPzotaW52YWxpZCk/XFxdW1xcc1xcU10rXFxbXFwvZXZlbnQoPzotaW52YWxpZCk/XFxdL2csXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAkdGV4dGFyZWEudmFsKG5ld1ZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkdGV4dGFyZWEudmFsKGAke29sZFZhbH1cXG5cXG4ke3RleHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdGV4dGFyZWEudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAkKHdpbmRvdykub24oJ2FjdGlvbjpjb21wb3Nlci5lbmhhbmNlZCcsIHByZXBhcmVGb3JtYXR0aW5nVG9vbHMpO1xuXG4gICAgICBpbml0UmVzcG9uc2VzKCk7XG4gICAgfSkpO1xuICB9KSk7XG59O1xuXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IGAke1JFTEFUSVZFX1BBVEh9L3BsdWdpbnMvbm9kZWJiLXBsdWdpbi1jYWxlbmRhci9idW5kbGVzL2A7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuY29uc3QgbW9tZW50TGFuZyA9IGxhbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICctJyk7XG5cbnRyeSB7XG4gIGlmIChtb21lbnRMYW5nID09PSAnZW4tdXMnKSB7XG4gICAgYmVnaW4oJ2VuLXVzJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZShgYnVuZGxlLWxvYWRlciFtb21lbnQvbG9jYWxlLyR7bW9tZW50TGFuZ31gKSgoKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIG1vbWVudC5sb2NhbGUobW9tZW50TGFuZyk7XG4gICAgICBiZWdpbihtb21lbnRMYW5nKTtcbiAgICB9KTtcbiAgfVxufSBjYXRjaCAoZSkge1xuICB0cnkge1xuICAgIHJlcXVpcmUoYGJ1bmRsZS1sb2FkZXIhbW9tZW50L2xvY2FsZS8ke21vbWVudExhbmcuc3BsaXQoJy0nKVswXX1gKSgoKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIG1vbWVudC5sb2NhbGUobW9tZW50TGFuZyk7XG4gICAgICBiZWdpbihtb21lbnRMYW5nKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBiZWdpbignZW4tdXMnKTtcbiAgICB0aHJvdyBFcnJvcihgY291bGQgbm90IGxvYWQgbG9jYWxlIGRhdGEgKCR7bW9tZW50TGFuZ30pIGZvciBtb21lbnRgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9pbmRleC5qcyIsImNvbnN0IGluaXQgPSAoVHJhbnNsYXRvcikgPT4ge1xuICBjb25zdCB0cmFuc2xhdG9yID0gVHJhbnNsYXRvci5jcmVhdGUoKTtcblxuICBjb25zdCB0cmFuc2xhdGVFdmVudHMgPSAoKSA9PiB7XG4gICAgJCgnLnBsdWdpbi1jYWxlbmRhci1ldmVudFtkYXRhLXRyYW5zbGF0ZWQ9ZmFsc2VdJykuZWFjaCgoaSwgZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZWwgPSAkKGVsZW0pO1xuICAgICAgZWwuYXR0cignZGF0YS10cmFuc2xhdGVkJywgJ3RydWUnKTtcbiAgICAgIHRyYW5zbGF0b3IudHJhbnNsYXRlSW5QbGFjZShlbGVtKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZWwuZmluZCgnLnBsdWdpbi1jYWxlbmRhci10aW1lLWRhdGUtdmlldycpXG4gICAgICAgICAgICAuYXR0cigndGl0bGUnLCAoeCwgdmFsKSA9PiB2YWwucmVwbGFjZSgnPGJyPicsICcgfCAnKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gICQod2luZG93KS5vbihbXG4gICAgJ2FjdGlvbjpwb3N0cy5sb2FkZWQnLFxuICAgICdhY3Rpb246YWpheGlmeS5lbmQnLFxuICAgICdhY3Rpb246cG9zdHMuZWRpdGVkJyxcbiAgICAnYWN0aW9uOmNhbGVuZGFyLmV2ZW50LmRpc3BsYXknLFxuICAgICdhY3Rpb246Y29tcG9zZXIucHJldmlldycsXG4gIF0uam9pbignICcpLCAoKSA9PiB0cmFuc2xhdGVFdmVudHMoKSk7XG4gIHRyYW5zbGF0ZUV2ZW50cygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY2xpZW50U2lkZVRyYW5zbGF0aW9uLmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHJlbWluZGVyc0ZhY3RvcnkgZnJvbSAnLi9yZW1pbmRlcnMnO1xuaW1wb3J0IHJlcGV0aXRpb25GYWN0b3J5IGZyb20gJy4vcmVwZXRpdGlvbic7XG5pbXBvcnQgdmFsaWRhdGVFdmVudCBmcm9tICcuLi9saWIvdmFsaWRhdGVFdmVudCc7XG5cbmNvbnN0IGRlZmF1bHRFdmVudCA9IHtcbiAgbmFtZTogJycsXG4gIGFsbGRheTogZmFsc2UsXG4gIHN0YXJ0RGF0ZTogRGF0ZS5ub3coKSxcbiAgZW5kRGF0ZTogRGF0ZS5ub3coKSArICgxMDAwICogNjAgKiA2MCksXG4gIHJlbWluZGVyczogW10sXG4gIGxvY2F0aW9uOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBtYW5kYXRvcnk6IGZhbHNlLFxuICByZXBlYXRzOiBudWxsLFxufTtcblxuY29uc3QgZm9ybWF0cyA9IHtcbiAgdGltZURhdGU6ICdMIExUJyxcbiAgZGF0ZTogJ0wnLFxufTtcblxuY29uc3QgY3JlYXRlRXZlbnRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9ICQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yJykubW9kYWwoe1xuICAgIGJhY2tkcm9wOiBmYWxzZSxcbiAgICBzaG93OiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGlucHV0cyA9IHtcbiAgICBuYW1lOiBtb2RhbC5maW5kKCcjcGx1Z2luLWNhbGVuZGFyLWV2ZW50LWVkaXRvci1uYW1lJyksXG4gICAgYWxsZGF5OiBtb2RhbC5maW5kKCcjcGx1Z2luLWNhbGVuZGFyLWV2ZW50LWVkaXRvci1hbGxkYXknKSxcbiAgICBzdGFydERhdGU6IG1vZGFsLmZpbmQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXN0YXJ0RGF0ZScpLFxuICAgIGVuZERhdGU6IG1vZGFsLmZpbmQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLWVuZERhdGUnKSxcbiAgICByZW1pbmRlcnM6IG1vZGFsLmZpbmQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXJlbWluZGVycycpLFxuICAgIGxvY2F0aW9uOiBtb2RhbC5maW5kKCcjcGx1Z2luLWNhbGVuZGFyLWV2ZW50LWVkaXRvci1sb2NhdGlvbicpLFxuICAgIGRlc2NyaXB0aW9uOiBtb2RhbC5maW5kKCcjcGx1Z2luLWNhbGVuZGFyLWV2ZW50LWVkaXRvci1kZXNjcmlwdGlvbicpLFxuICAgIG1hbmRhdG9yeTogbW9kYWwuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItbWFuZGF0b3J5JyksXG4gICAgcmVwZXRpdGlvbjogbW9kYWwuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbicpLFxuICAgIHJlcGVhdEVuZERhdGU6IG1vZGFsLmZpbmQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXJlcGV0aXRpb24tZW5kRGF0ZScpLFxuICB9O1xuICBjb25zdCByZW1pbmRlcnMgPSByZW1pbmRlcnNGYWN0b3J5KGlucHV0cy5yZW1pbmRlcnMpO1xuICBjb25zdCByZXBldGl0aW9uID0gcmVwZXRpdGlvbkZhY3RvcnkoaW5wdXRzLnJlcGV0aXRpb24pO1xuXG4gIGlucHV0cy5hbGxkYXkub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBmb3JtYXQgPSBpbnB1dHMuYWxsZGF5LnByb3AoJ2NoZWNrZWQnKSA/IGZvcm1hdHMuZGF0ZSA6IGZvcm1hdHMudGltZURhdGU7XG4gICAgaW5wdXRzLnN0YXJ0RGF0ZS5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmZvcm1hdChmb3JtYXQpO1xuICAgIGlucHV0cy5lbmREYXRlLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZm9ybWF0KGZvcm1hdCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNldElucHV0cyA9IChldmVudCkgPT4ge1xuICAgIGlucHV0cy5uYW1lLnZhbChldmVudC5uYW1lKTtcbiAgICBpbnB1dHMuYWxsZGF5LnByb3AoJ2NoZWNrZWQnLCBldmVudC5hbGxkYXkpO1xuICAgIGlucHV0cy5zdGFydERhdGUuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG1vbWVudChldmVudC5zdGFydERhdGUpKTtcbiAgICBpbnB1dHMuZW5kRGF0ZS5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobW9tZW50KGV2ZW50LmVuZERhdGUpKTtcbiAgICByZW1pbmRlcnMuc2V0UmVtaW5kZXJzKGV2ZW50LnJlbWluZGVycyk7XG4gICAgcmVwZXRpdGlvbi5zZXRSZXBlYXQoZXZlbnQucmVwZWF0cyk7XG4gICAgaW5wdXRzLmxvY2F0aW9uLnZhbChldmVudC5sb2NhdGlvbik7XG4gICAgaW5wdXRzLmRlc2NyaXB0aW9uLnZhbChldmVudC5kZXNjcmlwdGlvbik7XG4gICAgaW5wdXRzLm1hbmRhdG9yeS5wcm9wKCdjaGVja2VkJywgZXZlbnQubWFuZGF0b3J5KTtcblxuICAgIGNvbnN0IGZvcm1hdCA9IGV2ZW50LmFsbGRheSA/IGZvcm1hdHMuZGF0ZSA6IGZvcm1hdHMudGltZURhdGU7XG4gICAgaW5wdXRzLnN0YXJ0RGF0ZS5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmZvcm1hdChmb3JtYXQpO1xuICAgIGlucHV0cy5lbmREYXRlLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZm9ybWF0KGZvcm1hdCk7XG4gIH07XG4gIGNvbnN0IGdldElucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIG5hbWU6IGlucHV0cy5uYW1lLnZhbCgpLnRyaW0oKSxcbiAgICAgIGFsbGRheTogaW5wdXRzLmFsbGRheS5wcm9wKCdjaGVja2VkJyksXG4gICAgICBzdGFydERhdGU6IGlucHV0cy5zdGFydERhdGUuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKCkudmFsdWVPZigpLFxuICAgICAgZW5kRGF0ZTogaW5wdXRzLmVuZERhdGUuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKCkudmFsdWVPZigpLFxuICAgICAgcmVtaW5kZXJzOiByZW1pbmRlcnMuZ2V0UmVtaW5kZXJzKCksXG4gICAgICByZXBlYXRzOiByZXBldGl0aW9uLmdldFJlcGVhdCgpLFxuICAgICAgbG9jYXRpb246IGlucHV0cy5sb2NhdGlvbi52YWwoKS50cmltKCksXG4gICAgICBkZXNjcmlwdGlvbjogaW5wdXRzLmRlc2NyaXB0aW9uLnZhbCgpLnRyaW0oKSxcbiAgICAgIG1hbmRhdG9yeTogaW5wdXRzLm1hbmRhdG9yeS5wcm9wKCdjaGVja2VkJyksXG4gICAgfTtcblxuICAgIGlmIChldmVudC5hbGxkYXkpIHtcbiAgICAgIGNvbnN0IHMgPSBuZXcgRGF0ZShldmVudC5zdGFydERhdGUpO1xuICAgICAgY29uc3QgZSA9IG5ldyBEYXRlKGV2ZW50LmVuZERhdGUpO1xuXG4gICAgICBzLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuXG4gICAgICBldmVudC5zdGFydERhdGUgPSBzLnZhbHVlT2YoKTtcbiAgICAgIGV2ZW50LmVuZERhdGUgPSBlLnZhbHVlT2YoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH07XG5cbiAgY29uc3QgYWxlcnRGYWlsdXJlID0gKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRXZlbnQgPSAoZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBldmVudCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFdmVudCwgZGF0YSk7XG4gICAgc2V0SW5wdXRzKGV2ZW50KTtcbiAgICBtb2RhbC5maW5kKCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcbiAgICBtb2RhbC5tb2RhbCgnc2hvdycpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gbW9kYWwuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3Itc3VibWl0Jyk7XG4gICAgY29uc3QgZGVsID0gbW9kYWwuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItZGVsZXRlJyk7XG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RXZlbnQgPSBnZXRJbnB1dHMoKTtcbiAgICAgIG1vZGFsLmZpbmQoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuXG4gICAgICBjb25zdCBbZmFpbGVkLCBmYWlsdXJlc10gPSB2YWxpZGF0ZUV2ZW50KG5ld0V2ZW50KTtcbiAgICAgIGlmIChmYWlsZWQpIHtcbiAgICAgICAgZmFpbHVyZXMubWFwKGZhaWx1cmUgPT4gaW5wdXRzW2ZhaWx1cmVdKS5mb3JFYWNoKGFsZXJ0RmFpbHVyZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgIHN1Ym1pdC5vZmYoJ2NsaWNrJywgb25DbGljayk7XG4gICAgICBjYWxsYmFjayhuZXdFdmVudCk7XG4gICAgfTtcblxuICAgIHN1Ym1pdC5vbignY2xpY2snLCBvbkNsaWNrKTtcblxuICAgIGRlbC5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgIHN1Ym1pdC5vZmYoJ2NsaWNrJywgb25DbGljayk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RXZlbnQgPSBnZXRJbnB1dHMoKTtcbiAgICAgIG1vZGFsLmZpbmQoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpO1xuXG4gICAgICBjb25zdCBbZmFpbGVkLCBmYWlsdXJlc10gPSB2YWxpZGF0ZUV2ZW50KG5ld0V2ZW50KTtcbiAgICAgIGlmIChmYWlsZWQpIHtcbiAgICAgICAgZmFpbHVyZXMubWFwKGZhaWx1cmUgPT4gaW5wdXRzW2ZhaWx1cmVdKS5mb3JFYWNoKGFsZXJ0RmFpbHVyZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBtb2RhbC5vbignY2hhbmdlIGRwLmNoYW5nZScsIG9uQ2hhbmdlKTtcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRXZlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudEZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NyZWF0ZUV2ZW50LmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtYWtlTGlzdEVsZW1lbnQgPSAobikgPT4ge1xuICBjb25zdCB6ZXJvID0gbW9tZW50KDApO1xuICBjb25zdCBsaSA9ICQoXG4gICAgYDxsaSBjbGFzcz1cInBsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXJcIiBkYXRhLXZhbHVlPVwiJHtufVwiPlxuICAgICAgJHt6ZXJvLnRvKG4sIHRydWUpfVxuICAgICAgPGEgY2xhc3M9XCJyZW1vdmVcIiBocmVmPVwiI1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gIGxpLmRhdGEoJ3ZhbHVlJywgbik7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGZhY3RvcnkgPSAoJHVsKSA9PiB7XG4gIGNvbnN0IGFkZEJ1dHRvbnMgPSAkdWxcbiAgICAuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXJzLWFkZCBsaSA+IGEnKTtcblxuICBjb25zdCBtZXRob2RzID0ge1xuICAgIHNldFJlbWluZGVyczogKHJlbWluZGVycykgPT4ge1xuICAgICAgJHVsLmZpbmQoJ2xpLnBsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXInKS5yZW1vdmUoKTtcbiAgICAgICR1bC5kYXRhKCd2YWx1ZScsIHJlbWluZGVycyk7XG4gICAgICByZW1pbmRlcnNcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAubWFwKG1ha2VMaXN0RWxlbWVudClcbiAgICAgICAgLmZvckVhY2goZWwgPT4gJHVsLnByZXBlbmQoZWwpKTtcbiAgICB9LFxuICAgIGdldFJlbWluZGVyczogKCkgPT4gJHVsLmRhdGEoJ3ZhbHVlJyksXG4gICAgYWRkUmVtaW5kZXI6IChuKSA9PiB7XG4gICAgICBjb25zdCBub3RzID0gJHVsLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICBpZiAobm90cy5pbmNsdWRlcyhuKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbWluZGVycyA9IFsuLi5ub3RzLCBuXS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlbWluZGVycy5yZXZlcnNlKCkuaW5kZXhPZihuKTtcbiAgICAgICR1bC5kYXRhKCd2YWx1ZScsIHJlbWluZGVycyk7XG5cbiAgICAgIGNvbnN0IGxpID0gbWFrZUxpc3RFbGVtZW50KG4pO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgJHVsLnByZXBlbmQobGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHVsLmZpbmQoYGxpLnBsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXI6bnRoLW9mLXR5cGUoJHtpbmRleH0pYCkuYWZ0ZXIobGkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlUmVtaW5kZXI6IChuKSA9PiB7XG4gICAgICBjb25zdCBub3RzID0gJHVsLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICBpZiAoIW5vdHMuaW5jbHVkZXMobikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZW1pbmRlcnMgPSBub3RzLmZpbHRlcihub3QgPT4gbm90ICE9PSBuKTtcbiAgICAgICR1bC5kYXRhKCd2YWx1ZScsIHJlbWluZGVycyk7XG5cbiAgICAgICR1bC5maW5kKGBsaS5wbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXJlbWluZGVyW2RhdGEtdmFsdWU9JHtufV1gKS5yZW1vdmUoKTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHBvcHVwID0gJCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXItY3VzdG9tJyk7XG4gIGNvbnN0IGlucHV0ID0gcG9wdXAuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXItY3VzdG9tLW51bWJlcicpO1xuICBjb25zdCByYWRpb3MgPSBwb3B1cC5maW5kKCcjcGx1Z2luLWNhbGVuZGFyLWV2ZW50LWVkaXRvci1yZW1pbmRlci1jdXN0b20tdW5pdCcpO1xuICBjb25zdCBidXR0b24gPSBwb3B1cC5maW5kKCdidXR0b24uYnRuLXByaW1hcnknKTtcblxuICByYWRpb3MuZmluZCgnLmJ0bicpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgJChlLnRhcmdldClcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIC5zaWJsaW5ncygpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBjb25zdCBwcm9tcHRDdXN0b20gPSAoYWRkTm90aWYpID0+IHtcbiAgICBidXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdW5pdCA9IHJhZGlvcy5maW5kKCc6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoaW5wdXQudmFsKCksIDEwKTtcblxuICAgICAgY29uc3QgbXMgPSAoe1xuICAgICAgICBtbTogMTAwMCAqIDYwLFxuICAgICAgICBoaDogMTAwMCAqIDYwICogNjAsXG4gICAgICAgIGRkOiAxMDAwICogNjAgKiA2MCAqIDI0LFxuICAgICAgfSlbdW5pdF0gKiBudW1iZXI7XG5cbiAgICAgIGFkZE5vdGlmKG1zKTtcbiAgICAgIHBvcHVwLnNsaWRlVXAoMjAwKTtcbiAgICAgIGJ1dHRvbi5vZmYoJ2NsaWNrJyk7XG4gICAgfSk7XG5cbiAgICBwb3B1cC5zbGlkZURvd24oMjAwKTtcbiAgfTtcblxuICBwb3B1cC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGFkZEJ1dHRvbnMub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgY29uc3QgbiA9IGVsLmRhdGEoJ3ZhbHVlJyk7XG5cbiAgICBpZiAobiA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwcm9tcHRDdXN0b20obm90aWYgPT4gbWV0aG9kcy5hZGRSZW1pbmRlcihub3RpZikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtZXRob2RzLmFkZFJlbWluZGVyKG4pO1xuICB9KTtcblxuICAkdWwub24oJ2NsaWNrJywgJ2xpLnBsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVtaW5kZXIgLnJlbW92ZScsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG4gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgbWV0aG9kcy5yZW1vdmVSZW1pbmRlcihuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZW1pbmRlcnMuanMiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IGZhY3RvcnkgPSAoJHVsKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSAkdWxcbiAgICAuZmluZCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbi1jaGFuZ2UgPiB1bCcpO1xuICBsaXN0LmZpbmQoJ2xpW2RhdGEtdmFsdWU9Y3VzdG9tXSA+IGRpdicpLmNsaWNrKChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgY3VzdG9tID0gJCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbi1jdXN0b20nKTtcbiAgY29uc3QgY2hhbmdlQnV0dG9uID0gJCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbi1jaGFuZ2UtYnV0dG9uJyk7XG4gIGNvbnN0IGNoYW5nZUJ1dHRvblRleHQgPSBjaGFuZ2VCdXR0b24uZmluZCgnLnRleHQnKTtcbiAgY29uc3QgZGF5c09mV2VlayA9ICQoJyNwbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXJlcGV0aXRpb24tY3VzdG9tLWRheXNPZldlZWsnKTtcbiAgY29uc3QgY3VzdG9tRW5kID0gY3VzdG9tLmZpbmQoJy5wbHVnaW4tY2FsZW5kYXItZXZlbnQtZWRpdG9yLXJlcGV0aXRpb24tY3VzdG9tLWVuZCcpO1xuICBjb25zdCBlbmREYXRlID0gJCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbi1lbmREYXRlJyk7XG5cbiAgZW5kRGF0ZS5kYXRhKCdEYXRlVGltZVBpY2tlcicpXG4gICAgLmZvcm1hdCgnTCcpXG4gICAgLmRhdGUobW9tZW50KCkuYWRkKDcsICdkYXknKSlcbiAgICAud2lkZ2V0UG9zaXRpb25pbmcoe1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgIH0pO1xuXG4gIGxpc3QuY2hhbmdlKCgpID0+IHtcbiAgICBjb25zdCBlbGVtID0gbGlzdC5maW5kKCdpbnB1dFtuYW1lPXJlcGV0aXRpb24tc2VsZWN0XTpjaGVja2VkJyk7XG4gICAgY29uc3QgdmFsdWUgPSBlbGVtLnZhbCgpO1xuXG4gICAgY2hhbmdlQnV0dG9uVGV4dC5odG1sKGVsZW0uc2libGluZ3MoJ3NwYW4nKS5odG1sKCkpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnY3VzdG9tJykge1xuICAgICAgY3VzdG9tLnNsaWRlRG93bigyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXN0b20uc2xpZGVVcCgyMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnI3BsdWdpbi1jYWxlbmRhci1ldmVudC1lZGl0b3ItcmVwZXRpdGlvbi1jdXN0b20tZGF5c09mV2VlayA+IHVsID4gbGkgPiBhJykuY2xpY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChlLnRhcmdldCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBjdXN0b20uZmluZCgnLmJ0bi5idG4tcHJpbWFyeScpLmNsaWNrKCgpID0+IHtcbiAgICBjaGFuZ2VCdXR0b24uZHJvcGRvd24oJ3RvZ2dsZScpO1xuICB9KTtcblxuICBjdXN0b21FbmQuY2hhbmdlKCgpID0+IHtcbiAgICBjb25zdCBmb3JldmVyID0gY3VzdG9tRW5kXG4gICAgICAuZmluZCgnW25hbWU9cmVwZXRpdGlvbi1lbmRdOmNoZWNrZWQnKVxuICAgICAgLnZhbCgpID09PSAnZm9yZXZlcic7XG4gICAgZW5kRGF0ZS50b2dnbGUoIWZvcmV2ZXIpO1xuICB9KTtcblxuICBjb25zdCBtZXRob2RzID0ge1xuICAgIHNldFJlcGVhdDogKHJlcGVhdCkgPT4ge1xuICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGxpc3RcbiAgICAgICAgICAuZmluZCgnW25hbWU9XCJyZXBldGl0aW9uLXNlbGVjdFwiXVt2YWx1ZT1cIm5vLXJlcGVhdFwiXScpXG4gICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgY2hhbmdlQnV0dG9uVGV4dC5odG1sKGVsZW0uc2libGluZ3MoJ3NwYW4nKS5odG1sKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IFsnZGF5JywgJ3dlZWsnLCAnbW9udGgnLCAneWVhciddXG4gICAgICAgIC5maW5kKHggPT4gcmVwZWF0LmV2ZXJ5W3hdKTtcbiAgICAgIGN1c3RvbS50b2dnbGUoIWtleSk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBsaXN0XG4gICAgICAgICAgLmZpbmQoYFtuYW1lPVwicmVwZXRpdGlvbi1zZWxlY3RcIl1bdmFsdWU9XCIke2tleX1cIl1gKVxuICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIGNoYW5nZUJ1dHRvblRleHQuaHRtbChlbGVtLnNpYmxpbmdzKCdzcGFuJykuaHRtbCgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtID0gbGlzdFxuICAgICAgICAuZmluZCgnW25hbWU9XCJyZXBldGl0aW9uLXNlbGVjdFwiXVt2YWx1ZT1cImN1c3RvbVwiXScpXG4gICAgICAgIC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICBjaGFuZ2VCdXR0b25UZXh0Lmh0bWwoZWxlbS5zaWJsaW5ncygnc3BhbicpLmh0bWwoKSk7XG5cbiAgICAgIGlmIChyZXBlYXQuZXZlcnkuZGF5c09mV2Vlaykge1xuICAgICAgICBkYXlzT2ZXZWVrXG4gICAgICAgICAgLmZpbmQoJ2xpID4gYScpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgcmVwZWF0LmV2ZXJ5LmRheXNPZldlZWsuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgICAgZGF5c09mV2Vla1xuICAgICAgICAgICAgLmZpbmQoYGxpW2RhdGEtdmFsdWU9JHtkYXl9XSA+IGFgKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZvcmV2ZXIgPSAhTnVtYmVyLmlzRmluaXRlKHJlcGVhdC5lbmREYXRlKTtcbiAgICAgICAgY3VzdG9tRW5kXG4gICAgICAgICAgLmZpbmQoYFtuYW1lPXJlcGV0aXRpb24tZW5kXVt2YWx1ZT0ke2ZvcmV2ZXIgPyAnZm9yZXZlcicgOiAnZW5kJ31dYClcbiAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICBlbmREYXRlLnRvZ2dsZSghZm9yZXZlcik7XG4gICAgICAgIGlmICghZm9yZXZlcikge1xuICAgICAgICAgIGVuZERhdGUuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG1vbWVudChyZXBlYXQuZW5kRGF0ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRSZXBlYXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGlzdC5maW5kKCdbbmFtZT1yZXBldGl0aW9uLXNlbGVjdF06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgaWYgKHZhbHVlID09PSAnbm8tcmVwZWF0Jykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVyeToge1xuICAgICAgICAgICAgW3ZhbHVlXTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJ3dlZWtseSc7XG4gICAgICBpZiAoc2VsZWN0ZWQgPT09ICd3ZWVrbHknKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbLi4uZGF5c09mV2Vlay5maW5kKCdsaSA+IGEuYWN0aXZlJykucGFyZW50KCldXG4gICAgICAgICAgLm1hcChlbGVtID0+IHBhcnNlSW50KGVsZW0uZGF0YXNldC52YWx1ZSwgMTApKTtcbiAgICAgICAgY29uc3QgZm9yZXZlciA9IGN1c3RvbUVuZFxuICAgICAgICAgIC5maW5kKCdbbmFtZT1yZXBldGl0aW9uLWVuZF06Y2hlY2tlZCcpXG4gICAgICAgICAgLnZhbCgpID09PSAnZm9yZXZlcic7XG4gICAgICAgIGlmIChmb3JldmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV2ZXJ5OiB7XG4gICAgICAgICAgICAgIGRheXNPZldlZWs6IGRheXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kRGF0ZTogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZERhdGVcbiAgICAgICAgICAuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKVxuICAgICAgICAgIC5kYXRlKClcbiAgICAgICAgICAudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZXJ5OiB7XG4gICAgICAgICAgICBkYXlzT2ZXZWVrOiBkYXlzLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5kRGF0ZTogZW5kLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlcGV0aXRpb24uanMiLCJpbXBvcnQgeyBpblBvc3QgfSBmcm9tICcuLi9saWIvcGFyc2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29tcG9zZXIsIHRyYW5zbGF0b3IpID0+IHtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGNvbXBvc2VyLnBvc3RzW2NvbXBvc2VyLmFjdGl2ZV07XG4gICAgc29ja2V0LmVtaXQoJ3BsdWdpbnMuY2FsZW5kYXIuY2FuUG9zdEV2ZW50JywgZGF0YSwgKGUsIGNhblBvc3QpID0+IHtcbiAgICAgICQoYCNjbXAtdXVpZC0ke2NvbXBvc2VyLmFjdGl2ZX1gKVxuICAgICAgICAuZmluZCgnLnBsdWdpbi1jYWxlbmRhci1jb21wb3Nlci1lZGl0LWV2ZW50JylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC50b2dnbGUoY2FuUG9zdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWx0ZXJTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdXVpZCA9IGNvbXBvc2VyLmFjdGl2ZTtcbiAgICBjb25zdCBjb21wID0gJChgI2NtcC11dWlkLSR7dXVpZH1gKTtcbiAgICBjb25zdCB3cml0ZSA9IGNvbXAuZmluZCgnLndyaXRlLWNvbnRhaW5lciB0ZXh0YXJlYS53cml0ZScpO1xuICAgIGNvbnN0IGV2ZW50RXhpc3RlZCA9IGluUG9zdC50ZXN0KHdyaXRlLnZhbCgpKTtcblxuICAgIGlmIChldmVudEV4aXN0ZWQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGNvbXAuZmluZCgnLmNvbXBvc2VyLXN1Ym1pdDp2aXNpYmxlJyk7XG5cbiAgICAgIGNvbnN0IG9yaWcgPSAkLl9kYXRhKGJ1dHRvblswXSwgJ2V2ZW50cycpLmNsaWNrLm1hcCh4ID0+IHguaGFuZGxlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSAoc2VsZiwgZSkgPT4ge1xuICAgICAgICBvcmlnLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGJ1dHRvbi5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB3cml0ZS52YWwoKTtcbiAgICAgICAgaWYgKCFpblBvc3QudGVzdCh0ZXh0KSkge1xuICAgICAgICAgIHRyYW5zbGF0b3IudHJhbnNsYXRlKCdbW2NhbGVuZGFyOmNvbmZpcm1fZGVsZXRlX2V2ZW50XV0nLCAocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgIGJvb3Rib3guY29uZmlybShxdWVzdGlvbiwgKG9rYXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9rYXkpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKHRoaXMsIGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmlnZ2VyKHRoaXMsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgJCh3aW5kb3cpLm9uKCdhY3Rpb246Y29tcG9zZXIucG9zdC5uZXcnICtcbiAgICAnIGFjdGlvbjpjb21wb3Nlci5wb3N0LmVkaXQnICtcbiAgICAnIGFjdGlvbjpjb21wb3Nlci50b3BpYy5uZXcnLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvbkNoYW5nZSgpO1xuICAgICAgYWx0ZXJTdWJtaXQoKTtcbiAgICB9LCA0MDApO1xuICB9KTtcbiAgJChkb2N1bWVudC5ib2R5KS5vbignY2hhbmdlJywgJy5jb21wb3NlciAuY2F0ZWdvcnktbGlzdCcsIG9uQ2hhbmdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3NldHVwQ29tcG9zZXJCdXR0b24uanMiLCJjb25zdCByYXdUZW1wbGF0ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCByZXBlYXRzID0gZXZlbnQucmVwZWF0cyAmJiB7XG4gICAgLi4uZXZlbnQucmVwZWF0cyxcbiAgICBlbmREYXRlOiBldmVudC5yZXBlYXRzLmVuZERhdGUgPyBldmVudC5yZXBlYXRzLmVuZERhdGUudmFsdWVPZigpIDogbnVsbCxcbiAgfTtcbiAgcmV0dXJuIGBbZXZlbnRdW25hbWVdJHtldmVudC5uYW1lfVsvbmFtZV1bYWxsZGF5XSR7ZXZlbnQuYWxsZGF5fVsvYWxsZGF5XWAgK1xuICBgW3N0YXJ0RGF0ZV0ke2V2ZW50LnN0YXJ0RGF0ZX1bL3N0YXJ0RGF0ZV1bZW5kRGF0ZV0ke2V2ZW50LmVuZERhdGV9Wy9lbmREYXRlXWAgK1xuICBgW3JlbWluZGVyc10ke0pTT04uc3RyaW5naWZ5KGV2ZW50LnJlbWluZGVycyl9Wy9yZW1pbmRlcnNdYCArXG4gIGBbbG9jYXRpb25dJHtldmVudC5sb2NhdGlvbn1bL2xvY2F0aW9uXWAgK1xuICBgW2Rlc2NyaXB0aW9uXSR7ZXZlbnQuZGVzY3JpcHRpb259Wy9kZXNjcmlwdGlvbl1bbWFuZGF0b3J5XSR7ZXZlbnQubWFuZGF0b3J5fVsvbWFuZGF0b3J5XWAgK1xuICBgJHtyZXBlYXRzID8gYFtyZXBlYXRzXSR7SlNPTi5zdHJpbmdpZnkocmVwZWF0cyl9Wy9yZXBlYXRzXWAgOiAnJ31bL2V2ZW50XWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYXdUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvdGVtcGxhdGVzLmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBqdXN0RGF0ZSA9ICdkZGRkLCBMTCc7XG5jb25zdCBqdXN0VGltZSA9ICdMVCc7XG5jb25zdCBkYXRlQW5kVGltZSA9ICdMTExMJztcblxuY29uc3QgZm9ybWF0RGF0ZXMgPSAocywgZSwgYWxsZGF5LCBsYW5nLCB1dGMpID0+IHtcbiAgY29uc3QgbW9tID0gdXRjID8gbW9tZW50LnV0YyA6IG1vbWVudDtcblxuICBjb25zdCBzdGFydCA9IG1vbShzKS5sb2NhbGUobGFuZyk7XG4gIGNvbnN0IGVuZCA9IG1vbShlKS5sb2NhbGUobGFuZyk7XG5cbiAgaWYgKE1hdGguYWJzKHMgLSBlKSA8PSA2MCAqIDEwMDApIHtcbiAgICBpZiAoYWxsZGF5KSB7XG4gICAgICByZXR1cm4gc3RhcnQuZm9ybWF0KGp1c3REYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0LmZvcm1hdChkYXRlQW5kVGltZSk7XG4gIH1cblxuICBpZiAoXG4gICAgc3RhcnQuZGF5T2ZZZWFyKCkgPT09IGVuZC5kYXlPZlllYXIoKSAmJlxuICAgIHN0YXJ0LnllYXIoKSA9PT0gZW5kLnllYXIoKVxuICApIHtcbiAgICBpZiAoYWxsZGF5KSB7XG4gICAgICByZXR1cm4gc3RhcnQuZm9ybWF0KGp1c3REYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3N0YXJ0LmZvcm1hdChqdXN0RGF0ZSl9PGJyPmAgK1xuICAgICAgYCR7c3RhcnQuZm9ybWF0KGp1c3RUaW1lKX0gLSAke2VuZC5mb3JtYXQoanVzdFRpbWUpfWA7XG4gIH1cblxuICBpZiAoYWxsZGF5KSB7XG4gICAgcmV0dXJuIGAke3N0YXJ0LmZvcm1hdChqdXN0RGF0ZSl9IC0gJHtlbmQuZm9ybWF0KGp1c3REYXRlKX1gO1xuICB9XG4gIHJldHVybiBgJHtzdGFydC5mb3JtYXQoZGF0ZUFuZFRpbWUpfSAtICR7ZW5kLmZvcm1hdChkYXRlQW5kVGltZSl9YDtcbn07XG5cbmNvbnN0IGluaXQgPSAoVHJhbnNsYXRvcikgPT4ge1xuICBUcmFuc2xhdG9yLnJlZ2lzdGVyTW9kdWxlKCdtb21lbnQnLCAobGFuZykgPT4ge1xuICAgIGNvbnN0IG1vbWVudExhbmcgPSBsYW5nLnJlcGxhY2UoL1tfQF0vZywgJy0nKTtcbiAgICBjb25zdCB6ZXJvID0gbW9tZW50KDApLmxvY2FsZShtb21lbnRMYW5nKTtcblxuICAgIGNvbnN0IHRpbWVhZ28gPSAoa2V5LCBbZHVyYXRpb25dKSA9PiB7XG4gICAgICBjb25zdCBtcyA9IHBhcnNlSW50KGR1cmF0aW9uLCAxMCk7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICd0aW1lLWFnbyc6XG4gICAgICAgICAgcmV0dXJuIHplcm8uZnJvbShtcyk7XG4gICAgICAgIGNhc2UgJ3RpbWUtaW4nOlxuICAgICAgICAgIHJldHVybiB6ZXJvLnRvKG1zKTtcbiAgICAgICAgY2FzZSAndGltZS1kdXJhdGlvbic6XG4gICAgICAgICAgcmV0dXJuIHplcm8udG8obXMsIHRydWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGltZURhdGVWaWV3ID0gKGtleSwgW3RpbWV6b25lLCBzdGFydCwgZW5kLCBhbGxkYXldKSA9PiB7XG4gICAgICBjb25zdCBzID0gcGFyc2VJbnQoc3RhcnQsIDEwKTtcbiAgICAgIGNvbnN0IGUgPSBwYXJzZUludChlbmQsIDEwKTtcbiAgICAgIGNvbnN0IGlzQWxsZGF5ID0gYWxsZGF5ID09PSAndHJ1ZSc7XG5cbiAgICAgIGlmICh0aW1lem9uZSA9PT0gJ3V0YycpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdERhdGVzKHMsIGUsIGlzQWxsZGF5LCBtb21lbnRMYW5nLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lem9uZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZXMocywgZSwgaXNBbGxkYXksIG1vbWVudExhbmcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IHplcm8ubG9jYWxlRGF0YSgpO1xuICAgIGNvbnN0IGxvY2FsZURhdGEgPSAoa2V5LCBbbiwgLi4uYV0pID0+IHtcbiAgICAgIGxldCBuYW1lID0gbjtcbiAgICAgIGlmICghZGF0YVtuYW1lXSkge1xuICAgICAgICBuYW1lID0gYF8ke259YDtcbiAgICAgICAgaWYgKCFkYXRhW25hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBhcmdzID0gYS5tYXAoKHgpID0+IHtcbiAgICAgICAgaWYgKHggPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoeCkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbbmFtZV0oLi4uYXJncyk7XG4gICAgICB9XG4gICAgICBjb25zdCBbaW5kZXhdID0gYXJncztcbiAgICAgIHJldHVybiBkYXRhW25hbWVdW2luZGV4XTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChrZXksIGFyZ3MpID0+IHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ3RpbWUtaW4nOlxuICAgICAgICBjYXNlICd0aW1lLWFnbyc6XG4gICAgICAgIGNhc2UgJ3RpbWUtZHVyYXRpb24nOlxuICAgICAgICAgIHJldHVybiB0aW1lYWdvKGtleSwgYXJncyk7XG4gICAgICAgIGNhc2UgJ3RpbWUtZGF0ZS12aWV3JzpcbiAgICAgICAgICByZXR1cm4gdGltZURhdGVWaWV3KGtleSwgYXJncyk7XG4gICAgICAgIGNhc2UgJ2xvY2FsZS1kYXRhJzpcbiAgICAgICAgICByZXR1cm4gbG9jYWxlRGF0YShrZXksIGFyZ3MpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZvcm1hdERhdGVzIH07XG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90cmFuc2xhdG9yTW9kdWxlLmpzIiwiY29uc3QgaXNBcnJheU9mID0gKGFyciwgdHlwZSkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gYXJyLmV2ZXJ5KHggPT4gdHlwZW9mIHggIT09IHR5cGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhbGlkLXR5cGVvZlxufTtcblxuY29uc3QgY2hlY2tEYXRlID0gdmFsID0+IE51bWJlci5pc0Zpbml0ZSh2YWwpICYmIG5ldyBEYXRlKHZhbCkuZ2V0VGltZSgpID09PSB2YWw7XG5cbmNvbnN0IGZpZWxkcyA9IHtcbiAgbmFtZTogdmFsID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmICh2YWwubGVuZ3RoID4gNSksXG4gIGFsbGRheTogdmFsID0+IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyxcbiAgc3RhcnREYXRlOiBjaGVja0RhdGUsXG4gIGVuZERhdGU6IGNoZWNrRGF0ZSxcbiAgcmVtaW5kZXJzOiB2YWwgPT4gaXNBcnJheU9mKHZhbCwgJ251bWJlcicpLFxuICBtYW5kYXRvcnk6IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicsXG4gIGxvY2F0aW9uOiB2YWwgPT4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgIXZhbC5pbmNsdWRlcygnXFxuJyksXG4gIGRlc2NyaXB0aW9uOiB2YWwgPT4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycsXG4gIHJlcGVhdHM6IHZhbCA9PiB2YWwgPT0gbnVsbCB8fCAodmFsICYmIE9iamVjdC5rZXlzKHZhbC5ldmVyeSkubGVuZ3RoKSxcbn07XG5cbmNvbnN0IHZhbGlkYXRlRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgbGV0IGZhaWx1cmVzID0gW107XG5cbiAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIWZpZWxkc1trZXldKGV2ZW50W2tleV0pKSB7XG4gICAgICBmYWlsdXJlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGV2ZW50LnN0YXJ0RGF0ZSA+IGV2ZW50LmVuZERhdGUpIHtcbiAgICBmYWlsdXJlcy5wdXNoKCdzdGFydERhdGUnLCAnZW5kRGF0ZScpO1xuICB9XG4gIGlmIChldmVudC5yZXBlYXRzICYmXG4gICAgTnVtYmVyLmlzRmluaXRlKGV2ZW50LnJlcGVhdHMuZW5kRGF0ZSkgJiZcbiAgICBldmVudC5yZXBlYXRzLmVuZERhdGUgPCBldmVudC5zdGFydERhdGUpIHtcbiAgICBmYWlsdXJlcy5wdXNoKCdyZXBlYXRFbmREYXRlJyk7XG4gIH1cblxuICAvLyBtYWtlIGFycmF5IHVuaXF1ZVxuICBmYWlsdXJlcyA9IGZhaWx1cmVzLmZpbHRlcigoeCwgaSkgPT4gZmFpbHVyZXMuaW5kZXhPZih4KSA9PT0gaSk7XG5cbiAgcmV0dXJuIFshIWZhaWx1cmVzLmxlbmd0aCwgZmFpbHVyZXNdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdmFsaWRhdGVFdmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDM2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMzY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIgOiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDM3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzczXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDM3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMzg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDM5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDM5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4MiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgyIiwiLyohIHZlcnNpb24gOiA0LjE3LjQ3XHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIGJvb3RzdHJhcC1kYXRldGltZWpzXHJcbiBodHRwczovL2dpdGh1Yi5jb20vRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTUgSm9uYXRoYW4gUGV0ZXJzb25cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKi9cclxuLypcclxuIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cclxuIENvcHlyaWdodCAoYykgMjAxNSBKb25hdGhhbiBQZXRlcnNvblxyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG4vKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cclxuLypnbG9iYWwgZXhwb3J0czpmYWxzZSAqL1xyXG4vKmdsb2JhbCByZXF1aXJlOmZhbHNlICovXHJcbi8qZ2xvYmFsIGpRdWVyeTpmYWxzZSAqL1xyXG4vKmdsb2JhbCBtb21lbnQ6ZmFsc2UgKi9cclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgZmFjdG9yeShqUXVlcnksIG1vbWVudCk7XG59KGZ1bmN0aW9uICgkLCBtb21lbnQpIHtcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgaWYgKCFtb21lbnQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlciByZXF1aXJlcyBNb21lbnQuanMgdG8gYmUgbG9hZGVkIGZpcnN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGVUaW1lUGlja2VyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcGlja2VyID0ge30sXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgICAgICB1bnNldCA9IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBjb21wb25lbnQgPSBmYWxzZSxcclxuICAgICAgICAgICAgd2lkZ2V0ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZTI0SG91cnMsXHJcbiAgICAgICAgICAgIG1pblZpZXdNb2RlTnVtYmVyID0gMCxcclxuICAgICAgICAgICAgYWN0dWFsRm9ybWF0LFxyXG4gICAgICAgICAgICBwYXJzZUZvcm1hdHMsXHJcbiAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZSxcclxuICAgICAgICAgICAgZGF0ZVBpY2tlck1vZGVzID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsc05hbWU6ICdkYXlzJyxcclxuICAgICAgICAgICAgICAgICAgICBuYXZGbmM6ICdNJyxcclxuICAgICAgICAgICAgICAgICAgICBuYXZTdGVwOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsc05hbWU6ICdtb250aHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdkZuYzogJ3knLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdlN0ZXA6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzTmFtZTogJ3llYXJzJyxcclxuICAgICAgICAgICAgICAgICAgICBuYXZGbmM6ICd5JyxcclxuICAgICAgICAgICAgICAgICAgICBuYXZTdGVwOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbHNOYW1lOiAnZGVjYWRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Rm5jOiAneScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2U3RlcDogMTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZpZXdNb2RlcyA9IFsnZGF5cycsICdtb250aHMnLCAneWVhcnMnLCAnZGVjYWRlcyddLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbE1vZGVzID0gWyd0b3AnLCAnYm90dG9tJywgJ2F1dG8nXSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbE1vZGVzID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2F1dG8nXSxcclxuICAgICAgICAgICAgdG9vbGJhclBsYWNlbWVudHMgPSBbJ2RlZmF1bHQnLCAndG9wJywgJ2JvdHRvbSddLFxyXG4gICAgICAgICAgICBrZXlNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAndXAnOiAzOCxcclxuICAgICAgICAgICAgICAgIDM4OiAndXAnLFxyXG4gICAgICAgICAgICAgICAgJ2Rvd24nOiA0MCxcclxuICAgICAgICAgICAgICAgIDQwOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6IDM3LFxyXG4gICAgICAgICAgICAgICAgMzc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICdyaWdodCc6IDM5LFxyXG4gICAgICAgICAgICAgICAgMzk6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAndGFiJzogOSxcclxuICAgICAgICAgICAgICAgIDk6ICd0YWInLFxyXG4gICAgICAgICAgICAgICAgJ2VzY2FwZSc6IDI3LFxyXG4gICAgICAgICAgICAgICAgMjc6ICdlc2NhcGUnLFxyXG4gICAgICAgICAgICAgICAgJ2VudGVyJzogMTMsXHJcbiAgICAgICAgICAgICAgICAxMzogJ2VudGVyJyxcclxuICAgICAgICAgICAgICAgICdwYWdlVXAnOiAzMyxcclxuICAgICAgICAgICAgICAgIDMzOiAncGFnZVVwJyxcclxuICAgICAgICAgICAgICAgICdwYWdlRG93bic6IDM0LFxyXG4gICAgICAgICAgICAgICAgMzQ6ICdwYWdlRG93bicsXHJcbiAgICAgICAgICAgICAgICAnc2hpZnQnOiAxNixcclxuICAgICAgICAgICAgICAgIDE2OiAnc2hpZnQnLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnRyb2wnOiAxNyxcclxuICAgICAgICAgICAgICAgIDE3OiAnY29udHJvbCcsXHJcbiAgICAgICAgICAgICAgICAnc3BhY2UnOiAzMixcclxuICAgICAgICAgICAgICAgIDMyOiAnc3BhY2UnLFxyXG4gICAgICAgICAgICAgICAgJ3QnOiA4NCxcclxuICAgICAgICAgICAgICAgIDg0OiAndCcsXHJcbiAgICAgICAgICAgICAgICAnZGVsZXRlJzogNDYsXHJcbiAgICAgICAgICAgICAgICA0NjogJ2RlbGV0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAga2V5U3RhdGUgPSB7fSxcclxuXHJcbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgICAgICAgICBoYXNUaW1lWm9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQudHogIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnRpbWVab25lICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy50aW1lWm9uZSAhPT0gbnVsbCAmJiBvcHRpb25zLnRpbWVab25lICE9PSAnJztcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldE1vbWVudCA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuTW9tZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQgfHwgZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybk1vbWVudCA9IG1vbWVudCgpOyAvL1RPRE8gc2hvdWxkIHRoaXMgdXNlIGZvcm1hdD8gYW5kIGxvY2FsZT9cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9tZW50LmlzRGF0ZShkKSB8fCBtb21lbnQuaXNNb21lbnQoZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGF0ZSB0aGF0IGlzIHBhc3NlZCBpbiBpcyBhbHJlYWR5IGEgRGF0ZSgpIG9yIG1vbWVudCgpIG9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGl0IGRpcmVjdGx5IHRvIG1vbWVudC5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5Nb21lbnQgPSBtb21lbnQoZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1RpbWVab25lKCkpIHsgLy8gVGhlcmUgaXMgYSBzdHJpbmcgdG8gcGFyc2UgYW5kIGEgZGVmYXVsdCB0aW1lIHpvbmVcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB3aXRoIHRoZSB0eiBmdW5jdGlvbiB3aGljaCB0YWtlcyBhIGRlZmF1bHQgdGltZSB6b25lIGlmIGl0IGlzIG5vdCBpbiB0aGUgZm9ybWF0IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybk1vbWVudCA9IG1vbWVudC50eihkLCBwYXJzZUZvcm1hdHMsIG9wdGlvbnMudXNlU3RyaWN0LCBvcHRpb25zLnRpbWVab25lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuTW9tZW50ID0gbW9tZW50KGQsIHBhcnNlRm9ybWF0cywgb3B0aW9ucy51c2VTdHJpY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUaW1lWm9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuTW9tZW50LnR6KG9wdGlvbnMudGltZVpvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5Nb21lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpc0VuYWJsZWQgPSBmdW5jdGlvbiAoZ3JhbnVsYXJpdHkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZ3JhbnVsYXJpdHkgIT09ICdzdHJpbmcnIHx8IGdyYW51bGFyaXR5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpc0VuYWJsZWQgZXhwZWN0cyBhIHNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmFudWxhcml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsRm9ybWF0LmluZGV4T2YoJ1knKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3R1YWxGb3JtYXQuaW5kZXhPZignTScpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdHVhbEZvcm1hdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2QnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3R1YWxGb3JtYXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoJykgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsRm9ybWF0LmluZGV4T2YoJ20nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3R1YWxGb3JtYXQuaW5kZXhPZigncycpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoYXNUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpc0VuYWJsZWQoJ2gnKSB8fCBpc0VuYWJsZWQoJ20nKSB8fCBpc0VuYWJsZWQoJ3MnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBoYXNEYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpc0VuYWJsZWQoJ3knKSB8fCBpc0VuYWJsZWQoJ00nKSB8fCBpc0VuYWJsZWQoJ2QnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXREYXRlUGlja2VyVGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVhZFRlbXBsYXRlID0gJCgnPHRoZWFkPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRyPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0aD4nKS5hZGRDbGFzcygncHJldicpLmF0dHIoJ2RhdGEtYWN0aW9uJywgJ3ByZXZpb3VzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKG9wdGlvbnMuaWNvbnMucHJldmlvdXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRoPicpLmFkZENsYXNzKCdwaWNrZXItc3dpdGNoJykuYXR0cignZGF0YS1hY3Rpb24nLCAncGlja2VyU3dpdGNoJykuYXR0cignY29sc3BhbicsIChvcHRpb25zLmNhbGVuZGFyV2Vla3MgPyAnNicgOiAnNScpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRoPicpLmFkZENsYXNzKCduZXh0JykuYXR0cignZGF0YS1hY3Rpb24nLCAnbmV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLm5leHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udFRlbXBsYXRlID0gJCgnPHRib2R5PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRyPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hdHRyKCdjb2xzcGFuJywgKG9wdGlvbnMuY2FsZW5kYXJXZWVrcyA/ICc4JyA6ICc3JykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItZGF5cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRhYmxlPicpLmFkZENsYXNzKCd0YWJsZS1jb25kZW5zZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChoZWFkVGVtcGxhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0Ym9keT4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdj4nKS5hZGRDbGFzcygnZGF0ZXBpY2tlci1tb250aHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0YWJsZT4nKS5hZGRDbGFzcygndGFibGUtY29uZGVuc2VkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoaGVhZFRlbXBsYXRlLmNsb25lKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGNvbnRUZW1wbGF0ZS5jbG9uZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2PicpLmFkZENsYXNzKCdkYXRlcGlja2VyLXllYXJzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ3RhYmxlLWNvbmRlbnNlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGhlYWRUZW1wbGF0ZS5jbG9uZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChjb250VGVtcGxhdGUuY2xvbmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdj4nKS5hZGRDbGFzcygnZGF0ZXBpY2tlci1kZWNhZGVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ3RhYmxlLWNvbmRlbnNlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGhlYWRUZW1wbGF0ZS5jbG9uZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChjb250VGVtcGxhdGUuY2xvbmUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRUaW1lUGlja2VyTWFpblRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcFJvdyA9ICQoJzx0cj4nKSxcclxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVSb3cgPSAkKCc8dHI+JyksXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUm93ID0gJCgnPHRyPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJvdy5hcHBlbmQoJCgnPHRkPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGE+JykuYXR0cih7IGhyZWY6ICcjJywgdGFiaW5kZXg6ICctMScsICd0aXRsZSc6IG9wdGlvbnMudG9vbHRpcHMuaW5jcmVtZW50SG91ciB9KS5hZGRDbGFzcygnYnRuJykuYXR0cignZGF0YS1hY3Rpb24nLCAnaW5jcmVtZW50SG91cnMnKS5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3Mob3B0aW9ucy5pY29ucy51cCkpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlUm93LmFwcGVuZCgkKCc8dGQ+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygndGltZXBpY2tlci1ob3VyJykuYXR0cih7ICdkYXRhLXRpbWUtY29tcG9uZW50JzogJ2hvdXJzJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5waWNrSG91ciB9KS5hdHRyKCdkYXRhLWFjdGlvbicsICdzaG93SG91cnMnKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVJvdy5hcHBlbmQoJCgnPHRkPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGE+JykuYXR0cih7IGhyZWY6ICcjJywgdGFiaW5kZXg6ICctMScsICd0aXRsZSc6IG9wdGlvbnMudG9vbHRpcHMuZGVjcmVtZW50SG91ciB9KS5hZGRDbGFzcygnYnRuJykuYXR0cignZGF0YS1hY3Rpb24nLCAnZGVjcmVtZW50SG91cnMnKS5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3Mob3B0aW9ucy5pY29ucy5kb3duKSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoJ20nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BSb3cuYXBwZW5kKCQoJzx0ZD4nKS5hZGRDbGFzcygnc2VwYXJhdG9yJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRkbGVSb3cuYXBwZW5kKCQoJzx0ZD4nKS5hZGRDbGFzcygnc2VwYXJhdG9yJykuaHRtbCgnOicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tUm93LmFwcGVuZCgkKCc8dGQ+JykuYWRkQ2xhc3MoJ3NlcGFyYXRvcicpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wUm93LmFwcGVuZCgkKCc8dGQ+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8YT4nKS5hdHRyKHsgaHJlZjogJyMnLCB0YWJpbmRleDogJy0xJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5pbmNyZW1lbnRNaW51dGUgfSkuYWRkQ2xhc3MoJ2J0bicpLmF0dHIoJ2RhdGEtYWN0aW9uJywgJ2luY3JlbWVudE1pbnV0ZXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLnVwKSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVSb3cuYXBwZW5kKCQoJzx0ZD4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCd0aW1lcGlja2VyLW1pbnV0ZScpLmF0dHIoeyAnZGF0YS10aW1lLWNvbXBvbmVudCc6ICdtaW51dGVzJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5waWNrTWludXRlIH0pLmF0dHIoJ2RhdGEtYWN0aW9uJywgJ3Nob3dNaW51dGVzJykpKTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21Sb3cuYXBwZW5kKCQoJzx0ZD4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxhPicpLmF0dHIoeyBocmVmOiAnIycsIHRhYmluZGV4OiAnLTEnLCAndGl0bGUnOiBvcHRpb25zLnRvb2x0aXBzLmRlY3JlbWVudE1pbnV0ZSB9KS5hZGRDbGFzcygnYnRuJykuYXR0cignZGF0YS1hY3Rpb24nLCAnZGVjcmVtZW50TWludXRlcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKG9wdGlvbnMuaWNvbnMuZG93bikpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVkKCdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVkKCdtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wUm93LmFwcGVuZCgkKCc8dGQ+JykuYWRkQ2xhc3MoJ3NlcGFyYXRvcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkZGxlUm93LmFwcGVuZCgkKCc8dGQ+JykuYWRkQ2xhc3MoJ3NlcGFyYXRvcicpLmh0bWwoJzonKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVJvdy5hcHBlbmQoJCgnPHRkPicpLmFkZENsYXNzKCdzZXBhcmF0b3InKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJvdy5hcHBlbmQoJCgnPHRkPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPGE+JykuYXR0cih7IGhyZWY6ICcjJywgdGFiaW5kZXg6ICctMScsICd0aXRsZSc6IG9wdGlvbnMudG9vbHRpcHMuaW5jcmVtZW50U2Vjb25kIH0pLmFkZENsYXNzKCdidG4nKS5hdHRyKCdkYXRhLWFjdGlvbicsICdpbmNyZW1lbnRTZWNvbmRzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3Mob3B0aW9ucy5pY29ucy51cCkpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlUm93LmFwcGVuZCgkKCc8dGQ+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygndGltZXBpY2tlci1zZWNvbmQnKS5hdHRyKHsgJ2RhdGEtdGltZS1jb21wb25lbnQnOiAnc2Vjb25kcycsICd0aXRsZSc6IG9wdGlvbnMudG9vbHRpcHMucGlja1NlY29uZCB9KS5hdHRyKCdkYXRhLWFjdGlvbicsICdzaG93U2Vjb25kcycpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUm93LmFwcGVuZCgkKCc8dGQ+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8YT4nKS5hdHRyKHsgaHJlZjogJyMnLCB0YWJpbmRleDogJy0xJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5kZWNyZW1lbnRTZWNvbmQgfSkuYWRkQ2xhc3MoJ2J0bicpLmF0dHIoJ2RhdGEtYWN0aW9uJywgJ2RlY3JlbWVudFNlY29uZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLmRvd24pKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdXNlMjRIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcFJvdy5hcHBlbmQoJCgnPHRkPicpLmFkZENsYXNzKCdzZXBhcmF0b3InKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlUm93LmFwcGVuZCgkKCc8dGQ+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8YnV0dG9uPicpLmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKS5hdHRyKHsgJ2RhdGEtYWN0aW9uJzogJ3RvZ2dsZVBlcmlvZCcsIHRhYmluZGV4OiAnLTEnLCAndGl0bGUnOiBvcHRpb25zLnRvb2x0aXBzLnRvZ2dsZVBlcmlvZCB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVJvdy5hcHBlbmQoJCgnPHRkPicpLmFkZENsYXNzKCdzZXBhcmF0b3InKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3RpbWVwaWNrZXItcGlja2VyJylcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0YWJsZT4nKS5hZGRDbGFzcygndGFibGUtY29uZGVuc2VkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChbdG9wUm93LCBtaWRkbGVSb3csIGJvdHRvbVJvd10pKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldFRpbWVQaWNrZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBob3Vyc1ZpZXcgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCd0aW1lcGlja2VyLWhvdXJzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ3RhYmxlLWNvbmRlbnNlZCcpKSxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzVmlldyA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3RpbWVwaWNrZXItbWludXRlcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJCgnPHRhYmxlPicpLmFkZENsYXNzKCd0YWJsZS1jb25kZW5zZWQnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1ZpZXcgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCd0aW1lcGlja2VyLXNlY29uZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoJzx0YWJsZT4nKS5hZGRDbGFzcygndGFibGUtY29uZGVuc2VkJykpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IFtnZXRUaW1lUGlja2VyTWFpblRlbXBsYXRlKCldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZWQoJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGhvdXJzVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVkKCdtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChtaW51dGVzVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVkKCdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChzZWNvbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldFRvb2xiYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93VG9kYXlCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCgkKCc8dGQ+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoeyAnZGF0YS1hY3Rpb24nOiAndG9kYXknLCAndGl0bGUnOiBvcHRpb25zLnRvb2x0aXBzLnRvZGF5IH0pLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLnRvZGF5KSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5zaWRlQnlTaWRlICYmIGhhc0RhdGUoKSAmJiBoYXNUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCgkKCc8dGQ+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoeyAnZGF0YS1hY3Rpb24nOiAndG9nZ2xlUGlja2VyJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5zZWxlY3RUaW1lIH0pLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLnRpbWUpKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goJCgnPHRkPicpLmFwcGVuZCgkKCc8YT4nKS5hdHRyKHsgJ2RhdGEtYWN0aW9uJzogJ2NsZWFyJywgJ3RpdGxlJzogb3B0aW9ucy50b29sdGlwcy5jbGVhciB9KS5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3Mob3B0aW9ucy5pY29ucy5jbGVhcikpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93Q2xvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCgkKCc8dGQ+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoeyAnZGF0YS1hY3Rpb24nOiAnY2xvc2UnLCAndGl0bGUnOiBvcHRpb25zLnRvb2x0aXBzLmNsb3NlIH0pLmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcyhvcHRpb25zLmljb25zLmNsb3NlKSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ3RhYmxlLWNvbmRlbnNlZCcpLmFwcGVuZCgkKCc8dGJvZHk+JykuYXBwZW5kKCQoJzx0cj4nKS5hcHBlbmQocm93KSkpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdib290c3RyYXAtZGF0ZXRpbWVwaWNrZXItd2lkZ2V0IGRyb3Bkb3duLW1lbnUnKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlVmlldyA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2RhdGVwaWNrZXInKS5hcHBlbmQoZ2V0RGF0ZVBpY2tlclRlbXBsYXRlKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVWaWV3ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygndGltZXBpY2tlcicpLmFwcGVuZChnZXRUaW1lUGlja2VyVGVtcGxhdGUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICQoJzx1bD4nKS5hZGRDbGFzcygnbGlzdC11bnN0eWxlZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXIgPSAkKCc8bGk+JykuYWRkQ2xhc3MoJ3BpY2tlci1zd2l0Y2gnICsgKG9wdGlvbnMuY29sbGFwc2UgPyAnIGFjY29yZGlvbi10b2dnbGUnIDogJycpKS5hcHBlbmQoZ2V0VG9vbGJhcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5yZW1vdmVDbGFzcygnZHJvcGRvd24tbWVudScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2UyNEhvdXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUuYWRkQ2xhc3MoJ3VzZXR3ZW50eWZvdXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVkKCdzJykgJiYgIXVzZTI0SG91cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5hZGRDbGFzcygnd2lkZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQnlTaWRlICYmIGhhc0RhdGUoKSAmJiBoYXNUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5hZGRDbGFzcygndGltZXBpY2tlci1zYnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sYmFyUGxhY2VtZW50ID09PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5hcHBlbmQodG9vbGJhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnPGRpdj4nKS5hZGRDbGFzcygncm93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoZGF0ZVZpZXcuYWRkQ2xhc3MoJ2NvbC1tZC02JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKHRpbWVWaWV3LmFkZENsYXNzKCdjb2wtbWQtNicpKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbGJhclBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKHRvb2xiYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbGJhclBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZCh0b29sYmFyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoYXNEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZCgkKCc8bGk+JykuYWRkQ2xhc3MoKG9wdGlvbnMuY29sbGFwc2UgJiYgaGFzVGltZSgpID8gJ2NvbGxhcHNlIGluJyA6ICcnKSkuYXBwZW5kKGRhdGVWaWV3KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sYmFyUGxhY2VtZW50ID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZCh0b29sYmFyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZCgkKCc8bGk+JykuYWRkQ2xhc3MoKG9wdGlvbnMuY29sbGFwc2UgJiYgaGFzRGF0ZSgpID8gJ2NvbGxhcHNlJyA6ICcnKSkuYXBwZW5kKHRpbWVWaWV3KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sYmFyUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKHRvb2xiYXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmFwcGVuZChjb250ZW50KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRhdGFUb09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YU9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnaW5wdXQnKSB8fCBvcHRpb25zLmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVEYXRhID0gZWxlbWVudC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVEYXRhID0gZWxlbWVudC5maW5kKCdpbnB1dCcpLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZURhdGEuZGF0ZU9wdGlvbnMgJiYgZURhdGEuZGF0ZU9wdGlvbnMgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIGRhdGFPcHRpb25zLCBlRGF0YS5kYXRlT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9ICdkYXRlJyArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZURhdGFbYXR0cmlidXRlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT3B0aW9uc1trZXldID0gZURhdGFbYXR0cmlidXRlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YU9wdGlvbnM7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBwbGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IChjb21wb25lbnQgfHwgZWxlbWVudCkucG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAoY29tcG9uZW50IHx8IGVsZW1lbnQpLm9mZnNldCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsID0gb3B0aW9ucy53aWRnZXRQb3NpdGlvbmluZy52ZXJ0aWNhbCxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsID0gb3B0aW9ucy53aWRnZXRQb3NpdGlvbmluZy5ob3Jpem9udGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy53aWRnZXRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBvcHRpb25zLndpZGdldFBhcmVudC5hcHBlbmQod2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IGVsZW1lbnQuYWZ0ZXIod2lkZ2V0KS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBlbGVtZW50LmFwcGVuZCh3aWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuKCkuZmlyc3QoKS5hZnRlcih3aWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRvcCBhbmQgYm90dG9tIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICBpZiAodmVydGljYWwgPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQudG9wICsgd2lkZ2V0LmhlaWdodCgpICogMS41ID49ICQod2luZG93KS5oZWlnaHQoKSArICQod2luZG93KS5zY3JvbGxUb3AoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaGVpZ2h0KCkgKyBlbGVtZW50Lm91dGVySGVpZ2h0KCkgPCBvZmZzZXQudG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsID0gJ3RvcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwgPSAnYm90dG9tJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCBhbmQgcmlnaHQgbG9naWNcclxuICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50LndpZHRoKCkgPCBvZmZzZXQubGVmdCArIHdpZGdldC5vdXRlcldpZHRoKCkgLyAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldC5sZWZ0ICsgd2lkZ2V0Lm91dGVyV2lkdGgoKSA+ICQod2luZG93KS53aWR0aCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWwgPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWwgPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYWRkQ2xhc3MoJ3RvcCcpLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmFkZENsYXNzKCdib3R0b20nKS5yZW1vdmVDbGFzcygndG9wJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWwgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYWRkQ2xhc3MoJ3B1bGwtcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJlbW92ZUNsYXNzKCdwdWxsLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgcGFyZW50IGVsZW1lbnQgdGhhdCBoYXMgYSBub24tc3RhdGljIGNzcyBwb3NpdGlvbmluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5jc3MoJ3Bvc2l0aW9uJykgIT09ICdzdGF0aWMnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGV0aW1lcGlja2VyIGNvbXBvbmVudCBzaG91bGQgYmUgcGxhY2VkIHdpdGhpbiBhIG5vbi1zdGF0aWMgcG9zaXRpb25lZCBjb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3aWRnZXQuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHZlcnRpY2FsID09PSAndG9wJyA/ICdhdXRvJyA6IHBvc2l0aW9uLnRvcCArIGVsZW1lbnQub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHZlcnRpY2FsID09PSAndG9wJyA/IHBhcmVudC5vdXRlckhlaWdodCgpIC0gKHBhcmVudCA9PT0gZWxlbWVudCA/IDAgOiBwb3NpdGlvbi50b3ApIDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGhvcml6b250YWwgPT09ICdsZWZ0JyA/IChwYXJlbnQgPT09IGVsZW1lbnQgPyAwIDogcG9zaXRpb24ubGVmdCkgOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGhvcml6b250YWwgPT09ICdsZWZ0JyA/ICdhdXRvJyA6IHBhcmVudC5vdXRlcldpZHRoKCkgLSBlbGVtZW50Lm91dGVyV2lkdGgoKSAtIChwYXJlbnQgPT09IGVsZW1lbnQgPyAwIDogcG9zaXRpb24ubGVmdClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgbm90aWZ5RXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2RwLmNoYW5nZScgJiYgKChlLmRhdGUgJiYgZS5kYXRlLmlzU2FtZShlLm9sZERhdGUpKSB8fCAoIWUuZGF0ZSAmJiAhZS5vbGREYXRlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRyaWdnZXIoZSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB2aWV3VXBkYXRlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgICAgICBlID0gJ1lZWVknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5RXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkcC51cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZSxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3RGF0ZTogdmlld0RhdGUuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBzaG93TW9kZSA9IGZ1bmN0aW9uIChkaXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZSA9IE1hdGgubWF4KG1pblZpZXdNb2RlTnVtYmVyLCBNYXRoLm1pbigzLCBjdXJyZW50Vmlld01vZGUgKyBkaXIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlciA+IGRpdicpLmhpZGUoKS5maWx0ZXIoJy5kYXRlcGlja2VyLScgKyBkYXRlUGlja2VyTW9kZXNbY3VycmVudFZpZXdNb2RlXS5jbHNOYW1lKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmaWxsRG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj4nKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IHZpZXdEYXRlLmNsb25lKCkuc3RhcnRPZigndycpLnN0YXJ0T2YoJ2QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jYWxlbmRhcldlZWtzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCgkKCc8dGg+JykuYWRkQ2xhc3MoJ2N3JykudGV4dCgnIycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudERhdGUuaXNCZWZvcmUodmlld0RhdGUuY2xvbmUoKS5lbmRPZigndycpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoJCgnPHRoPicpLmFkZENsYXNzKCdkb3cnKS50ZXh0KGN1cnJlbnREYXRlLmZvcm1hdCgnZGQnKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmFkZCgxLCAnZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGhlYWQnKS5hcHBlbmQocm93KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGlzSW5EaXNhYmxlZERhdGVzID0gZnVuY3Rpb24gKHRlc3REYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXNhYmxlZERhdGVzW3Rlc3REYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXSA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGlzSW5FbmFibGVkRGF0ZXMgPSBmdW5jdGlvbiAodGVzdERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmVuYWJsZWREYXRlc1t0ZXN0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKV0gPT09IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpc0luRGlzYWJsZWRIb3VycyA9IGZ1bmN0aW9uICh0ZXN0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlzYWJsZWRIb3Vyc1t0ZXN0RGF0ZS5mb3JtYXQoJ0gnKV0gPT09IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpc0luRW5hYmxlZEhvdXJzID0gZnVuY3Rpb24gKHRlc3REYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5lbmFibGVkSG91cnNbdGVzdERhdGUuZm9ybWF0KCdIJyldID09PSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZ1bmN0aW9uICh0YXJnZXRNb21lbnQsIGdyYW51bGFyaXR5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldE1vbWVudC5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZERhdGVzICYmIGdyYW51bGFyaXR5ID09PSAnZCcgJiYgaXNJbkRpc2FibGVkRGF0ZXModGFyZ2V0TW9tZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVuYWJsZWREYXRlcyAmJiBncmFudWxhcml0eSA9PT0gJ2QnICYmICFpc0luRW5hYmxlZERhdGVzKHRhcmdldE1vbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5taW5EYXRlICYmIHRhcmdldE1vbWVudC5pc0JlZm9yZShvcHRpb25zLm1pbkRhdGUsIGdyYW51bGFyaXR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1heERhdGUgJiYgdGFyZ2V0TW9tZW50LmlzQWZ0ZXIob3B0aW9ucy5tYXhEYXRlLCBncmFudWxhcml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQgJiYgZ3JhbnVsYXJpdHkgPT09ICdkJyAmJiBvcHRpb25zLmRheXNPZldlZWtEaXNhYmxlZC5pbmRleE9mKHRhcmdldE1vbWVudC5kYXkoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWRIb3VycyAmJiAoZ3JhbnVsYXJpdHkgPT09ICdoJyB8fCBncmFudWxhcml0eSA9PT0gJ20nIHx8IGdyYW51bGFyaXR5ID09PSAncycpICYmIGlzSW5EaXNhYmxlZEhvdXJzKHRhcmdldE1vbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVkSG91cnMgJiYgKGdyYW51bGFyaXR5ID09PSAnaCcgfHwgZ3JhbnVsYXJpdHkgPT09ICdtJyB8fCBncmFudWxhcml0eSA9PT0gJ3MnKSAmJiAhaXNJbkVuYWJsZWRIb3Vycyh0YXJnZXRNb21lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWRUaW1lSW50ZXJ2YWxzICYmIChncmFudWxhcml0eSA9PT0gJ2gnIHx8IGdyYW51bGFyaXR5ID09PSAnbScgfHwgZ3JhbnVsYXJpdHkgPT09ICdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucy5kaXNhYmxlZFRpbWVJbnRlcnZhbHMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldE1vbWVudC5pc0JldHdlZW4odGhpc1swXSwgdGhpc1sxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmaWxsTW9udGhzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwYW5zID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzU2hvcnQgPSB2aWV3RGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ3knKS5zdGFydE9mKCdkJyk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobW9udGhzU2hvcnQuaXNTYW1lKHZpZXdEYXRlLCAneScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbnMucHVzaCgkKCc8c3Bhbj4nKS5hdHRyKCdkYXRhLWFjdGlvbicsICdzZWxlY3RNb250aCcpLmFkZENsYXNzKCdtb250aCcpLnRleHQobW9udGhzU2hvcnQuZm9ybWF0KCdNTU0nKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoc1Nob3J0LmFkZCgxLCAnTScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocyB0ZCcpLmVtcHR5KCkuYXBwZW5kKHNwYW5zKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZU1vbnRocyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb250aHNWaWV3ID0gd2lkZ2V0LmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoc1ZpZXdIZWFkZXIgPSBtb250aHNWaWV3LmZpbmQoJ3RoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzID0gbW9udGhzVmlldy5maW5kKCd0Ym9keScpLmZpbmQoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtb250aHNWaWV3SGVhZGVyLmVxKDApLmZpbmQoJ3NwYW4nKS5hdHRyKCd0aXRsZScsIG9wdGlvbnMudG9vbHRpcHMucHJldlllYXIpO1xyXG4gICAgICAgICAgICAgICAgbW9udGhzVmlld0hlYWRlci5lcSgxKS5hdHRyKCd0aXRsZScsIG9wdGlvbnMudG9vbHRpcHMuc2VsZWN0WWVhcik7XHJcbiAgICAgICAgICAgICAgICBtb250aHNWaWV3SGVhZGVyLmVxKDIpLmZpbmQoJ3NwYW4nKS5hdHRyKCd0aXRsZScsIG9wdGlvbnMudG9vbHRpcHMubmV4dFllYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vbnRoc1ZpZXcuZmluZCgnLmRpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHZpZXdEYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ3knKSwgJ3knKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoc1ZpZXdIZWFkZXIuZXEoMCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW9udGhzVmlld0hlYWRlci5lcSgxKS50ZXh0KHZpZXdEYXRlLnllYXIoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHZpZXdEYXRlLmNsb25lKCkuYWRkKDEsICd5JyksICd5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aHNWaWV3SGVhZGVyLmVxKDIpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1vbnRocy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc1NhbWUodmlld0RhdGUsICd5JykgJiYgIXVuc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzLmVxKGRhdGUubW9udGgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1vbnRocy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCh2aWV3RGF0ZS5jbG9uZSgpLm1vbnRoKGluZGV4KSwgJ00nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgdXBkYXRlWWVhcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeWVhcnNWaWV3ID0gd2lkZ2V0LmZpbmQoJy5kYXRlcGlja2VyLXllYXJzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcnNWaWV3SGVhZGVyID0geWVhcnNWaWV3LmZpbmQoJ3RoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZZWFyID0gdmlld0RhdGUuY2xvbmUoKS5zdWJ0cmFjdCg1LCAneScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFllYXIgPSB2aWV3RGF0ZS5jbG9uZSgpLmFkZCg2LCAneScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICB5ZWFyc1ZpZXdIZWFkZXIuZXEoMCkuZmluZCgnc3BhbicpLmF0dHIoJ3RpdGxlJywgb3B0aW9ucy50b29sdGlwcy5wcmV2RGVjYWRlKTtcclxuICAgICAgICAgICAgICAgIHllYXJzVmlld0hlYWRlci5lcSgxKS5hdHRyKCd0aXRsZScsIG9wdGlvbnMudG9vbHRpcHMuc2VsZWN0RGVjYWRlKTtcclxuICAgICAgICAgICAgICAgIHllYXJzVmlld0hlYWRlci5lcSgyKS5maW5kKCdzcGFuJykuYXR0cigndGl0bGUnLCBvcHRpb25zLnRvb2x0aXBzLm5leHREZWNhZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHllYXJzVmlldy5maW5kKCcuZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5taW5EYXRlICYmIG9wdGlvbnMubWluRGF0ZS5pc0FmdGVyKHN0YXJ0WWVhciwgJ3knKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJzVmlld0hlYWRlci5lcSgwKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB5ZWFyc1ZpZXdIZWFkZXIuZXEoMSkudGV4dChzdGFydFllYXIueWVhcigpICsgJy0nICsgZW5kWWVhci55ZWFyKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1heERhdGUgJiYgb3B0aW9ucy5tYXhEYXRlLmlzQmVmb3JlKGVuZFllYXIsICd5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyc1ZpZXdIZWFkZXIuZXEoMikuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCFzdGFydFllYXIuaXNBZnRlcihlbmRZZWFyLCAneScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gZGF0YS1hY3Rpb249XCJzZWxlY3RZZWFyXCIgY2xhc3M9XCJ5ZWFyJyArIChzdGFydFllYXIuaXNTYW1lKGRhdGUsICd5JykgJiYgIXVuc2V0ID8gJyBhY3RpdmUnIDogJycpICsgKCFpc1ZhbGlkKHN0YXJ0WWVhciwgJ3knKSA/ICcgZGlzYWJsZWQnIDogJycpICsgJ1wiPicgKyBzdGFydFllYXIueWVhcigpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WWVhci5hZGQoMSwgJ3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB5ZWFyc1ZpZXcuZmluZCgndGQnKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgdXBkYXRlRGVjYWRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWNhZGVzVmlldyA9IHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlci1kZWNhZGVzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXdIZWFkZXIgPSBkZWNhZGVzVmlldy5maW5kKCd0aCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGVjYWRlID0gbW9tZW50KHsgeTogdmlld0RhdGUueWVhcigpIC0gKHZpZXdEYXRlLnllYXIoKSAlIDEwMCkgLSAxIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZERlY2FkZSA9IHN0YXJ0RGVjYWRlLmNsb25lKCkuYWRkKDEwMCwgJ3knKSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGVkQXQgPSBzdGFydERlY2FkZS5jbG9uZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGVEZWNhZGUgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhEYXRlRGVjYWRlID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGVjYWRlWWVhcixcclxuICAgICAgICAgICAgICAgICAgICBodG1sID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXdIZWFkZXIuZXEoMCkuZmluZCgnc3BhbicpLmF0dHIoJ3RpdGxlJywgb3B0aW9ucy50b29sdGlwcy5wcmV2Q2VudHVyeSk7XHJcbiAgICAgICAgICAgICAgICBkZWNhZGVzVmlld0hlYWRlci5lcSgyKS5maW5kKCdzcGFuJykuYXR0cigndGl0bGUnLCBvcHRpb25zLnRvb2x0aXBzLm5leHRDZW50dXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNhZGVzVmlldy5maW5kKCcuZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREZWNhZGUuaXNTYW1lKG1vbWVudCh7IHk6IDE5MDAgfSkpIHx8IChvcHRpb25zLm1pbkRhdGUgJiYgb3B0aW9ucy5taW5EYXRlLmlzQWZ0ZXIoc3RhcnREZWNhZGUsICd5JykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXdIZWFkZXIuZXEoMCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXdIZWFkZXIuZXEoMSkudGV4dChzdGFydERlY2FkZS55ZWFyKCkgKyAnLScgKyBlbmREZWNhZGUueWVhcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREZWNhZGUuaXNTYW1lKG1vbWVudCh7IHk6IDIwMDAgfSkpIHx8IChvcHRpb25zLm1heERhdGUgJiYgb3B0aW9ucy5tYXhEYXRlLmlzQmVmb3JlKGVuZERlY2FkZSwgJ3knKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNhZGVzVmlld0hlYWRlci5lcSgyKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIXN0YXJ0RGVjYWRlLmlzQWZ0ZXIoZW5kRGVjYWRlLCAneScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGVjYWRlWWVhciA9IHN0YXJ0RGVjYWRlLnllYXIoKSArIDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGVEZWNhZGUgPSBvcHRpb25zLm1pbkRhdGUgJiYgb3B0aW9ucy5taW5EYXRlLmlzQWZ0ZXIoc3RhcnREZWNhZGUsICd5JykgJiYgb3B0aW9ucy5taW5EYXRlLnllYXIoKSA8PSBlbmREZWNhZGVZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heERhdGVEZWNhZGUgPSBvcHRpb25zLm1heERhdGUgJiYgb3B0aW9ucy5tYXhEYXRlLmlzQWZ0ZXIoc3RhcnREZWNhZGUsICd5JykgJiYgb3B0aW9ucy5tYXhEYXRlLnllYXIoKSA8PSBlbmREZWNhZGVZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxzcGFuIGRhdGEtYWN0aW9uPVwic2VsZWN0RGVjYWRlXCIgY2xhc3M9XCJkZWNhZGUnICsgKGRhdGUuaXNBZnRlcihzdGFydERlY2FkZSkgJiYgZGF0ZS55ZWFyKCkgPD0gZW5kRGVjYWRlWWVhciA/ICcgYWN0aXZlJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICghaXNWYWxpZChzdGFydERlY2FkZSwgJ3knKSAmJiAhbWluRGF0ZURlY2FkZSAmJiAhbWF4RGF0ZURlY2FkZSA/ICcgZGlzYWJsZWQnIDogJycpICsgJ1wiIGRhdGEtc2VsZWN0aW9uPVwiJyArIChzdGFydERlY2FkZS55ZWFyKCkgKyA2KSArICdcIj4nICsgKHN0YXJ0RGVjYWRlLnllYXIoKSArIDEpICsgJyAtICcgKyAoc3RhcnREZWNhZGUueWVhcigpICsgMTIpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGVjYWRlLmFkZCgxMiwgJ3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPic7IC8vcHVzaCB0aGUgZGFuZ2xpbmcgYmxvY2sgb3ZlciwgYXQgbGVhc3QgdGhpcyB3YXkgaXQncyBldmVuXHJcblxyXG4gICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXcuZmluZCgndGQnKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgZGVjYWRlc1ZpZXdIZWFkZXIuZXEoMSkudGV4dCgoc3RhcnRlZEF0LnllYXIoKSArIDEpICsgJy0nICsgKHN0YXJ0RGVjYWRlLnllYXIoKSkpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZmlsbERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF5c1ZpZXcgPSB3aWRnZXQuZmluZCgnLmRhdGVwaWNrZXItZGF5cycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNWaWV3SGVhZGVyID0gZGF5c1ZpZXcuZmluZCgndGgnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBodG1sID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcm93LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc05hbWVzID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0RhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXlzVmlld0hlYWRlci5lcSgwKS5maW5kKCdzcGFuJykuYXR0cigndGl0bGUnLCBvcHRpb25zLnRvb2x0aXBzLnByZXZNb250aCk7XHJcbiAgICAgICAgICAgICAgICBkYXlzVmlld0hlYWRlci5lcSgxKS5hdHRyKCd0aXRsZScsIG9wdGlvbnMudG9vbHRpcHMuc2VsZWN0TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgZGF5c1ZpZXdIZWFkZXIuZXEoMikuZmluZCgnc3BhbicpLmF0dHIoJ3RpdGxlJywgb3B0aW9ucy50b29sdGlwcy5uZXh0TW9udGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRheXNWaWV3LmZpbmQoJy5kaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgZGF5c1ZpZXdIZWFkZXIuZXEoMSkudGV4dCh2aWV3RGF0ZS5mb3JtYXQob3B0aW9ucy5kYXlWaWV3SGVhZGVyRm9ybWF0KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHZpZXdEYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ00nKSwgJ00nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXNWaWV3SGVhZGVyLmVxKDApLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHZpZXdEYXRlLmNsb25lKCkuYWRkKDEsICdNJyksICdNJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzVmlld0hlYWRlci5lcSgyKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IHZpZXdEYXRlLmNsb25lKCkuc3RhcnRPZignTScpLnN0YXJ0T2YoJ3cnKS5zdGFydE9mKCdkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDQyOyBpKyspIHsgLy9hbHdheXMgZGlzcGxheSA0MiBkYXlzIChzaG91bGQgc2hvdyA2IHdlZWtzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZS53ZWVrZGF5KCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gJCgnPHRyPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jYWxlbmRhcldlZWtzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kKCc8dGQgY2xhc3M9XCJjd1wiPicgKyBjdXJyZW50RGF0ZS53ZWVrKCkgKyAnPC90ZD4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sLnB1c2gocm93KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzTmFtZXMgPSBbJ2RheSddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZS5pc0JlZm9yZSh2aWV3RGF0ZSwgJ00nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHNOYW1lcy5wdXNoKCdvbGQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlLmlzQWZ0ZXIodmlld0RhdGUsICdNJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzTmFtZXMucHVzaCgnbmV3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZS5pc1NhbWUoZGF0ZSwgJ2QnKSAmJiAhdW5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzTmFtZXMucHVzaCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChjdXJyZW50RGF0ZSwgJ2QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHNOYW1lcy5wdXNoKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERhdGUuaXNTYW1lKGdldE1vbWVudCgpLCAnZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsc05hbWVzLnB1c2goJ3RvZGF5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZS5kYXkoKSA9PT0gMCB8fCBjdXJyZW50RGF0ZS5kYXkoKSA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHNOYW1lcy5wdXNoKCd3ZWVrZW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeUV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RwLmNsYXNzaWZ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogY3VycmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM6IGNsc05hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCgnPHRkIGRhdGEtYWN0aW9uPVwic2VsZWN0RGF5XCIgZGF0YS1kYXk9XCInICsgY3VycmVudERhdGUuZm9ybWF0KCdMJykgKyAnXCIgY2xhc3M9XCInICsgY2xzTmFtZXMuam9pbignICcpICsgJ1wiPicgKyBjdXJyZW50RGF0ZS5kYXRlKCkgKyAnPC90ZD4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5hZGQoMSwgJ2QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXlzVmlldy5maW5kKCd0Ym9keScpLmVtcHR5KCkuYXBwZW5kKGh0bWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vbnRocygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVllYXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVjYWRlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZmlsbEhvdXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyLWhvdXJzIHRhYmxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhvdXIgPSB2aWV3RGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ2QnKSxcclxuICAgICAgICAgICAgICAgICAgICBodG1sID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gJCgnPHRyPicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2aWV3RGF0ZS5ob3VyKCkgPiAxMSAmJiAhdXNlMjRIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyLmhvdXIoMTIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRIb3VyLmlzU2FtZSh2aWV3RGF0ZSwgJ2QnKSAmJiAodXNlMjRIb3VycyB8fCAodmlld0RhdGUuaG91cigpIDwgMTIgJiYgY3VycmVudEhvdXIuaG91cigpIDwgMTIpIHx8IHZpZXdEYXRlLmhvdXIoKSA+IDExKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SG91ci5ob3VyKCkgJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9ICQoJzx0cj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZCBkYXRhLWFjdGlvbj1cInNlbGVjdEhvdXJcIiBjbGFzcz1cImhvdXInICsgKCFpc1ZhbGlkKGN1cnJlbnRIb3VyLCAnaCcpID8gJyBkaXNhYmxlZCcgOiAnJykgKyAnXCI+JyArIGN1cnJlbnRIb3VyLmZvcm1hdCh1c2UyNEhvdXJzID8gJ0hIJyA6ICdoaCcpICsgJzwvdGQ+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhvdXIuYWRkKDEsICdoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5lbXB0eSgpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGZpbGxNaW51dGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyLW1pbnV0ZXMgdGFibGUnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWludXRlID0gdmlld0RhdGUuY2xvbmUoKS5zdGFydE9mKCdoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdyA9ICQoJzx0cj4nKSxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwID0gb3B0aW9ucy5zdGVwcGluZyA9PT0gMSA/IDUgOiBvcHRpb25zLnN0ZXBwaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlICh2aWV3RGF0ZS5pc1NhbWUoY3VycmVudE1pbnV0ZSwgJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TWludXRlLm1pbnV0ZSgpICUgKHN0ZXAgKiA0KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAkKCc8dHI+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwucHVzaChyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kKCc8dGQgZGF0YS1hY3Rpb249XCJzZWxlY3RNaW51dGVcIiBjbGFzcz1cIm1pbnV0ZScgKyAoIWlzVmFsaWQoY3VycmVudE1pbnV0ZSwgJ20nKSA/ICcgZGlzYWJsZWQnIDogJycpICsgJ1wiPicgKyBjdXJyZW50TWludXRlLmZvcm1hdCgnbW0nKSArICc8L3RkPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNaW51dGUuYWRkKHN0ZXAsICdtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5lbXB0eSgpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGZpbGxTZWNvbmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyLXNlY29uZHMgdGFibGUnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vjb25kID0gdmlld0RhdGUuY2xvbmUoKS5zdGFydE9mKCdtJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdyA9ICQoJzx0cj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodmlld0RhdGUuaXNTYW1lKGN1cnJlbnRTZWNvbmQsICdtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlY29uZC5zZWNvbmQoKSAlIDIwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9ICQoJzx0cj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZCBkYXRhLWFjdGlvbj1cInNlbGVjdFNlY29uZFwiIGNsYXNzPVwic2Vjb25kJyArICghaXNWYWxpZChjdXJyZW50U2Vjb25kLCAncycpID8gJyBkaXNhYmxlZCcgOiAnJykgKyAnXCI+JyArIGN1cnJlbnRTZWNvbmQuZm9ybWF0KCdzcycpICsgJzwvdGQ+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlY29uZC5hZGQoNSwgJ3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZS5lbXB0eSgpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGZpbGxUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZSwgbmV3RGF0ZSwgdGltZUNvbXBvbmVudHMgPSB3aWRnZXQuZmluZCgnLnRpbWVwaWNrZXIgc3BhbltkYXRhLXRpbWUtY29tcG9uZW50XScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdXNlMjRIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHdpZGdldC5maW5kKCcudGltZXBpY2tlciBbZGF0YS1hY3Rpb249dG9nZ2xlUGVyaW9kXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGUgPSBkYXRlLmNsb25lKCkuYWRkKChkYXRlLmhvdXJzKCkgPj0gMTIpID8gLTEyIDogMTIsICdoJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS50ZXh0KGRhdGUuZm9ybWF0KCdBJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChuZXdEYXRlLCAnaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGltZUNvbXBvbmVudHMuZmlsdGVyKCdbZGF0YS10aW1lLWNvbXBvbmVudD1ob3Vyc10nKS50ZXh0KGRhdGUuZm9ybWF0KHVzZTI0SG91cnMgPyAnSEgnIDogJ2hoJykpO1xyXG4gICAgICAgICAgICAgICAgdGltZUNvbXBvbmVudHMuZmlsdGVyKCdbZGF0YS10aW1lLWNvbXBvbmVudD1taW51dGVzXScpLnRleHQoZGF0ZS5mb3JtYXQoJ21tJykpO1xyXG4gICAgICAgICAgICAgICAgdGltZUNvbXBvbmVudHMuZmlsdGVyKCdbZGF0YS10aW1lLWNvbXBvbmVudD1zZWNvbmRzXScpLnRleHQoZGF0ZS5mb3JtYXQoJ3NzJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZpbGxIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgZmlsbE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGZpbGxTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbGxEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBmaWxsVGltZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2V0VmFsdWUgPSBmdW5jdGlvbiAodGFyZ2V0TW9tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkRGF0ZSA9IHVuc2V0ID8gbnVsbCA6IGRhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBjYWxsaW5nIHNldFZhbHVlKG51bGwgb3IgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldE1vbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSgnZGF0ZScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlFdmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkcC5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGF0ZTogb2xkRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNb21lbnQgPSB0YXJnZXRNb21lbnQuY2xvbmUoKS5sb2NhbGUob3B0aW9ucy5sb2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNUaW1lWm9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TW9tZW50LnR6KG9wdGlvbnMudGltZVpvbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0ZXBwaW5nICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TW9tZW50Lm1pbnV0ZXMoKE1hdGgucm91bmQodGFyZ2V0TW9tZW50Lm1pbnV0ZXMoKSAvIG9wdGlvbnMuc3RlcHBpbmcpICogb3B0aW9ucy5zdGVwcGluZykpLnNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChvcHRpb25zLm1pbkRhdGUgJiYgdGFyZ2V0TW9tZW50LmlzQmVmb3JlKG9wdGlvbnMubWluRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TW9tZW50LmFkZChvcHRpb25zLnN0ZXBwaW5nLCAnbWludXRlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCh0YXJnZXRNb21lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHRhcmdldE1vbWVudDtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3RGF0ZSA9IGRhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwoZGF0ZS5mb3JtYXQoYWN0dWFsRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhKCdkYXRlJywgZGF0ZS5mb3JtYXQoYWN0dWFsRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlFdmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkcC5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlLmNsb25lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZERhdGU6IG9sZERhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBJbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbCh1bnNldCA/ICcnIDogZGF0ZS5mb3JtYXQoYWN0dWFsRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5RXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RwLmNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0YXJnZXRNb21lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREYXRlOiBvbGREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlFdmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkcC5lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRhcmdldE1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGF0ZTogb2xkRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhpZGVzIHRoZSB3aWRnZXQuIFBvc3NpYmx5IHdpbGwgZW1pdCBkcC5oaWRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBoaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBpbiB0aGUgbWlkZGxlIG9mIGEgcGlja2VyIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHdpZGdldC5maW5kKCcuY29sbGFwc2UnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGFwc2VEYXRhID0gJCh0aGlzKS5kYXRhKCdjb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsYXBzZURhdGEgJiYgY29sbGFwc2VEYXRhLnRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Lmhhc0NsYXNzKCdidG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZScsIHBsYWNlKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5vZmYoJ2NsaWNrJywgJ1tkYXRhLWFjdGlvbl0nKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5vZmYoJ21vdXNlZG93bicsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWRnZXQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBub3RpZnlFdmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RwLmhpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQuYmx1cigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZpZXdEYXRlID0gZGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgcGFyc2VJbnB1dERhdGUgPSBmdW5jdGlvbiAoaW5wdXREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wYXJzZUlucHV0RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQoaW5wdXREYXRlKSB8fCBpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RGF0ZSA9IGdldE1vbWVudChpbnB1dERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXREYXRlID0gb3B0aW9ucy5wYXJzZUlucHV0RGF0ZShpbnB1dERhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9pbnB1dERhdGUubG9jYWxlKG9wdGlvbnMubG9jYWxlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dERhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogV2lkZ2V0IFVJIGludGVyYWN0aW9uIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgICAgIGFjdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdkZuYyA9IGRhdGVQaWNrZXJNb2Rlc1tjdXJyZW50Vmlld01vZGVdLm5hdkZuYztcclxuICAgICAgICAgICAgICAgICAgICB2aWV3RGF0ZS5hZGQoZGF0ZVBpY2tlck1vZGVzW2N1cnJlbnRWaWV3TW9kZV0ubmF2U3RlcCwgbmF2Rm5jKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVcGRhdGUobmF2Rm5jKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2Rm5jID0gZGF0ZVBpY2tlck1vZGVzW2N1cnJlbnRWaWV3TW9kZV0ubmF2Rm5jO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdEYXRlLnN1YnRyYWN0KGRhdGVQaWNrZXJNb2Rlc1tjdXJyZW50Vmlld01vZGVdLm5hdlN0ZXAsIG5hdkZuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXBkYXRlKG5hdkZuYyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHBpY2tlclN3aXRjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RlKDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNb250aDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCd0Ym9keScpLmZpbmQoJ3NwYW4nKS5pbmRleCgkKGUudGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0RhdGUubW9udGgobW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Vmlld01vZGUgPT09IG1pblZpZXdNb2RlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGRhdGUuY2xvbmUoKS55ZWFyKHZpZXdEYXRlLnllYXIoKSkubW9udGgodmlld0RhdGUubW9udGgoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kZSgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVcGRhdGUoJ00nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KCQoZS50YXJnZXQpLnRleHQoKSwgMTApIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0RhdGUueWVhcih5ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZpZXdNb2RlID09PSBtaW5WaWV3TW9kZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShkYXRlLmNsb25lKCkueWVhcih2aWV3RGF0ZS55ZWFyKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGUoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3VXBkYXRlKCdZWVlZJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdERlY2FkZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KCQoZS50YXJnZXQpLmRhdGEoJ3NlbGVjdGlvbicpLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3RGF0ZS55ZWFyKHllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Vmlld01vZGUgPT09IG1pblZpZXdNb2RlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGRhdGUuY2xvbmUoKS55ZWFyKHZpZXdEYXRlLnllYXIoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kZSgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdVcGRhdGUoJ1lZWVknKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0RGF5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXkgPSB2aWV3RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLm9sZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheS5zdWJ0cmFjdCgxLCAnTScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJy5uZXcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXkuYWRkKDEsICdNJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGRheS5kYXRlKHBhcnNlSW50KCQoZS50YXJnZXQpLnRleHQoKSwgMTApKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUaW1lKCkgJiYgIW9wdGlvbnMua2VlcE9wZW4gJiYgIW9wdGlvbnMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluY3JlbWVudEhvdXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSBkYXRlLmNsb25lKCkuYWRkKDEsICdoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQobmV3RGF0ZSwgJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluY3JlbWVudE1pbnV0ZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGF0ZSA9IGRhdGUuY2xvbmUoKS5hZGQob3B0aW9ucy5zdGVwcGluZywgJ20nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChuZXdEYXRlLCAnbScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld0RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50U2Vjb25kczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdEYXRlID0gZGF0ZS5jbG9uZSgpLmFkZCgxLCAncycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKG5ld0RhdGUsICdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUobmV3RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRIb3VyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdEYXRlID0gZGF0ZS5jbG9uZSgpLnN1YnRyYWN0KDEsICdoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQobmV3RGF0ZSwgJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGRlY3JlbWVudE1pbnV0ZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGF0ZSA9IGRhdGUuY2xvbmUoKS5zdWJ0cmFjdChvcHRpb25zLnN0ZXBwaW5nLCAnbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKG5ld0RhdGUsICdtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUobmV3RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRTZWNvbmRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSBkYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZChuZXdEYXRlLCAncycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld0RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGVyaW9kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZS5jbG9uZSgpLmFkZCgoZGF0ZS5ob3VycygpID49IDEyKSA/IC0xMiA6IDEyLCAnaCcpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGlja2VyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50ID0gJHRoaXMuY2xvc2VzdCgndWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgPSAkcGFyZW50LmZpbmQoJy5pbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSAkcGFyZW50LmZpbmQoJy5jb2xsYXBzZTpub3QoLmluKScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZURhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZCAmJiBleHBhbmRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VEYXRhID0gZXhwYW5kZWQuZGF0YSgnY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxhcHNlRGF0YSAmJiBjb2xsYXBzZURhdGEudHJhbnNpdGlvbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZC5jb2xsYXBzZSkgeyAvLyBpZiBjb2xsYXBzZSBwbHVnaW4gaXMgYXZhaWxhYmxlIHRocm91Z2ggYm9vdHN0cmFwLmpzIHRoZW4gdXNlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZC5jb2xsYXBzZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkLmNvbGxhcHNlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIG90aGVyd2lzZSBqdXN0IHRvZ2dsZSBpbiBjbGFzcyBvbiB0aGUgdHdvIHZpZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZC5yZW1vdmVDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZC5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaXMoJ3NwYW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3Mob3B0aW9ucy5pY29ucy50aW1lICsgJyAnICsgb3B0aW9ucy5pY29ucy5kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ3NwYW4nKS50b2dnbGVDbGFzcyhvcHRpb25zLmljb25zLnRpbWUgKyAnICcgKyBvcHRpb25zLmljb25zLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB1bmNvbW1lbnQgaWYgdG9nZ2xlZCBzdGF0ZSB3aWxsIGJlIHJlc3RvcmVkIGluIHNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29tcG9uZW50LmZpbmQoJ3NwYW4nKS50b2dnbGVDbGFzcyhvcHRpb25zLmljb25zLnRpbWUgKyAnICcgKyBvcHRpb25zLmljb25zLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZmluZCgnLnRpbWVwaWNrZXIgPiBkaXY6bm90KC50aW1lcGlja2VyLXBpY2tlciknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyIC50aW1lcGlja2VyLXBpY2tlcicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd0hvdXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyIC50aW1lcGlja2VyLXBpY2tlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZmluZCgnLnRpbWVwaWNrZXIgLnRpbWVwaWNrZXItaG91cnMnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHNob3dNaW51dGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyIC50aW1lcGlja2VyLXBpY2tlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZmluZCgnLnRpbWVwaWNrZXIgLnRpbWVwaWNrZXItbWludXRlcycpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd1NlY29uZHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZmluZCgnLnRpbWVwaWNrZXIgLnRpbWVwaWNrZXItcGlja2VyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5maW5kKCcudGltZXBpY2tlciAudGltZXBpY2tlci1zZWNvbmRzJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RIb3VyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQoJChlLnRhcmdldCkudGV4dCgpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlMjRIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZS5ob3VycygpID49IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG91ciAhPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZS5jbG9uZSgpLmhvdXJzKGhvdXIpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNob3dQaWNrZXIuY2FsbChwaWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RNaW51dGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZS5jbG9uZSgpLm1pbnV0ZXMocGFyc2VJbnQoJChlLnRhcmdldCkudGV4dCgpLCAxMCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNob3dQaWNrZXIuY2FsbChwaWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RTZWNvbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZS5jbG9uZSgpLnNlY29uZHMocGFyc2VJbnQoJChlLnRhcmdldCkudGV4dCgpLCAxMCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNob3dQaWNrZXIuY2FsbChwaWNrZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXHJcblxyXG4gICAgICAgICAgICAgICAgdG9kYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXlzRGF0ZSA9IGdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRvZGF5c0RhdGUsICdkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodG9kYXlzRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogaGlkZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZG9BY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5pcygnLmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zWyQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdhY3Rpb24nKV0uYXBwbHkocGlja2VyLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNob3dzIHRoZSB3aWRnZXQuIFBvc3NpYmx5IHdpbGwgZW1pdCBkcC5zaG93IGFuZCBkcC5jaGFuZ2VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE1vbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VDdXJyZW50R3JhbnVsYXJpdHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd5ZWFyJzogZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLm1vbnRoKDApLmRhdGUoMSkuaG91cnMoMCkuc2Vjb25kcygwKS5taW51dGVzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnOiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uZGF0ZSgxKS5ob3VycygwKS5zZWNvbmRzKDApLm1pbnV0ZXMoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXknOiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uaG91cnMoMCkuc2Vjb25kcygwKS5taW51dGVzKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG91cic6IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5zZWNvbmRzKDApLm1pbnV0ZXMoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdtaW51dGUnOiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnByb3AoJ2Rpc2FibGVkJykgfHwgKCFvcHRpb25zLmlnbm9yZVJlYWRvbmx5ICYmIGlucHV0LnByb3AoJ3JlYWRvbmx5JykpIHx8IHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkgIT09IHVuZGVmaW5lZCAmJiBpbnB1dC52YWwoKS50cmltKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUocGFyc2VJbnB1dERhdGUoaW5wdXQudmFsKCkudHJpbSgpKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVuc2V0ICYmIG9wdGlvbnMudXNlQ3VycmVudCAmJiAob3B0aW9ucy5pbmxpbmUgfHwgKGlucHV0LmlzKCdpbnB1dCcpICYmIGlucHV0LnZhbCgpLnRyaW0oKS5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb21lbnQgPSBnZXRNb21lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudXNlQ3VycmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbWVudCA9IHVzZUN1cnJlbnRHcmFudWxhcml0eVtvcHRpb25zLnVzZUN1cnJlbnRdKGN1cnJlbnRNb21lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShjdXJyZW50TW9tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldCA9IGdldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsbERvdygpO1xyXG4gICAgICAgICAgICAgICAgZmlsbE1vbnRocygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZGdldC5maW5kKCcudGltZXBpY2tlci1ob3VycycpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5maW5kKCcudGltZXBpY2tlci1taW51dGVzJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyLXNlY29uZHMnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93TW9kZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgcGxhY2UpO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0Lm9uKCdjbGljaycsICdbZGF0YS1hY3Rpb25dJywgZG9BY3Rpb24pOyAvLyB0aGlzIGhhbmRsZXMgY2xpY2tzIG9uIHRoZSB3aWRnZXRcclxuICAgICAgICAgICAgICAgIHdpZGdldC5vbignbW91c2Vkb3duJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Lmhhc0NsYXNzKCdidG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZvY3VzT25TaG93ICYmICFpbnB1dC5pcygnOmZvY3VzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5vdGlmeUV2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZHAuc2hvdydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTaG93cyBvciBoaWRlcyB0aGUgd2lkZ2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHdpZGdldCA/IGhpZGUoKSA6IHNob3coKSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBrZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZEtleXMgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVzc2VkTW9kaWZpZXJzID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEtleSA9IGUud2hpY2gsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5QmluZEtleXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsTW9kaWZpZXJzUHJlc3NlZCxcclxuICAgICAgICAgICAgICAgICAgICBwcmVzc2VkID0gJ3AnO1xyXG5cclxuICAgICAgICAgICAgICAgIGtleVN0YXRlW2N1cnJlbnRLZXldID0gcHJlc3NlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4IGluIGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleVN0YXRlLmhhc093blByb3BlcnR5KGluZGV4KSAmJiBrZXlTdGF0ZVtpbmRleF0gPT09IHByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3NlZEtleXMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChpbmRleCwgMTApICE9PSBjdXJyZW50S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzc2VkTW9kaWZpZXJzW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpbmRleCBpbiBvcHRpb25zLmtleUJpbmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5QmluZHMuaGFzT3duUHJvcGVydHkoaW5kZXgpICYmIHR5cGVvZiAob3B0aW9ucy5rZXlCaW5kc1tpbmRleF0pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUJpbmRLZXlzID0gaW5kZXguc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUJpbmRLZXlzLmxlbmd0aCA9PT0gcHJlc3NlZEtleXMubGVuZ3RoICYmIGtleU1hcFtjdXJyZW50S2V5XSA9PT0ga2V5QmluZEtleXNba2V5QmluZEtleXMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbE1vZGlmaWVyc1ByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpbmRleDIgPSBrZXlCaW5kS2V5cy5sZW5ndGggLSAyOyBpbmRleDIgPj0gMDsgaW5kZXgyLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShrZXlNYXBba2V5QmluZEtleXNbaW5kZXgyXV0gaW4gcHJlc3NlZE1vZGlmaWVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTW9kaWZpZXJzUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsTW9kaWZpZXJzUHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBvcHRpb25zLmtleUJpbmRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbChwaWNrZXIsIHdpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBrZXl1cCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZVtlLndoaWNoXSA9ICdyJztcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQoZS50YXJnZXQpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gdmFsID8gcGFyc2VJbnB1dERhdGUodmFsKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShwYXJzZWREYXRlKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBhdHRhY2hEYXRlUGlja2VyRWxlbWVudEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0Lm9uKHtcclxuICAgICAgICAgICAgICAgICAgICAnY2hhbmdlJzogY2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICdibHVyJzogb3B0aW9ucy5kZWJ1ZyA/ICcnIDogaGlkZSxcclxuICAgICAgICAgICAgICAgICAgICAna2V5ZG93bic6IGtleWRvd24sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleXVwJzoga2V5dXAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvY3VzJzogb3B0aW9ucy5hbGxvd0lucHV0VG9nZ2xlID8gc2hvdyA6ICcnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvY3VzJzogc2hvd1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub24oJ2NsaWNrJywgdG9nZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub24oJ21vdXNlZG93bicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGRldGFjaERhdGVQaWNrZXJFbGVtZW50RXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQub2ZmKHtcclxuICAgICAgICAgICAgICAgICAgICAnY2hhbmdlJzogY2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICdibHVyJzogYmx1cixcclxuICAgICAgICAgICAgICAgICAgICAna2V5ZG93bic6IGtleWRvd24sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleXVwJzoga2V5dXAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvY3VzJzogb3B0aW9ucy5hbGxvd0lucHV0VG9nZ2xlID8gaGlkZSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm9mZih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb2N1cyc6IHNob3dcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm9mZignY2xpY2snLCB0b2dnbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vZmYoJ21vdXNlZG93bicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluZGV4R2l2ZW5EYXRlcyA9IGZ1bmN0aW9uIChnaXZlbkRhdGVzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGdpdmVuIGVuYWJsZWREYXRlcyBhbmQgZGlzYWJsZWREYXRlcyBhcyBrZXlzLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB3YXkgd2UgY2FuIGNoZWNrIHRoZWlyIGV4aXN0ZW5jZSBpbiBPKDEpIHRpbWUgaW5zdGVhZCBvZiBsb29waW5nIHRocm91Z2ggd2hvbGUgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICAvLyAoZm9yIGV4YW1wbGU6IG9wdGlvbnMuZW5hYmxlZERhdGVzWycyMDE0LTAyLTI3J10gPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB2YXIgZ2l2ZW5EYXRlc0luZGV4ZWQgPSB7fTtcclxuICAgICAgICAgICAgICAgICQuZWFjaChnaXZlbkRhdGVzQXJyYXksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZERhdGUgPSBwYXJzZUlucHV0RGF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVuRGF0ZXNJbmRleGVkW2REYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKE9iamVjdC5rZXlzKGdpdmVuRGF0ZXNJbmRleGVkKS5sZW5ndGgpID8gZ2l2ZW5EYXRlc0luZGV4ZWQgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluZGV4R2l2ZW5Ib3VycyA9IGZ1bmN0aW9uIChnaXZlbkhvdXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGdpdmVuIGVuYWJsZWRIb3VycyBhbmQgZGlzYWJsZWRIb3VycyBhcyBrZXlzLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB3YXkgd2UgY2FuIGNoZWNrIHRoZWlyIGV4aXN0ZW5jZSBpbiBPKDEpIHRpbWUgaW5zdGVhZCBvZiBsb29waW5nIHRocm91Z2ggd2hvbGUgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICAvLyAoZm9yIGV4YW1wbGU6IG9wdGlvbnMuZW5hYmxlZEhvdXJzWycyMDE0LTAyLTI3J10gPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB2YXIgZ2l2ZW5Ib3Vyc0luZGV4ZWQgPSB7fTtcclxuICAgICAgICAgICAgICAgICQuZWFjaChnaXZlbkhvdXJzQXJyYXksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBnaXZlbkhvdXJzSW5kZXhlZFt0aGlzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoT2JqZWN0LmtleXMoZ2l2ZW5Ib3Vyc0luZGV4ZWQpLmxlbmd0aCkgPyBnaXZlbkhvdXJzSW5kZXhlZCA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdEZvcm1hdHRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgJ0wgTFQnO1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdHVhbEZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2csIGZ1bmN0aW9uIChmb3JtYXRJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdpbnB1dCA9IGRhdGUubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KGZvcm1hdElucHV0KSB8fCBmb3JtYXRJbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3aW5wdXQucmVwbGFjZSgvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLCBmdW5jdGlvbiAoZm9ybWF0SW5wdXQyKSB7IC8vdGVtcCBmaXggZm9yICM3NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUubG9jYWxlRGF0YSgpLmxvbmdEYXRlRm9ybWF0KGZvcm1hdElucHV0MikgfHwgZm9ybWF0SW5wdXQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhcnNlRm9ybWF0cyA9IG9wdGlvbnMuZXh0cmFGb3JtYXRzID8gb3B0aW9ucy5leHRyYUZvcm1hdHMuc2xpY2UoKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlRm9ybWF0cy5pbmRleE9mKGZvcm1hdCkgPCAwICYmIHBhcnNlRm9ybWF0cy5pbmRleE9mKGFjdHVhbEZvcm1hdCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGb3JtYXRzLnB1c2goYWN0dWFsRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1c2UyNEhvdXJzID0gKGFjdHVhbEZvcm1hdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2EnKSA8IDEgJiYgYWN0dWFsRm9ybWF0LnJlcGxhY2UoL1xcWy4qP1xcXS9nLCAnJykuaW5kZXhPZignaCcpIDwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlZCgneScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVmlld01vZGVOdW1iZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlZCgnTScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVmlld01vZGVOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlZCgnZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVmlld01vZGVOdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZSA9IE1hdGgubWF4KG1pblZpZXdNb2RlTnVtYmVyLCBjdXJyZW50Vmlld01vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdW5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShkYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBQdWJsaWMgQVBJIGZ1bmN0aW9uc1xyXG4gICAgICAgICAqID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSW1wb3J0YW50OiBEbyBub3QgZXhwb3NlIGRpcmVjdCByZWZlcmVuY2VzIHRvIHByaXZhdGUgb2JqZWN0cyBvciB0aGUgb3B0aW9uc1xyXG4gICAgICAgICAqIG9iamVjdCB0byB0aGUgb3V0ZXIgd29ybGQuIEFsd2F5cyByZXR1cm4gYSBjbG9uZSB3aGVuIHJldHVybmluZyB2YWx1ZXMgb3IgbWFrZVxyXG4gICAgICAgICAqIGEgY2xvbmUgd2hlbiBzZXR0aW5nIGEgcHJpdmF0ZSB2YXJpYWJsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICBwaWNrZXIuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+RGVzdHJveXMgdGhlIHdpZGdldCBhbmQgcmVtb3ZlcyBhbGwgYXR0YWNoZWQgZXZlbnQgbGlzdGVuZXJzPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgIGRldGFjaERhdGVQaWNrZXJFbGVtZW50RXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRGF0YSgnRGF0ZVRpbWVQaWNrZXInKTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVEYXRhKCdkYXRlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLnRvZ2dsZSA9IHRvZ2dsZTtcclxuXHJcbiAgICAgICAgcGlja2VyLnNob3cgPSBzaG93O1xyXG5cclxuICAgICAgICBwaWNrZXIuaGlkZSA9IGhpZGU7XHJcblxyXG4gICAgICAgIHBpY2tlci5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLy88c3VtbWFyeT5EaXNhYmxlcyB0aGUgaW5wdXQgZWxlbWVudCwgdGhlIGNvbXBvbmVudCBpcyBhdHRhY2hlZCB0bywgYnkgYWRkaW5nIGEgZGlzYWJsZWQ9XCJ0cnVlXCIgYXR0cmlidXRlIHRvIGl0LlxyXG4gICAgICAgICAgICAvLy9JZiB0aGUgd2lkZ2V0IHdhcyB2aXNpYmxlIGJlZm9yZSB0aGF0IGNhbGwgaXQgaXMgaGlkZGVuLiBQb3NzaWJseSBlbWl0cyBkcC5oaWRlPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Lmhhc0NsYXNzKCdidG4nKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+RW5hYmxlcyB0aGUgaW5wdXQgZWxlbWVudCwgdGhlIGNvbXBvbmVudCBpcyBhdHRhY2hlZCB0bywgYnkgcmVtb3ZpbmcgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gaXQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5oYXNDbGFzcygnYnRuJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuaWdub3JlUmVhZG9ubHkgPSBmdW5jdGlvbiAoaWdub3JlUmVhZG9ubHkpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmlnbm9yZVJlYWRvbmx5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWdub3JlUmVhZG9ubHkgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaWdub3JlUmVhZG9ubHkgKCkgZXhwZWN0cyBhIGJvb2xlYW4gcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5pZ25vcmVSZWFkb25seSA9IGlnbm9yZVJlYWRvbmx5O1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5vcHRpb25zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghKG5ld09wdGlvbnMgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zKCkgb3B0aW9ucyBwYXJhbWV0ZXIgc2hvdWxkIGJlIGFuIG9iamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIG9wdGlvbnMsIG5ld09wdGlvbnMpO1xyXG4gICAgICAgICAgICAkLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwaWNrZXJba2V5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyW2tleV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIGtleSArICcgaXMgbm90IHJlY29nbml6ZWQhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5kYXRlID0gZnVuY3Rpb24gKG5ld0RhdGUpIHtcclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZGF0ZVwiPlxyXG4gICAgICAgICAgICAvLy88c3VtbWFyeT5SZXR1cm5zIHRoZSBjb21wb25lbnQncyBtb2RlbCBjdXJyZW50IGRhdGUsIGEgbW9tZW50IG9iamVjdCBvciBudWxsIGlmIG5vdCBzZXQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cmV0dXJucyB0eXBlPVwiTW9tZW50XCI+ZGF0ZS5jbG9uZSgpPC9yZXR1cm5zPlxyXG4gICAgICAgICAgICAvLy88L3NpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+U2V0cyB0aGUgY29tcG9uZW50cyBtb2RlbCBjdXJyZW50IG1vbWVudCB0byBpdC4gUGFzc2luZyBhIG51bGwgdmFsdWUgdW5zZXRzIHRoZSBjb21wb25lbnRzIG1vZGVsIGN1cnJlbnQgbW9tZW50LiBQYXJzaW5nIG9mIHRoZSBuZXdEYXRlIHBhcmFtZXRlciBpcyBtYWRlIHVzaW5nIG1vbWVudCBsaWJyYXJ5IHdpdGggdGhlIG9wdGlvbnMuZm9ybWF0IGFuZCBvcHRpb25zLnVzZVN0cmljdCBjb21wb25lbnRzIGNvbmZpZ3VyYXRpb24uPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cGFyYW0gbmFtZT1cIm5ld0RhdGVcIiBsb2NpZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZGF0ZV9wOm5ld0RhdGVcIj5UYWtlcyBzdHJpbmcsIERhdGUsIG1vbWVudCwgbnVsbCBwYXJhbWV0ZXIuPC9wYXJhbT5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdEYXRlICE9PSBudWxsICYmIHR5cGVvZiBuZXdEYXRlICE9PSAnc3RyaW5nJyAmJiAhbW9tZW50LmlzTW9tZW50KG5ld0RhdGUpICYmICEobmV3RGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRlKCkgcGFyYW1ldGVyIG11c3QgYmUgb25lIG9mIFtudWxsLCBzdHJpbmcsIG1vbWVudCBvciBEYXRlXScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRWYWx1ZShuZXdEYXRlID09PSBudWxsID8gbnVsbCA6IHBhcnNlSW5wdXREYXRlKG5ld0RhdGUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuZm9ybWF0ID0gZnVuY3Rpb24gKG5ld0Zvcm1hdCkge1xyXG4gICAgICAgICAgICAvLy88c3VtbWFyeT50ZXN0IHN1PC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cGFyYW0gbmFtZT1cIm5ld0Zvcm1hdFwiPmluZm8gYWJvdXQgcGFyYTwvcGFyYW0+XHJcbiAgICAgICAgICAgIC8vLzxyZXR1cm5zIHR5cGU9XCJzdHJpbmd8Ym9vbGVhblwiPnJldHVybnMgZm9vPC9yZXR1cm5zPlxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBuZXdGb3JtYXQgIT09ICdzdHJpbmcnKSAmJiAoKHR5cGVvZiBuZXdGb3JtYXQgIT09ICdib29sZWFuJykgfHwgKG5ld0Zvcm1hdCAhPT0gZmFsc2UpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZm9ybWF0KCkgZXhwZWN0cyBhIHN0cmluZyBvciBib29sZWFuOmZhbHNlIHBhcmFtZXRlciAnICsgbmV3Rm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSBuZXdGb3JtYXQ7XHJcbiAgICAgICAgICAgIGlmIChhY3R1YWxGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgIGluaXRGb3JtYXR0aW5nKCk7IC8vIHJlaW5pdCBmb3JtYXR0aW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIudGltZVpvbmUgPSBmdW5jdGlvbiAobmV3Wm9uZSkge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudGltZVpvbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Wm9uZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25ld1pvbmUoKSBleHBlY3RzIGEgc3RyaW5nIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnRpbWVab25lID0gbmV3Wm9uZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmRheVZpZXdIZWFkZXJGb3JtYXQgPSBmdW5jdGlvbiAobmV3Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kYXlWaWV3SGVhZGVyRm9ybWF0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0Zvcm1hdCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RheVZpZXdIZWFkZXJGb3JtYXQoKSBleHBlY3RzIGEgc3RyaW5nIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmRheVZpZXdIZWFkZXJGb3JtYXQgPSBuZXdGb3JtYXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmV4dHJhRm9ybWF0cyA9IGZ1bmN0aW9uIChmb3JtYXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5leHRyYUZvcm1hdHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtYXRzICE9PSBmYWxzZSAmJiAhKGZvcm1hdHMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4dHJhRm9ybWF0cygpIGV4cGVjdHMgYW4gYXJyYXkgb3IgZmFsc2UgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXh0cmFGb3JtYXRzID0gZm9ybWF0cztcclxuICAgICAgICAgICAgaWYgKHBhcnNlRm9ybWF0cykge1xyXG4gICAgICAgICAgICAgICAgaW5pdEZvcm1hdHRpbmcoKTsgLy8gcmVpbml0IGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5kaXNhYmxlZERhdGVzID0gZnVuY3Rpb24gKGRhdGVzKSB7XHJcbiAgICAgICAgICAgIC8vLzxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCIkLmZuLmRhdGV0aW1lcGlja2VyLmRpc2FibGVkRGF0ZXNcIj5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+UmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBjdXJyZW50bHkgc2V0IGRpc2FibGVkIGRhdGVzIG9uIHRoZSBjb21wb25lbnQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cmV0dXJucyB0eXBlPVwiYXJyYXlcIj5vcHRpb25zLmRpc2FibGVkRGF0ZXM8L3JldHVybnM+XHJcbiAgICAgICAgICAgIC8vLzwvc2lnbmF0dXJlPlxyXG4gICAgICAgICAgICAvLy88c2lnbmF0dXJlPlxyXG4gICAgICAgICAgICAvLy88c3VtbWFyeT5TZXR0aW5nIHRoaXMgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlIGNvbmZpZ3VyYXRpb24uIEFsc28gY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIGNvbmZpZ3VyYXRpb24gb2ZcclxuICAgICAgICAgICAgLy8vb3B0aW9ucy5lbmFibGVkRGF0ZXMgaWYgc3VjaCBleGlzdC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLzxwYXJhbSBuYW1lPVwiZGF0ZXNcIiBsb2NpZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZGlzYWJsZWREYXRlc19wOmRhdGVzXCI+VGFrZXMgYW4gWyBzdHJpbmcgb3IgRGF0ZSBvciBtb21lbnQgXSBvZiB2YWx1ZXMgYW5kIGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3Qgb25seSBmcm9tIHRob3NlIGRheXMuPC9wYXJhbT5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9wdGlvbnMuZGlzYWJsZWREYXRlcyA/ICQuZXh0ZW5kKHt9LCBvcHRpb25zLmRpc2FibGVkRGF0ZXMpIDogb3B0aW9ucy5kaXNhYmxlZERhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRlcykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZERhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEoZGF0ZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Rpc2FibGVkRGF0ZXMoKSBleHBlY3RzIGFuIGFycmF5IHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZWREYXRlcyA9IGluZGV4R2l2ZW5EYXRlcyhkYXRlcyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZW5hYmxlZERhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5lbmFibGVkRGF0ZXMgPSBmdW5jdGlvbiAoZGF0ZXMpIHtcclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZW5hYmxlZERhdGVzXCI+XHJcbiAgICAgICAgICAgIC8vLzxzdW1tYXJ5PlJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgY3VycmVudGx5IHNldCBlbmFibGVkIGRhdGVzIG9uIHRoZSBjb21wb25lbnQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cmV0dXJucyB0eXBlPVwiYXJyYXlcIj5vcHRpb25zLmVuYWJsZWREYXRlczwvcmV0dXJucz5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzdW1tYXJ5PlNldHRpbmcgdGhpcyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUgY29uZmlndXJhdGlvbi4gQWxzbyBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgY29uZmlndXJhdGlvbiBvZiBvcHRpb25zLmRpc2FibGVkRGF0ZXMgaWYgc3VjaCBleGlzdC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLzxwYXJhbSBuYW1lPVwiZGF0ZXNcIiBsb2NpZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZW5hYmxlZERhdGVzX3A6ZGF0ZXNcIj5UYWtlcyBhbiBbIHN0cmluZyBvciBEYXRlIG9yIG1vbWVudCBdIG9mIHZhbHVlcyBhbmQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBvbmx5IGZyb20gdGhvc2UgZGF5cy48L3BhcmFtPlxyXG4gICAgICAgICAgICAvLy88L3NpZ25hdHVyZT5cclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAob3B0aW9ucy5lbmFibGVkRGF0ZXMgPyAkLmV4dGVuZCh7fSwgb3B0aW9ucy5lbmFibGVkRGF0ZXMpIDogb3B0aW9ucy5lbmFibGVkRGF0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVuYWJsZWREYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKGRhdGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmFibGVkRGF0ZXMoKSBleHBlY3RzIGFuIGFycmF5IHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZW5hYmxlZERhdGVzID0gaW5kZXhHaXZlbkRhdGVzKGRhdGVzKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZERhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBmdW5jdGlvbiAoZGF5c09mV2Vla0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBkYXlzT2ZXZWVrRGlzYWJsZWQgPT09ICdib29sZWFuJykgJiYgIWRheXNPZldlZWtEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEoZGF5c09mV2Vla0Rpc2FibGVkIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXlzT2ZXZWVrRGlzYWJsZWQoKSBleHBlY3RzIGFuIGFycmF5IHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF5c09mV2Vla0Rpc2FibGVkID0gZGF5c09mV2Vla0Rpc2FibGVkLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBwYXJzZUludChjdXJyZW50VmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPiA2IHx8IGN1cnJlbnRWYWx1ZSA8IDAgfHwgaXNOYU4oY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUuaW5kZXhPZihjdXJyZW50VmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWUucHVzaChjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgICAgIH0sIFtdKS5zb3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUN1cnJlbnQgJiYgIW9wdGlvbnMua2VlcEludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmllcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIWlzVmFsaWQoZGF0ZSwgJ2QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuYWRkKDEsICdkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWVzID09PSAzMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnVHJpZWQgMzEgdGltZXMgdG8gZmluZCBhIHZhbGlkIGRhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLm1heERhdGUgPSBmdW5jdGlvbiAobWF4RGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubWF4RGF0ZSA/IG9wdGlvbnMubWF4RGF0ZS5jbG9uZSgpIDogb3B0aW9ucy5tYXhEYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBtYXhEYXRlID09PSAnYm9vbGVhbicpICYmIG1heERhdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1heERhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heERhdGUgPT09ICdub3cnIHx8IG1heERhdGUgPT09ICdtb21lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZSA9IGdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFyc2VkRGF0ZSA9IHBhcnNlSW5wdXREYXRlKG1heERhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXJzZWREYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4RGF0ZSgpIENvdWxkIG5vdCBwYXJzZSBkYXRlIHBhcmFtZXRlcjogJyArIG1heERhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm1pbkRhdGUgJiYgcGFyc2VkRGF0ZS5pc0JlZm9yZShvcHRpb25zLm1pbkRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhEYXRlKCkgZGF0ZSBwYXJhbWV0ZXIgaXMgYmVmb3JlIG9wdGlvbnMubWluRGF0ZTogJyArIHBhcnNlZERhdGUuZm9ybWF0KGFjdHVhbEZvcm1hdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWF4RGF0ZSA9IHBhcnNlZERhdGU7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUN1cnJlbnQgJiYgIW9wdGlvbnMua2VlcEludmFsaWQgJiYgZGF0ZS5pc0FmdGVyKG1heERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShvcHRpb25zLm1heERhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0ZS5pc0FmdGVyKHBhcnNlZERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3RGF0ZSA9IHBhcnNlZERhdGUuY2xvbmUoKS5zdWJ0cmFjdChvcHRpb25zLnN0ZXBwaW5nLCAnbScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5taW5EYXRlID0gZnVuY3Rpb24gKG1pbkRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm1pbkRhdGUgPyBvcHRpb25zLm1pbkRhdGUuY2xvbmUoKSA6IG9wdGlvbnMubWluRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgbWluRGF0ZSA9PT0gJ2Jvb2xlYW4nKSAmJiBtaW5EYXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5taW5EYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWluRGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtaW5EYXRlID09PSAnbm93JyB8fCBtaW5EYXRlID09PSAnbW9tZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGUgPSBnZXRNb21lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnNlZERhdGUgPSBwYXJzZUlucHV0RGF0ZShtaW5EYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGFyc2VkRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21pbkRhdGUoKSBDb3VsZCBub3QgcGFyc2UgZGF0ZSBwYXJhbWV0ZXI6ICcgKyBtaW5EYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5tYXhEYXRlICYmIHBhcnNlZERhdGUuaXNBZnRlcihvcHRpb25zLm1heERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaW5EYXRlKCkgZGF0ZSBwYXJhbWV0ZXIgaXMgYWZ0ZXIgb3B0aW9ucy5tYXhEYXRlOiAnICsgcGFyc2VkRGF0ZS5mb3JtYXQoYWN0dWFsRm9ybWF0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5taW5EYXRlID0gcGFyc2VkRGF0ZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlQ3VycmVudCAmJiAhb3B0aW9ucy5rZWVwSW52YWxpZCAmJiBkYXRlLmlzQmVmb3JlKG1pbkRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShvcHRpb25zLm1pbkRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0ZS5pc0JlZm9yZShwYXJzZWREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdmlld0RhdGUgPSBwYXJzZWREYXRlLmNsb25lKCkuYWRkKG9wdGlvbnMuc3RlcHBpbmcsICdtJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmRlZmF1bHREYXRlID0gZnVuY3Rpb24gKGRlZmF1bHREYXRlKSB7XHJcbiAgICAgICAgICAgIC8vLzxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCIkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHREYXRlXCI+XHJcbiAgICAgICAgICAgIC8vLzxzdW1tYXJ5PlJldHVybnMgYSBtb21lbnQgd2l0aCB0aGUgb3B0aW9ucy5kZWZhdWx0RGF0ZSBvcHRpb24gY29uZmlndXJhdGlvbiBvciBmYWxzZSBpZiBub3Qgc2V0PC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cmV0dXJucyB0eXBlPVwiTW9tZW50XCI+ZGF0ZS5jbG9uZSgpPC9yZXR1cm5zPlxyXG4gICAgICAgICAgICAvLy88L3NpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+V2lsbCBzZXQgdGhlIHBpY2tlcidzIGluaXRhbCBkYXRlLiBJZiBhIGJvb2xlYW46ZmFsc2UgdmFsdWUgaXMgcGFzc2VkIHRoZSBvcHRpb25zLmRlZmF1bHREYXRlIHBhcmFtZXRlciBpcyBjbGVhcmVkLjwvc3VtbWFyeT5cclxuICAgICAgICAgICAgLy8vPHBhcmFtIG5hbWU9XCJkZWZhdWx0RGF0ZVwiIGxvY2lkPVwiJC5mbi5kYXRldGltZXBpY2tlci5kZWZhdWx0RGF0ZV9wOmRlZmF1bHREYXRlXCI+VGFrZXMgYSBzdHJpbmcsIERhdGUsIG1vbWVudCwgYm9vbGVhbjpmYWxzZTwvcGFyYW0+XHJcbiAgICAgICAgICAgIC8vLzwvc2lnbmF0dXJlPlxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERhdGUgPyBvcHRpb25zLmRlZmF1bHREYXRlLmNsb25lKCkgOiBvcHRpb25zLmRlZmF1bHREYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZGVmYXVsdERhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdERhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdERhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdERhdGUgPT09ICdub3cnIHx8IGRlZmF1bHREYXRlID09PSAnbW9tZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlID0gZ2V0TW9tZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlID0gZ2V0TW9tZW50KGRlZmF1bHREYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnNlZERhdGUgPSBwYXJzZUlucHV0RGF0ZShkZWZhdWx0RGF0ZSk7XHJcbiAgICAgICAgICAgIGlmICghcGFyc2VkRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RlZmF1bHREYXRlKCkgQ291bGQgbm90IHBhcnNlIGRhdGUgcGFyYW1ldGVyOiAnICsgZGVmYXVsdERhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZChwYXJzZWREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGVmYXVsdERhdGUoKSBkYXRlIHBhc3NlZCBpcyBpbnZhbGlkIGFjY29yZGluZyB0byBjb21wb25lbnQgc2V0dXAgdmFsaWRhdGlvbnMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0RGF0ZSA9IHBhcnNlZERhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMuZGVmYXVsdERhdGUgJiYgb3B0aW9ucy5pbmxpbmUpIHx8IGlucHV0LnZhbCgpLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG9wdGlvbnMuZGVmYXVsdERhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFtb21lbnQubG9jYWxlRGF0YShsb2NhbGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdsb2NhbGUoKSBsb2NhbGUgJyArIGxvY2FsZSArICcgaXMgbm90IGxvYWRlZCBmcm9tIG1vbWVudCBsb2NhbGVzIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZTtcclxuICAgICAgICAgICAgZGF0ZS5sb2NhbGUob3B0aW9ucy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB2aWV3RGF0ZS5sb2NhbGUob3B0aW9ucy5sb2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjdHVhbEZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdEZvcm1hdHRpbmcoKTsgLy8gcmVpbml0IGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuc3RlcHBpbmcgPSBmdW5jdGlvbiAoc3RlcHBpbmcpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnN0ZXBwaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGVwcGluZyA9IHBhcnNlSW50KHN0ZXBwaW5nLCAxMCk7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihzdGVwcGluZykgfHwgc3RlcHBpbmcgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwcGluZyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5zdGVwcGluZyA9IHN0ZXBwaW5nO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci51c2VDdXJyZW50ID0gZnVuY3Rpb24gKHVzZUN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHVzZUN1cnJlbnRPcHRpb25zID0gWyd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZSddO1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudXNlQ3VycmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdXNlQ3VycmVudCAhPT0gJ2Jvb2xlYW4nKSAmJiAodHlwZW9mIHVzZUN1cnJlbnQgIT09ICdzdHJpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndXNlQ3VycmVudCgpIGV4cGVjdHMgYSBib29sZWFuIG9yIHN0cmluZyBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVzZUN1cnJlbnQgPT09ICdzdHJpbmcnICYmIHVzZUN1cnJlbnRPcHRpb25zLmluZGV4T2YodXNlQ3VycmVudC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VzZUN1cnJlbnQoKSBleHBlY3RzIGEgc3RyaW5nIHBhcmFtZXRlciBvZiAnICsgdXNlQ3VycmVudE9wdGlvbnMuam9pbignLCAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy51c2VDdXJyZW50ID0gdXNlQ3VycmVudDtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuY29sbGFwc2UgPSBmdW5jdGlvbiAoY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbGxhcHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbGxhcHNlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbGxhcHNlKCkgZXhwZWN0cyBhIGJvb2xlYW4gcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29sbGFwc2UgPT09IGNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29sbGFwc2UgPSBjb2xsYXBzZTtcclxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmljb25zID0gZnVuY3Rpb24gKGljb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIG9wdGlvbnMuaWNvbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIShpY29ucyBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ljb25zKCkgZXhwZWN0cyBwYXJhbWV0ZXIgdG8gYmUgYW4gT2JqZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5leHRlbmQob3B0aW9ucy5pY29ucywgaWNvbnMpO1xyXG4gICAgICAgICAgICBpZiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIudG9vbHRpcHMgPSBmdW5jdGlvbiAodG9vbHRpcHMpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgb3B0aW9ucy50b29sdGlwcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghKHRvb2x0aXBzIGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9vbHRpcHMoKSBleHBlY3RzIHBhcmFtZXRlciB0byBiZSBhbiBPYmplY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkLmV4dGVuZChvcHRpb25zLnRvb2x0aXBzLCB0b29sdGlwcyk7XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci51c2VTdHJpY3QgPSBmdW5jdGlvbiAodXNlU3RyaWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy51c2VTdHJpY3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXNlU3RyaWN0ICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VzZVN0cmljdCgpIGV4cGVjdHMgYSBib29sZWFuIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudXNlU3RyaWN0ID0gdXNlU3RyaWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5zaWRlQnlTaWRlID0gZnVuY3Rpb24gKHNpZGVCeVNpZGUpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnNpZGVCeVNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2lkZUJ5U2lkZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaWRlQnlTaWRlKCkgZXhwZWN0cyBhIGJvb2xlYW4gcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRlQnlTaWRlID0gc2lkZUJ5U2lkZTtcclxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLnZpZXdNb2RlID0gZnVuY3Rpb24gKHZpZXdNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy52aWV3TW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWV3TW9kZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZpZXdNb2RlKCkgZXhwZWN0cyBhIHN0cmluZyBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZXdNb2Rlcy5pbmRleE9mKHZpZXdNb2RlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZpZXdNb2RlKCkgcGFyYW1ldGVyIG11c3QgYmUgb25lIG9mICgnICsgdmlld01vZGVzLmpvaW4oJywgJykgKyAnKSB2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWaWV3TW9kZSA9IE1hdGgubWF4KHZpZXdNb2Rlcy5pbmRleE9mKHZpZXdNb2RlKSwgbWluVmlld01vZGVOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgc2hvd01vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIudG9vbGJhclBsYWNlbWVudCA9IGZ1bmN0aW9uICh0b29sYmFyUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50b29sYmFyUGxhY2VtZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvb2xiYXJQbGFjZW1lbnQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b29sYmFyUGxhY2VtZW50KCkgZXhwZWN0cyBhIHN0cmluZyBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodG9vbGJhclBsYWNlbWVudHMuaW5kZXhPZih0b29sYmFyUGxhY2VtZW50KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Rvb2xiYXJQbGFjZW1lbnQoKSBwYXJhbWV0ZXIgbXVzdCBiZSBvbmUgb2YgKCcgKyB0b29sYmFyUGxhY2VtZW50cy5qb2luKCcsICcpICsgJykgdmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnRvb2xiYXJQbGFjZW1lbnQgPSB0b29sYmFyUGxhY2VtZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLndpZGdldFBvc2l0aW9uaW5nID0gZnVuY3Rpb24gKHdpZGdldFBvc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIG9wdGlvbnMud2lkZ2V0UG9zaXRpb25pbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKHt9KS50b1N0cmluZy5jYWxsKHdpZGdldFBvc2l0aW9uaW5nKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3dpZGdldFBvc2l0aW9uaW5nKCkgZXhwZWN0cyBhbiBvYmplY3QgdmFyaWFibGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2lkZ2V0UG9zaXRpb25pbmcuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWRnZXRQb3NpdGlvbmluZy5ob3Jpem9udGFsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3dpZGdldFBvc2l0aW9uaW5nKCkgaG9yaXpvbnRhbCB2YXJpYWJsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aWRnZXRQb3NpdGlvbmluZy5ob3Jpem9udGFsID0gd2lkZ2V0UG9zaXRpb25pbmcuaG9yaXpvbnRhbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWxNb2Rlcy5pbmRleE9mKHdpZGdldFBvc2l0aW9uaW5nLmhvcml6b250YWwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3dpZGdldFBvc2l0aW9uaW5nKCkgZXhwZWN0cyBob3Jpem9udGFsIHBhcmFtZXRlciB0byBiZSBvbmUgb2YgKCcgKyBob3Jpem9udGFsTW9kZXMuam9pbignLCAnKSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldFBvc2l0aW9uaW5nLmhvcml6b250YWwgPSB3aWRnZXRQb3NpdGlvbmluZy5ob3Jpem9udGFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXRQb3NpdGlvbmluZy52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWRnZXRQb3NpdGlvbmluZy52ZXJ0aWNhbCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd3aWRnZXRQb3NpdGlvbmluZygpIHZlcnRpY2FsIHZhcmlhYmxlIG11c3QgYmUgYSBzdHJpbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldFBvc2l0aW9uaW5nLnZlcnRpY2FsID0gd2lkZ2V0UG9zaXRpb25pbmcudmVydGljYWwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbE1vZGVzLmluZGV4T2Yod2lkZ2V0UG9zaXRpb25pbmcudmVydGljYWwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3dpZGdldFBvc2l0aW9uaW5nKCkgZXhwZWN0cyB2ZXJ0aWNhbCBwYXJhbWV0ZXIgdG8gYmUgb25lIG9mICgnICsgdmVydGljYWxNb2Rlcy5qb2luKCcsICcpICsgJyknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0UG9zaXRpb25pbmcudmVydGljYWwgPSB3aWRnZXRQb3NpdGlvbmluZy52ZXJ0aWNhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuY2FsZW5kYXJXZWVrcyA9IGZ1bmN0aW9uIChjYWxlbmRhcldlZWtzKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jYWxlbmRhcldlZWtzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGVuZGFyV2Vla3MgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FsZW5kYXJXZWVrcygpIGV4cGVjdHMgcGFyYW1ldGVyIHRvIGJlIGEgYm9vbGVhbiB2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmNhbGVuZGFyV2Vla3MgPSBjYWxlbmRhcldlZWtzO1xyXG4gICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuc2hvd1RvZGF5QnV0dG9uID0gZnVuY3Rpb24gKHNob3dUb2RheUJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2hvd1RvZGF5QnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNob3dUb2RheUJ1dHRvbiAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaG93VG9kYXlCdXR0b24oKSBleHBlY3RzIGEgYm9vbGVhbiBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5zaG93VG9kYXlCdXR0b24gPSBzaG93VG9kYXlCdXR0b247XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5zaG93Q2xlYXIgPSBmdW5jdGlvbiAoc2hvd0NsZWFyKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5zaG93Q2xlYXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2hvd0NsZWFyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Nob3dDbGVhcigpIGV4cGVjdHMgYSBib29sZWFuIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnNob3dDbGVhciA9IHNob3dDbGVhcjtcclxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLndpZGdldFBhcmVudCA9IGZ1bmN0aW9uICh3aWRnZXRQYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLndpZGdldFBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWRnZXRQYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB3aWRnZXRQYXJlbnQgPSAkKHdpZGdldFBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aWRnZXRQYXJlbnQgIT09IG51bGwgJiYgKHR5cGVvZiB3aWRnZXRQYXJlbnQgIT09ICdzdHJpbmcnICYmICEod2lkZ2V0UGFyZW50IGluc3RhbmNlb2YgJCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd3aWRnZXRQYXJlbnQoKSBleHBlY3RzIGEgc3RyaW5nIG9yIGEgalF1ZXJ5IG9iamVjdCBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy53aWRnZXRQYXJlbnQgPSB3aWRnZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5rZWVwT3BlbiA9IGZ1bmN0aW9uIChrZWVwT3Blbikge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMua2VlcE9wZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2VlcE9wZW4gIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigna2VlcE9wZW4oKSBleHBlY3RzIGEgYm9vbGVhbiBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5rZWVwT3BlbiA9IGtlZXBPcGVuO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5mb2N1c09uU2hvdyA9IGZ1bmN0aW9uIChmb2N1c09uU2hvdykge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm9jdXNPblNob3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm9jdXNPblNob3cgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZm9jdXNPblNob3coKSBleHBlY3RzIGEgYm9vbGVhbiBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5mb2N1c09uU2hvdyA9IGZvY3VzT25TaG93O1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5pbmxpbmUgPSBmdW5jdGlvbiAoaW5saW5lKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5pbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5saW5lICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lubGluZSgpIGV4cGVjdHMgYSBib29sZWFuIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmlubGluZSA9IGlubGluZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmtleUJpbmRzID0gZnVuY3Rpb24gKGtleUJpbmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5rZXlCaW5kcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5rZXlCaW5kcyA9IGtleUJpbmRzO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5nZXRNb21lbnQgPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9tZW50KGQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5kZWJ1ZyA9IGZ1bmN0aW9uIChkZWJ1Zykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlYnVnICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RlYnVnKCkgZXhwZWN0cyBhIGJvb2xlYW4gcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGVidWcgPSBkZWJ1ZztcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuYWxsb3dJbnB1dFRvZ2dsZSA9IGZ1bmN0aW9uIChhbGxvd0lucHV0VG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5hbGxvd0lucHV0VG9nZ2xlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFsbG93SW5wdXRUb2dnbGUgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWxsb3dJbnB1dFRvZ2dsZSgpIGV4cGVjdHMgYSBib29sZWFuIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93SW5wdXRUb2dnbGUgPSBhbGxvd0lucHV0VG9nZ2xlO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5zaG93Q2xvc2UgPSBmdW5jdGlvbiAoc2hvd0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5zaG93Q2xvc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2hvd0Nsb3NlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Nob3dDbG9zZSgpIGV4cGVjdHMgYSBib29sZWFuIHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnNob3dDbG9zZSA9IHNob3dDbG9zZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIua2VlcEludmFsaWQgPSBmdW5jdGlvbiAoa2VlcEludmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmtlZXBJbnZhbGlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtlZXBJbnZhbGlkICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2tlZXBJbnZhbGlkKCkgZXhwZWN0cyBhIGJvb2xlYW4gcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5rZWVwSW52YWxpZCA9IGtlZXBJbnZhbGlkO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBpY2tlci5kYXRlcGlja2VySW5wdXQgPSBmdW5jdGlvbiAoZGF0ZXBpY2tlcklucHV0KSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kYXRlcGlja2VySW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0ZXBpY2tlcklucHV0ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0ZXBpY2tlcklucHV0KCkgZXhwZWN0cyBhIHN0cmluZyBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRlcGlja2VySW5wdXQgPSBkYXRlcGlja2VySW5wdXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLnBhcnNlSW5wdXREYXRlID0gZnVuY3Rpb24gKHBhcnNlSW5wdXREYXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5wYXJzZUlucHV0RGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZUlucHV0RGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VJbnB1dERhdGUoKSBzaG9sdWQgYmUgYXMgZnVuY3Rpb24nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wYXJzZUlucHV0RGF0ZSA9IHBhcnNlSW5wdXREYXRlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwaWNrZXIuZGlzYWJsZWRUaW1lSW50ZXJ2YWxzID0gZnVuY3Rpb24gKGRpc2FibGVkVGltZUludGVydmFscykge1xyXG4gICAgICAgICAgICAvLy88c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiJC5mbi5kYXRldGltZXBpY2tlci5kaXNhYmxlZFRpbWVJbnRlcnZhbHNcIj5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+UmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBjdXJyZW50bHkgc2V0IGRpc2FibGVkIGRhdGVzIG9uIHRoZSBjb21wb25lbnQuPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAvLy88cmV0dXJucyB0eXBlPVwiYXJyYXlcIj5vcHRpb25zLmRpc2FibGVkVGltZUludGVydmFsczwvcmV0dXJucz5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzdW1tYXJ5PlNldHRpbmcgdGhpcyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUgY29uZmlndXJhdGlvbi4gQWxzbyBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgY29uZmlndXJhdGlvbiBvZlxyXG4gICAgICAgICAgICAvLy9vcHRpb25zLmVuYWJsZWREYXRlcyBpZiBzdWNoIGV4aXN0Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgLy8vPHBhcmFtIG5hbWU9XCJkYXRlc1wiIGxvY2lkPVwiJC5mbi5kYXRldGltZXBpY2tlci5kaXNhYmxlZFRpbWVJbnRlcnZhbHNfcDpkYXRlc1wiPlRha2VzIGFuIFsgc3RyaW5nIG9yIERhdGUgb3IgbW9tZW50IF0gb2YgdmFsdWVzIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IG9ubHkgZnJvbSB0aG9zZSBkYXlzLjwvcGFyYW0+XHJcbiAgICAgICAgICAgIC8vLzwvc2lnbmF0dXJlPlxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChvcHRpb25zLmRpc2FibGVkVGltZUludGVydmFscyA/ICQuZXh0ZW5kKHt9LCBvcHRpb25zLmRpc2FibGVkVGltZUludGVydmFscykgOiBvcHRpb25zLmRpc2FibGVkVGltZUludGVydmFscyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWRUaW1lSW50ZXJ2YWxzKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpc2FibGVkVGltZUludGVydmFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKGRpc2FibGVkVGltZUludGVydmFscyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGlzYWJsZWRUaW1lSW50ZXJ2YWxzKCkgZXhwZWN0cyBhbiBhcnJheSBwYXJhbWV0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLmRpc2FibGVkVGltZUludGVydmFscyA9IGRpc2FibGVkVGltZUludGVydmFscztcclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmRpc2FibGVkSG91cnMgPSBmdW5jdGlvbiAoaG91cnMpIHtcclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIiQuZm4uZGF0ZXRpbWVwaWNrZXIuZGlzYWJsZWRIb3Vyc1wiPlxyXG4gICAgICAgICAgICAvLy88c3VtbWFyeT5SZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIGN1cnJlbnRseSBzZXQgZGlzYWJsZWQgaG91cnMgb24gdGhlIGNvbXBvbmVudC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLzxyZXR1cm5zIHR5cGU9XCJhcnJheVwiPm9wdGlvbnMuZGlzYWJsZWRIb3VyczwvcmV0dXJucz5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzaWduYXR1cmU+XHJcbiAgICAgICAgICAgIC8vLzxzdW1tYXJ5PlNldHRpbmcgdGhpcyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUgY29uZmlndXJhdGlvbi4gQWxzbyBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgY29uZmlndXJhdGlvbiBvZlxyXG4gICAgICAgICAgICAvLy9vcHRpb25zLmVuYWJsZWRIb3VycyBpZiBzdWNoIGV4aXN0Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgLy8vPHBhcmFtIG5hbWU9XCJob3Vyc1wiIGxvY2lkPVwiJC5mbi5kYXRldGltZXBpY2tlci5kaXNhYmxlZEhvdXJzX3A6aG91cnNcIj5UYWtlcyBhbiBbIGludCBdIG9mIHZhbHVlcyBhbmQgZGlzYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBvbmx5IGZyb20gdGhvc2UgaG91cnMuPC9wYXJhbT5cclxuICAgICAgICAgICAgLy8vPC9zaWduYXR1cmU+XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9wdGlvbnMuZGlzYWJsZWRIb3VycyA/ICQuZXh0ZW5kKHt9LCBvcHRpb25zLmRpc2FibGVkSG91cnMpIDogb3B0aW9ucy5kaXNhYmxlZEhvdXJzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFob3Vycykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZEhvdXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEoaG91cnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Rpc2FibGVkSG91cnMoKSBleHBlY3RzIGFuIGFycmF5IHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZWRIb3VycyA9IGluZGV4R2l2ZW5Ib3Vycyhob3Vycyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZW5hYmxlZEhvdXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUN1cnJlbnQgJiYgIW9wdGlvbnMua2VlcEludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmllcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIWlzVmFsaWQoZGF0ZSwgJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuYWRkKDEsICdoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWVzID09PSAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnVHJpZWQgMjQgdGltZXMgdG8gZmluZCBhIHZhbGlkIGRhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGlja2VyLmVuYWJsZWRIb3VycyA9IGZ1bmN0aW9uIChob3Vycykge1xyXG4gICAgICAgICAgICAvLy88c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiJC5mbi5kYXRldGltZXBpY2tlci5lbmFibGVkSG91cnNcIj5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+UmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBjdXJyZW50bHkgc2V0IGVuYWJsZWQgaG91cnMgb24gdGhlIGNvbXBvbmVudC48L3N1bW1hcnk+XHJcbiAgICAgICAgICAgIC8vLzxyZXR1cm5zIHR5cGU9XCJhcnJheVwiPm9wdGlvbnMuZW5hYmxlZEhvdXJzPC9yZXR1cm5zPlxyXG4gICAgICAgICAgICAvLy88L3NpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHNpZ25hdHVyZT5cclxuICAgICAgICAgICAgLy8vPHN1bW1hcnk+U2V0dGluZyB0aGlzIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSBjb25maWd1cmF0aW9uLiBBbHNvIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBjb25maWd1cmF0aW9uIG9mIG9wdGlvbnMuZGlzYWJsZWRIb3VycyBpZiBzdWNoIGV4aXN0Ljwvc3VtbWFyeT5cclxuICAgICAgICAgICAgLy8vPHBhcmFtIG5hbWU9XCJob3Vyc1wiIGxvY2lkPVwiJC5mbi5kYXRldGltZXBpY2tlci5lbmFibGVkSG91cnNfcDpob3Vyc1wiPlRha2VzIGFuIFsgaW50IF0gb2YgdmFsdWVzIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IG9ubHkgZnJvbSB0aG9zZSBob3Vycy48L3BhcmFtPlxyXG4gICAgICAgICAgICAvLy88L3NpZ25hdHVyZT5cclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAob3B0aW9ucy5lbmFibGVkSG91cnMgPyAkLmV4dGVuZCh7fSwgb3B0aW9ucy5lbmFibGVkSG91cnMpIDogb3B0aW9ucy5lbmFibGVkSG91cnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhvdXJzKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVuYWJsZWRIb3VycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKGhvdXJzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmFibGVkSG91cnMoKSBleHBlY3RzIGFuIGFycmF5IHBhcmFtZXRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZW5hYmxlZEhvdXJzID0gaW5kZXhHaXZlbkhvdXJzKGhvdXJzKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZEhvdXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUN1cnJlbnQgJiYgIW9wdGlvbnMua2VlcEludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmllcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIWlzVmFsaWQoZGF0ZSwgJ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuYWRkKDEsICdoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWVzID09PSAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnVHJpZWQgMjQgdGltZXMgdG8gZmluZCBhIHZhbGlkIGRhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBtb2RlbCBjdXJyZW50IHZpZXdEYXRlLCBhIG1vbWVudCBvYmplY3Qgb3IgbnVsbCBpZiBub3Qgc2V0LiBQYXNzaW5nIGEgbnVsbCB2YWx1ZSB1bnNldHMgdGhlIGNvbXBvbmVudHMgbW9kZWwgY3VycmVudCBtb21lbnQuIFBhcnNpbmcgb2YgdGhlIG5ld0RhdGUgcGFyYW1ldGVyIGlzIG1hZGUgdXNpbmcgbW9tZW50IGxpYnJhcnkgd2l0aCB0aGUgb3B0aW9ucy5mb3JtYXQgYW5kIG9wdGlvbnMudXNlU3RyaWN0IGNvbXBvbmVudHMgY29uZmlndXJhdGlvbi5cclxuICAgICAgICAgKiBAcGFyYW0ge1Rha2VzIHN0cmluZywgdmlld0RhdGUsIG1vbWVudCwgbnVsbCBwYXJhbWV0ZXIufSBuZXdEYXRlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZpZXdEYXRlLmNsb25lKCl9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGlja2VyLnZpZXdEYXRlID0gZnVuY3Rpb24gKG5ld0RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5ld0RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdEYXRlID0gZGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdEYXRlICE9PSAnc3RyaW5nJyAmJiAhbW9tZW50LmlzTW9tZW50KG5ld0RhdGUpICYmICEobmV3RGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aWV3RGF0ZSgpIHBhcmFtZXRlciBtdXN0IGJlIG9uZSBvZiBbc3RyaW5nLCBtb21lbnQgb3IgRGF0ZV0nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmlld0RhdGUgPSBwYXJzZUlucHV0RGF0ZShuZXdEYXRlKTtcclxuICAgICAgICAgICAgdmlld1VwZGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemluZyBlbGVtZW50IGFuZCBjb21wb25lbnQgYXR0cmlidXRlc1xyXG4gICAgICAgIGlmIChlbGVtZW50LmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgIGlucHV0ID0gZWxlbWVudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dCA9IGVsZW1lbnQuZmluZChvcHRpb25zLmRhdGVwaWNrZXJJbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gZWxlbWVudC5maW5kKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1MgY2xhc3MgXCInICsgb3B0aW9ucy5kYXRlcGlja2VySW5wdXQgKyAnXCIgY2Fubm90IGJlIGFwcGxpZWQgdG8gbm9uIGlucHV0IGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ2lucHV0LWdyb3VwJykpIHtcclxuICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGVyZSBpcyBtb3JlIHRoZW4gb25lICdpbnB1dC1ncm91cC1hZGRvbicgSXNzdWUgIzQ4XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmZpbmQoJy5kYXRlcGlja2VyYnV0dG9uJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBlbGVtZW50LmZpbmQoJy5pbnB1dC1ncm91cC1hZGRvbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gZWxlbWVudC5maW5kKCcuZGF0ZXBpY2tlcmJ1dHRvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5saW5lICYmICFpbnB1dC5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIERhdGVUaW1lUGlja2VyIHdpdGhvdXQgYW4gaW5wdXQgZWxlbWVudCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzIGZvciBkYXRlIGhlcmUgbm93IGluc3RlYWQgb2YgaW4gdmFyIGRlY2xhcmF0aW9uXHJcbiAgICAgICAgZGF0ZSA9IGdldE1vbWVudCgpO1xyXG4gICAgICAgIHZpZXdEYXRlID0gZGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0cnVlLCBvcHRpb25zLCBkYXRhVG9PcHRpb25zKCkpO1xyXG5cclxuICAgICAgICBwaWNrZXIub3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICAgICAgaW5pdEZvcm1hdHRpbmcoKTtcclxuXHJcbiAgICAgICAgYXR0YWNoRGF0ZVBpY2tlckVsZW1lbnRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnByb3AoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcGlja2VyLmRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0LmlzKCdpbnB1dCcpICYmIGlucHV0LnZhbCgpLnRyaW0oKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgc2V0VmFsdWUocGFyc2VJbnB1dERhdGUoaW5wdXQudmFsKCkudHJpbSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZGVmYXVsdERhdGUgJiYgaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKG9wdGlvbnMuZGVmYXVsdERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGlja2VyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqXHJcbiAgICAgKiBqUXVlcnkgcGx1Z2luIGNvbnN0cnVjdG9yIGFuZCBkZWZhdWx0cyBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNlZSAoaHR0cDovL2pxdWVyeS5jb20vKS5cclxuICAgICogQG5hbWUgalF1ZXJ5XHJcbiAgICAqIEBjbGFzc1xyXG4gICAgKiBTZWUgdGhlIGpRdWVyeSBMaWJyYXJ5ICAoaHR0cDovL2pxdWVyeS5jb20vKSBmb3IgZnVsbCBkZXRhaWxzLiAgVGhpcyBqdXN0XHJcbiAgICAqIGRvY3VtZW50cyB0aGUgZnVuY3Rpb24gYW5kIGNsYXNzZXMgdGhhdCBhcmUgYWRkZWQgdG8galF1ZXJ5IGJ5IHRoaXMgcGx1Zy1pbi5cclxuICAgICovXHJcbiAgICAvKipcclxuICAgICAqIFNlZSAoaHR0cDovL2pxdWVyeS5jb20vKVxyXG4gICAgICogQG5hbWUgZm5cclxuICAgICAqIEBjbGFzc1xyXG4gICAgICogU2VlIHRoZSBqUXVlcnkgTGlicmFyeSAgKGh0dHA6Ly9qcXVlcnkuY29tLykgZm9yIGZ1bGwgZGV0YWlscy4gIFRoaXMganVzdFxyXG4gICAgICogZG9jdW1lbnRzIHRoZSBmdW5jdGlvbiBhbmQgY2xhc3NlcyB0aGF0IGFyZSBhZGRlZCB0byBqUXVlcnkgYnkgdGhpcyBwbHVnLWluLlxyXG4gICAgICogQG1lbWJlck9mIGpRdWVyeVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgY29tbWVudHNcclxuICAgICAqIEBjbGFzcyBkYXRldGltZXBpY2tlclxyXG4gICAgICogQG1lbWJlck9mIGpRdWVyeS5mblxyXG4gICAgICovXHJcbiAgICAkLmZuLmRhdGV0aW1lcGlja2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG4gICAgICAgICAgICBpc0luc3RhbmNlID0gdHJ1ZSxcclxuICAgICAgICAgICAgdGhpc01ldGhvZHMgPSBbJ2Rlc3Ryb3knLCAnaGlkZScsICdzaG93JywgJ3RvZ2dsZSddLFxyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoISR0aGlzLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBwcml2YXRlIGNvcHkgb2YgdGhlIGRlZmF1bHRzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF9vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4uZGF0ZXRpbWVwaWNrZXIuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ0RhdGVUaW1lUGlja2VyJywgZGF0ZVRpbWVQaWNrZXIoJHRoaXMsIF9vcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gJHRoaXMuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcihcIicgKyBvcHRpb25zICsgJ1wiKSBtZXRob2Qgd2FzIGNhbGxlZCBvbiBhbiBlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIERhdGVUaW1lUGlja2VyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpc0luc3RhbmNlID0gcmV0dXJuVmFsdWUgPT09IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0luc3RhbmNlIHx8ICQuaW5BcnJheShvcHRpb25zLCB0aGlzTWV0aG9kcykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIGZvciBEYXRlVGltZVBpY2tlcjogJyArIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHRzID0ge1xyXG4gICAgICAgIHRpbWVab25lOiAnJyxcclxuICAgICAgICBmb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGRheVZpZXdIZWFkZXJGb3JtYXQ6ICdNTU1NIFlZWVknLFxyXG4gICAgICAgIGV4dHJhRm9ybWF0czogZmFsc2UsXHJcbiAgICAgICAgc3RlcHBpbmc6IDEsXHJcbiAgICAgICAgbWluRGF0ZTogZmFsc2UsXHJcbiAgICAgICAgbWF4RGF0ZTogZmFsc2UsXHJcbiAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcclxuICAgICAgICBjb2xsYXBzZTogdHJ1ZSxcclxuICAgICAgICBsb2NhbGU6IG1vbWVudC5sb2NhbGUoKSxcclxuICAgICAgICBkZWZhdWx0RGF0ZTogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZWREYXRlczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlZERhdGVzOiBmYWxzZSxcclxuICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICB0aW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lJyxcclxuICAgICAgICAgICAgZGF0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXInLFxyXG4gICAgICAgICAgICB1cDogJ2dseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgIGRvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93bicsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICBuZXh0OiAnZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0JyxcclxuICAgICAgICAgICAgdG9kYXk6ICdnbHlwaGljb24gZ2x5cGhpY29uLXNjcmVlbnNob3QnLFxyXG4gICAgICAgICAgICBjbGVhcjogJ2dseXBoaWNvbiBnbHlwaGljb24tdHJhc2gnLFxyXG4gICAgICAgICAgICBjbG9zZTogJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgdG9kYXk6ICdHbyB0byB0b2RheScsXHJcbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXIgc2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgY2xvc2U6ICdDbG9zZSB0aGUgcGlja2VyJyxcclxuICAgICAgICAgICAgc2VsZWN0TW9udGg6ICdTZWxlY3QgTW9udGgnLFxyXG4gICAgICAgICAgICBwcmV2TW9udGg6ICdQcmV2aW91cyBNb250aCcsXHJcbiAgICAgICAgICAgIG5leHRNb250aDogJ05leHQgTW9udGgnLFxyXG4gICAgICAgICAgICBzZWxlY3RZZWFyOiAnU2VsZWN0IFllYXInLFxyXG4gICAgICAgICAgICBwcmV2WWVhcjogJ1ByZXZpb3VzIFllYXInLFxyXG4gICAgICAgICAgICBuZXh0WWVhcjogJ05leHQgWWVhcicsXHJcbiAgICAgICAgICAgIHNlbGVjdERlY2FkZTogJ1NlbGVjdCBEZWNhZGUnLFxyXG4gICAgICAgICAgICBwcmV2RGVjYWRlOiAnUHJldmlvdXMgRGVjYWRlJyxcclxuICAgICAgICAgICAgbmV4dERlY2FkZTogJ05leHQgRGVjYWRlJyxcclxuICAgICAgICAgICAgcHJldkNlbnR1cnk6ICdQcmV2aW91cyBDZW50dXJ5JyxcclxuICAgICAgICAgICAgbmV4dENlbnR1cnk6ICdOZXh0IENlbnR1cnknLFxyXG4gICAgICAgICAgICBwaWNrSG91cjogJ1BpY2sgSG91cicsXHJcbiAgICAgICAgICAgIGluY3JlbWVudEhvdXI6ICdJbmNyZW1lbnQgSG91cicsXHJcbiAgICAgICAgICAgIGRlY3JlbWVudEhvdXI6ICdEZWNyZW1lbnQgSG91cicsXHJcbiAgICAgICAgICAgIHBpY2tNaW51dGU6ICdQaWNrIE1pbnV0ZScsXHJcbiAgICAgICAgICAgIGluY3JlbWVudE1pbnV0ZTogJ0luY3JlbWVudCBNaW51dGUnLFxyXG4gICAgICAgICAgICBkZWNyZW1lbnRNaW51dGU6ICdEZWNyZW1lbnQgTWludXRlJyxcclxuICAgICAgICAgICAgcGlja1NlY29uZDogJ1BpY2sgU2Vjb25kJyxcclxuICAgICAgICAgICAgaW5jcmVtZW50U2Vjb25kOiAnSW5jcmVtZW50IFNlY29uZCcsXHJcbiAgICAgICAgICAgIGRlY3JlbWVudFNlY29uZDogJ0RlY3JlbWVudCBTZWNvbmQnLFxyXG4gICAgICAgICAgICB0b2dnbGVQZXJpb2Q6ICdUb2dnbGUgUGVyaW9kJyxcclxuICAgICAgICAgICAgc2VsZWN0VGltZTogJ1NlbGVjdCBUaW1lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlU3RyaWN0OiBmYWxzZSxcclxuICAgICAgICBzaWRlQnlTaWRlOiBmYWxzZSxcclxuICAgICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxyXG4gICAgICAgIHZpZXdNb2RlOiAnZGF5cycsXHJcbiAgICAgICAgdG9vbGJhclBsYWNlbWVudDogJ2RlZmF1bHQnLFxyXG4gICAgICAgIHNob3dUb2RheUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd0NsZWFyOiBmYWxzZSxcclxuICAgICAgICBzaG93Q2xvc2U6IGZhbHNlLFxyXG4gICAgICAgIHdpZGdldFBvc2l0aW9uaW5nOiB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6ICdhdXRvJyxcclxuICAgICAgICAgICAgdmVydGljYWw6ICdhdXRvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkZ2V0UGFyZW50OiBudWxsLFxyXG4gICAgICAgIGlnbm9yZVJlYWRvbmx5OiBmYWxzZSxcclxuICAgICAgICBrZWVwT3BlbjogZmFsc2UsXHJcbiAgICAgICAgZm9jdXNPblNob3c6IHRydWUsXHJcbiAgICAgICAgaW5saW5lOiBmYWxzZSxcclxuICAgICAgICBrZWVwSW52YWxpZDogZmFsc2UsXHJcbiAgICAgICAgZGF0ZXBpY2tlcklucHV0OiAnLmRhdGVwaWNrZXJpbnB1dCcsXHJcbiAgICAgICAga2V5QmluZHM6IHtcclxuICAgICAgICAgICAgdXA6IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmRhdGUoKSB8fCB0aGlzLmdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlcicpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5zdWJ0cmFjdCg3LCAnZCcpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5hZGQodGhpcy5zdGVwcGluZygpLCAnbScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG93bjogZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuZGF0ZSgpIHx8IHRoaXMuZ2V0TW9tZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0LmZpbmQoJy5kYXRlcGlja2VyJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoZC5jbG9uZSgpLmFkZCg3LCAnZCcpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLnN0ZXBwaW5nKCksICdtJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnY29udHJvbCB1cCc6IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmRhdGUoKSB8fCB0aGlzLmdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlcicpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5zdWJ0cmFjdCgxLCAneScpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5hZGQoMSwgJ2gnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjb250cm9sIGRvd24nOiBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5kYXRlKCkgfHwgdGhpcy5nZXRNb21lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuZmluZCgnLmRhdGVwaWNrZXInKS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZShkLmNsb25lKCkuYWRkKDEsICd5JykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoZC5jbG9uZSgpLnN1YnRyYWN0KDEsICdoJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWZ0OiBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5kYXRlKCkgfHwgdGhpcy5nZXRNb21lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuZmluZCgnLmRhdGVwaWNrZXInKS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZShkLmNsb25lKCkuc3VidHJhY3QoMSwgJ2QnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5kYXRlKCkgfHwgdGhpcy5nZXRNb21lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuZmluZCgnLmRhdGVwaWNrZXInKS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZShkLmNsb25lKCkuYWRkKDEsICdkJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlVXA6IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmRhdGUoKSB8fCB0aGlzLmdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlcicpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnTScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZURvd246IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmRhdGUoKSB8fCB0aGlzLmdldE1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldC5maW5kKCcuZGF0ZXBpY2tlcicpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKGQuY2xvbmUoKS5hZGQoMSwgJ00nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXNjYXBlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy90YWI6IGZ1bmN0aW9uICh3aWRnZXQpIHsgLy90aGlzIGJyZWFrIHRoZSBmbG93IG9mIHRoZSBmb3JtLiBkaXNhYmxpbmcgZm9yIG5vd1xyXG4gICAgICAgICAgICAvLyAgICB2YXIgdG9nZ2xlID0gd2lkZ2V0LmZpbmQoJy5waWNrZXItc3dpdGNoIGFbZGF0YS1hY3Rpb249XCJ0b2dnbGVQaWNrZXJcIl0nKTtcclxuICAgICAgICAgICAgLy8gICAgaWYodG9nZ2xlLmxlbmd0aCA+IDApIHRvZ2dsZS5jbGljaygpO1xyXG4gICAgICAgICAgICAvL30sXHJcbiAgICAgICAgICAgICdjb250cm9sIHNwYWNlJzogZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0LmZpbmQoJy50aW1lcGlja2VyJykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZmluZCgnLmJ0bltkYXRhLWFjdGlvbj1cInRvZ2dsZVBlcmlvZFwiXScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSh0aGlzLmdldE1vbWVudCgpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93SW5wdXRUb2dnbGU6IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVkVGltZUludGVydmFsczogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZWRIb3VyczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlZEhvdXJzOiBmYWxzZSxcclxuICAgICAgICB2aWV3RGF0ZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICQuZm4uZGF0ZXRpbWVwaWNrZXI7XHJcbn0pKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VvbmFzZGFuLWJvb3RzdHJhcC1kYXRldGltZXBpY2tlci9zcmMvanMvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxODIiXSwic291cmNlUm9vdCI6IiJ9