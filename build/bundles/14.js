webpackJsonp([14],{

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tzmLatn = moment.defineLocale('tzm-latn', {
    months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[asdkh g] LT',
        nextDay: '[aska g] LT',
        nextWeek: 'dddd [g] LT',
        lastDay: '[assant g] LT',
        lastWeek: 'dddd [g] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dadkh s yan %s',
        past : 'yan %s',
        s : 'imik',
        m : 'minuḍ',
        mm : '%d minuḍ',
        h : 'saɛa',
        hh : '%d tassaɛin',
        d : 'ass',
        dd : '%d ossan',
        M : 'ayowr',
        MM : '%d iyyirn',
        y : 'asgas',
        yy : '%d isgasn'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return tzmLatn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdHptLWxhdG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENlbnRyYWwgQXRsYXMgVGFtYXppZ2h0IExhdGluIFt0em0tbGF0bl1cbi8vISBhdXRob3IgOiBBYmRlbCBTYWlkIDogaHR0cHM6Ly9naXRodWIuY29tL2FiZGVsc2FpZFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB0em1MYXRuID0gbW9tZW50LmRlZmluZUxvY2FsZSgndHptLWxhdG4nLCB7XG4gICAgbW9udGhzIDogJ2lubmF5cl9icsukYXlyy6RfbWFyy6Rzy6RfaWJyaXJfbWF5eXdfeXdueXdfeXdseXd6X8mjd8WhdF/FoXd0YW5iaXJfa3TLpHdicsukX253d2FuYmlyX2R3am5iaXInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnaW5uYXlyX2Jyy6RheXLLpF9tYXLLpHPLpF9pYnJpcl9tYXl5d195d255d195d2x5d3pfyaN3xaF0X8Whd3RhbmJpcl9rdMukd2Jyy6Rfbnd3YW5iaXJfZHdqbmJpcicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdhc2FtYXNfYXluYXNfYXNpbmFzX2FrcmFzX2Frd2FzX2FzaW13YXNfYXNp4biNeWFzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnYXNhbWFzX2F5bmFzX2FzaW5hc19ha3Jhc19ha3dhc19hc2ltd2FzX2FzaeG4jXlhcycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdhc2FtYXNfYXluYXNfYXNpbmFzX2FrcmFzX2Frd2FzX2FzaW13YXNfYXNp4biNeWFzJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdbYXNka2ggZ10gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW2Fza2EgZ10gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2ddIExUJyxcbiAgICAgICAgbGFzdERheTogJ1thc3NhbnQgZ10gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ2RkZGQgW2ddIExUJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnZGFka2ggcyB5YW4gJXMnLFxuICAgICAgICBwYXN0IDogJ3lhbiAlcycsXG4gICAgICAgIHMgOiAnaW1paycsXG4gICAgICAgIG0gOiAnbWludeG4jScsXG4gICAgICAgIG1tIDogJyVkIG1pbnXhuI0nLFxuICAgICAgICBoIDogJ3NhyZthJyxcbiAgICAgICAgaGggOiAnJWQgdGFzc2HJm2luJyxcbiAgICAgICAgZCA6ICdhc3MnLFxuICAgICAgICBkZCA6ICclZCBvc3NhbicsXG4gICAgICAgIE0gOiAnYXlvd3InLFxuICAgICAgICBNTSA6ICclZCBpeXlpcm4nLFxuICAgICAgICB5IDogJ2FzZ2FzJyxcbiAgICAgICAgeXkgOiAnJWQgaXNnYXNuJ1xuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogNiwgLy8gU2F0dXJkYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogMTIgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIHR6bUxhdG47XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1xuLy8gbW9kdWxlIGlkID0gNzYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiXSwic291cmNlUm9vdCI6IiJ9