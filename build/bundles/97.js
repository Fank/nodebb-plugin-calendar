webpackJsonp([97],{

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var deAt = moment.defineLocale('de-at', {
    months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime,
        mm : '%d Minuten',
        h : processRelativeTime,
        hh : '%d Stunden',
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return deAt;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZGUtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6Ijk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiAoQXVzdHJpYSkgW2RlLWF0XVxuLy8hIGF1dGhvciA6IGxsdWNocyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9sbHVjaHNcbi8vISBhdXRob3I6IE1lbmVsaW9uIEVsZW5zw7psZTogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcbi8vISBhdXRob3IgOiBNYXJ0aW4gR3JvbGxlciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9NYWRNR1xuLy8hIGF1dGhvciA6IE1pa29sYWogRGFkZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL21pazAxYWpcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICdtJzogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgICAgICAgJ2gnOiBbJ2VpbmUgU3R1bmRlJywgJ2VpbmVyIFN0dW5kZSddLFxuICAgICAgICAnZCc6IFsnZWluIFRhZycsICdlaW5lbSBUYWcnXSxcbiAgICAgICAgJ2RkJzogW251bWJlciArICcgVGFnZScsIG51bWJlciArICcgVGFnZW4nXSxcbiAgICAgICAgJ00nOiBbJ2VpbiBNb25hdCcsICdlaW5lbSBNb25hdCddLFxuICAgICAgICAnTU0nOiBbbnVtYmVyICsgJyBNb25hdGUnLCBudW1iZXIgKyAnIE1vbmF0ZW4nXSxcbiAgICAgICAgJ3knOiBbJ2VpbiBKYWhyJywgJ2VpbmVtIEphaHInXSxcbiAgICAgICAgJ3l5JzogW251bWJlciArICcgSmFocmUnLCBudW1iZXIgKyAnIEphaHJlbiddXG4gICAgfTtcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG59XG5cbnZhciBkZUF0ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZGUtYXQnLCB7XG4gICAgbW9udGhzIDogJ0rDpG5uZXJfRmVicnVhcl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKw6RuLl9GZWJyLl9NcnouX0Fwci5fTWFpX0p1bi5fSnVsLl9BdWcuX1NlcHQuX09rdC5fTm92Ll9EZXouJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ1Nvbm50YWdfTW9udGFnX0RpZW5zdGFnX01pdHR3b2NoX0Rvbm5lcnN0YWdfRnJlaXRhZ19TYW1zdGFnJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnU28uX01vLl9EaS5fTWkuX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1NvX01vX0RpX01pX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQuTU0uWVlZWScsXG4gICAgICAgIExMIDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW2hldXRlIHVtXSBMVCBbVWhyXScsXG4gICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIG5leHREYXk6ICdbbW9yZ2VuIHVtXSBMVCBbVWhyXScsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICAgICAgbGFzdERheTogJ1tnZXN0ZXJuIHVtXSBMVCBbVWhyXScsXG4gICAgICAgIGxhc3RXZWVrOiAnW2xldHp0ZW5dIGRkZGQgW3VtXSBMVCBbVWhyXSdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ2luICVzJyxcbiAgICAgICAgcGFzdCA6ICd2b3IgJXMnLFxuICAgICAgICBzIDogJ2VpbiBwYWFyIFNla3VuZGVuJyxcbiAgICAgICAgbSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIG1tIDogJyVkIE1pbnV0ZW4nLFxuICAgICAgICBoIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgaGggOiAnJWQgU3R1bmRlbicsXG4gICAgICAgIGQgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBkZCA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIE0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBNTSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIHkgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB5eSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBkZUF0O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZGUtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDk3Il0sInNvdXJjZVJvb3QiOiIifQ==