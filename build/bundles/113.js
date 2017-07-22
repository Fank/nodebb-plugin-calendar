webpackJsonp([113],{

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arMa = moment.defineLocale('ar-ma', {
    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return arMa;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXItbWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIxMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQXJhYmljIChNb3JvY2NvKSBbYXItbWFdXG4vLyEgYXV0aG9yIDogRWxGYWRpbGkgWWFzc2luZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9FbEZhZGlsaVlcbi8vISBhdXRob3IgOiBBYmRlbCBTYWlkIDogaHR0cHM6Ly9naXRodWIuY29tL2FiZGVsc2FpZFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBhck1hID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYXItbWEnLCB7XG4gICAgbW9udGhzIDogJ9mK2YbYp9mK2LFf2YHYqNix2KfZitixX9mF2KfYsdizX9ij2KjYsdmK2YRf2YXYp9mKX9mK2YjZhtmK2Yhf2YrZiNmE2YrZiNiyX9i62LTYql/YtNiq2YbYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YbYqNixX9iv2KzZhtio2LEnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn2YrZhtin2YrYsV/Zgdio2LHYp9mK2LFf2YXYp9ix2LNf2KPYqNix2YrZhF/Zhdin2Ypf2YrZiNmG2YrZiF/ZitmI2YTZitmI2LJf2LrYtNiqX9i02KrZhtio2LFf2KPZg9iq2YjYqNixX9mG2YjZhtio2LFf2K/YrNmG2KjYsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfYp9mE2KPYrdivX9in2YTYpdiq2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfYp9it2K9f2KfYqtmG2YrZhl/Yq9mE2KfYq9in2KFf2KfYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfYrV/Zhl/Yq1/YsV/Yrl/YrF/Ysycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdb2KfZhNmK2YjZhSDYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdb2LrYr9inINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdb2KPZhdizINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ9mB2YogJXMnLFxuICAgICAgICBwYXN0IDogJ9mF2YbYsCAlcycsXG4gICAgICAgIHMgOiAn2KvZiNin2YYnLFxuICAgICAgICBtIDogJ9iv2YLZitmC2KknLFxuICAgICAgICBtbSA6ICclZCDYr9mC2KfYptmCJyxcbiAgICAgICAgaCA6ICfYs9in2LnYqScsXG4gICAgICAgIGhoIDogJyVkINiz2KfYudin2KonLFxuICAgICAgICBkIDogJ9mK2YjZhScsXG4gICAgICAgIGRkIDogJyVkINij2YrYp9mFJyxcbiAgICAgICAgTSA6ICfYtNmH2LEnLFxuICAgICAgICBNTSA6ICclZCDYo9i02YfYsScsXG4gICAgICAgIHkgOiAn2LPZhtipJyxcbiAgICAgICAgeXkgOiAnJWQg2LPZhtmI2KfYqidcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDYsIC8vIFNhdHVyZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDEyICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBhck1hO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvYXItbWEuanNcbi8vIG1vZHVsZSBpZCA9IDY2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDExMyJdLCJzb3VyY2VSb290IjoiIn0=