webpackJsonp([15],{

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


// After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
// This is currently too difficult (maybe even impossible) to add.
var tzl = moment.defineLocale('tzl', {
    months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM [dallas] YYYY',
        LLL : 'D. MMMM [dallas] YYYY HH.mm',
        LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM : function (input) {
        return 'd\'o' === input.toLowerCase();
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'd\'o' : 'D\'O';
        } else {
            return isLower ? 'd\'a' : 'D\'A';
        }
    },
    calendar : {
        sameDay : '[oxhi à] LT',
        nextDay : '[demà à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[ieiri à] LT',
        lastWeek : '[sür el] dddd [lasteu à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'osprei %s',
        past : 'ja%s',
        s : processRelativeTime,
        m : processRelativeTime,
        mm : processRelativeTime,
        h : processRelativeTime,
        hh : processRelativeTime,
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

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's': ['viensas secunds', '\'iensas secunds'],
        'm': ['\'n míut', '\'iens míut'],
        'mm': [number + ' míuts', '' + number + ' míuts'],
        'h': ['\'n þora', '\'iensa þora'],
        'hh': [number + ' þoras', '' + number + ' þoras'],
        'd': ['\'n ziua', '\'iensa ziua'],
        'dd': [number + ' ziuas', '' + number + ' ziuas'],
        'M': ['\'n mes', '\'iens mes'],
        'MM': [number + ' mesen', '' + number + ' mesen'],
        'y': ['\'n ar', '\'iens ar'],
        'yy': [number + ' ars', '' + number + ' ars']
    };
    return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
}

return tzl;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdHpsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBUYWxvc3NhbiBbdHpsXVxuLy8hIGF1dGhvciA6IFJvYmluIHZhbiBkZXIgVmxpZXQgOiBodHRwczovL2dpdGh1Yi5jb20vcm9iaW4wdmFuMGRlcjB2XG4vLyEgYXV0aG9yIDogSXVzdMOsIENhbnVuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxuLy8gQWZ0ZXIgdGhlIHllYXIgdGhlcmUgc2hvdWxkIGJlIGEgc2xhc2ggYW5kIHRoZSBhbW91bnQgb2YgeWVhcnMgc2luY2UgRGVjZW1iZXIgMjYsIDE5NzkgaW4gUm9tYW4gbnVtZXJhbHMuXG4vLyBUaGlzIGlzIGN1cnJlbnRseSB0b28gZGlmZmljdWx0IChtYXliZSBldmVuIGltcG9zc2libGUpIHRvIGFkZC5cbnZhciB0emwgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd0emwnLCB7XG4gICAgbW9udGhzIDogJ0phbnVhcl9GZXZyYWdsaF9NYXLDp19BdnLDr3VfTWFpX0fDvG5fSnVsaWFfR3VzY2h0X1NldGVtdmFyX0xpc3RvcMOkdHNfTm9lbXZhcl9aZWNlbXZhcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKYW5fRmV2X01hcl9BdnJfTWFpX0fDvG5fSnVsX0d1c19TZXRfTGlzX05vZV9aZWMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnU8O6bGFkaV9Mw7puZcOnaV9NYWl0emlfTcOhcmN1cmlfWGjDumFkaV9WacOpbmVyw6dpX1PDoXR1cmknLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdTw7psX0zDum5fTWFpX03DoXJfWGjDul9WacOpX1PDoXQnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnU8O6X0zDul9NYV9Nw6FfWGhfVmlfU8OhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISC5tbScsXG4gICAgICAgIExUUyA6ICdISC5tbS5zcycsXG4gICAgICAgIEwgOiAnREQuTU0uWVlZWScsXG4gICAgICAgIExMIDogJ0QuIE1NTU0gW2RhbGxhc10gWVlZWScsXG4gICAgICAgIExMTCA6ICdELiBNTU1NIFtkYWxsYXNdIFlZWVkgSEgubW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIFtsaV0gRC4gTU1NTSBbZGFsbGFzXSBZWVlZIEhILm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL2RcXCdvfGRcXCdhL2ksXG4gICAgaXNQTSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gJ2RcXCdvJyA9PT0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdkXFwnbycgOiAnRFxcJ08nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnZFxcJ2EnIDogJ0RcXCdBJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW294aGkgw6BdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbZGVtw6Agw6BdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbw6BdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbaWVpcmkgw6BdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW3PDvHIgZWxdIGRkZGQgW2xhc3RldSDDoF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnb3NwcmVpICVzJyxcbiAgICAgICAgcGFzdCA6ICdqYSVzJyxcbiAgICAgICAgcyA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIG0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBtbSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIGggOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBoaCA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIGQgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBkZCA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIE0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBNTSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIHkgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB5eSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgJ3MnOiBbJ3ZpZW5zYXMgc2VjdW5kcycsICdcXCdpZW5zYXMgc2VjdW5kcyddLFxuICAgICAgICAnbSc6IFsnXFwnbiBtw611dCcsICdcXCdpZW5zIG3DrXV0J10sXG4gICAgICAgICdtbSc6IFtudW1iZXIgKyAnIG3DrXV0cycsICcnICsgbnVtYmVyICsgJyBtw611dHMnXSxcbiAgICAgICAgJ2gnOiBbJ1xcJ24gw75vcmEnLCAnXFwnaWVuc2Egw75vcmEnXSxcbiAgICAgICAgJ2hoJzogW251bWJlciArICcgw75vcmFzJywgJycgKyBudW1iZXIgKyAnIMO+b3JhcyddLFxuICAgICAgICAnZCc6IFsnXFwnbiB6aXVhJywgJ1xcJ2llbnNhIHppdWEnXSxcbiAgICAgICAgJ2RkJzogW251bWJlciArICcgeml1YXMnLCAnJyArIG51bWJlciArICcgeml1YXMnXSxcbiAgICAgICAgJ00nOiBbJ1xcJ24gbWVzJywgJ1xcJ2llbnMgbWVzJ10sXG4gICAgICAgICdNTSc6IFtudW1iZXIgKyAnIG1lc2VuJywgJycgKyBudW1iZXIgKyAnIG1lc2VuJ10sXG4gICAgICAgICd5JzogWydcXCduIGFyJywgJ1xcJ2llbnMgYXInXSxcbiAgICAgICAgJ3l5JzogW251bWJlciArICcgYXJzJywgJycgKyBudW1iZXIgKyAnIGFycyddXG4gICAgfTtcbiAgICByZXR1cm4gaXNGdXR1cmUgPyBmb3JtYXRba2V5XVswXSA6ICh3aXRob3V0U3VmZml4ID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXSk7XG59XG5cbnJldHVybiB0emw7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS90emwuanNcbi8vIG1vZHVsZSBpZCA9IDc2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE1Il0sInNvdXJjZVJvb3QiOiIifQ==