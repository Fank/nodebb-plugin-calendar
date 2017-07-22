webpackJsonp([33],{

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'جنوري',
    'فيبروري',
    'مارچ',
    'اپريل',
    'مئي',
    'جون',
    'جولاءِ',
    'آگسٽ',
    'سيپٽمبر',
    'آڪٽوبر',
    'نومبر',
    'ڊسمبر'
];
var days = [
    'آچر',
    'سومر',
    'اڱارو',
    'اربع',
    'خميس',
    'جمع',
    'ڇنڇر'
];

var sd = moment.defineLocale('sd', {
    months : months,
    monthsShort : months,
    weekdays : days,
    weekdaysShort : days,
    weekdaysMin : days,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM : function (input) {
        return 'شام' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'صبح';
        }
        return 'شام';
    },
    calendar : {
        sameDay : '[اڄ] LT',
        nextDay : '[سڀاڻي] LT',
        nextWeek : 'dddd [اڳين هفتي تي] LT',
        lastDay : '[ڪالهه] LT',
        lastWeek : '[گزريل هفتي] dddd [تي] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s پوء',
        past : '%s اڳ',
        s : 'چند سيڪنڊ',
        m : 'هڪ منٽ',
        mm : '%d منٽ',
        h : 'هڪ ڪلاڪ',
        hh : '%d ڪلاڪ',
        d : 'هڪ ڏينهن',
        dd : '%d ڏينهن',
        M : 'هڪ مهينو',
        MM : '%d مهينا',
        y : 'هڪ سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sd;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNpbmRoaSBbc2RdXG4vLyEgYXV0aG9yIDogTmFyYWluIFNhZ2FyIDogaHR0cHM6Ly9naXRodWIuY29tL25hcmFpbnNhZ2FyXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIG1vbnRocyA9IFtcbiAgICAn2KzZhtmI2LHZiicsXG4gICAgJ9mB2YrYqNix2YjYsdmKJyxcbiAgICAn2YXYp9ix2oYnLFxuICAgICfYp9m+2LHZitmEJyxcbiAgICAn2YXYptmKJyxcbiAgICAn2KzZiNmGJyxcbiAgICAn2KzZiNmE2KfYodmQJyxcbiAgICAn2KLar9iz2b0nLFxuICAgICfYs9mK2b7ZvdmF2KjYsScsXG4gICAgJ9ii2qrZvdmI2KjYsScsXG4gICAgJ9mG2YjZhdio2LEnLFxuICAgICfaitiz2YXYqNixJ1xuXTtcbnZhciBkYXlzID0gW1xuICAgICfYotqG2LEnLFxuICAgICfYs9mI2YXYsScsXG4gICAgJ9in2rHYp9ix2YgnLFxuICAgICfYp9ix2KjYuScsXG4gICAgJ9iu2YXZitizJyxcbiAgICAn2KzZhdi5JyxcbiAgICAn2ofZhtqH2LEnXG5dO1xuXG52YXIgc2QgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdzZCcsIHtcbiAgICBtb250aHMgOiBtb250aHMsXG4gICAgbW9udGhzU2hvcnQgOiBtb250aHMsXG4gICAgd2Vla2RheXMgOiBkYXlzLFxuICAgIHdlZWtkYXlzU2hvcnQgOiBkYXlzLFxuICAgIHdlZWtkYXlzTWluIDogZGF5cyxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZNiMIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL9i12KjYrXzYtNin2YUvLFxuICAgIGlzUE0gOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICfYtNin2YUnID09PSBpbnB1dDtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9i12KjYrSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICfYtNin2YUnO1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW9in2oRdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb2LPagNin2rvZil0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFvYp9qz2YrZhiDZh9mB2KrZiiDYqtmKXSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW9qq2KfZhNmH2YddIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW9qv2LLYsdmK2YQg2YfZgdiq2YpdIGRkZGQgW9iq2YpdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzINm+2YjYoScsXG4gICAgICAgIHBhc3QgOiAnJXMg2KfasycsXG4gICAgICAgIHMgOiAn2obZhtivINiz2YraqtmG2oonLFxuICAgICAgICBtIDogJ9mH2qog2YXZhtm9JyxcbiAgICAgICAgbW0gOiAnJWQg2YXZhtm9JyxcbiAgICAgICAgaCA6ICfZh9qqINqq2YTYp9qqJyxcbiAgICAgICAgaGggOiAnJWQg2qrZhNin2qonLFxuICAgICAgICBkIDogJ9mH2qog2o/ZitmG2YfZhicsXG4gICAgICAgIGRkIDogJyVkINqP2YrZhtmH2YYnLFxuICAgICAgICBNIDogJ9mH2qog2YXZh9mK2YbZiCcsXG4gICAgICAgIE1NIDogJyVkINmF2YfZitmG2KcnLFxuICAgICAgICB5IDogJ9mH2qog2LPYp9mEJyxcbiAgICAgICAgeXkgOiAnJWQg2LPYp9mEJ1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC/YjC9nLCAnLCcpO1xuICAgIH0sXG4gICAgcG9zdGZvcm1hdDogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLywvZywgJ9iMJyk7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gc2Q7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9zZC5qc1xuLy8gbW9kdWxlIGlkID0gNzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMzMiXSwic291cmNlUm9vdCI6IiJ9