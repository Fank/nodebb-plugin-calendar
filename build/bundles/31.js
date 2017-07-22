webpackJsonp([31],{

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


/*jshint -W100*/
var si = moment.defineLocale('si', {
    months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'a h:mm',
        LTS : 'a h:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'YYYY MMMM D',
        LLL : 'YYYY MMMM D, a h:mm',
        LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar : {
        sameDay : '[අද] LT[ට]',
        nextDay : '[හෙට] LT[ට]',
        nextWeek : 'dddd LT[ට]',
        lastDay : '[ඊයේ] LT[ට]',
        lastWeek : '[පසුගිය] dddd LT[ට]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sකින්',
        past : '%sකට පෙර',
        s : 'තත්පර කිහිපය',
        m : 'මිනිත්තුව',
        mm : 'මිනිත්තු %d',
        h : 'පැය',
        hh : 'පැය %d',
        d : 'දිනය',
        dd : 'දින %d',
        M : 'මාසය',
        MM : 'මාස %d',
        y : 'වසර',
        yy : 'වසර %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
    ordinal : function (number) {
        return number + ' වැනි';
    },
    meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM : function (input) {
        return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'ප.ව.' : 'පස් වරු';
        } else {
            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
        }
    }
});

return si;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNpbmhhbGVzZSBbc2ldXG4vLyEgYXV0aG9yIDogU2FtcGF0aCBTaXRpbmFtYWx1d2EgOiBodHRwczovL2dpdGh1Yi5jb20vc2FtcGF0aHNyaXNcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG4vKmpzaGludCAtVzEwMCovXG52YXIgc2kgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdzaScsIHtcbiAgICBtb250aHMgOiAn4Lai4Lax4LeA4LeP4La74LeSX+C2tOC3meC2tuC2u+C3gOC3j+C2u+C3kl/gtrjgt4/gtrvgt4rgtq3gt5Rf4LaF4La04LeK4oCN4La74Lea4La94LeKX+C2uOC3kOC2uuC3kl/gtqLgt5bgtrHgt5Jf4Lai4LeW4La94LeSX+C2heC2nOC3neC3g+C3iuC2reC3lF/gt4Pgt5DgtrTgt4rgtq3gt5Dgtrjgt4rgtrbgtrvgt4pf4LaU4Laa4LeK4Lat4Led4La24La74LeKX+C2seC3nOC3gOC3kOC2uOC3iuC2tuC2u+C3il/gtq/gt5ngt4Pgt5Dgtrjgt4rgtrbgtrvgt4onLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn4Lai4LaxX+C2tOC3meC2tl/gtrjgt4/gtrvgt4pf4LaF4La04LeKX+C2uOC3kOC2uuC3kl/gtqLgt5bgtrHgt5Jf4Lai4LeW4La94LeSX+C2heC2nOC3nV/gt4Pgt5DgtrTgt4pf4LaU4Laa4LeKX+C2seC3nOC3gOC3kF/gtq/gt5ngt4Pgt5AnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn4LaJ4La74LeS4Lav4LePX+C3g+C2s+C3lOC2r+C3j1/gtoXgtp/gt4Tgtrvgt5Tgt4Dgt4/gtq/gt49f4La24Lav4LeP4Lav4LePX+C2tuC3iuKAjeC2u+C3hOC3g+C3iuC2tOC2reC3kuC2seC3iuC2r+C3j1/gt4Pgt5Lgtprgt5Tgtrvgt4/gtq/gt49f4LeD4LeZ4Lax4LeD4LeU4La74LeP4Lav4LePJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn4LaJ4La74LeSX+C3g+C2s+C3lF/gtoXgtp9f4La24Lav4LePX+C2tuC3iuKAjeC2u+C3hF/gt4Pgt5Lgtprgt5Rf4LeD4LeZ4LaxJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+C2iV/gt4Nf4LaFX+C2tl/gtrbgt4rigI3gtrtf4LeD4LeSX+C3g+C3mScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdhIGg6bW0nLFxuICAgICAgICBMVFMgOiAnYSBoOm1tOnNzJyxcbiAgICAgICAgTCA6ICdZWVlZL01NL0REJyxcbiAgICAgICAgTEwgOiAnWVlZWSBNTU1NIEQnLFxuICAgICAgICBMTEwgOiAnWVlZWSBNTU1NIEQsIGEgaDptbScsXG4gICAgICAgIExMTEwgOiAnWVlZWSBNTU1NIEQgW+C3gOC3kOC2seC3kl0gZGRkZCwgYSBoOm1tOnNzJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+C2heC2r10gTFRb4LanXScsXG4gICAgICAgIG5leHREYXkgOiAnW+C3hOC3meC2p10gTFRb4LanXScsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFRb4LanXScsXG4gICAgICAgIGxhc3REYXkgOiAnW+C2iuC2uuC3ml0gTFRb4LanXScsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vgtrTgt4Pgt5Tgtpzgt5LgtrpdIGRkZGQgTFRb4LanXScsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclc+C2muC3kuC2seC3iicsXG4gICAgICAgIHBhc3QgOiAnJXPgtprgtqcg4La04LeZ4La7JyxcbiAgICAgICAgcyA6ICfgtq3gtq3gt4rgtrTgtrsg4Laa4LeS4LeE4LeS4La04La6JyxcbiAgICAgICAgbSA6ICfgtrjgt5LgtrHgt5Lgtq3gt4rgtq3gt5Tgt4AnLFxuICAgICAgICBtbSA6ICfgtrjgt5LgtrHgt5Lgtq3gt4rgtq3gt5QgJWQnLFxuICAgICAgICBoIDogJ+C2tOC3kOC2uicsXG4gICAgICAgIGhoIDogJ+C2tOC3kOC2uiAlZCcsXG4gICAgICAgIGQgOiAn4Lav4LeS4Lax4La6JyxcbiAgICAgICAgZGQgOiAn4Lav4LeS4LaxICVkJyxcbiAgICAgICAgTSA6ICfgtrjgt4/gt4PgtronLFxuICAgICAgICBNTSA6ICfgtrjgt4/gt4MgJWQnLFxuICAgICAgICB5IDogJ+C3gOC3g+C2uycsXG4gICAgICAgIHl5IDogJ+C3gOC3g+C2uyAlZCdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSDgt4Dgt5DgtrHgt5IvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnIOC3gOC3kOC2seC3kic7XG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlIDogL+C2tOC3meC2uyDgt4Dgtrvgt5R84La04LeD4LeKIOC3gOC2u+C3lHzgtrTgt5ku4LeAfOC2tC7gt4AuLyxcbiAgICBpc1BNIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gJ+C2tC7gt4AuJyB8fCBpbnB1dCA9PT0gJ+C2tOC3g+C3iiDgt4Dgtrvgt5QnO1xuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ+C2tC7gt4AuJyA6ICfgtrTgt4Pgt4og4LeA4La74LeUJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ+C2tOC3mS7gt4AuJyA6ICfgtrTgt5ngtrsg4LeA4La74LeUJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5yZXR1cm4gc2k7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9zaS5qc1xuLy8gbW9kdWxlIGlkID0gNzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEiXSwic291cmNlUm9vdCI6IiJ9