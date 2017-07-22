webpackJsonp([35],{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
            'mm': 'minute',
            'hh': 'ore',
            'dd': 'zile',
            'MM': 'luni',
            'yy': 'ani'
        },
        separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
        separator = ' de ';
    }
    return number + separator + format[key];
}

var ro = moment.defineLocale('ro', {
    months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'peste %s',
        past : '%s în urmă',
        s : 'câteva secunde',
        m : 'un minut',
        mm : relativeTimeWithPlural,
        h : 'o oră',
        hh : relativeTimeWithPlural,
        d : 'o zi',
        dd : relativeTimeWithPlural,
        M : 'o lună',
        MM : relativeTimeWithPlural,
        y : 'un an',
        yy : relativeTimeWithPlural
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ro;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUm9tYW5pYW4gW3JvXVxuLy8hIGF1dGhvciA6IFZsYWQgR3VyZGlnYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ndXJkaWdhXG4vLyEgYXV0aG9yIDogVmFsZW50aW4gQWdhY2hpIDogaHR0cHM6Ly9naXRodWIuY29tL2F2YWx5XG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICAgICAnbW0nOiAnbWludXRlJyxcbiAgICAgICAgICAgICdoaCc6ICdvcmUnLFxuICAgICAgICAgICAgJ2RkJzogJ3ppbGUnLFxuICAgICAgICAgICAgJ01NJzogJ2x1bmknLFxuICAgICAgICAgICAgJ3l5JzogJ2FuaSdcbiAgICAgICAgfSxcbiAgICAgICAgc2VwYXJhdG9yID0gJyAnO1xuICAgIGlmIChudW1iZXIgJSAxMDAgPj0gMjAgfHwgKG51bWJlciA+PSAxMDAgJiYgbnVtYmVyICUgMTAwID09PSAwKSkge1xuICAgICAgICBzZXBhcmF0b3IgPSAnIGRlICc7XG4gICAgfVxuICAgIHJldHVybiBudW1iZXIgKyBzZXBhcmF0b3IgKyBmb3JtYXRba2V5XTtcbn1cblxudmFyIHJvID0gbW9tZW50LmRlZmluZUxvY2FsZSgncm8nLCB7XG4gICAgbW9udGhzIDogJ2lhbnVhcmllX2ZlYnJ1YXJpZV9tYXJ0aWVfYXByaWxpZV9tYWlfaXVuaWVfaXVsaWVfYXVndXN0X3NlcHRlbWJyaWVfb2N0b21icmllX25vaWVtYnJpZV9kZWNlbWJyaWUnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnaWFuLl9mZWJyLl9tYXJ0Ll9hcHIuX21haV9pdW4uX2l1bC5fYXVnLl9zZXB0Ll9vY3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ2R1bWluaWPEg19sdW5pX21hcsibaV9taWVyY3VyaV9qb2lfdmluZXJpX3PDom1ixIN0xIMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdEdW1fTHVuX01hcl9NaWVfSm9pX1Zpbl9Tw6JtJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ0R1X0x1X01hX01pX0pvX1ZpX1PDoicuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSDptbScsXG4gICAgICAgIExUUyA6ICdIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW2F6aSBsYV0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW23DomluZSBsYV0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2xhXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbaWVyaSBsYV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ1tmb3N0YV0gZGRkZCBbbGFdIExUJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAncGVzdGUgJXMnLFxuICAgICAgICBwYXN0IDogJyVzIMOubiB1cm3EgycsXG4gICAgICAgIHMgOiAnY8OidGV2YSBzZWN1bmRlJyxcbiAgICAgICAgbSA6ICd1biBtaW51dCcsXG4gICAgICAgIG1tIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgaCA6ICdvIG9yxIMnLFxuICAgICAgICBoaCA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIGQgOiAnbyB6aScsXG4gICAgICAgIGRkIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgTSA6ICdvIGx1bsSDJyxcbiAgICAgICAgTU0gOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICB5IDogJ3VuIGFuJyxcbiAgICAgICAgeXkgOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gcm87XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9yby5qc1xuLy8gbW9kdWxlIGlkID0gNzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMzUiXSwic291cmNlUm9vdCI6IiJ9