webpackJsonp([10],{

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var uzLatn = moment.defineLocale('uz-latn', {
    months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
    monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
    weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'D MMMM YYYY, dddd HH:mm'
    },
    calendar : {
        sameDay : '[Bugun soat] LT [da]',
        nextDay : '[Ertaga] LT [da]',
        nextWeek : 'dddd [kuni soat] LT [da]',
        lastDay : '[Kecha soat] LT [da]',
        lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'Yaqin %s ichida',
        past : 'Bir necha %s oldin',
        s : 'soniya',
        m : 'bir daqiqa',
        mm : '%d daqiqa',
        h : 'bir soat',
        hh : '%d soat',
        d : 'bir kun',
        dd : '%d kun',
        M : 'bir oy',
        MM : '%d oy',
        y : 'bir yil',
        yy : '%d yil'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return uzLatn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdXotbGF0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVXpiZWsgTGF0aW4gW3V6LWxhdG5dXG4vLyEgYXV0aG9yIDogUmFzdWxiZWsgTWlyemF5ZXYgOiBnaXRodWIuY29tL1Jhc3VsYmVlZWtcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgdXpMYXRuID0gbW9tZW50LmRlZmluZUxvY2FsZSgndXotbGF0bicsIHtcbiAgICBtb250aHMgOiAnWWFudmFyX0ZldnJhbF9NYXJ0X0FwcmVsX01heV9JeXVuX0l5dWxfQXZndXN0X1NlbnRhYnJfT2t0YWJyX05veWFicl9EZWthYnInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnWWFuX0Zldl9NYXJfQXByX01heV9JeXVuX0l5dWxfQXZnX1Nlbl9Pa3RfTm95X0Rlaycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdZYWtzaGFuYmFfRHVzaGFuYmFfU2VzaGFuYmFfQ2hvcnNoYW5iYV9QYXlzaGFuYmFfSnVtYV9TaGFuYmEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdZYWtfRHVzaF9TZXNoX0Nob3JfUGF5X0p1bV9TaGFuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1lhX0R1X1NlX0Nob19QYV9KdV9TaGEnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ0QgTU1NTSBZWVlZLCBkZGRkIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW0J1Z3VuIHNvYXRdIExUIFtkYV0nLFxuICAgICAgICBuZXh0RGF5IDogJ1tFcnRhZ2FdIExUIFtkYV0nLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtrdW5pIHNvYXRdIExUIFtkYV0nLFxuICAgICAgICBsYXN0RGF5IDogJ1tLZWNoYSBzb2F0XSBMVCBbZGFdJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW09cXCd0Z2FuXSBkZGRkIFtrdW5pIHNvYXRdIExUIFtkYV0nLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnWWFxaW4gJXMgaWNoaWRhJyxcbiAgICAgICAgcGFzdCA6ICdCaXIgbmVjaGEgJXMgb2xkaW4nLFxuICAgICAgICBzIDogJ3Nvbml5YScsXG4gICAgICAgIG0gOiAnYmlyIGRhcWlxYScsXG4gICAgICAgIG1tIDogJyVkIGRhcWlxYScsXG4gICAgICAgIGggOiAnYmlyIHNvYXQnLFxuICAgICAgICBoaCA6ICclZCBzb2F0JyxcbiAgICAgICAgZCA6ICdiaXIga3VuJyxcbiAgICAgICAgZGQgOiAnJWQga3VuJyxcbiAgICAgICAgTSA6ICdiaXIgb3knLFxuICAgICAgICBNTSA6ICclZCBveScsXG4gICAgICAgIHkgOiAnYmlyIHlpbCcsXG4gICAgICAgIHl5IDogJyVkIHlpbCdcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB1ekxhdG47XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=