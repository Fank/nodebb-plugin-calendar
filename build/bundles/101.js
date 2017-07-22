webpackJsonp([101],{

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
function plural(n) {
    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dní');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'měsíce' : 'měsíců');
            } else {
                return result + 'měsíci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
    }
}

var cs = moment.defineLocale('cs', {
    months : months,
    monthsShort : monthsShort,
    monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse : (function (monthsShort) {
        var i, _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse : (function (months) {
        var i, _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm',
        l : 'D. M. YYYY'
    },
    calendar : {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'před %s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse : /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return cs;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyxJQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEN6ZWNoIFtjc11cbi8vISBhdXRob3IgOiBwZXRyYmVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRyYmVsYVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBtb250aHMgPSAnbGVkZW5fw7pub3JfYsWZZXplbl9kdWJlbl9rdsSbdGVuX8SNZXJ2ZW5fxI1lcnZlbmVjX3NycGVuX3rDocWZw61fxZnDrWplbl9saXN0b3BhZF9wcm9zaW5lYycuc3BsaXQoJ18nKTtcbnZhciBtb250aHNTaG9ydCA9ICdsZWRfw7pub19ixZllX2R1Yl9rdsSbX8SNdm5fxI12Y19zcnBfesOhxZlfxZnDrWpfbGlzX3Bybycuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIHBsdXJhbChuKSB7XG4gICAgcmV0dXJuIChuID4gMSkgJiYgKG4gPCA1KSAmJiAofn4obiAvIDEwKSAhPT0gMSk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdzJzogIC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgICAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncMOhciBzZWt1bmQnIDogJ3DDoXIgc2VrdW5kYW1pJztcbiAgICAgICAgY2FzZSAnbSc6ICAvLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXG4gICAgICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogKGlzRnV0dXJlID8gJ21pbnV0dScgOiAnbWludXRvdScpO1xuICAgICAgICBjYXNlICdtbSc6IC8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cbiAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtYmVyKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnbWludXRhbWknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2gnOiAgLy8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnaG9kaW5hJyA6IChpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnKTtcbiAgICAgICAgY2FzZSAnaGgnOiAvLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXG4gICAgICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnaG9kaW55JyA6ICdob2RpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkJzogIC8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cbiAgICAgICAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGVuJyA6ICdkbmVtJztcbiAgICAgICAgY2FzZSAnZGQnOiAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnZG55JyA6ICdkbsOtJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnZG55JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNJzogIC8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cbiAgICAgICAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnbcSbc8OtYycgOiAnbcSbc8OtY2VtJztcbiAgICAgICAgY2FzZSAnTU0nOiAvLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXG4gICAgICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bWJlcikgPyAnbcSbc8OtY2UnIDogJ23Em3PDrWPFrycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23Em3PDrWNpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5JzogIC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgICAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tlbSc7XG4gICAgICAgIGNhc2UgJ3l5JzogLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xuICAgICAgICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW1iZXIpID8gJ3Jva3knIDogJ2xldCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2xldHknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG52YXIgY3MgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdjcycsIHtcbiAgICBtb250aHMgOiBtb250aHMsXG4gICAgbW9udGhzU2hvcnQgOiBtb250aHNTaG9ydCxcbiAgICBtb250aHNQYXJzZSA6IChmdW5jdGlvbiAobW9udGhzLCBtb250aHNTaG9ydCkge1xuICAgICAgICB2YXIgaSwgX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAvLyB1c2UgY3VzdG9tIHBhcnNlciB0byBzb2x2ZSBwcm9ibGVtIHdpdGggSnVseSAoxI1lcnZlbmVjKVxuICAgICAgICAgICAgX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJHxeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfbW9udGhzUGFyc2U7XG4gICAgfShtb250aHMsIG1vbnRoc1Nob3J0KSksXG4gICAgc2hvcnRNb250aHNQYXJzZSA6IChmdW5jdGlvbiAobW9udGhzU2hvcnQpIHtcbiAgICAgICAgdmFyIGksIF9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBfc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzU2hvcnRbaV0gKyAnJCcsICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zaG9ydE1vbnRoc1BhcnNlO1xuICAgIH0obW9udGhzU2hvcnQpKSxcbiAgICBsb25nTW9udGhzUGFyc2UgOiAoZnVuY3Rpb24gKG1vbnRocykge1xuICAgICAgICB2YXIgaSwgX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfbG9uZ01vbnRoc1BhcnNlO1xuICAgIH0obW9udGhzKSksXG4gICAgd2Vla2RheXMgOiAnbmVkxJtsZV9wb25kxJtsw61fw7p0ZXLDvV9zdMWZZWRhX8SNdHZydGVrX3DDoXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICduZV9wb1/DunRfc3RfxI10X3DDoV9zbycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICduZV9wb1/DunRfc3RfxI10X3DDoV9zbycuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQ6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBsIDogJ0QuIE0uIFlZWVknXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1tkbmVzIHZdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1t6w610cmEgdl0gTFQnLFxuICAgICAgICBuZXh0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t2IG5lZMSbbGkgdl0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3ZlIHN0xZllZHUgdl0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdmUgxI10dnJ0ZWsgdl0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdiBww6F0ZWsgdl0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgdl0gTFQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0RGF5OiAnW3bEjWVyYSB2XSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW21pbnVsb3UgbmVkxJtsaSB2XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbbWludWzDqV0gZGRkZCBbdl0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbbWludWxvdSBzdMWZZWR1IHZdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFt2XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHNvYm90dSB2XSBMVCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ3phICVzJyxcbiAgICAgICAgcGFzdCA6ICdwxZllZCAlcycsXG4gICAgICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgICBoIDogdHJhbnNsYXRlLFxuICAgICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgICAgIE1NIDogdHJhbnNsYXRlLFxuICAgICAgICB5IDogdHJhbnNsYXRlLFxuICAgICAgICB5eSA6IHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBjcztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2NzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMDEiXSwic291cmNlUm9vdCI6IiJ9