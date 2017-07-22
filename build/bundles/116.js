webpackJsonp([116],{

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Noureddine LOUAHEDJ : https://github.com/noureddineme

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arDz = moment.defineLocale('ar-dz', {
    months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
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
        doy : 4  // The week that contains Jan 1st is the first week of the year.
    }
});

return arDz;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXItZHouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFyYWJpYyAoQWxnZXJpYSkgW2FyLWR6XVxuLy8hIGF1dGhvciA6IE5vdXJlZGRpbmUgTE9VQUhFREogOiBodHRwczovL2dpdGh1Yi5jb20vbm91cmVkZGluZW1lXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGFyRHogPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdhci1keicsIHtcbiAgICBtb250aHMgOiAn2KzYp9mG2YHZil/ZgdmK2YHYsdmKX9mF2KfYsdizX9ij2YHYsdmK2YRf2YXYp9mKX9is2YjYp9mGX9is2YjZitmE2YrYqV/Yo9mI2Kpf2LPYqNiq2YXYqNixX9ij2YPYqtmI2KjYsV/ZhtmI2YHZhdio2LFf2K/Zitiz2YXYqNixJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ9is2KfZhtmB2Ypf2YHZitmB2LHZil/Zhdin2LHYs1/Yo9mB2LHZitmEX9mF2KfZil/YrNmI2KfZhl/YrNmI2YrZhNmK2Klf2KPZiNiqX9iz2KjYqtmF2KjYsV/Yo9mD2KrZiNio2LFf2YbZiNmB2YXYqNixX9iv2YrYs9mF2KjYsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfYp9mE2KPYrdivX9in2YTYpdir2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfYp9it2K9f2KfYq9mG2YrZhl/Yq9mE2KfYq9in2KFf2KfYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfYo9itX9il2Ktf2KvZhNinX9ij2LFf2K7ZhV/YrNmFX9iz2KgnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW9in2YTZitmI2YUg2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW9i62K/YpyDYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBb2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxuICAgICAgICBsYXN0RGF5OiAnW9ij2YXYsyDYudmE2Ykg2KfZhNiz2KfYudipXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiAnZGRkZCBb2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfZgdmKICVzJyxcbiAgICAgICAgcGFzdCA6ICfZhdmG2LAgJXMnLFxuICAgICAgICBzIDogJ9ir2YjYp9mGJyxcbiAgICAgICAgbSA6ICfYr9mC2YrZgtipJyxcbiAgICAgICAgbW0gOiAnJWQg2K/Zgtin2KbZgicsXG4gICAgICAgIGggOiAn2LPYp9i52KknLFxuICAgICAgICBoaCA6ICclZCDYs9in2LnYp9iqJyxcbiAgICAgICAgZCA6ICfZitmI2YUnLFxuICAgICAgICBkZCA6ICclZCDYo9mK2KfZhScsXG4gICAgICAgIE0gOiAn2LTZh9ixJyxcbiAgICAgICAgTU0gOiAnJWQg2KPYtNmH2LEnLFxuICAgICAgICB5IDogJ9iz2YbYqScsXG4gICAgICAgIHl5IDogJyVkINiz2YbZiNin2KonXG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYXJEejtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXG4vLyBtb2R1bGUgaWQgPSA2NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMTYiXSwic291cmNlUm9vdCI6IiJ9