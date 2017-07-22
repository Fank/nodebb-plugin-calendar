webpackJsonp([96],{

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


// based on: https://www.bk.admin.ch/dokumentation/sprachen/04915/05016/index.html?lang=de#

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

var deCh = moment.defineLocale('de-ch', {
    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH.mm',
        LLLL : 'dddd, D. MMMM YYYY HH.mm'
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

return deCh;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZGUtY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiAoU3dpdHplcmxhbmQpIFtkZS1jaF1cbi8vISBhdXRob3IgOiBzc2NodWVsbGVyIDogaHR0cHM6Ly9naXRodWIuY29tL3NzY2h1ZWxsZXJcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG4vLyBiYXNlZCBvbjogaHR0cHM6Ly93d3cuYmsuYWRtaW4uY2gvZG9rdW1lbnRhdGlvbi9zcHJhY2hlbi8wNDkxNS8wNTAxNi9pbmRleC5odG1sP2xhbmc9ZGUjXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgJ20nOiBbJ2VpbmUgTWludXRlJywgJ2VpbmVyIE1pbnV0ZSddLFxuICAgICAgICAnaCc6IFsnZWluZSBTdHVuZGUnLCAnZWluZXIgU3R1bmRlJ10sXG4gICAgICAgICdkJzogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICAgICAgICAnZGQnOiBbbnVtYmVyICsgJyBUYWdlJywgbnVtYmVyICsgJyBUYWdlbiddLFxuICAgICAgICAnTSc6IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gICAgICAgICdNTSc6IFtudW1iZXIgKyAnIE1vbmF0ZScsIG51bWJlciArICcgTW9uYXRlbiddLFxuICAgICAgICAneSc6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxuICAgICAgICAneXknOiBbbnVtYmVyICsgJyBKYWhyZScsIG51bWJlciArICcgSmFocmVuJ11cbiAgICB9O1xuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcbn1cblxudmFyIGRlQ2ggPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdkZS1jaCcsIHtcbiAgICBtb250aHMgOiAnSmFudWFyX0ZlYnJ1YXJfTcOkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnSmFuLl9GZWJyLl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Zy5fU2VwdC5fT2t0Ll9Ob3YuX0Rlei4nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgd2Vla2RheXMgOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVDogJ0hILm1tJyxcbiAgICAgICAgTFRTOiAnSEgubW0uc3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEhILm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBELiBNTU1NIFlZWVkgSEgubW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1toZXV0ZSB1bV0gTFQgW1Vocl0nLFxuICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW3VtXSBMVCBbVWhyXScsXG4gICAgICAgIGxhc3REYXk6ICdbZ2VzdGVybiB1bV0gTFQgW1Vocl0nLFxuICAgICAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgICAgIHBhc3QgOiAndm9yICVzJyxcbiAgICAgICAgcyA6ICdlaW4gcGFhciBTZWt1bmRlbicsXG4gICAgICAgIG0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBtbSA6ICclZCBNaW51dGVuJyxcbiAgICAgICAgaCA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIGhoIDogJyVkIFN0dW5kZW4nLFxuICAgICAgICBkIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgZGQgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBNIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgTU0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB5IDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgeXkgOiBwcm9jZXNzUmVsYXRpdmVUaW1lXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gZGVDaDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSA5NiJdLCJzb3VyY2VSb290IjoiIn0=