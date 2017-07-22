webpackJsonp([3],{

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhTw = moment.defineLocale('zh-tw', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日 HH:mm',
        LLLL : 'YYYY年MMMD日dddd HH:mm',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日 HH:mm',
        llll : 'YYYY年MMMD日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%s內',
        past : '%s前',
        s : '幾秒',
        m : '1 分鐘',
        mm : '%d 分鐘',
        h : '1 小時',
        hh : '%d 小時',
        d : '1 天',
        dd : '%d 天',
        M : '1 個月',
        MM : '%d 個月',
        y : '1 年',
        yy : '%d 年'
    }
});

return zhTw;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvemgtdHcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoVGFpd2FuKSBbemgtdHddXG4vLyEgYXV0aG9yIDogQmVuIDogaHR0cHM6Ly9naXRodWIuY29tL2Jlbi1saW5cbi8vISBhdXRob3IgOiBDaHJpcyBMYW0gOiBodHRwczovL2dpdGh1Yi5jb20vaGVoYWNocmlzXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHpoVHcgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd6aC10dycsIHtcbiAgICBtb250aHMgOiAn5LiA5pyIX+S6jOaciF/kuInmnIhf5Zub5pyIX+S6lOaciF/lha3mnIhf5LiD5pyIX+WFq+aciF/kuZ3mnIhf5Y2B5pyIX+WNgeS4gOaciF/ljYHkuozmnIgnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn5pif5pyf5pelX+aYn+acn+S4gF/mmJ/mnJ/kuoxf5pif5pyf5LiJX+aYn+acn+Wbm1/mmJ/mnJ/kupRf5pif5pyf5YWtJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn6YCx5pelX+mAseS4gF/pgLHkuoxf6YCx5LiJX+mAseWbm1/pgLHkupRf6YCx5YWtJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+aXpV/kuIBf5LqMX+S4iV/lm5tf5LqUX+WFrScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ1lZWVnlubRNTU1E5pelJyxcbiAgICAgICAgTEwgOiAnWVlZWeW5tE1NTUTml6UnLFxuICAgICAgICBMTEwgOiAnWVlZWeW5tE1NTUTml6UgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ1lZWVnlubRNTU1E5pelZGRkZCBISDptbScsXG4gICAgICAgIGwgOiAnWVlZWeW5tE1NTUTml6UnLFxuICAgICAgICBsbCA6ICdZWVlZ5bm0TU1NROaXpScsXG4gICAgICAgIGxsbCA6ICdZWVlZ5bm0TU1NROaXpSBISDptbScsXG4gICAgICAgIGxsbGwgOiAnWVlZWeW5tE1NTUTml6VkZGRkIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL+WHjOaZqHzml6nkuIp85LiK5Y2IfOS4reWNiHzkuIvljYh85pma5LiKLyxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICflh4zmmagnIHx8IG1lcmlkaWVtID09PSAn5pep5LiKJyB8fCBtZXJpZGllbSA9PT0gJ+S4iuWNiCcpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn5Lit5Y2IJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn5LiL5Y2IJyB8fCBtZXJpZGllbSA9PT0gJ+aZmuS4iicpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICB2YXIgaG0gPSBob3VyICogMTAwICsgbWludXRlO1xuICAgICAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgICAgICAgIHJldHVybiAn5YeM5pmoJztcbiAgICAgICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xuICAgICAgICAgICAgcmV0dXJuICfml6nkuIonO1xuICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTEzMCkge1xuICAgICAgICAgICAgcmV0dXJuICfkuIrljYgnO1xuICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTIzMCkge1xuICAgICAgICAgICAgcmV0dXJuICfkuK3ljYgnO1xuICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xuICAgICAgICAgICAgcmV0dXJuICfkuIvljYgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICfmmZrkuIonO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdb5LuK5aSpXUxUJyxcbiAgICAgICAgbmV4dERheSA6ICdb5piO5aSpXUxUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW+S4i11kZGRkTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vmmKjlpKldTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb5LiKXWRkZGRMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0o5pelfOaciHzpgLEpLyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlciwgcGVyaW9kKSB7XG4gICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICBjYXNlICdkJyA6XG4gICAgICAgICAgICBjYXNlICdEJyA6XG4gICAgICAgICAgICBjYXNlICdEREQnIDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ+aXpSc7XG4gICAgICAgICAgICBjYXNlICdNJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICfmnIgnO1xuICAgICAgICAgICAgY2FzZSAndycgOlxuICAgICAgICAgICAgY2FzZSAnVycgOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAn6YCxJztcbiAgICAgICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVz5YWnJyxcbiAgICAgICAgcGFzdCA6ICclc+WJjScsXG4gICAgICAgIHMgOiAn5bm+56eSJyxcbiAgICAgICAgbSA6ICcxIOWIhumQmCcsXG4gICAgICAgIG1tIDogJyVkIOWIhumQmCcsXG4gICAgICAgIGggOiAnMSDlsI/mmYInLFxuICAgICAgICBoaCA6ICclZCDlsI/mmYInLFxuICAgICAgICBkIDogJzEg5aSpJyxcbiAgICAgICAgZGQgOiAnJWQg5aSpJyxcbiAgICAgICAgTSA6ICcxIOWAi+aciCcsXG4gICAgICAgIE1NIDogJyVkIOWAi+aciCcsXG4gICAgICAgIHkgOiAnMSDlubQnLFxuICAgICAgICB5eSA6ICclZCDlubQnXG4gICAgfVxufSk7XG5cbnJldHVybiB6aFR3O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvemgtdHcuanNcbi8vIG1vZHVsZSBpZCA9IDc3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9