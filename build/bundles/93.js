webpackJsonp([93],{

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}


var el = moment.defineLocale('el', {
    monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months : function (momentToFormat, format) {
        if (!momentToFormat) {
            return this._monthsNominativeEl;
        } else if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
            return this._monthsNominativeEl[momentToFormat.month()];
        }
    },
    monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
        } else {
            return isLower ? 'πμ' : 'ΠΜ';
        }
    },
    isPM : function (input) {
        return ((input + '').toLowerCase()[0] === 'μ');
    },
    meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendarEl : {
        sameDay : '[Σήμερα {}] LT',
        nextDay : '[Αύριο {}] LT',
        nextWeek : 'dddd [{}] LT',
        lastDay : '[Χθες {}] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                default:
                    return '[την προηγούμενη] dddd [{}] LT';
            }
        },
        sameElse : 'L'
    },
    calendar : function (key, mom) {
        var output = this._calendarEl[key],
            hours = mom && mom.hours();
        if (isFunction(output)) {
            output = output.apply(mom);
        }
        return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
    },
    relativeTime : {
        future : 'σε %s',
        past : '%s πριν',
        s : 'λίγα δευτερόλεπτα',
        m : 'ένα λεπτό',
        mm : '%d λεπτά',
        h : 'μία ώρα',
        hh : '%d ώρες',
        d : 'μία μέρα',
        dd : '%d μέρες',
        M : 'ένας μήνας',
        MM : '%d μήνες',
        y : 'ένας χρόνος',
        yy : '%d χρόνια'
    },
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4st is the first week of the year.
    }
});

