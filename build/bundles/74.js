webpackJsonp([74],{

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var gl = moment.defineLocale('gl', {
    months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextDay : function () {
            return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        lastDay : function () {
            return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
        },
        lastWeek : function () {
            return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : function (str) {
            if (str.indexOf('un') === 0) {
                return 'n' + str;
            }
            return 'en ' + str;
        },
        past : 'hai %s',
        s : 'uns segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'unha hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return gl;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZ2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cbi8vISBhdXRob3IgOiBKdWFuIEcuIEh1cnRhZG8gOiBodHRwczovL2dpdGh1Yi5jb20vanVhbmdodXJ0YWRvXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGdsID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZ2wnLCB7XG4gICAgbW9udGhzIDogJ3hhbmVpcm9fZmVicmVpcm9fbWFyem9fYWJyaWxfbWFpb194dcOxb194dWxsb19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZWNlbWJybycuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICd4YW4uX2ZlYi5fbWFyLl9hYnIuX21haS5feHXDsS5feHVsLl9hZ28uX3NldC5fb3V0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICB3ZWVrZGF5cyA6ICdkb21pbmdvX2x1bnNfbWFydGVzX23DqXJjb3Jlc194b3Zlc192ZW5yZXNfc8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ2RvbS5fbHVuLl9tYXIuX23DqXIuX3hvdi5fdmVuLl9zw6FiLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdkb19sdV9tYV9tw6lfeG9fdmVfc8OhJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0g6bW0nLFxuICAgICAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW2hveGUgJyArICgodGhpcy5ob3VycygpICE9PSAxKSA/ICfDoXMnIDogJ8OhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHREYXkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1ttYcOxw6EgJyArICgodGhpcy5ob3VycygpICE9PSAxKSA/ICfDoXMnIDogJ8OhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHRXZWVrIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdkZGRkIFsnICsgKCh0aGlzLmhvdXJzKCkgIT09IDEpID8gJ8OhcycgOiAnYScpICsgJ10gTFQnO1xuICAgICAgICB9LFxuICAgICAgICBsYXN0RGF5IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbb250ZSAnICsgKCh0aGlzLmhvdXJzKCkgIT09IDEpID8gJ8OhJyA6ICdhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RXZWVrIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbb10gZGRkZCBbcGFzYWRvICcgKyAoKHRoaXMuaG91cnMoKSAhPT0gMSkgPyAnw6FzJyA6ICdhJykgKyAnXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZigndW4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbicgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2VuICcgKyBzdHI7XG4gICAgICAgIH0sXG4gICAgICAgIHBhc3QgOiAnaGFpICVzJyxcbiAgICAgICAgcyA6ICd1bnMgc2VndW5kb3MnLFxuICAgICAgICBtIDogJ3VuIG1pbnV0bycsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0b3MnLFxuICAgICAgICBoIDogJ3VuaGEgaG9yYScsXG4gICAgICAgIGhoIDogJyVkIGhvcmFzJyxcbiAgICAgICAgZCA6ICd1biBkw61hJyxcbiAgICAgICAgZGQgOiAnJWQgZMOtYXMnLFxuICAgICAgICBNIDogJ3VuIG1lcycsXG4gICAgICAgIE1NIDogJyVkIG1lc2VzJyxcbiAgICAgICAgeSA6ICd1biBhbm8nLFxuICAgICAgICB5eSA6ICclZCBhbm9zJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfcK6LyxcbiAgICBvcmRpbmFsIDogJyVkwronLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBnbDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2dsLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDJcbi8vIG1vZHVsZSBjaHVua3MgPSA3NCJdLCJzb3VyY2VSb290IjoiIn0=