webpackJsonp([40],{

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! author : https://github.com/mechuwind

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var nn = moment.defineLocale('nn', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
    weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[I dag klokka] LT',
        nextDay: '[I morgon klokka] LT',
        nextWeek: 'dddd [klokka] LT',
        lastDay: '[I går klokka] LT',
        lastWeek: '[Føregåande] dddd [klokka] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s sidan',
        s : 'nokre sekund',
        m : 'eit minutt',
        mm : '%d minutt',
        h : 'ein time',
        hh : '%d timar',
        d : 'ein dag',
        dd : '%d dagar',
        M : 'ein månad',
        MM : '%d månader',
        y : 'eit år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTnlub3JzayBbbm5dXG4vLyEgYXV0aG9yIDogaHR0cHM6Ly9naXRodWIuY29tL21lY2h1d2luZFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBubiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ25uJywge1xuICAgIG1vbnRocyA6ICdqYW51YXJfZmVicnVhcl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbWFyX2Fwcl9tYWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ3N1bmRhZ19tw6VuZGFnX3R5c2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbGF1cmRhZycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ3N1bl9tw6VuX3R5c19vbnNfdG9yX2ZyZV9sYXUnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnc3VfbcOlX3R5X29uX3RvX2ZyX2zDuCcuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIFtrbC5dIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQgRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdbSSBkYWcga2xva2thXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdbSSBtb3Jnb24ga2xva2thXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBba2xva2thXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbSSBnw6VyIGtsb2trYV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ1tGw7hyZWfDpWFuZGVdIGRkZGQgW2tsb2trYV0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdvbSAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgc2lkYW4nLFxuICAgICAgICBzIDogJ25va3JlIHNla3VuZCcsXG4gICAgICAgIG0gOiAnZWl0IG1pbnV0dCcsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0dCcsXG4gICAgICAgIGggOiAnZWluIHRpbWUnLFxuICAgICAgICBoaCA6ICclZCB0aW1hcicsXG4gICAgICAgIGQgOiAnZWluIGRhZycsXG4gICAgICAgIGRkIDogJyVkIGRhZ2FyJyxcbiAgICAgICAgTSA6ICdlaW4gbcOlbmFkJyxcbiAgICAgICAgTU0gOiAnJWQgbcOlbmFkZXInLFxuICAgICAgICB5IDogJ2VpdCDDpXInLFxuICAgICAgICB5eSA6ICclZCDDpXInXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbm47XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9ubi5qc1xuLy8gbW9kdWxlIGlkID0gNzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gNDAiXSwic291cmNlUm9vdCI6IiJ9