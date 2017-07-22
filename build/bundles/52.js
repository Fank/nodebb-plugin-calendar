webpackJsonp([52],{

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jednog minuta'],
        mm: ['minut', 'minuta', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mjesec', 'mjeseca', 'mjeseci'],
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

var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact : true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
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
        nextDay: '[sjutra u] LT',

        nextWeek: function () {
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
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedjelje] [u] LT',
                '[prošlog] [ponedjeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srijede] [u] LT',
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
        past   : 'prije %s',
        s      : 'nekoliko sekundi',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'dan',
        dd     : translator.translate,
        M      : 'mjesec',
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

return me;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE1vbnRlbmVncmluIFttZV1cbi8vISBhdXRob3IgOiBNaW9kcmFnIE5pa2HEjSA8bWlvZHJhZ0ByZXN0YXJ0aXQubWU+IDogaHR0cHM6Ly9naXRodWIuY29tL21pb2RyYWduaWthY1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB0cmFuc2xhdG9yID0ge1xuICAgIHdvcmRzOiB7IC8vRGlmZmVyZW50IGdyYW1tYXRpY2FsIGNhc2VzXG4gICAgICAgIG06IFsnamVkYW4gbWludXQnLCAnamVkbm9nIG1pbnV0YSddLFxuICAgICAgICBtbTogWydtaW51dCcsICdtaW51dGEnLCAnbWludXRhJ10sXG4gICAgICAgIGg6IFsnamVkYW4gc2F0JywgJ2plZG5vZyBzYXRhJ10sXG4gICAgICAgIGhoOiBbJ3NhdCcsICdzYXRhJywgJ3NhdGknXSxcbiAgICAgICAgZGQ6IFsnZGFuJywgJ2RhbmEnLCAnZGFuYSddLFxuICAgICAgICBNTTogWydtamVzZWMnLCAnbWplc2VjYScsICdtamVzZWNpJ10sXG4gICAgICAgIHl5OiBbJ2dvZGluYScsICdnb2RpbmUnLCAnZ29kaW5hJ11cbiAgICB9LFxuICAgIGNvcnJlY3RHcmFtbWF0aWNhbENhc2U6IGZ1bmN0aW9uIChudW1iZXIsIHdvcmRLZXkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/IHdvcmRLZXlbMF0gOiAobnVtYmVyID49IDIgJiYgbnVtYmVyIDw9IDQgPyB3b3JkS2V5WzFdIDogd29yZEtleVsyXSk7XG4gICAgfSxcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICAgICAgICB2YXIgd29yZEtleSA9IHRyYW5zbGF0b3Iud29yZHNba2V5XTtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gd29yZEtleVswXSA6IHdvcmRLZXlbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJyAnICsgdHJhbnNsYXRvci5jb3JyZWN0R3JhbW1hdGljYWxDYXNlKG51bWJlciwgd29yZEtleSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgbWUgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdtZScsIHtcbiAgICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJ0X2FwcmlsX21hal9qdW5fanVsX2F2Z3VzdF9zZXB0ZW1iYXJfb2t0b2Jhcl9ub3ZlbWJhcl9kZWNlbWJhcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqX2p1bl9qdWxfYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzOiAnbmVkamVsamFfcG9uZWRqZWxqYWtfdXRvcmFrX3NyaWplZGFfxI1ldHZydGFrX3BldGFrX3N1Ym90YScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0OiAnbmVkLl9wb24uX3V0by5fc3JpLl/EjWV0Ll9wZXQuX3N1Yi4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW46ICduZV9wb191dF9zcl/EjWVfcGVfc3UnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICBMVDogJ0g6bW0nLFxuICAgICAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyOiB7XG4gICAgICAgIHNhbWVEYXk6ICdbZGFuYXMgdV0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW3NqdXRyYSB1XSBMVCcsXG5cbiAgICAgICAgbmV4dFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW25lZGplbGp1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gW3NyaWplZHVdIFt1XSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1t1XSBbc3Vib3R1XSBbdV0gTFQnO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbdV0gZGRkZCBbdV0gTFQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0RGF5ICA6ICdbanXEjWUgdV0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXN0V2Vla0RheXMgPSBbXG4gICAgICAgICAgICAgICAgJ1twcm/FoWxlXSBbbmVkamVsamVdIFt1XSBMVCcsXG4gICAgICAgICAgICAgICAgJ1twcm/FoWxvZ10gW3BvbmVkamVsamthXSBbdV0gTFQnLFxuICAgICAgICAgICAgICAgICdbcHJvxaFsb2ddIFt1dG9ya2FdIFt1XSBMVCcsXG4gICAgICAgICAgICAgICAgJ1twcm/FoWxlXSBbc3JpamVkZV0gW3VdIExUJyxcbiAgICAgICAgICAgICAgICAnW3Byb8WhbG9nXSBbxI1ldHZydGthXSBbdV0gTFQnLFxuICAgICAgICAgICAgICAgICdbcHJvxaFsb2ddIFtwZXRrYV0gW3VdIExUJyxcbiAgICAgICAgICAgICAgICAnW3Byb8WhbGVdIFtzdWJvdGVdIFt1XSBMVCdcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4gbGFzdFdlZWtEYXlzW3RoaXMuZGF5KCldO1xuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnemEgJXMnLFxuICAgICAgICBwYXN0ICAgOiAncHJpamUgJXMnLFxuICAgICAgICBzICAgICAgOiAnbmVrb2xpa28gc2VrdW5kaScsXG4gICAgICAgIG0gICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlLFxuICAgICAgICBtbSAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgaCAgICAgIDogdHJhbnNsYXRvci50cmFuc2xhdGUsXG4gICAgICAgIGhoICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlLFxuICAgICAgICBkICAgICAgOiAnZGFuJyxcbiAgICAgICAgZGQgICAgIDogdHJhbnNsYXRvci50cmFuc2xhdGUsXG4gICAgICAgIE0gICAgICA6ICdtamVzZWMnLFxuICAgICAgICBNTSAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgeSAgICAgIDogJ2dvZGludScsXG4gICAgICAgIHl5ICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbWU7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9tZS5qc1xuLy8gbW9kdWxlIGlkID0gNzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gNTIiXSwic291cmNlUm9vdCI6IiJ9