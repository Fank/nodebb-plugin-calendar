webpackJsonp([111],{

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arTn = moment.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return arTn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXItdG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSAgOiAgQXJhYmljIChUdW5pc2lhKSBbYXItdG5dXG4vLyEgYXV0aG9yIDogTmFkZXIgVG91a2FicmkgOiBodHRwczovL2dpdGh1Yi5jb20vbmFkZXJpb1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBhclRuID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYXItdG4nLCB7XG4gICAgbW9udGhzOiAn2KzYp9mG2YHZil/ZgdmK2YHYsdmKX9mF2KfYsdizX9ij2YHYsdmK2YRf2YXYp9mKX9is2YjYp9mGX9is2YjZitmE2YrYqV/Yo9mI2Kpf2LPYqNiq2YXYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YHZhdio2LFf2K/Zitiz2YXYqNixJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0OiAn2KzYp9mG2YHZil/ZgdmK2YHYsdmKX9mF2KfYsdizX9ij2YHYsdmK2YRf2YXYp9mKX9is2YjYp9mGX9is2YjZitmE2YrYqV/Yo9mI2Kpf2LPYqNiq2YXYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YHZhdio2LFf2K/Zitiz2YXYqNixJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzOiAn2KfZhNij2K3Yr1/Yp9mE2KXYq9mG2YrZhl/Yp9mE2KvZhNin2KvYp9ihX9in2YTYo9ix2KjYudin2KFf2KfZhNiu2YXZitizX9in2YTYrNmF2LnYqV/Yp9mE2LPYqNiqJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQ6ICfYo9it2K9f2KXYq9mG2YrZhl/Yq9mE2KfYq9in2KFf2KPYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbjogJ9itX9mGX9irX9ixX9iuX9isX9izJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyOiB7XG4gICAgICAgIHNhbWVEYXk6ICdb2KfZhNmK2YjZhSDYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdb2LrYr9inINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdb2KPZhdizINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICBmdXR1cmU6ICfZgdmKICVzJyxcbiAgICAgICAgcGFzdDogJ9mF2YbYsCAlcycsXG4gICAgICAgIHM6ICfYq9mI2KfZhicsXG4gICAgICAgIG06ICfYr9mC2YrZgtipJyxcbiAgICAgICAgbW06ICclZCDYr9mC2KfYptmCJyxcbiAgICAgICAgaDogJ9iz2KfYudipJyxcbiAgICAgICAgaGg6ICclZCDYs9in2LnYp9iqJyxcbiAgICAgICAgZDogJ9mK2YjZhScsXG4gICAgICAgIGRkOiAnJWQg2KPZitin2YUnLFxuICAgICAgICBNOiAn2LTZh9ixJyxcbiAgICAgICAgTU06ICclZCDYo9i02YfYsScsXG4gICAgICAgIHk6ICfYs9mG2KknLFxuICAgICAgICB5eTogJyVkINiz2YbZiNin2KonXG4gICAgfSxcbiAgICB3ZWVrOiB7XG4gICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveTogNCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBhclRuO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvYXItdG4uanNcbi8vIG1vZHVsZSBpZCA9IDY2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDExMSJdLCJzb3VyY2VSb290IjoiIn0=