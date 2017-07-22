webpackJsonp([61],{

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
};

var kk = moment.defineLocale('kk', {
    months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгін сағат] LT',
        nextDay : '[Ертең сағат] LT',
        nextWeek : 'dddd [сағат] LT',
        lastDay : '[Кеше сағат] LT',
        lastWeek : '[Өткен аптаның] dddd [сағат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ішінде',
        past : '%s бұрын',
        s : 'бірнеше секунд',
        m : 'бір минут',
        mm : '%d минут',
        h : 'бір сағат',
        hh : '%d сағат',
        d : 'бір күн',
        dd : '%d күн',
        M : 'бір ай',
        MM : '%d ай',
        y : 'бір жыл',
        yy : '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return kk;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUva2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEthemFraCBba2tdXG4vLyEgYXV0aG9ycyA6IE51cmxhbiBSYWtoaW16aGFub3YgOiBodHRwczovL2dpdGh1Yi5jb20vbnVybGFuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHN1ZmZpeGVzID0ge1xuICAgIDA6ICct0YjRlicsXG4gICAgMTogJy3RiNGWJyxcbiAgICAyOiAnLdGI0ZYnLFxuICAgIDM6ICct0YjRlicsXG4gICAgNDogJy3RiNGWJyxcbiAgICA1OiAnLdGI0ZYnLFxuICAgIDY6ICct0YjRiycsXG4gICAgNzogJy3RiNGWJyxcbiAgICA4OiAnLdGI0ZYnLFxuICAgIDk6ICct0YjRiycsXG4gICAgMTA6ICct0YjRiycsXG4gICAgMjA6ICct0YjRiycsXG4gICAgMzA6ICct0YjRiycsXG4gICAgNDA6ICct0YjRiycsXG4gICAgNTA6ICct0YjRlicsXG4gICAgNjA6ICct0YjRiycsXG4gICAgNzA6ICct0YjRlicsXG4gICAgODA6ICct0YjRlicsXG4gICAgOTA6ICct0YjRiycsXG4gICAgMTAwOiAnLdGI0ZYnXG59O1xuXG52YXIga2sgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdraycsIHtcbiAgICBtb250aHMgOiAn0pvQsNKj0YLQsNGAX9Cw0pvQv9Cw0L1f0L3QsNGD0YDRi9C3X9GB05nRg9GW0YBf0LzQsNC80YvRgF/QvNCw0YPRgdGL0Lxf0YjRltC70LTQtV/RgtCw0LzRi9C3X9Kb0YvRgNC60q/QudC10Lpf0pvQsNC30LDQvV/Sm9Cw0YDQsNGI0LBf0LbQtdC70YLQvtKb0YHQsNC9Jy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ9Kb0LDSo1/QsNKb0L9f0L3QsNGDX9GB05nRg1/QvNCw0Lxf0LzQsNGDX9GI0ZbQu1/RgtCw0Lxf0pvRi9GAX9Kb0LDQt1/Sm9Cw0YBf0LbQtdC7Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ9C20LXQutGB0LXQvdCx0ZZf0LTSr9C50YHQtdC90LHRll/RgdC10LnRgdC10L3QsdGWX9GB05nRgNGB0LXQvdCx0ZZf0LHQtdC50YHQtdC90LHRll/QttKx0LzQsF/RgdC10L3QsdGWJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn0LbQtdC6X9C00q/QuV/RgdC10Llf0YHTmdGAX9Cx0LXQuV/QttKx0Lxf0YHQtdC9Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ9C20Lpf0LTQuV/RgdC5X9GB0YBf0LHQuV/QttC8X9GB0L0nLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW9CR0q/Qs9GW0L0g0YHQsNKT0LDRgl0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vQldGA0YLQtdKjINGB0LDSk9Cw0YJdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBb0YHQsNKT0LDRgl0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vQmtC10YjQtSDRgdCw0pPQsNGCXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vTqNGC0LrQtdC9INCw0L/RgtCw0L3Ri9KjXSBkZGRkIFvRgdCw0pPQsNGCXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcyDRltGI0ZbQvdC00LUnLFxuICAgICAgICBwYXN0IDogJyVzINCx0rHRgNGL0L0nLFxuICAgICAgICBzIDogJ9Cx0ZbRgNC90LXRiNC1INGB0LXQutGD0L3QtCcsXG4gICAgICAgIG0gOiAn0LHRltGAINC80LjQvdGD0YInLFxuICAgICAgICBtbSA6ICclZCDQvNC40L3Rg9GCJyxcbiAgICAgICAgaCA6ICfQsdGW0YAg0YHQsNKT0LDRgicsXG4gICAgICAgIGhoIDogJyVkINGB0LDSk9Cw0YInLFxuICAgICAgICBkIDogJ9Cx0ZbRgCDQutKv0L0nLFxuICAgICAgICBkZCA6ICclZCDQutKv0L0nLFxuICAgICAgICBNIDogJ9Cx0ZbRgCDQsNC5JyxcbiAgICAgICAgTU0gOiAnJWQg0LDQuScsXG4gICAgICAgIHkgOiAn0LHRltGAINC20YvQuycsXG4gICAgICAgIHl5IDogJyVkINC20YvQuydcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0o0YjRlnzRiNGLKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgdmFyIGEgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIGIgPSBudW1iZXIgPj0gMTAwID8gMTAwIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIG51bWJlciArIChzdWZmaXhlc1tudW1iZXJdIHx8IHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdKTtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBraztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2trLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA2MSJdLCJzb3VyY2VSb290IjoiIn0=