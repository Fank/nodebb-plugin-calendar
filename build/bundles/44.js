webpackJsonp([44],{

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var nb = moment.defineLocale('nb', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] HH:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s siden',
        s : 'noen sekunder',
        m : 'ett minutt',
        mm : '%d minutter',
        h : 'en time',
        hh : '%d timer',
        d : 'en dag',
        dd : '%d dager',
        M : 'en måned',
        MM : '%d måneder',
        y : 'ett år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nb;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbmIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTm9yd2VnaWFuIEJva23DpWwgW25iXVxuLy8hIGF1dGhvcnMgOiBFc3BlbiBIb3ZsYW5kc2RhbCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZXh4YXJzXG4vLyEgICAgICAgICAgIFNpZ3VyZCBHYXJ0bWFubiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaWd1cmRnYVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBuYiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ25iJywge1xuICAgIG1vbnRocyA6ICdqYW51YXJfZmVicnVhcl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ2phbi5fZmViLl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVnLl9zZXAuX29rdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ3PDuG5kYWdfbWFuZGFnX3RpcnNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDuHJkYWcnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdzw7guX21hLl90aS5fb24uX3RvLl9mci5fbMO4Licuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdzw7hfbWFfdGlfb25fdG9fZnJfbMO4Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QuIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1tpIGRhZyBrbC5dIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tpIG1vcmdlbiBrbC5dIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFtrbC5dIExUJyxcbiAgICAgICAgbGFzdERheTogJ1tpIGfDpXIga2wuXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiAnW2ZvcnJpZ2VdIGRkZGQgW2tsLl0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdvbSAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgc2lkZW4nLFxuICAgICAgICBzIDogJ25vZW4gc2VrdW5kZXInLFxuICAgICAgICBtIDogJ2V0dCBtaW51dHQnLFxuICAgICAgICBtbSA6ICclZCBtaW51dHRlcicsXG4gICAgICAgIGggOiAnZW4gdGltZScsXG4gICAgICAgIGhoIDogJyVkIHRpbWVyJyxcbiAgICAgICAgZCA6ICdlbiBkYWcnLFxuICAgICAgICBkZCA6ICclZCBkYWdlcicsXG4gICAgICAgIE0gOiAnZW4gbcOlbmVkJyxcbiAgICAgICAgTU0gOiAnJWQgbcOlbmVkZXInLFxuICAgICAgICB5IDogJ2V0dCDDpXInLFxuICAgICAgICB5eSA6ICclZCDDpXInXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbmI7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9uYi5qc1xuLy8gbW9kdWxlIGlkID0gNzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNDQiXSwic291cmNlUm9vdCI6IiJ9