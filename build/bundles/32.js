webpackJsonp([32],{

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var se = moment.defineLocale('se', {
    months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'MMMM D. [b.] YYYY',
        LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
        LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar : {
        sameDay: '[otne ti] LT',
        nextDay: '[ihttin ti] LT',
        nextWeek: 'dddd [ti] LT',
        lastDay: '[ikte ti] LT',
        lastWeek: '[ovddit] dddd [ti] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s geažes',
        past : 'maŋit %s',
        s : 'moadde sekunddat',
        m : 'okta minuhta',
        mm : '%d minuhtat',
        h : 'okta diimmu',
        hh : '%d diimmut',
        d : 'okta beaivi',
        dd : '%d beaivvit',
        M : 'okta mánnu',
        MM : '%d mánut',
        y : 'okta jahki',
        yy : '%d jagit'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return se;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7Ozs7QUFJNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE5vcnRoZXJuIFNhbWkgW3NlXVxuLy8hIGF1dGhvcnMgOiBCw6VyZCBSb2xzdGFkIEhlbnJpa3NlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXJhbWVsbFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cblxudmFyIHNlID0gbW9tZW50LmRlZmluZUxvY2FsZSgnc2UnLCB7XG4gICAgbW9udGhzIDogJ2/EkcSRYWphZ2Vtw6FubnVfZ3VvdnZhbcOhbm51X25qdWvEjWFtw6FubnVfY3VvxYtvbcOhbm51X21pZXNzZW3DoW5udV9nZWFzc2Vtw6FubnVfc3VvaWRuZW3DoW5udV9ib3JnZW3DoW5udV/EjWFrxI1hbcOhbm51X2dvbGdnb3Rtw6FubnVfc2vDoWJtYW3DoW5udV9qdW92bGFtw6FubnUnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnb8SRxJFqX2d1b3Zfbmp1a19jdW9fbWllc19nZWFzX3N1b2lfYm9yZ1/EjWFrxI1fZ29sZ19za8OhYl9qdW92Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ3NvdG5hYmVhaXZpX3Z1b3Nzw6FyZ2FfbWHFi8WLZWLDoXJnYV9nYXNrYXZhaGtrdV9kdW9yYXN0YXRfYmVhcmphZGF0X2zDoXZ2YXJkYXQnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdzb3RuX3Z1b3NfbWHFi19nYXNrX2R1b3JfYmVhcl9sw6F2Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ3Nfdl9tX2dfZF9iX0wnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnTU1NTSBELiBbYi5dIFlZWVknLFxuICAgICAgICBMTEwgOiAnTU1NTSBELiBbYi5dIFlZWVkgW3RpLl0gSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIE1NTU0gRC4gW2IuXSBZWVlZIFt0aS5dIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdbb3RuZSB0aV0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW2lodHRpbiB0aV0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW3RpXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbaWt0ZSB0aV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ1tvdmRkaXRdIGRkZGQgW3RpXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIGdlYcW+ZXMnLFxuICAgICAgICBwYXN0IDogJ21hxYtpdCAlcycsXG4gICAgICAgIHMgOiAnbW9hZGRlIHNla3VuZGRhdCcsXG4gICAgICAgIG0gOiAnb2t0YSBtaW51aHRhJyxcbiAgICAgICAgbW0gOiAnJWQgbWludWh0YXQnLFxuICAgICAgICBoIDogJ29rdGEgZGlpbW11JyxcbiAgICAgICAgaGggOiAnJWQgZGlpbW11dCcsXG4gICAgICAgIGQgOiAnb2t0YSBiZWFpdmknLFxuICAgICAgICBkZCA6ICclZCBiZWFpdnZpdCcsXG4gICAgICAgIE0gOiAnb2t0YSBtw6FubnUnLFxuICAgICAgICBNTSA6ICclZCBtw6FudXQnLFxuICAgICAgICB5IDogJ29rdGEgamFoa2knLFxuICAgICAgICB5eSA6ICclZCBqYWdpdCdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBzZTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3NlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiJdLCJzb3VyY2VSb290IjoiIn0=