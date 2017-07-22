webpackJsonp([76],{

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

var fy = moment.defineLocale('fy', {
    months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[hjoed om] LT',
        nextDay: '[moarn om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[juster om] LT',
        lastWeek: '[ôfrûne] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'oer %s',
        past : '%s lyn',
        s : 'in pear sekonden',
        m : 'ien minút',
        mm : '%d minuten',
        h : 'ien oere',
        hh : '%d oeren',
        d : 'ien dei',
        dd : '%d dagen',
        M : 'ien moanne',
        MM : '%d moannen',
        y : 'ien jier',
        yy : '%d jierren'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fy;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6Ijc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEZyaXNpYW4gW2Z5XVxuLy8hIGF1dGhvciA6IFJvYmluIHZhbiBkZXIgVmxpZXQgOiBodHRwczovL2dpdGh1Yi5jb20vcm9iaW4wdmFuMGRlcjB2XG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tYWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVzLicuc3BsaXQoJ18nKTtcbnZhciBtb250aHNTaG9ydFdpdGhvdXREb3RzID0gJ2phbl9mZWJfbXJ0X2Fwcl9tYWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVzJy5zcGxpdCgnXycpO1xuXG52YXIgZnkgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdmeScsIHtcbiAgICBtb250aHMgOiAnamFubmV3YXJpc19mZWJyZXdhcmlzX21hYXJ0X2FwcmlsX21hYWllX2p1bnlfanVseV9hdWd1c3R1c19zZXB0aW1iZXJfb2t0b2Jlcl9ub3ZpbWJlcl9kZXNpbWJlcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6IGZ1bmN0aW9uIChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcbiAgICAgICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbbS5tb250aCgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW20ubW9udGgoKV07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ3NuZWluX21vYW5kZWlfdGlpc2RlaV93b2Fuc2RlaV90b25nZXJzZGVpX2ZyZWVkX3NuZW9uJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnc2kuX21vLl90aS5fd28uX3RvLl9mci5fc28uJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1NpX01vX1RpX1dvX1RvX0ZyX1NvJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC1NTS1ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1toam9lZCBvbV0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW21vYXJuIG9tXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICAgICAgbGFzdERheTogJ1tqdXN0ZXIgb21dIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdbw7RmcsO7bmVdIGRkZGQgW29tXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ29lciAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgbHluJyxcbiAgICAgICAgcyA6ICdpbiBwZWFyIHNla29uZGVuJyxcbiAgICAgICAgbSA6ICdpZW4gbWluw7p0JyxcbiAgICAgICAgbW0gOiAnJWQgbWludXRlbicsXG4gICAgICAgIGggOiAnaWVuIG9lcmUnLFxuICAgICAgICBoaCA6ICclZCBvZXJlbicsXG4gICAgICAgIGQgOiAnaWVuIGRlaScsXG4gICAgICAgIGRkIDogJyVkIGRhZ2VuJyxcbiAgICAgICAgTSA6ICdpZW4gbW9hbm5lJyxcbiAgICAgICAgTU0gOiAnJWQgbW9hbm5lbicsXG4gICAgICAgIHkgOiAnaWVuIGppZXInLFxuICAgICAgICB5eSA6ICclZCBqaWVycmVuJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAoKG51bWJlciA9PT0gMSB8fCBudW1iZXIgPT09IDggfHwgbnVtYmVyID49IDIwKSA/ICdzdGUnIDogJ2RlJyk7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gZnk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9meS5qc1xuLy8gbW9kdWxlIGlkID0gNzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNzYiXSwic291cmNlUm9vdCI6IiJ9