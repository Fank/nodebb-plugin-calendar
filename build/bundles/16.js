webpackJsonp([16],{

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};

var tr = moment.defineLocale('tr', {
    months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
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
        nextDay : '[yarın saat] LT',
        nextWeek : '[haftaya] dddd [saat] LT',
        lastDay : '[dün] LT',
        lastWeek : '[geçen hafta] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s önce',
        s : 'birkaç saniye',
        m : 'bir dakika',
        mm : '%d dakika',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir yıl',
        yy : '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '\'ıncı';
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

return tr;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVHVya2lzaCBbdHJdXG4vLyEgYXV0aG9ycyA6IEVyaGFuIEd1bmRvZ2FuIDogaHR0cHM6Ly9naXRodWIuY29tL2VyaGFuZ3VuZG9nYW4sXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpxJ9pdCBLYXlhOiBodHRwczovL2dpdGh1Yi5jb20vQllLXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHN1ZmZpeGVzID0ge1xuICAgIDE6ICdcXCdpbmNpJyxcbiAgICA1OiAnXFwnaW5jaScsXG4gICAgODogJ1xcJ2luY2knLFxuICAgIDcwOiAnXFwnaW5jaScsXG4gICAgODA6ICdcXCdpbmNpJyxcbiAgICAyOiAnXFwnbmNpJyxcbiAgICA3OiAnXFwnbmNpJyxcbiAgICAyMDogJ1xcJ25jaScsXG4gICAgNTA6ICdcXCduY2knLFxuICAgIDM6ICdcXCfDvG5jw7wnLFxuICAgIDQ6ICdcXCfDvG5jw7wnLFxuICAgIDEwMDogJ1xcJ8O8bmPDvCcsXG4gICAgNjogJ1xcJ25jxLEnLFxuICAgIDk6ICdcXCd1bmN1JyxcbiAgICAxMDogJ1xcJ3VuY3UnLFxuICAgIDMwOiAnXFwndW5jdScsXG4gICAgNjA6ICdcXCfEsW5jxLEnLFxuICAgIDkwOiAnXFwnxLFuY8SxJ1xufTtcblxudmFyIHRyID0gbW9tZW50LmRlZmluZUxvY2FsZSgndHInLCB7XG4gICAgbW9udGhzIDogJ09jYWtfxZ51YmF0X01hcnRfTmlzYW5fTWF5xLFzX0hhemlyYW5fVGVtbXV6X0HEn3VzdG9zX0V5bMO8bF9Fa2ltX0thc8SxbV9BcmFsxLFrJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ09jYV/FnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcSfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMSxX8OHYXLFn2FtYmFfUGVyxZ9lbWJlX0N1bWFfQ3VtYXJ0ZXNpJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnUGF6X1B0c19TYWxfw4dhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdQel9QdF9TYV/Dh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW2J1Z8O8biBzYWF0XSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW3lhcsSxbiBzYWF0XSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ1toYWZ0YXlhXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW2TDvG5dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW2dlw6dlbiBoYWZ0YV0gZGRkZCBbc2FhdF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMgc29ucmEnLFxuICAgICAgICBwYXN0IDogJyVzIMO2bmNlJyxcbiAgICAgICAgcyA6ICdiaXJrYcOnIHNhbml5ZScsXG4gICAgICAgIG0gOiAnYmlyIGRha2lrYScsXG4gICAgICAgIG1tIDogJyVkIGRha2lrYScsXG4gICAgICAgIGggOiAnYmlyIHNhYXQnLFxuICAgICAgICBoaCA6ICclZCBzYWF0JyxcbiAgICAgICAgZCA6ICdiaXIgZ8O8bicsXG4gICAgICAgIGRkIDogJyVkIGfDvG4nLFxuICAgICAgICBNIDogJ2JpciBheScsXG4gICAgICAgIE1NIDogJyVkIGF5JyxcbiAgICAgICAgeSA6ICdiaXIgecSxbCcsXG4gICAgICAgIHl5IDogJyVkIHnEsWwnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0nKGluY2l8bmNpfMO8bmPDvHxuY8SxfHVuY3V8xLFuY8SxKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ1xcJ8SxbmPEsSc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIGIgPSBudW1iZXIgJSAxMDAgLSBhLFxuICAgICAgICAgICAgYyA9IG51bWJlciA+PSAxMDAgPyAxMDAgOiBudWxsO1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgKHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdKTtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB0cjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3RyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiJdLCJzb3VyY2VSb290IjoiIn0=