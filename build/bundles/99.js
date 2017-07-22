webpackJsonp([99],{

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var cy = moment.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    // time formats are the same as en-gb
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Heddiw am] LT',
        nextDay: '[Yfory am] LT',
        nextWeek: 'dddd [am] LT',
        lastDay: '[Ddoe am] LT',
        lastWeek: 'dddd [diwethaf am] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'mewn %s',
        past: '%s yn ôl',
        s: 'ychydig eiliadau',
        m: 'munud',
        mm: '%d munud',
        h: 'awr',
        hh: '%d awr',
        d: 'diwrnod',
        dd: '%d diwrnod',
        M: 'mis',
        MM: '%d mis',
        y: 'blwyddyn',
        yy: '%d flynedd'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function (number) {
        var b = number,
            output = '',
            lookup = [
                '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
            ];
        if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                output = 'fed'; // not 30ain, 70ain or 90ain
            } else {
                output = 'ain';
            }
        } else if (b > 0) {
            output = lookup[b];
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return cy;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvY3kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI5OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBXZWxzaCBbY3ldXG4vLyEgYXV0aG9yIDogUm9iZXJ0IEFsbGVuIDogaHR0cHM6Ly9naXRodWIuY29tL3JvYmdhbGxlblxuLy8hIGF1dGhvciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuZ3JlYXZlc1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBjeSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2N5Jywge1xuICAgIG1vbnRoczogJ0lvbmF3cl9DaHdlZnJvcl9NYXdydGhfRWJyaWxsX01haV9NZWhlZmluX0dvcmZmZW5uYWZfQXdzdF9NZWRpX0h5ZHJlZl9UYWNod2VkZF9SaGFnZnlyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0OiAnSW9uX0Nod2VfTWF3X0Vicl9NYWlfTWVoX0dvcl9Bd3NfTWVkX0h5ZF9UYWNoX1JoYWcnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXM6ICdEeWRkIFN1bF9EeWRkIExsdW5fRHlkZCBNYXdydGhfRHlkZCBNZXJjaGVyX0R5ZGQgSWF1X0R5ZGQgR3dlbmVyX0R5ZGQgU2Fkd3JuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQ6ICdTdWxfTGx1bl9NYXdfTWVyX0lhdV9Hd2VfU2FkJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluOiAnU3VfTGxfTWFfTWVfSWFfR3dfU2EnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICAvLyB0aW1lIGZvcm1hdHMgYXJlIHRoZSBzYW1lIGFzIGVuLWdiXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXI6IHtcbiAgICAgICAgc2FtZURheTogJ1tIZWRkaXcgYW1dIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tZZm9yeSBhbV0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2FtXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbRGRvZSBhbV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ2RkZGQgW2Rpd2V0aGFmIGFtXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICBmdXR1cmU6ICdtZXduICVzJyxcbiAgICAgICAgcGFzdDogJyVzIHluIMO0bCcsXG4gICAgICAgIHM6ICd5Y2h5ZGlnIGVpbGlhZGF1JyxcbiAgICAgICAgbTogJ211bnVkJyxcbiAgICAgICAgbW06ICclZCBtdW51ZCcsXG4gICAgICAgIGg6ICdhd3InLFxuICAgICAgICBoaDogJyVkIGF3cicsXG4gICAgICAgIGQ6ICdkaXdybm9kJyxcbiAgICAgICAgZGQ6ICclZCBkaXdybm9kJyxcbiAgICAgICAgTTogJ21pcycsXG4gICAgICAgIE1NOiAnJWQgbWlzJyxcbiAgICAgICAgeTogJ2Jsd3lkZHluJyxcbiAgICAgICAgeXk6ICclZCBmbHluZWRkJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGZlZHxhaW58YWZ8aWx8eWRkfGVkfGVnKS8sXG4gICAgLy8gdHJhZGl0aW9uYWwgb3JkaW5hbCBudW1iZXJzIGFib3ZlIDMxIGFyZSBub3QgY29tbW9ubHkgdXNlZCBpbiBjb2xsb3F1aWFsIFdlbHNoXG4gICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB2YXIgYiA9IG51bWJlcixcbiAgICAgICAgICAgIG91dHB1dCA9ICcnLFxuICAgICAgICAgICAgbG9va3VwID0gW1xuICAgICAgICAgICAgICAgICcnLCAnYWYnLCAnaWwnLCAneWRkJywgJ3lkZCcsICdlZCcsICdlZCcsICdlZCcsICdmZWQnLCAnZmVkJywgJ2ZlZCcsIC8vIDFhZiB0byAxMGZlZFxuICAgICAgICAgICAgICAgICdlZycsICdmZWQnLCAnZWcnLCAnZWcnLCAnZmVkJywgJ2VnJywgJ2VnJywgJ2ZlZCcsICdlZycsICdmZWQnIC8vIDExZWcgdG8gMjBmZWRcbiAgICAgICAgICAgIF07XG4gICAgICAgIGlmIChiID4gMjApIHtcbiAgICAgICAgICAgIGlmIChiID09PSA0MCB8fCBiID09PSA1MCB8fCBiID09PSA2MCB8fCBiID09PSA4MCB8fCBiID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAnZmVkJzsgLy8gbm90IDMwYWluLCA3MGFpbiBvciA5MGFpblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAnYWluJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChiID4gMCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gbG9va3VwW2JdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gY3k7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9jeS5qc1xuLy8gbW9kdWxlIGlkID0gNjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gOTkiXSwic291cmNlUm9vdCI6IiJ9