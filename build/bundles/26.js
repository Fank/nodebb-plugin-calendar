webpackJsonp([26],{

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jedne minute'],
        mm: ['minut', 'minute', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mesec', 'meseca', 'meseci'],
        yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'pre %s',
        s      : 'nekoliko sekundi',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'dan',
        dd     : translator.translate,
        M      : 'mesec',
        MM     : translator.translate,
        y      : 'godinu',
        yy     : translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return sr;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU2VyYmlhbiBbc3JdXG4vLyEgYXV0aG9yIDogTWlsYW4gSmFuYcSNa292acSHPG1pbGFuamFuYWNrb3ZpY0BnbWFpbC5jb20+IDogaHR0cHM6Ly9naXRodWIuY29tL21pbGFuLWpcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgdHJhbnNsYXRvciA9IHtcbiAgICB3b3JkczogeyAvL0RpZmZlcmVudCBncmFtbWF0aWNhbCBjYXNlc1xuICAgICAgICBtOiBbJ2plZGFuIG1pbnV0JywgJ2plZG5lIG1pbnV0ZSddLFxuICAgICAgICBtbTogWydtaW51dCcsICdtaW51dGUnLCAnbWludXRhJ10sXG4gICAgICAgIGg6IFsnamVkYW4gc2F0JywgJ2plZG5vZyBzYXRhJ10sXG4gICAgICAgIGhoOiBbJ3NhdCcsICdzYXRhJywgJ3NhdGknXSxcbiAgICAgICAgZGQ6IFsnZGFuJywgJ2RhbmEnLCAnZGFuYSddLFxuICAgICAgICBNTTogWydtZXNlYycsICdtZXNlY2EnLCAnbWVzZWNpJ10sXG4gICAgICAgIHl5OiBbJ2dvZGluYScsICdnb2RpbmUnLCAnZ29kaW5hJ11cbiAgICB9LFxuICAgIGNvcnJlY3RHcmFtbWF0aWNhbENhc2U6IGZ1bmN0aW9uIChudW1iZXIsIHdvcmRLZXkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/IHdvcmRLZXlbMF0gOiAobnVtYmVyID49IDIgJiYgbnVtYmVyIDw9IDQgPyB3b3JkS2V5WzFdIDogd29yZEtleVsyXSk7XG4gICAgfSxcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICAgICAgICB2YXIgd29yZEtleSA9IHRyYW5zbGF0b3Iud29yZHNba2V5XTtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gd29yZEtleVswXSA6IHdvcmRLZXlbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJyAnICsgdHJhbnNsYXRvci5jb3JyZWN0R3JhbW1hdGljYWxDYXNlKG51bWJlciwgd29yZEtleSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgc3IgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdzcicsIHtcbiAgICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJ0X2FwcmlsX21hal9qdW5fanVsX2F2Z3VzdF9zZXB0ZW1iYXJfb2t0b2Jhcl9ub3ZlbWJhcl9kZWNlbWJhcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqX2p1bl9qdWxfYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgd2Vla2RheXM6ICduZWRlbGphX3BvbmVkZWxqYWtfdXRvcmFrX3NyZWRhX8SNZXR2cnRha19wZXRha19zdWJvdGEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydDogJ25lZC5fcG9uLl91dG8uX3NyZS5fxI1ldC5fcGV0Ll9zdWIuJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluOiAnbmVfcG9fdXRfc3JfxI1lX3BlX3N1Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgICBzYW1lRGF5OiAnW2RhbmFzIHVdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tzdXRyYSB1XSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3VdIFtuZWRlbGp1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW3NyZWR1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW3N1Ym90dV0gW3VdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW3VdIGRkZGQgW3VdIExUJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdERheSAgOiAnW2p1xI1lIHVdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFzdFdlZWtEYXlzID0gW1xuICAgICAgICAgICAgICAgICdbcHJvxaFsZV0gW25lZGVsamVdIFt1XSBMVCcsXG4gICAgICAgICAgICAgICAgJ1twcm/FoWxvZ10gW3BvbmVkZWxqa2FdIFt1XSBMVCcsXG4gICAgICAgICAgICAgICAgJ1twcm/FoWxvZ10gW3V0b3JrYV0gW3VdIExUJyxcbiAgICAgICAgICAgICAgICAnW3Byb8WhbGVdIFtzcmVkZV0gW3VdIExUJyxcbiAgICAgICAgICAgICAgICAnW3Byb8WhbG9nXSBbxI1ldHZydGthXSBbdV0gTFQnLFxuICAgICAgICAgICAgICAgICdbcHJvxaFsb2ddIFtwZXRrYV0gW3VdIExUJyxcbiAgICAgICAgICAgICAgICAnW3Byb8WhbGVdIFtzdWJvdGVdIFt1XSBMVCdcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4gbGFzdFdlZWtEYXlzW3RoaXMuZGF5KCldO1xuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnemEgJXMnLFxuICAgICAgICBwYXN0ICAgOiAncHJlICVzJyxcbiAgICAgICAgcyAgICAgIDogJ25la29saWtvIHNla3VuZGknLFxuICAgICAgICBtICAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgbW0gICAgIDogdHJhbnNsYXRvci50cmFuc2xhdGUsXG4gICAgICAgIGggICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlLFxuICAgICAgICBoaCAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgZCAgICAgIDogJ2RhbicsXG4gICAgICAgIGRkICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlLFxuICAgICAgICBNICAgICAgOiAnbWVzZWMnLFxuICAgICAgICBNTSAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgeSAgICAgIDogJ2dvZGludScsXG4gICAgICAgIHl5ICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gc3I7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9zci5qc1xuLy8gbW9kdWxlIGlkID0gNzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiXSwic291cmNlUm9vdCI6IiJ9