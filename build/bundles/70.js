webpackJsonp([70],{

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Marković : https://github.com/bmarkovic

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

var hr = moment.defineLocale('hr', {
    months : {
        format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
        standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
    },
    monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
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

return hr;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjcwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENyb2F0aWFuIFtocl1cbi8vISBhdXRob3IgOiBCb2phbiBNYXJrb3ZpxIcgOiBodHRwczovL2dpdGh1Yi5jb20vYm1hcmtvdmljXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2plZG5hIG1pbnV0YScgOiAnamVkbmUgbWludXRlJztcbiAgICAgICAgY2FzZSAnbW0nOlxuICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWludXRhJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyIHx8IG51bWJlciA9PT0gMyB8fCBudW1iZXIgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ21pbnV0ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWludXRhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnamVkYW4gc2F0JyA6ICdqZWRub2cgc2F0YSc7XG4gICAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ3NhdCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMiB8fCBudW1iZXIgPT09IDMgfHwgbnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdzYXRhJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdzYXRpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ2Rhbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnZGFuYSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYXNlICdNTSc6XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdtamVzZWMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIgfHwgbnVtYmVyID09PSAzIHx8IG51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWplc2VjYSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbWplc2VjaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYXNlICd5eSc6XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdnb2RpbmEnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIgfHwgbnVtYmVyID09PSAzIHx8IG51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnZ29kaW5lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdnb2RpbmEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnZhciBociA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2hyJywge1xuICAgIG1vbnRocyA6IHtcbiAgICAgICAgZm9ybWF0OiAnc2lqZcSNbmphX3ZlbGphxI1lX2/FvnVqa2FfdHJhdm5qYV9zdmlibmphX2xpcG5qYV9zcnBuamFfa29sb3ZvemFfcnVqbmFfbGlzdG9wYWRhX3N0dWRlbm9nYV9wcm9zaW5jYScuc3BsaXQoJ18nKSxcbiAgICAgICAgc3RhbmRhbG9uZTogJ3NpamXEjWFual92ZWxqYcSNYV9vxb51amFrX3RyYXZhbmpfc3ZpYmFual9saXBhbmpfc3JwYW5qX2tvbG92b3pfcnVqYW5fbGlzdG9wYWRfc3R1ZGVuaV9wcm9zaW5hYycuc3BsaXQoJ18nKVxuICAgIH0sXG4gICAgbW9udGhzU2hvcnQgOiAnc2lqLl92ZWxqLl9vxb51Ll90cmEuX3N2aS5fbGlwLl9zcnAuX2tvbC5fcnVqLl9saXMuX3N0dS5fcHJvLicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ25lZGplbGphX3BvbmVkamVsamFrX3V0b3Jha19zcmlqZWRhX8SNZXR2cnRha19wZXRha19zdWJvdGEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICduZWQuX3Bvbi5fdXRvLl9zcmkuX8SNZXQuX3BldC5fc3ViLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICduZV9wb191dF9zcl/EjWVfcGVfc3UnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSDptbScsXG4gICAgICAgIExUUyA6ICdIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5ICA6ICdbZGFuYXMgdV0gTFQnLFxuICAgICAgICBuZXh0RGF5ICA6ICdbc3V0cmEgdV0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW25lZGplbGp1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW3NyaWplZHVdIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t1XSBbc3Vib3R1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gZGRkZCBbdV0gTFQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0RGF5ICA6ICdbanXEjWVyIHVdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1twcm/FoWx1XSBkZGRkIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1twcm/FoWxlXSBbc3Vib3RlXSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbcHJvxaFsaV0gZGRkZCBbdV0gTFQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnemEgJXMnLFxuICAgICAgICBwYXN0ICAgOiAncHJpamUgJXMnLFxuICAgICAgICBzICAgICAgOiAncGFyIHNla3VuZGknLFxuICAgICAgICBtICAgICAgOiB0cmFuc2xhdGUsXG4gICAgICAgIG1tICAgICA6IHRyYW5zbGF0ZSxcbiAgICAgICAgaCAgICAgIDogdHJhbnNsYXRlLFxuICAgICAgICBoaCAgICAgOiB0cmFuc2xhdGUsXG4gICAgICAgIGQgICAgICA6ICdkYW4nLFxuICAgICAgICBkZCAgICAgOiB0cmFuc2xhdGUsXG4gICAgICAgIE0gICAgICA6ICdtamVzZWMnLFxuICAgICAgICBNTSAgICAgOiB0cmFuc2xhdGUsXG4gICAgICAgIHkgICAgICA6ICdnb2RpbnUnLFxuICAgICAgICB5eSAgICAgOiB0cmFuc2xhdGVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBocjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2hyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MDZcbi8vIG1vZHVsZSBjaHVua3MgPSA3MCJdLCJzb3VyY2VSb290IjoiIn0=