webpackJsonp([107],{

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var bg = moment.defineLocale('bg', {
    months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Днес в] LT',
        nextDay : '[Утре в] LT',
        nextWeek : 'dddd [в] LT',
        lastDay : '[Вчера в] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'след %s',
        past : 'преди %s',
        s : 'няколко секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дни',
        M : 'месец',
        MM : '%d месеца',
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

return bg;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBCdWxnYXJpYW4gW2JnXVxuLy8hIGF1dGhvciA6IEtyYXNlbiBCb3Jpc292IDogaHR0cHM6Ly9naXRodWIuY29tL2tyYXpcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgYmcgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdiZycsIHtcbiAgICBtb250aHMgOiAn0Y/QvdGD0LDRgNC4X9GE0LXQstGA0YPQsNGA0Lhf0LzQsNGA0YJf0LDQv9GA0LjQu1/QvNCw0Llf0Y7QvdC4X9GO0LvQuF/QsNCy0LPRg9GB0YJf0YHQtdC/0YLQtdC80LLRgNC4X9C+0LrRgtC+0LzQstGA0Lhf0L3QvtC10LzQstGA0Lhf0LTQtdC60LXQvNCy0YDQuCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfRj9C90YBf0YTQtdCyX9C80LDRgF/QsNC/0YBf0LzQsNC5X9GO0L3QuF/RjtC70Lhf0LDQstCzX9GB0LXQv1/QvtC60YJf0L3QvtC1X9C00LXQuicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfQvdC10LTQtdC70Y9f0L/QvtC90LXQtNC10LvQvdC40Lpf0LLRgtC+0YDQvdC40Lpf0YHRgNGP0LTQsF/Rh9C10YLQstGK0YDRgtGK0Lpf0L/QtdGC0YrQul/RgdGK0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfQvdC10LRf0L/QvtC9X9Cy0YLQvl/RgdGA0Y9f0YfQtdGCX9C/0LXRgl/RgdGK0LEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn0L3QtF/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSDptbScsXG4gICAgICAgIExUUyA6ICdIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW9CU0L3QtdGBINCyXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW9Cj0YLRgNC1INCyXSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW9CyXSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW9CS0YfQtdGA0LAg0LJdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0JIg0LjQt9C80LjQvdCw0LvQsNGC0LBdIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vQkiDQuNC30LzQuNC90LDQu9C40Y9dIGRkZGQgW9CyXSBMVCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfRgdC70LXQtCAlcycsXG4gICAgICAgIHBhc3QgOiAn0L/RgNC10LTQuCAlcycsXG4gICAgICAgIHMgOiAn0L3Rj9C60L7Qu9C60L4g0YHQtdC60YPQvdC00LgnLFxuICAgICAgICBtIDogJ9C80LjQvdGD0YLQsCcsXG4gICAgICAgIG1tIDogJyVkINC80LjQvdGD0YLQuCcsXG4gICAgICAgIGggOiAn0YfQsNGBJyxcbiAgICAgICAgaGggOiAnJWQg0YfQsNGB0LAnLFxuICAgICAgICBkIDogJ9C00LXQvScsXG4gICAgICAgIGRkIDogJyVkINC00L3QuCcsXG4gICAgICAgIE0gOiAn0LzQtdGB0LXRhicsXG4gICAgICAgIE1NIDogJyVkINC80LXRgdC10YbQsCcsXG4gICAgICAgIHkgOiAn0LPQvtC00LjQvdCwJyxcbiAgICAgICAgeXkgOiAnJWQg0LPQvtC00LjQvdC4J1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQtdCyfNC10L180YLQuHzQstC4fNGA0Lh80LzQuCkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIGxhc3QyRGlnaXRzID0gbnVtYmVyICUgMTAwO1xuICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3QtdCyJztcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LXQvSc7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdCy0LgnO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0YDQuCc7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LzQuCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGJnO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvYmcuanNcbi8vIG1vZHVsZSBpZCA9IDY2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwNyJdLCJzb3VyY2VSb290IjoiIn0=