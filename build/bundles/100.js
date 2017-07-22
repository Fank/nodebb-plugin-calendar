webpackJsonp([100],{

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var cv = moment.defineLocale('cv', {
    months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
        LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
    },
    calendar : {
        sameDay: '[Паян] LT [сехетре]',
        nextDay: '[Ыран] LT [сехетре]',
        lastDay: '[Ӗнер] LT [сехетре]',
        nextWeek: '[Ҫитес] dddd LT [сехетре]',
        lastWeek: '[Иртнӗ] dddd LT [сехетре]',
        sameElse: 'L'
    },
    relativeTime : {
        future : function (output) {
            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
            return output + affix;
        },
        past : '%s каялла',
        s : 'пӗр-ик ҫеккунт',
        m : 'пӗр минут',
        mm : '%d минут',
        h : 'пӗр сехет',
        hh : '%d сехет',
        d : 'пӗр кун',
        dd : '%d кун',
        M : 'пӗр уйӑх',
        MM : '%d уйӑх',
        y : 'пӗр ҫул',
        yy : '%d ҫул'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
    ordinal : '%d-мӗш',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return cv;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvY3YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2h1dmFzaCBbY3ZdXG4vLyEgYXV0aG9yIDogQW5hdG9seSBNaXJvbm92IDogaHR0cHM6Ly9naXRodWIuY29tL21pcm9udG9saVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBjdiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2N2Jywge1xuICAgIG1vbnRocyA6ICfQutOR0YDQu9Cw0Ydf0L3QsNGA05HRgV/Qv9GD0Yhf0LDQutCwX9C80LDQuV/Sq9OX0YDRgtC80LVf0YPRgtORX9Kr0YPRgNC70LBf0LDQstOR0L1f0Y7Qv9CwX9GH07PQul/RgNCw0YjRgtCw0LInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn0LrTkdGAX9C90LDRgF/Qv9GD0Yhf0LDQutCwX9C80LDQuV/Sq9OX0YBf0YPRgtORX9Kr0YPRgF/QsNCy0L1f0Y7Qv9CwX9GH07PQul/RgNCw0YgnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn0LLRi9GA0YHQsNGA0L3QuNC60YPQvV/RgtGD0L3RgtC40LrRg9C9X9GL0YLQu9Cw0YDQuNC60YPQvV/RjtC90LrRg9C9X9C605fSq9C90LXRgNC90LjQutGD0L1f0Y3RgNC90LXQutGD0L1f0YjTkdC80LDRgtC60YPQvScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ9Cy0YvRgF/RgtGD0L1f0YvRgtC7X9GO0L1f0LrTl9KrX9GN0YDQvV/RiNOR0LwnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn0LLRgF/RgtC9X9GL0YJf0Y7QvV/QutKrX9GN0YBf0YjQvCcuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0RELU1NLVlZWVknLFxuICAgICAgICBMTCA6ICdZWVlZIFvSq9GD0LvRhdC4XSBNTU1NIFvRg9C505HRhdOX0L1dIERbLdC805fRiNOXXScsXG4gICAgICAgIExMTCA6ICdZWVlZIFvSq9GD0LvRhdC4XSBNTU1NIFvRg9C505HRhdOX0L1dIERbLdC805fRiNOXXSwgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIFlZWVkgW9Kr0YPQu9GF0LhdIE1NTU0gW9GD0LnTkdGF05fQvV0gRFst0LzTl9GI05ddLCBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW9Cf0LDRj9C9XSBMVCBb0YHQtdGF0LXRgtGA0LVdJyxcbiAgICAgICAgbmV4dERheTogJ1vQq9GA0LDQvV0gTFQgW9GB0LXRhdC10YLRgNC1XScsXG4gICAgICAgIGxhc3REYXk6ICdb05bQvdC10YBdIExUIFvRgdC10YXQtdGC0YDQtV0nLFxuICAgICAgICBuZXh0V2VlazogJ1vSqtC40YLQtdGBXSBkZGRkIExUIFvRgdC10YXQtdGC0YDQtV0nLFxuICAgICAgICBsYXN0V2VlazogJ1vQmNGA0YLQvdOXXSBkZGRkIExUIFvRgdC10YXQtdGC0YDQtV0nLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6IGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICAgICAgICAgIHZhciBhZmZpeCA9IC/RgdC10YXQtdGCJC9pLmV4ZWMob3V0cHV0KSA/ICfRgNC10L0nIDogL9Kr0YPQuyQvaS5leGVjKG91dHB1dCkgPyAn0YLQsNC9JyA6ICfRgNCw0L0nO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIGFmZml4O1xuICAgICAgICB9LFxuICAgICAgICBwYXN0IDogJyVzINC60LDRj9C70LvQsCcsXG4gICAgICAgIHMgOiAn0L/Tl9GALdC40Log0qvQtdC60LrRg9C90YInLFxuICAgICAgICBtIDogJ9C/05fRgCDQvNC40L3Rg9GCJyxcbiAgICAgICAgbW0gOiAnJWQg0LzQuNC90YPRgicsXG4gICAgICAgIGggOiAn0L/Tl9GAINGB0LXRhdC10YInLFxuICAgICAgICBoaCA6ICclZCDRgdC10YXQtdGCJyxcbiAgICAgICAgZCA6ICfQv9OX0YAg0LrRg9C9JyxcbiAgICAgICAgZGQgOiAnJWQg0LrRg9C9JyxcbiAgICAgICAgTSA6ICfQv9OX0YAg0YPQudOR0YUnLFxuICAgICAgICBNTSA6ICclZCDRg9C505HRhScsXG4gICAgICAgIHkgOiAn0L/Tl9GAINKr0YPQuycsXG4gICAgICAgIHl5IDogJyVkINKr0YPQuydcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS3QvNOX0YgvLFxuICAgIG9yZGluYWwgOiAnJWQt0LzTl9GIJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gY3Y7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9jdi5qc1xuLy8gbW9kdWxlIGlkID0gNjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAwIl0sInNvdXJjZVJvb3QiOiIifQ==