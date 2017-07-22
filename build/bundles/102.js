webpackJsonp([102],{

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ca = moment.defineLocale('ca', {
    months : {
        standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
        isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : '[el] D MMMM [de] YYYY',
        ll : 'D MMM YYYY',
        LLL : '[el] D MMMM [de] YYYY [a les] H:mm',
        lll : 'D MMM YYYY, H:mm',
        LLLL : '[el] dddd D MMMM [de] YYYY [a les] H:mm',
        llll : 'ddd D MMM YYYY, H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextDay : function () {
            return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastDay : function () {
            return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'd\'aquí %s',
        past : 'fa %s',
        s : 'uns segons',
        m : 'un minut',
        mm : '%d minuts',
        h : 'una hora',
        hh : '%d hores',
        d : 'un dia',
        dd : '%d dies',
        M : 'un mes',
        MM : '%d mesos',
        y : 'un any',
        yy : '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal : function (number, period) {
        var output = (number === 1) ? 'r' :
            (number === 2) ? 'n' :
            (number === 3) ? 'r' :
            (number === 4) ? 't' : 'è';
        if (period === 'w' || period === 'W') {
            output = 'a';
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return ca;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvY2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDYXRhbGFuIFtjYV1cbi8vISBhdXRob3IgOiBKdWFuIEcuIEh1cnRhZG8gOiBodHRwczovL2dpdGh1Yi5jb20vanVhbmdodXJ0YWRvXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGNhID0gbW9tZW50LmRlZmluZUxvY2FsZSgnY2EnLCB7XG4gICAgbW9udGhzIDoge1xuICAgICAgICBzdGFuZGFsb25lOiAnZ2VuZXJfZmVicmVyX21hcsOnX2FicmlsX21haWdfanVueV9qdWxpb2xfYWdvc3Rfc2V0ZW1icmVfb2N0dWJyZV9ub3ZlbWJyZV9kZXNlbWJyZScuc3BsaXQoJ18nKSxcbiAgICAgICAgZm9ybWF0OiAnZGUgZ2VuZXJfZGUgZmVicmVyX2RlIG1hcsOnX2RcXCdhYnJpbF9kZSBtYWlnX2RlIGp1bnlfZGUganVsaW9sX2RcXCdhZ29zdF9kZSBzZXRlbWJyZV9kXFwnb2N0dWJyZV9kZSBub3ZlbWJyZV9kZSBkZXNlbWJyZScuc3BsaXQoJ18nKSxcbiAgICAgICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxzKStNTU1NL1xuICAgIH0sXG4gICAgbW9udGhzU2hvcnQgOiAnZ2VuLl9mZWJyLl9tYXLDp19hYnIuX21haWdfanVueV9qdWwuX2FnLl9zZXQuX29jdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ2RpdW1lbmdlX2RpbGx1bnNfZGltYXJ0c19kaW1lY3Jlc19kaWpvdXNfZGl2ZW5kcmVzX2Rpc3NhYnRlJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnZGcuX2RsLl9kdC5fZGMuX2RqLl9kdi5fZHMuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ0RnX0RsX0R0X0RjX0RqX0R2X0RzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0g6bW0nLFxuICAgICAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ1tlbF0gRCBNTU1NIFtkZV0gWVlZWScsXG4gICAgICAgIGxsIDogJ0QgTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnW2VsXSBEIE1NTU0gW2RlXSBZWVlZIFthIGxlc10gSDptbScsXG4gICAgICAgIGxsbCA6ICdEIE1NTSBZWVlZLCBIOm1tJyxcbiAgICAgICAgTExMTCA6ICdbZWxdIGRkZGQgRCBNTU1NIFtkZV0gWVlZWSBbYSBsZXNdIEg6bW0nLFxuICAgICAgICBsbGxsIDogJ2RkZCBEIE1NTSBZWVlZLCBIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1thdnVpIGEgJyArICgodGhpcy5ob3VycygpICE9PSAxKSA/ICdsZXMnIDogJ2xhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHREYXkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tkZW3DoCBhICcgKyAoKHRoaXMuaG91cnMoKSAhPT0gMSkgPyAnbGVzJyA6ICdsYScpICsgJ10gTFQnO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGRkZCBbYSAnICsgKCh0aGlzLmhvdXJzKCkgIT09IDEpID8gJ2xlcycgOiAnbGEnKSArICddIExUJztcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdERheSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW2FoaXIgYSAnICsgKCh0aGlzLmhvdXJzKCkgIT09IDEpID8gJ2xlcycgOiAnbGEnKSArICddIExUJztcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFdlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbcGFzc2F0IGEgJyArICgodGhpcy5ob3VycygpICE9PSAxKSA/ICdsZXMnIDogJ2xhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdkXFwnYXF1w60gJXMnLFxuICAgICAgICBwYXN0IDogJ2ZhICVzJyxcbiAgICAgICAgcyA6ICd1bnMgc2Vnb25zJyxcbiAgICAgICAgbSA6ICd1biBtaW51dCcsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0cycsXG4gICAgICAgIGggOiAndW5hIGhvcmEnLFxuICAgICAgICBoaCA6ICclZCBob3JlcycsXG4gICAgICAgIGQgOiAndW4gZGlhJyxcbiAgICAgICAgZGQgOiAnJWQgZGllcycsXG4gICAgICAgIE0gOiAndW4gbWVzJyxcbiAgICAgICAgTU0gOiAnJWQgbWVzb3MnLFxuICAgICAgICB5IDogJ3VuIGFueScsXG4gICAgICAgIHl5IDogJyVkIGFueXMnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0ocnxufHR8w6h8YSkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IChudW1iZXIgPT09IDEpID8gJ3InIDpcbiAgICAgICAgICAgIChudW1iZXIgPT09IDIpID8gJ24nIDpcbiAgICAgICAgICAgIChudW1iZXIgPT09IDMpID8gJ3InIDpcbiAgICAgICAgICAgIChudW1iZXIgPT09IDQpID8gJ3QnIDogJ8OoJztcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gJ3cnIHx8IHBlcmlvZCA9PT0gJ1cnKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAnYSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBjYTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2NhLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMDIiXSwic291cmNlUm9vdCI6IiJ9