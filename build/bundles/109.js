webpackJsonp([109],{

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı'
};

var az = moment.defineLocale('az', {
    months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[sabah saat] LT',
        nextWeek : '[gələn həftə] dddd [saat] LT',
        lastDay : '[dünən] LT',
        lastWeek : '[keçən həftə] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s əvvəl',
        s : 'birneçə saniyyə',
        m : 'bir dəqiqə',
        mm : '%d dəqiqə',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir il',
        yy : '%d il'
    },
    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM : function (input) {
        return /^(gündüz|axşam)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'gecə';
        } else if (hour < 12) {
            return 'səhər';
        } else if (hour < 17) {
            return 'gündüz';
        } else {
            return 'axşam';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '-ıncı';
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return az;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBemVyYmFpamFuaSBbYXpdXG4vLyEgYXV0aG9yIDogdG9wY2hpeWV2IDogaHR0cHM6Ly9naXRodWIuY29tL3RvcGNoaXlldlxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBzdWZmaXhlcyA9IHtcbiAgICAxOiAnLWluY2knLFxuICAgIDU6ICctaW5jaScsXG4gICAgODogJy1pbmNpJyxcbiAgICA3MDogJy1pbmNpJyxcbiAgICA4MDogJy1pbmNpJyxcbiAgICAyOiAnLW5jaScsXG4gICAgNzogJy1uY2knLFxuICAgIDIwOiAnLW5jaScsXG4gICAgNTA6ICctbmNpJyxcbiAgICAzOiAnLcO8bmPDvCcsXG4gICAgNDogJy3DvG5jw7wnLFxuICAgIDEwMDogJy3DvG5jw7wnLFxuICAgIDY6ICctbmPEsScsXG4gICAgOTogJy11bmN1JyxcbiAgICAxMDogJy11bmN1JyxcbiAgICAzMDogJy11bmN1JyxcbiAgICA2MDogJy3EsW5jxLEnLFxuICAgIDkwOiAnLcSxbmPEsSdcbn07XG5cbnZhciBheiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2F6Jywge1xuICAgIG1vbnRocyA6ICd5YW52YXJfZmV2cmFsX21hcnRfYXByZWxfbWF5X2l5dW5faXl1bF9hdnF1c3Rfc2VudHlhYnJfb2t0eWFicl9ub3lhYnJfZGVrYWJyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ3lhbl9mZXZfbWFyX2Fwcl9tYXlfaXluX2l5bF9hdnFfc2VuX29rdF9ub3lfZGVrJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ0JhemFyX0JhemFyIGVydMmZc2lfw4fJmXLFn8mZbmLJmSBheMWfYW3EsV/Dh8mZcsWfyZluYsmZX0PDvG3JmSBheMWfYW3EsV9Dw7xtyZlfxZ7JmW5iyZknLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdCYXpfQnpFX8OHQXhfw4fJmXJfQ0F4X0PDvG1fxZ7JmW4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnQnpfQkVfw4dBX8OHyZlfQ0FfQ8O8X8WeyZknLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbYnVnw7xuIHNhYXRdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbc2FiYWggc2FhdF0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdbZ8mZbMmZbiBoyZlmdMmZXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW2TDvG7JmW5dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW2tlw6fJmW4gaMmZZnTJmV0gZGRkZCBbc2FhdF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMgc29ucmEnLFxuICAgICAgICBwYXN0IDogJyVzIMmZdnbJmWwnLFxuICAgICAgICBzIDogJ2Jpcm5lw6fJmSBzYW5peXnJmScsXG4gICAgICAgIG0gOiAnYmlyIGTJmXFpccmZJyxcbiAgICAgICAgbW0gOiAnJWQgZMmZcWlxyZknLFxuICAgICAgICBoIDogJ2JpciBzYWF0JyxcbiAgICAgICAgaGggOiAnJWQgc2FhdCcsXG4gICAgICAgIGQgOiAnYmlyIGfDvG4nLFxuICAgICAgICBkZCA6ICclZCBnw7xuJyxcbiAgICAgICAgTSA6ICdiaXIgYXknLFxuICAgICAgICBNTSA6ICclZCBheScsXG4gICAgICAgIHkgOiAnYmlyIGlsJyxcbiAgICAgICAgeXkgOiAnJWQgaWwnXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAvZ2VjyZl8c8mZaMmZcnxnw7xuZMO8enxheMWfYW0vLFxuICAgIGlzUE0gOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIC9eKGfDvG5kw7x6fGF4xZ9hbSkkLy50ZXN0KGlucHV0KTtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAnZ2VjyZknO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgcmV0dXJuICdzyZloyZlyJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgICAgICAgIHJldHVybiAnZ8O8bmTDvHonO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdheMWfYW0nO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKMSxbmPEsXxpbmNpfG5jaXzDvG5jw7x8bmPEsXx1bmN1KS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3EsW5jxLEnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBiID0gbnVtYmVyICUgMTAwIC0gYSxcbiAgICAgICAgICAgIGMgPSBudW1iZXIgPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIG51bWJlciArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYXo7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9hei5qc1xuLy8gbW9kdWxlIGlkID0gNjY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTA5Il0sInNvdXJjZVJvb3QiOiIifQ==