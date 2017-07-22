webpackJsonp([117],{

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var af = moment.defineLocale('af', {
    months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM : function (input) {
        return /^nm$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'vm' : 'VM';
        } else {
            return isLower ? 'nm' : 'NM';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Vandag om] LT',
        nextDay : '[Môre om] LT',
        nextWeek : 'dddd [om] LT',
        lastDay : '[Gister om] LT',
        lastWeek : '[Laas] dddd [om] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'oor %s',
        past : '%s gelede',
        s : '\'n paar sekondes',
        m : '\'n minuut',
        mm : '%d minute',
        h : '\'n uur',
        hh : '%d ure',
        d : '\'n dag',
        dd : '%d dae',
        M : '\'n maand',
        MM : '%d maande',
        y : '\'n jaar',
        yy : '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
    },
    week : {
        dow : 1, // Maandag is die eerste dag van die week.
        doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    }
});

return af;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBLHdGQUF3RjtBQUN4RixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFmcmlrYWFucyBbYWZdXG4vLyEgYXV0aG9yIDogV2VybmVyIE1vbGxlbnR6ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZXJuZXJtXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGFmID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYWYnLCB7XG4gICAgbW9udGhzIDogJ0phbnVhcmllX0ZlYnJ1YXJpZV9NYWFydF9BcHJpbF9NZWlfSnVuaWVfSnVsaWVfQXVndXN0dXNfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVzZW1iZXInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NcnRfQXByX01laV9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZXMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnU29uZGFnX01hYW5kYWdfRGluc2RhZ19Xb2Vuc2RhZ19Eb25kZXJkYWdfVnJ5ZGFnX1NhdGVyZGFnJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnU29uX01hYV9EaW5fV29lX0Rvbl9WcnlfU2F0Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1NvX01hX0RpX1dvX0RvX1ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIG1lcmlkaWVtUGFyc2U6IC92bXxubS9pLFxuICAgIGlzUE0gOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIC9ebm0kL2kudGVzdChpbnB1dCk7XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAndm0nIDogJ1ZNJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ25tJyA6ICdOTSc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1tWYW5kYWcgb21dIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbTcO0cmUgb21dIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbb21dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbR2lzdGVyIG9tXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1tMYWFzXSBkZGRkIFtvbV0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnb29yICVzJyxcbiAgICAgICAgcGFzdCA6ICclcyBnZWxlZGUnLFxuICAgICAgICBzIDogJ1xcJ24gcGFhciBzZWtvbmRlcycsXG4gICAgICAgIG0gOiAnXFwnbiBtaW51dXQnLFxuICAgICAgICBtbSA6ICclZCBtaW51dGUnLFxuICAgICAgICBoIDogJ1xcJ24gdXVyJyxcbiAgICAgICAgaGggOiAnJWQgdXJlJyxcbiAgICAgICAgZCA6ICdcXCduIGRhZycsXG4gICAgICAgIGRkIDogJyVkIGRhZScsXG4gICAgICAgIE0gOiAnXFwnbiBtYWFuZCcsXG4gICAgICAgIE1NIDogJyVkIG1hYW5kZScsXG4gICAgICAgIHkgOiAnXFwnbiBqYWFyJyxcbiAgICAgICAgeXkgOiAnJWQgamFhcidcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgKChudW1iZXIgPT09IDEgfHwgbnVtYmVyID09PSA4IHx8IG51bWJlciA+PSAyMCkgPyAnc3RlJyA6ICdkZScpOyAvLyBUaGFua3MgdG8gSm9yaXMgUsO2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qanVwaXRlclxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTWFhbmRhZyBpcyBkaWUgZWVyc3RlIGRhZyB2YW4gZGllIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIERpZSB3ZWVrIHdhdCBkaWUgNGRlIEphbnVhcmllIGJldmF0IGlzIGRpZSBlZXJzdGUgd2VlayB2YW4gZGllIGphYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBhZjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2FmLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMTciXSwic291cmNlUm9vdCI6IiJ9