webpackJsonp([103],{

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Marković

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
    }
}

var bs = moment.defineLocale('bs', {
    months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',
        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'par sekundi',
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : 'dan',
        dd     : translate,
        M      : 'mjesec',
        MM     : translate,
        y      : 'godinu',
        yy     : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return bs;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBCb3NuaWFuIFtic11cbi8vISBhdXRob3IgOiBOZWRpbSBDaG9saWNoIDogaHR0cHM6Ly9naXRodWIuY29tL2Zyb250eWFyZFxuLy8hIGJhc2VkIG9uIChocikgdHJhbnNsYXRpb24gYnkgQm9qYW4gTWFya292acSHXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2plZG5hIG1pbnV0YScgOiAnamVkbmUgbWludXRlJztcbiAgICAgICAgY2FzZSAnbW0nOlxuICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWludXRhJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyIHx8IG51bWJlciA9PT0gMyB8fCBudW1iZXIgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ21pbnV0ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWludXRhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnamVkYW4gc2F0JyA6ICdqZWRub2cgc2F0YSc7XG4gICAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ3NhdCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMiB8fCBudW1iZXIgPT09IDMgfHwgbnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdzYXRhJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdzYXRpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ2Rhbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnZGFuYSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYXNlICdNTSc6XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdtamVzZWMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIgfHwgbnVtYmVyID09PSAzIHx8IG51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWplc2VjYSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWplc2VjaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYXNlICd5eSc6XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdnb2RpbmEnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIgfHwgbnVtYmVyID09PSAzIHx8IG51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnZ29kaW5lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdnb2RpbmEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnZhciBicyA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2JzJywge1xuICAgIG1vbnRocyA6ICdqYW51YXJfZmVicnVhcl9tYXJ0X2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJhcl9va3RvYmFyX25vdmVtYmFyX2RlY2VtYmFyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqLl9qdW4uX2p1bC5fYXVnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgd2Vla2RheXMgOiAnbmVkamVsamFfcG9uZWRqZWxqYWtfdXRvcmFrX3NyaWplZGFfxI1ldHZydGFrX3BldGFrX3N1Ym90YScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ25lZC5fcG9uLl91dG8uX3NyaS5fxI1ldC5fcGV0Ll9zdWIuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ25lX3BvX3V0X3NyX8SNZV9wZV9zdScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgIDogJ1tkYW5hcyB1XSBMVCcsXG4gICAgICAgIG5leHREYXkgIDogJ1tzdXRyYSB1XSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t1XSBbbmVkamVsanVdIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t1XSBbc3JpamVkdV0gW3VdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3VdIFtzdWJvdHVdIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t1XSBkZGRkIFt1XSBMVCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3REYXkgIDogJ1tqdcSNZXIgdV0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3Byb8WhbHVdIGRkZGQgW3VdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3Byb8WhbGVdIFtzdWJvdGVdIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1twcm/FoWxpXSBkZGRkIFt1XSBMVCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICd6YSAlcycsXG4gICAgICAgIHBhc3QgICA6ICdwcmlqZSAlcycsXG4gICAgICAgIHMgICAgICA6ICdwYXIgc2VrdW5kaScsXG4gICAgICAgIG0gICAgICA6IHRyYW5zbGF0ZSxcbiAgICAgICAgbW0gICAgIDogdHJhbnNsYXRlLFxuICAgICAgICBoICAgICAgOiB0cmFuc2xhdGUsXG4gICAgICAgIGhoICAgICA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZCAgICAgIDogJ2RhbicsXG4gICAgICAgIGRkICAgICA6IHRyYW5zbGF0ZSxcbiAgICAgICAgTSAgICAgIDogJ21qZXNlYycsXG4gICAgICAgIE1NICAgICA6IHRyYW5zbGF0ZSxcbiAgICAgICAgeSAgICAgIDogJ2dvZGludScsXG4gICAgICAgIHl5ICAgICA6IHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGJzO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvYnMuanNcbi8vIG1vZHVsZSBpZCA9IDY3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwMyJdLCJzb3VyY2VSb290IjoiIn0=