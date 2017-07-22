webpackJsonp([84],{

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        'm' : ['ühe minuti', 'üks minut'],
        'mm': [number + ' minuti', number + ' minutit'],
        'h' : ['ühe tunni', 'tund aega', 'üks tund'],
        'hh': [number + ' tunni', number + ' tundi'],
        'd' : ['ühe päeva', 'üks päev'],
        'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
        'MM': [number + ' kuu', number + ' kuud'],
        'y' : ['ühe aasta', 'aasta', 'üks aasta'],
        'yy': [number + ' aasta', number + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
}

var et = moment.defineLocale('et', {
    months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat : {
        LT   : 'H:mm',
        LTS : 'H:mm:ss',
        L    : 'DD.MM.YYYY',
        LL   : 'D. MMMM YYYY',
        LLL  : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[Täna,] LT',
        nextDay  : '[Homme,] LT',
        nextWeek : '[Järgmine] dddd LT',
        lastDay  : '[Eile,] LT',
        lastWeek : '[Eelmine] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s pärast',
        past   : '%s tagasi',
        s      : processRelativeTime,
        m      : processRelativeTime,
        mm     : processRelativeTime,
        h      : processRelativeTime,
        hh     : processRelativeTime,
        d      : processRelativeTime,
        dd     : '%d päeva',
        M      : processRelativeTime,
        MM     : processRelativeTime,
        y      : processRelativeTime,
        yy     : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return et;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRXN0b25pYW4gW2V0XVxuLy8hIGF1dGhvciA6IEhlbnJ5IEtlaGxtYW5uIDogaHR0cHM6Ly9naXRodWIuY29tL21hZGhlbnJ5XG4vLyEgaW1wcm92ZW1lbnRzIDogSWxsaW1hciBUYW1iZWsgOiBodHRwczovL2dpdGh1Yi5jb20vcmFndWxrYVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgJ3MnIDogWydtw7VuZSBzZWt1bmRpJywgJ23DtW5pIHNla3VuZCcsICdwYWFyIHNla3VuZGl0J10sXG4gICAgICAgICdtJyA6IFsnw7xoZSBtaW51dGknLCAnw7xrcyBtaW51dCddLFxuICAgICAgICAnbW0nOiBbbnVtYmVyICsgJyBtaW51dGknLCBudW1iZXIgKyAnIG1pbnV0aXQnXSxcbiAgICAgICAgJ2gnIDogWyfDvGhlIHR1bm5pJywgJ3R1bmQgYWVnYScsICfDvGtzIHR1bmQnXSxcbiAgICAgICAgJ2hoJzogW251bWJlciArICcgdHVubmknLCBudW1iZXIgKyAnIHR1bmRpJ10sXG4gICAgICAgICdkJyA6IFsnw7xoZSBww6RldmEnLCAnw7xrcyBww6RldiddLFxuICAgICAgICAnTScgOiBbJ2t1dSBhamEnLCAna3V1IGFlZ2EnLCAnw7xrcyBrdXUnXSxcbiAgICAgICAgJ01NJzogW251bWJlciArICcga3V1JywgbnVtYmVyICsgJyBrdXVkJ10sXG4gICAgICAgICd5JyA6IFsnw7xoZSBhYXN0YScsICdhYXN0YScsICfDvGtzIGFhc3RhJ10sXG4gICAgICAgICd5eSc6IFtudW1iZXIgKyAnIGFhc3RhJywgbnVtYmVyICsgJyBhYXN0YXQnXVxuICAgIH07XG4gICAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFtrZXldWzJdID8gZm9ybWF0W2tleV1bMl0gOiBmb3JtYXRba2V5XVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRnV0dXJlID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcbn1cblxudmFyIGV0ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZXQnLCB7XG4gICAgbW9udGhzICAgICAgICA6ICdqYWFudWFyX3ZlZWJydWFyX23DpHJ0c19hcHJpbGxfbWFpX2p1dW5pX2p1dWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b29iZXJfbm92ZW1iZXJfZGV0c2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0ICAgOiAnamFhbl92ZWVicl9tw6RydHNfYXByX21haV9qdXVuaV9qdXVsaV9hdWdfc2VwdF9va3Rfbm92X2RldHMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgICAgICA6ICdww7xoYXDDpGV2X2VzbWFzcMOkZXZfdGVpc2lww6Rldl9rb2xtYXDDpGV2X25lbGphcMOkZXZfcmVlZGVfbGF1cMOkZXYnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdQX0VfVF9LX05fUl9MJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluICAgOiAnUF9FX1RfS19OX1JfTCcuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgICA6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMICAgIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCAgIDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCAgOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgIDogJ1tUw6RuYSxdIExUJyxcbiAgICAgICAgbmV4dERheSAgOiAnW0hvbW1lLF0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdbSsOkcmdtaW5lXSBkZGRkIExUJyxcbiAgICAgICAgbGFzdERheSAgOiAnW0VpbGUsXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1tFZWxtaW5lXSBkZGRkIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIHDDpHJhc3QnLFxuICAgICAgICBwYXN0ICAgOiAnJXMgdGFnYXNpJyxcbiAgICAgICAgcyAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgbSAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgbW0gICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgaCAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgaGggICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgZCAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgZGQgICAgIDogJyVkIHDDpGV2YScsXG4gICAgICAgIE0gICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIE1NICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIHkgICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIHl5ICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBldDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OTJcbi8vIG1vZHVsZSBjaHVua3MgPSA4NCJdLCJzb3VyY2VSb290IjoiIn0=