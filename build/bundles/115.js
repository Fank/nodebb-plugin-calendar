webpackJsonp([115],{

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Kuwait) [ar-kw]
//! author : Nusret Parlak: https://github.com/nusretparlak

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arKw = moment.defineLocale('ar-kw', {
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
        dow : 0, // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return arKw;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXIta3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFyYWJpYyAoS3V3YWl0KSBbYXIta3ddXG4vLyEgYXV0aG9yIDogTnVzcmV0IFBhcmxhazogaHR0cHM6Ly9naXRodWIuY29tL251c3JldHBhcmxha1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBhckt3ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYXIta3cnLCB7XG4gICAgbW9udGhzIDogJ9mK2YbYp9mK2LFf2YHYqNix2KfZitixX9mF2KfYsdizX9ij2KjYsdmK2YRf2YXYp9mKX9mK2YjZhtmK2Yhf2YrZiNmE2YrZiNiyX9i62LTYql/YtNiq2YbYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YbYqNixX9iv2KzZhtio2LEnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn2YrZhtin2YrYsV/Zgdio2LHYp9mK2LFf2YXYp9ix2LNf2KPYqNix2YrZhF/Zhdin2Ypf2YrZiNmG2YrZiF/ZitmI2YTZitmI2LJf2LrYtNiqX9i02KrZhtio2LFf2KPZg9iq2YjYqNixX9mG2YjZhtio2LFf2K/YrNmG2KjYsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfYp9mE2KPYrdivX9in2YTYpdiq2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfYp9it2K9f2KfYqtmG2YrZhl/Yq9mE2KfYq9in2KFf2KfYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfYrV/Zhl/Yq1/YsV/Yrl/YrF/Ysycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdb2KfZhNmK2YjZhSDYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdb2LrYr9inINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdb2KPZhdizINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ9mB2YogJXMnLFxuICAgICAgICBwYXN0IDogJ9mF2YbYsCAlcycsXG4gICAgICAgIHMgOiAn2KvZiNin2YYnLFxuICAgICAgICBtIDogJ9iv2YLZitmC2KknLFxuICAgICAgICBtbSA6ICclZCDYr9mC2KfYptmCJyxcbiAgICAgICAgaCA6ICfYs9in2LnYqScsXG4gICAgICAgIGhoIDogJyVkINiz2KfYudin2KonLFxuICAgICAgICBkIDogJ9mK2YjZhScsXG4gICAgICAgIGRkIDogJyVkINij2YrYp9mFJyxcbiAgICAgICAgTSA6ICfYtNmH2LEnLFxuICAgICAgICBNTSA6ICclZCDYo9i02YfYsScsXG4gICAgICAgIHkgOiAn2LPZhtipJyxcbiAgICAgICAgeXkgOiAnJWQg2LPZhtmI2KfYqidcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiAxMiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYXJLdztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXG4vLyBtb2R1bGUgaWQgPSA2NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMTUiXSwic291cmNlUm9vdCI6IiJ9