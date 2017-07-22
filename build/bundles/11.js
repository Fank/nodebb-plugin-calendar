webpackJsonp([11],{

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر'
];
var days = [
    'اتوار',
    'پیر',
    'منگل',
    'بدھ',
    'جمعرات',
    'جمعہ',
    'ہفتہ'
];

var ur = moment.defineLocale('ur', {
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
        sameDay : '[آج بوقت] LT',
        nextDay : '[کل بوقت] LT',
        nextWeek : 'dddd [بوقت] LT',
        lastDay : '[گذشتہ روز بوقت] LT',
        lastWeek : '[گذشتہ] dddd [بوقت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s بعد',
        past : '%s قبل',
        s : 'چند سیکنڈ',
        m : 'ایک منٹ',
        mm : '%d منٹ',
        h : 'ایک گھنٹہ',
        hh : '%d گھنٹے',
        d : 'ایک دن',
        dd : '%d دن',
        M : 'ایک ماہ',
        MM : '%d ماہ',
        y : 'ایک سال',
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

return ur;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVXJkdSBbdXJdXG4vLyEgYXV0aG9yIDogU2F3b29kIEFsYW0gOiBodHRwczovL2dpdGh1Yi5jb20vaWJuZXNheWVlZFxuLy8hIGF1dGhvciA6IFphY2sgOiBodHRwczovL2dpdGh1Yi5jb20vWmFja1Zpc2lvblxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBtb250aHMgPSBbXG4gICAgJ9is2YbZiNix24wnLFxuICAgICfZgdix2YjYsduMJyxcbiAgICAn2YXYp9ix2oYnLFxuICAgICfYp9m+2LHbjNmEJyxcbiAgICAn2YXYptuMJyxcbiAgICAn2KzZiNmGJyxcbiAgICAn2KzZiNmE2KfYptuMJyxcbiAgICAn2Kfar9iz2KonLFxuICAgICfYs9iq2YXYqNixJyxcbiAgICAn2Kfaqdiq2YjYqNixJyxcbiAgICAn2YbZiNmF2KjYsScsXG4gICAgJ9iv2LPZhdio2LEnXG5dO1xudmFyIGRheXMgPSBbXG4gICAgJ9in2KrZiNin2LEnLFxuICAgICfZvtuM2LEnLFxuICAgICfZhdmG2q/ZhCcsXG4gICAgJ9io2K/avicsXG4gICAgJ9is2YXYudix2KfYqicsXG4gICAgJ9is2YXYuduBJyxcbiAgICAn24HZgdiq24EnXG5dO1xuXG52YXIgdXIgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd1cicsIHtcbiAgICBtb250aHMgOiBtb250aHMsXG4gICAgbW9udGhzU2hvcnQgOiBtb250aHMsXG4gICAgd2Vla2RheXMgOiBkYXlzLFxuICAgIHdlZWtkYXlzU2hvcnQgOiBkYXlzLFxuICAgIHdlZWtkYXlzTWluIDogZGF5cyxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZNiMIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL9i12KjYrXzYtNin2YUvLFxuICAgIGlzUE0gOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICfYtNin2YUnID09PSBpbnB1dDtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9i12KjYrSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICfYtNin2YUnO1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW9ii2Kwg2KjZiNmC2KpdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb2qnZhCDYqNmI2YLYql0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFvYqNmI2YLYql0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1var9iw2LTYqtuBINix2YjYsiDYqNmI2YLYql0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb2q/YsNi02KrbgV0gZGRkZCBb2KjZiNmC2KpdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzINio2LnYrycsXG4gICAgICAgIHBhc3QgOiAnJXMg2YLYqNmEJyxcbiAgICAgICAgcyA6ICfahtmG2K8g2LPbjNqp2YbaiCcsXG4gICAgICAgIG0gOiAn2KfbjNqpINmF2YbZuScsXG4gICAgICAgIG1tIDogJyVkINmF2YbZuScsXG4gICAgICAgIGggOiAn2KfbjNqpINqv2r7Zhtm524EnLFxuICAgICAgICBoaCA6ICclZCDar9q+2YbZuduSJyxcbiAgICAgICAgZCA6ICfYp9uM2qkg2K/ZhicsXG4gICAgICAgIGRkIDogJyVkINiv2YYnLFxuICAgICAgICBNIDogJ9in24zaqSDZhdin24EnLFxuICAgICAgICBNTSA6ICclZCDZhdin24EnLFxuICAgICAgICB5IDogJ9in24zaqSDYs9in2YQnLFxuICAgICAgICB5eSA6ICclZCDYs9in2YQnXG4gICAgfSxcbiAgICBwcmVwYXJzZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL9iML2csICcsJyk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvLC9nLCAn2IwnKTtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB1cjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSJdLCJzb3VyY2VSb290IjoiIn0=