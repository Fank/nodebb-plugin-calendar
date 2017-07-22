webpackJsonp([79],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCa = moment.defineLocale('fr-ca', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    }
});

return frCa;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZnItY2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRnJlbmNoIChDYW5hZGEpIFtmci1jYV1cbi8vISBhdXRob3IgOiBKb25hdGhhbiBBYm91cmJpaCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb25iY2FcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgZnJDYSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2ZyLWNhJywge1xuICAgIG1vbnRocyA6ICdqYW52aWVyX2bDqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8O7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw6ljZW1icmUnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnamFudi5fZsOpdnIuX21hcnNfYXZyLl9tYWlfanVpbl9qdWlsLl9hb8O7dF9zZXB0Ll9vY3QuX25vdi5fZMOpYy4nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgd2Vla2RheXMgOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdEaV9MdV9NYV9NZV9KZV9WZV9TYScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW0F1am91cmTigJlodWkgw6BdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbRGVtYWluIMOgXSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW8OgXSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW0hpZXIgw6BdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnZGRkZCBbZGVybmllciDDoF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnZGFucyAlcycsXG4gICAgICAgIHBhc3QgOiAnaWwgeSBhICVzJyxcbiAgICAgICAgcyA6ICdxdWVscXVlcyBzZWNvbmRlcycsXG4gICAgICAgIG0gOiAndW5lIG1pbnV0ZScsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgICAgICBoIDogJ3VuZSBoZXVyZScsXG4gICAgICAgIGhoIDogJyVkIGhldXJlcycsXG4gICAgICAgIGQgOiAndW4gam91cicsXG4gICAgICAgIGRkIDogJyVkIGpvdXJzJyxcbiAgICAgICAgTSA6ICd1biBtb2lzJyxcbiAgICAgICAgTU0gOiAnJWQgbW9pcycsXG4gICAgICAgIHkgOiAndW4gYW4nLFxuICAgICAgICB5eSA6ICclZCBhbnMnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8ZSkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgICAgICAgIC8vIFdvcmRzIHdpdGggbWFzY3VsaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogbW9pcywgdHJpbWVzdHJlLCBqb3VyXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAobnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJyk7XG5cbiAgICAgICAgICAgIC8vIFdvcmRzIHdpdGggZmVtaW5pbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBzZW1haW5lXG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAobnVtYmVyID09PSAxID8gJ3JlJyA6ICdlJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxucmV0dXJuIGZyQ2E7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9mci1jYS5qc1xuLy8gbW9kdWxlIGlkID0gNjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNzkiXSwic291cmNlUm9vdCI6IiJ9