return el;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7O0FBRTVCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrRUFBa0U7QUFDM0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR3JlZWsgW2VsXVxuLy8hIGF1dGhvciA6IEFnZ2Vsb3MgS2FyYWxpYXMgOiBodHRwczovL2dpdGh1Yi5jb20vbWVoaWVsXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5cbnZhciBlbCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2VsJywge1xuICAgIG1vbnRoc05vbWluYXRpdmVFbCA6ICfOmc6xzr3Ov8+FzqzPgc65zr/Pgl/Ops61zrLPgc6/z4XOrM+BzrnOv8+CX86czqzPgc+EzrnOv8+CX86Rz4DPgc6vzrvOuc6/z4JfzpzOrM65zr/Pgl/Omc6/z43Ovc65zr/Pgl/Omc6/z43Ou865zr/Pgl/Okc+NzrPOv8+Fz4PPhM6/z4JfzqPOtc+Az4TOrc68zrLPgc65zr/Pgl/On866z4TPjs6yz4HOuc6/z4Jfzp3Ov86tzrzOss+BzrnOv8+CX86UzrXOus6tzrzOss+BzrnOv8+CJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc0dlbml0aXZlRWwgOiAnzpnOsc69zr/Phc6xz4HOr86/z4VfzqbOtc6yz4HOv8+FzrHPgc6vzr/PhV/OnM6xz4HPhM6vzr/PhV/Okc+Az4HOuc67zq/Ov8+FX86czrHOkM6/z4VfzpnOv8+Fzr3Or86/z4VfzpnOv8+FzrvOr86/z4VfzpHPhc6zzr/Pjc+Dz4TOv8+FX86jzrXPgM+EzrXOvM6yz4HOr86/z4Vfzp/Ous+Ez4nOss+Bzq/Ov8+FX86dzr/Otc68zrLPgc6vzr/PhV/OlM61zrrOtc68zrLPgc6vzr/PhScuc3BsaXQoJ18nKSxcbiAgICBtb250aHMgOiBmdW5jdGlvbiAobW9tZW50VG9Gb3JtYXQsIGZvcm1hdCkge1xuICAgICAgICBpZiAoIW1vbWVudFRvRm9ybWF0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzTm9taW5hdGl2ZUVsO1xuICAgICAgICB9IGVsc2UgaWYgKC9ELy50ZXN0KGZvcm1hdC5zdWJzdHJpbmcoMCwgZm9ybWF0LmluZGV4T2YoJ01NTU0nKSkpKSB7IC8vIGlmIHRoZXJlIGlzIGEgZGF5IG51bWJlciBiZWZvcmUgJ01NTU0nXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzR2VuaXRpdmVFbFttb21lbnRUb0Zvcm1hdC5tb250aCgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNOb21pbmF0aXZlRWxbbW9tZW50VG9Gb3JtYXQubW9udGgoKV07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vbnRoc1Nob3J0IDogJ86ZzrHOvV/Ops61zrJfzpzOsc+BX86Rz4DPgV/OnM6xz4pfzpnOv8+Fzr1fzpnOv8+FzrtfzpHPhc6zX86jzrXPgF/On866z4Rfzp3Ov861X86UzrXOuicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfOms+Fz4HOuc6xzrrOrl/OlM61z4XPhM6tz4HOsV/OpM+Bzq/PhM63X86kzrXPhM6sz4HPhM63X86gzq3OvM+Az4TOt1/OoM6xz4HOsc+DzrrOtc+Fzq5fzqPOrM6yzrLOsc+Ezr8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfOms+Fz4FfzpTOtc+FX86kz4HOuV/OpM61z4RfzqDOtc68X86gzrHPgV/Oo86xzrInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnzprPhV/OlM61X86kz4FfzqTOtV/OoM61X86gzrFfzqPOsScuc3BsaXQoJ18nKSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnzrzOvCcgOiAnzpzOnCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICfPgM68JyA6ICfOoM6cJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNQTSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gKChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpWzBdID09PSAnzrwnKTtcbiAgICB9LFxuICAgIG1lcmlkaWVtUGFyc2UgOiAvW86gzpxdXFwuP86cP1xcLj8vaSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnaDptbSBBJyxcbiAgICAgICAgTFRTIDogJ2g6bW06c3MgQScsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIGg6bW0gQScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgaDptbSBBJ1xuICAgIH0sXG4gICAgY2FsZW5kYXJFbCA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbzqPOrs68zrXPgc6xIHt9XSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW86Rz43Pgc65zr8ge31dIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbe31dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbzqfOuM61z4Ige31dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW8+Ezr8gz4DPgc6/zrfOs86/z43OvM61zr3Ov10gZGRkZCBbe31dIExUJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vPhM63zr0gz4DPgc6/zrfOs86/z43OvM61zr3Ot10gZGRkZCBbe31dIExUJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDogZnVuY3Rpb24gKGtleSwgbW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhckVsW2tleV0sXG4gICAgICAgICAgICBob3VycyA9IG1vbSAmJiBtb20uaG91cnMoKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3V0cHV0KSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmFwcGx5KG1vbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dC5yZXBsYWNlKCd7fScsIChob3VycyAlIDEyID09PSAxID8gJ8+Dz4TOtycgOiAnz4PPhM65z4InKSk7XG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfPg861ICVzJyxcbiAgICAgICAgcGFzdCA6ICclcyDPgM+BzrnOvScsXG4gICAgICAgIHMgOiAnzrvOr86zzrEgzrTOtc+Fz4TOtc+Bz4zOu861z4DPhM6xJyxcbiAgICAgICAgbSA6ICfOrc69zrEgzrvOtc+Az4TPjCcsXG4gICAgICAgIG1tIDogJyVkIM67zrXPgM+EzqwnLFxuICAgICAgICBoIDogJ868zq/OsSDPjs+BzrEnLFxuICAgICAgICBoaCA6ICclZCDPjs+BzrXPgicsXG4gICAgICAgIGQgOiAnzrzOr86xIM68zq3Pgc6xJyxcbiAgICAgICAgZGQgOiAnJWQgzrzOrc+BzrXPgicsXG4gICAgICAgIE0gOiAnzq3Ovc6xz4IgzrzOrs69zrHPgicsXG4gICAgICAgIE1NIDogJyVkIM68zq7Ovc61z4InLFxuICAgICAgICB5IDogJ86tzr3Osc+CIM+Hz4HPjM69zr/PgicsXG4gICAgICAgIHl5IDogJyVkIM+Hz4HPjM69zrnOsSdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfc63LyxcbiAgICBvcmRpbmFsOiAnJWTOtycsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDRzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGVsO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZWwuanNcbi8vIG1vZHVsZSBpZCA9IDY4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDkzIl0sInNvdXJjZVJvb3QiOiIifQ==