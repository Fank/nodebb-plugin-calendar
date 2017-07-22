webpackJsonp([8],{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var vi = moment.defineLocale('vi', {
    months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact : true,
    weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /sa|ch/i,
    isPM : function (input) {
        return /^ch$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        } else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM [năm] YYYY',
        LLL : 'D MMMM [năm] YYYY HH:mm',
        LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
        l : 'DD/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần rồi lúc] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s tới',
        past : '%s trước',
        s : 'vài giây',
        m : 'một phút',
        mm : '%d phút',
        h : 'một giờ',
        hh : '%d giờ',
        d : 'một ngày',
        dd : '%d ngày',
        M : 'một tháng',
        MM : '%d tháng',
        y : 'một năm',
        yy : '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return vi;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVmlldG5hbWVzZSBbdmldXG4vLyEgYXV0aG9yIDogQmFuZyBOZ3V5ZW4gOiBodHRwczovL2dpdGh1Yi5jb20vYmFuZ25rXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHZpID0gbW9tZW50LmRlZmluZUxvY2FsZSgndmknLCB7XG4gICAgbW9udGhzIDogJ3Row6FuZyAxX3Row6FuZyAyX3Row6FuZyAzX3Row6FuZyA0X3Row6FuZyA1X3Row6FuZyA2X3Row6FuZyA3X3Row6FuZyA4X3Row6FuZyA5X3Row6FuZyAxMF90aMOhbmcgMTFfdGjDoW5nIDEyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ1RoMDFfVGgwMl9UaDAzX1RoMDRfVGgwNV9UaDA2X1RoMDdfVGgwOF9UaDA5X1RoMTBfVGgxMV9UaDEyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ2No4bunIG5o4bqtdF90aOG7qSBoYWlfdGjhu6kgYmFfdGjhu6kgdMawX3Ro4bupIG7Eg21fdGjhu6kgc8OhdV90aOG7qSBi4bqjeScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ0NOX1QyX1QzX1Q0X1Q1X1Q2X1Q3Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ0NOX1QyX1QzX1Q0X1Q1X1Q2X1Q3Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbWVyaWRpZW1QYXJzZTogL3NhfGNoL2ksXG4gICAgaXNQTSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gL15jaCQvaS50ZXN0KGlucHV0KTtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdzYScgOiAnU0EnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnY2gnIDogJ0NIJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFtuxINtXSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBbbsSDbV0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFtuxINtXSBZWVlZIEhIOm1tJyxcbiAgICAgICAgbCA6ICdERC9NL1lZWVknLFxuICAgICAgICBsbCA6ICdEIE1NTSBZWVlZJyxcbiAgICAgICAgbGxsIDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBsbGxsIDogJ2RkZCwgRCBNTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW0jDtG0gbmF5IGzDumNdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1tOZ8OgeSBtYWkgbMO6Y10gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW3R14bqnbiB04bubaSBsw7pjXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbSMO0bSBxdWEgbMO6Y10gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ2RkZGQgW3R14bqnbiBy4buTaSBsw7pjXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIHThu5tpJyxcbiAgICAgICAgcGFzdCA6ICclcyB0csaw4bubYycsXG4gICAgICAgIHMgOiAndsOgaSBnacOieScsXG4gICAgICAgIG0gOiAnbeG7mXQgcGjDunQnLFxuICAgICAgICBtbSA6ICclZCBwaMO6dCcsXG4gICAgICAgIGggOiAnbeG7mXQgZ2nhu50nLFxuICAgICAgICBoaCA6ICclZCBnaeG7nScsXG4gICAgICAgIGQgOiAnbeG7mXQgbmfDoHknLFxuICAgICAgICBkZCA6ICclZCBuZ8OgeScsXG4gICAgICAgIE0gOiAnbeG7mXQgdGjDoW5nJyxcbiAgICAgICAgTU0gOiAnJWQgdGjDoW5nJyxcbiAgICAgICAgeSA6ICdt4buZdCBuxINtJyxcbiAgICAgICAgeXkgOiAnJWQgbsSDbSdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB2aTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3ZpLmpzXG4vLyBtb2R1bGUgaWQgPSA3Njhcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==