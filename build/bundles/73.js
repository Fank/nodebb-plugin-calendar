webpackJsonp([73],{

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's': ['thodde secondanim', 'thodde second'],
        'm': ['eka mintan', 'ek minute'],
        'mm': [number + ' mintanim', number + ' mintam'],
        'h': ['eka horan', 'ek hor'],
        'hh': [number + ' horanim', number + ' hor'],
        'd': ['eka disan', 'ek dis'],
        'dd': [number + ' disanim', number + ' dis'],
        'M': ['eka mhoinean', 'ek mhoino'],
        'MM': [number + ' mhoineanim', number + ' mhoine'],
        'y': ['eka vorsan', 'ek voros'],
        'yy': [number + ' vorsanim', number + ' vorsam']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var gomLatn = moment.defineLocale('gom-latn', {
    months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
    monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
    weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'A h:mm [vazta]',
        LTS : 'A h:mm:ss [vazta]',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY A h:mm [vazta]',
        LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
        llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
    },
    calendar : {
        sameDay: '[Aiz] LT',
        nextDay: '[Faleam] LT',
        nextWeek: '[Ieta to] dddd[,] LT',
        lastDay: '[Kal] LT',
        lastWeek: '[Fatlo] dddd[,] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s',
        past : '%s adim',
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
    dayOfMonthOrdinalParse : /\d{1,2}(er)/,
    ordinal : function (number, period) {
        switch (period) {
            // the ordinal 'er' only applies to day of the month
            case 'D':
                return number + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    },
    meridiemParse: /rati|sokalli|donparam|sanje/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'rati') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'sokalli') {
            return hour;
        } else if (meridiem === 'donparam') {
            return hour > 12 ? hour : hour + 12;
        } else if (meridiem === 'sanje') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'rati';
        } else if (hour < 12) {
            return 'sokalli';
        } else if (hour < 16) {
            return 'donparam';
        } else if (hour < 20) {
            return 'sanje';
        } else {
            return 'rati';
        }
    }
});

return gomLatn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyxJQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI3My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLb25rYW5pIExhdGluIHNjcmlwdCBbZ29tLWxhdG5dXG4vLyEgYXV0aG9yIDogVGhlIERpc2NvdmVyZXIgOiBodHRwczovL2dpdGh1Yi5jb20vV2lraURpc2NvdmVyZXJcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICdzJzogWyd0aG9kZGUgc2Vjb25kYW5pbScsICd0aG9kZGUgc2Vjb25kJ10sXG4gICAgICAgICdtJzogWydla2EgbWludGFuJywgJ2VrIG1pbnV0ZSddLFxuICAgICAgICAnbW0nOiBbbnVtYmVyICsgJyBtaW50YW5pbScsIG51bWJlciArICcgbWludGFtJ10sXG4gICAgICAgICdoJzogWydla2EgaG9yYW4nLCAnZWsgaG9yJ10sXG4gICAgICAgICdoaCc6IFtudW1iZXIgKyAnIGhvcmFuaW0nLCBudW1iZXIgKyAnIGhvciddLFxuICAgICAgICAnZCc6IFsnZWthIGRpc2FuJywgJ2VrIGRpcyddLFxuICAgICAgICAnZGQnOiBbbnVtYmVyICsgJyBkaXNhbmltJywgbnVtYmVyICsgJyBkaXMnXSxcbiAgICAgICAgJ00nOiBbJ2VrYSBtaG9pbmVhbicsICdlayBtaG9pbm8nXSxcbiAgICAgICAgJ01NJzogW251bWJlciArICcgbWhvaW5lYW5pbScsIG51bWJlciArICcgbWhvaW5lJ10sXG4gICAgICAgICd5JzogWydla2Egdm9yc2FuJywgJ2VrIHZvcm9zJ10sXG4gICAgICAgICd5eSc6IFtudW1iZXIgKyAnIHZvcnNhbmltJywgbnVtYmVyICsgJyB2b3JzYW0nXVxuICAgIH07XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xufVxuXG52YXIgZ29tTGF0biA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2dvbS1sYXRuJywge1xuICAgIG1vbnRocyA6ICdKYW5lcl9GZWJyZXJfTWFyc19BYnJpbF9NYWlfSnVuX0p1bGFpX0Fnb3N0X1NldGVtYnJfT3R1YnJfTm92ZW1icl9EZXplbWJyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ0phbi5fRmViLl9NYXJzX0Fici5fTWFpX0p1bl9KdWwuX0Fnby5fU2V0Ll9PdHUuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICB3ZWVrZGF5cyA6ICdBaXRhcl9Tb21hcl9Nb25nbGxhcl9CdWR2YXJfQnJlc3Rhcl9TdWtyYXJfU29uXFwndmFyJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnQWl0Ll9Tb20uX01vbi5fQnVkLl9CcmUuX1N1ay5fU29uLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdBaV9TbV9Nb19CdV9Ccl9TdV9Tbicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdBIGg6bW0gW3ZhenRhXScsXG4gICAgICAgIExUUyA6ICdBIGg6bW06c3MgW3ZhenRhXScsXG4gICAgICAgIEwgOiAnREQtTU0tWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEEgaDptbSBbdmF6dGFdJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBNTU1NW2FjaGVhXSBEbywgWVlZWSwgQSBoOm1tIFt2YXp0YV0nLFxuICAgICAgICBsbGxsOiAnZGRkLCBEIE1NTSBZWVlZLCBBIGg6bW0gW3ZhenRhXSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW0Fpel0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW0ZhbGVhbV0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ1tJZXRhIHRvXSBkZGRkWyxdIExUJyxcbiAgICAgICAgbGFzdERheTogJ1tLYWxdIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdbRmF0bG9dIGRkZGRbLF0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcycsXG4gICAgICAgIHBhc3QgOiAnJXMgYWRpbScsXG4gICAgICAgIHMgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBtIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgbW0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBoIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgaGggOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBkIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgZGQgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBNIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgTU0gOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB5IDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgeXkgOiBwcm9jZXNzUmVsYXRpdmVUaW1lXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KGVyKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIsIHBlcmlvZCkge1xuICAgICAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgICAgICAgLy8gdGhlIG9yZGluYWwgJ2VyJyBvbmx5IGFwcGxpZXMgdG8gZGF5IG9mIHRoZSBtb250aFxuICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICdlcic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9LFxuICAgIG1lcmlkaWVtUGFyc2U6IC9yYXRpfHNva2FsbGl8ZG9ucGFyYW18c2FuamUvLFxuICAgIG1lcmlkaWVtSG91ciA6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJpZGllbSA9PT0gJ3JhdGknKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA8IDQgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc29rYWxsaScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnZG9ucGFyYW0nKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+IDEyID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NhbmplJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgICAgICAgcmV0dXJuICdyYXRpJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAnc29rYWxsaSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE2KSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RvbnBhcmFtJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybiAnc2FuamUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdyYXRpJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5yZXR1cm4gZ29tTGF0bjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA3MyJdLCJzb3VyY2VSb290IjoiIn0=