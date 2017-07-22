webpackJsonp([75],{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
];

var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

var gd = moment.defineLocale('gd', {
    months : months,
    monthsShort : monthsShort,
    monthsParseExact : true,
    weekdays : weekdays,
    weekdaysShort : weekdaysShort,
    weekdaysMin : weekdaysMin,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[An-diugh aig] LT',
        nextDay : '[A-màireach aig] LT',
        nextWeek : 'dddd [aig] LT',
        lastDay : '[An-dè aig] LT',
        lastWeek : 'dddd [seo chaidh] [aig] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ann an %s',
        past : 'bho chionn %s',
        s : 'beagan diogan',
        m : 'mionaid',
        mm : '%d mionaidean',
        h : 'uair',
        hh : '%d uairean',
        d : 'latha',
        dd : '%d latha',
        M : 'mìos',
        MM : '%d mìosan',
        y : 'bliadhna',
        yy : '%d bliadhna'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
    ordinal : function (number) {
        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return gd;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZ2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyxJQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTY290dGlzaCBHYWVsaWMgW2dkXVxuLy8hIGF1dGhvciA6IEpvbiBBc2hkb3duIDogaHR0cHM6Ly9naXRodWIuY29tL2pvbmFzaGRvd25cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgbW9udGhzID0gW1xuICAgICdBbSBGYW9pbGxlYWNoJywgJ0FuIEdlYXJyYW4nLCAnQW0gTcOgcnQnLCAnQW4gR2libGVhbicsICdBbiBDw6hpdGVhbicsICdBbiB0LcOSZ21oaW9zJywgJ0FuIHQtSXVjaGFyJywgJ0FuIEzDuW5hc3RhbCcsICdBbiB0LVN1bHRhaW4nLCAnQW4gRMOgbWhhaXInLCAnQW4gdC1TYW1oYWluJywgJ0FuIETDuWJobGFjaGQnXG5dO1xuXG52YXIgbW9udGhzU2hvcnQgPSBbJ0Zhb2knLCAnR2VhcicsICdNw6BydCcsICdHaWJsJywgJ0PDqGl0JywgJ8OSZ21oJywgJ0l1Y2gnLCAnTMO5bicsICdTdWx0JywgJ0TDoG1oJywgJ1NhbWgnLCAnRMO5YmgnXTtcblxudmFyIHdlZWtkYXlzID0gWydEaWTDsm1obmFpY2gnLCAnRGlsdWFpbicsICdEaW3DoGlydCcsICdEaWNpYWRhaW4nLCAnRGlhcmRhb2luJywgJ0RpaGFvaW5lJywgJ0Rpc2F0aGFpcm5lJ107XG5cbnZhciB3ZWVrZGF5c1Nob3J0ID0gWydEaWQnLCAnRGlsJywgJ0RpbScsICdEaWMnLCAnRGlhJywgJ0RpaCcsICdEaXMnXTtcblxudmFyIHdlZWtkYXlzTWluID0gWydEw7InLCAnTHUnLCAnTcOgJywgJ0NpJywgJ0FyJywgJ0hhJywgJ1NhJ107XG5cbnZhciBnZCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2dkJywge1xuICAgIG1vbnRocyA6IG1vbnRocyxcbiAgICBtb250aHNTaG9ydCA6IG1vbnRoc1Nob3J0LFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogd2Vla2RheXMsXG4gICAgd2Vla2RheXNTaG9ydCA6IHdlZWtkYXlzU2hvcnQsXG4gICAgd2Vla2RheXNNaW4gOiB3ZWVrZGF5c01pbixcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbQW4tZGl1Z2ggYWlnXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW0EtbcOgaXJlYWNoIGFpZ10gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFthaWddIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbQW4tZMOoIGFpZ10gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdkZGRkIFtzZW8gY2hhaWRoXSBbYWlnXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdhbm4gYW4gJXMnLFxuICAgICAgICBwYXN0IDogJ2JobyBjaGlvbm4gJXMnLFxuICAgICAgICBzIDogJ2JlYWdhbiBkaW9nYW4nLFxuICAgICAgICBtIDogJ21pb25haWQnLFxuICAgICAgICBtbSA6ICclZCBtaW9uYWlkZWFuJyxcbiAgICAgICAgaCA6ICd1YWlyJyxcbiAgICAgICAgaGggOiAnJWQgdWFpcmVhbicsXG4gICAgICAgIGQgOiAnbGF0aGEnLFxuICAgICAgICBkZCA6ICclZCBsYXRoYScsXG4gICAgICAgIE0gOiAnbcOsb3MnLFxuICAgICAgICBNTSA6ICclZCBtw6xvc2FuJyxcbiAgICAgICAgeSA6ICdibGlhZGhuYScsXG4gICAgICAgIHl5IDogJyVkIGJsaWFkaG5hJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfShkfG5hfG1oKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IG51bWJlciA9PT0gMSA/ICdkJyA6IG51bWJlciAlIDEwID09PSAyID8gJ25hJyA6ICdtaCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gZ2Q7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9nZC5qc1xuLy8gbW9kdWxlIGlkID0gNzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNzUiXSwic291cmNlUm9vdCI6IiJ9