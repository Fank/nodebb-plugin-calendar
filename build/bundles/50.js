webpackJsonp([50],{

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var mk = moment.defineLocale('mk', {
    months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Денес во] LT',
        nextDay : '[Утре во] LT',
        nextWeek : '[Во] dddd [во] LT',
        lastDay : '[Вчера во] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Изминатиот] dddd [во] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'после %s',
        past : 'пред %s',
        s : 'неколку секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дена',
        M : 'месец',
        MM : '%d месеци',
        y : 'година',
        yy : '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return mk;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbWsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE1hY2Vkb25pYW4gW21rXVxuLy8hIGF1dGhvciA6IEJvcmlzbGF2IE1pY2tvdiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9CMGswXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIG1rID0gbW9tZW50LmRlZmluZUxvY2FsZSgnbWsnLCB7XG4gICAgbW9udGhzIDogJ9GY0LDQvdGD0LDRgNC4X9GE0LXQstGA0YPQsNGA0Lhf0LzQsNGA0YJf0LDQv9GA0LjQu1/QvNCw0Zhf0ZjRg9C90Lhf0ZjRg9C70Lhf0LDQstCz0YPRgdGCX9GB0LXQv9GC0LXQvNCy0YDQuF/QvtC60YLQvtC80LLRgNC4X9C90L7QtdC80LLRgNC4X9C00LXQutC10LzQstGA0LgnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn0ZjQsNC9X9GE0LXQsl/QvNCw0YBf0LDQv9GAX9C80LDRmF/RmNGD0L1f0ZjRg9C7X9Cw0LLQs1/RgdC10L9f0L7QutGCX9C90L7QtV/QtNC10LonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn0L3QtdC00LXQu9CwX9C/0L7QvdC10LTQtdC70L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00LBf0YfQtdGC0LLRgNGC0L7Qul/Qv9C10YLQvtC6X9GB0LDQsdC+0YLQsCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ9C90LXQtF/Qv9C+0L1f0LLRgtC+X9GB0YDQtV/Rh9C10YJf0L/QtdGCX9GB0LDQsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfQvWVf0L9vX9Cy0YJf0YHRgF/Rh9C1X9C/0LVf0YFhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMIDogJ0QuTU0uWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdb0JTQtdC90LXRgSDQstC+XSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW9Cj0YLRgNC1INCy0L5dIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW9CS0L5dIGRkZGQgW9Cy0L5dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdb0JLRh9C10YDQsCDQstC+XSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CY0LfQvNC40L3QsNGC0LDRgtCwXSBkZGRkIFvQstC+XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vQmNC30LzQuNC90LDRgtC40L7Rgl0gZGRkZCBb0LLQvl0gTFQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAn0L/QvtGB0LvQtSAlcycsXG4gICAgICAgIHBhc3QgOiAn0L/RgNC10LQgJXMnLFxuICAgICAgICBzIDogJ9C90LXQutC+0LvQutGDINGB0LXQutGD0L3QtNC4JyxcbiAgICAgICAgbSA6ICfQvNC40L3Rg9GC0LAnLFxuICAgICAgICBtbSA6ICclZCDQvNC40L3Rg9GC0LgnLFxuICAgICAgICBoIDogJ9GH0LDRgScsXG4gICAgICAgIGhoIDogJyVkINGH0LDRgdCwJyxcbiAgICAgICAgZCA6ICfQtNC10L0nLFxuICAgICAgICBkZCA6ICclZCDQtNC10L3QsCcsXG4gICAgICAgIE0gOiAn0LzQtdGB0LXRhicsXG4gICAgICAgIE1NIDogJyVkINC80LXRgdC10YbQuCcsXG4gICAgICAgIHkgOiAn0LPQvtC00LjQvdCwJyxcbiAgICAgICAgeXkgOiAnJWQg0LPQvtC00LjQvdC4J1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQtdCyfNC10L180YLQuHzQstC4fNGA0Lh80LzQuCkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIGxhc3QyRGlnaXRzID0gbnVtYmVyICUgMTAwO1xuICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3QtdCyJztcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LXQvSc7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdCy0LgnO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0YDQuCc7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LzQuCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIG1rO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvbWsuanNcbi8vIG1vZHVsZSBpZCA9IDcyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUwIl0sInNvdXJjZVJvb3QiOiIifQ==