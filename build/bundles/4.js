webpackJsonp([4],{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhHk = moment.defineLocale('zh-hk', {
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

return zhHk;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvemgtaGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDaGluZXNlIChIb25nIEtvbmcpIFt6aC1oa11cbi8vISBhdXRob3IgOiBCZW4gOiBodHRwczovL2dpdGh1Yi5jb20vYmVuLWxpblxuLy8hIGF1dGhvciA6IENocmlzIExhbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9oZWhhY2hyaXNcbi8vISBhdXRob3IgOiBLb25zdGFudGluIDogaHR0cHM6Ly9naXRodWIuY29tL3NrZmRcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgemhIayA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3poLWhrJywge1xuICAgIG1vbnRocyA6ICfkuIDmnIhf5LqM5pyIX+S4ieaciF/lm5vmnIhf5LqU5pyIX+WFreaciF/kuIPmnIhf5YWr5pyIX+S5neaciF/ljYHmnIhf5Y2B5LiA5pyIX+WNgeS6jOaciCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfmmJ/mnJ/ml6Vf5pif5pyf5LiAX+aYn+acn+S6jF/mmJ/mnJ/kuIlf5pif5pyf5ZubX+aYn+acn+S6lF/mmJ/mnJ/lha0nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfpgLHml6Vf6YCx5LiAX+mAseS6jF/pgLHkuIlf6YCx5ZubX+mAseS6lF/pgLHlha0nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn5pelX+S4gF/kuoxf5LiJX+Wbm1/kupRf5YWtJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnWVlZWeW5tE1NTUTml6UnLFxuICAgICAgICBMTCA6ICdZWVlZ5bm0TU1NROaXpScsXG4gICAgICAgIExMTCA6ICdZWVlZ5bm0TU1NROaXpSBISDptbScsXG4gICAgICAgIExMTEwgOiAnWVlZWeW5tE1NTUTml6VkZGRkIEhIOm1tJyxcbiAgICAgICAgbCA6ICdZWVlZ5bm0TU1NROaXpScsXG4gICAgICAgIGxsIDogJ1lZWVnlubRNTU1E5pelJyxcbiAgICAgICAgbGxsIDogJ1lZWVnlubRNTU1E5pelIEhIOm1tJyxcbiAgICAgICAgbGxsbCA6ICdZWVlZ5bm0TU1NROaXpWRkZGQgSEg6bW0nXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv5YeM5pmofOaXqeS4inzkuIrljYh85Lit5Y2IfOS4i+WNiHzmmZrkuIovLFxuICAgIG1lcmlkaWVtSG91ciA6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJpZGllbSA9PT0gJ+WHjOaZqCcgfHwgbWVyaWRpZW0gPT09ICfml6nkuIonIHx8IG1lcmlkaWVtID09PSAn5LiK5Y2IJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfkuK3ljYgnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfkuIvljYgnIHx8IG1lcmlkaWVtID09PSAn5pma5LiKJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIHZhciBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XG4gICAgICAgIGlmIChobSA8IDYwMCkge1xuICAgICAgICAgICAgcmV0dXJuICflh4zmmagnO1xuICAgICAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+aXqeS4iic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+S4iuWNiCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG0gPCAxMjMwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+S4reWNiCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+S4i+WNiCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ+aZmuS4iic7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vku4rlpKldTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vmmI7lpKldTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdb5LiLXWRkZGRMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW+aYqOWkqV1MVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vkuIpdZGRkZExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSjml6V85pyIfOmAsSkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgICAgICAgIGNhc2UgJ2QnIDpcbiAgICAgICAgICAgIGNhc2UgJ0QnIDpcbiAgICAgICAgICAgIGNhc2UgJ0RERCcgOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAn5pelJztcbiAgICAgICAgICAgIGNhc2UgJ00nIDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJ+aciCc7XG4gICAgICAgICAgICBjYXNlICd3JyA6XG4gICAgICAgICAgICBjYXNlICdXJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICfpgLEnO1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXPlhacnLFxuICAgICAgICBwYXN0IDogJyVz5YmNJyxcbiAgICAgICAgcyA6ICflub7np5InLFxuICAgICAgICBtIDogJzEg5YiG6ZCYJyxcbiAgICAgICAgbW0gOiAnJWQg5YiG6ZCYJyxcbiAgICAgICAgaCA6ICcxIOWwj+aZgicsXG4gICAgICAgIGhoIDogJyVkIOWwj+aZgicsXG4gICAgICAgIGQgOiAnMSDlpKknLFxuICAgICAgICBkZCA6ICclZCDlpKknLFxuICAgICAgICBNIDogJzEg5YCL5pyIJyxcbiAgICAgICAgTU0gOiAnJWQg5YCL5pyIJyxcbiAgICAgICAgeSA6ICcxIOW5tCcsXG4gICAgICAgIHl5IDogJyVkIOW5tCdcbiAgICB9XG59KTtcblxucmV0dXJuIHpoSGs7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS96aC1oay5qc1xuLy8gbW9kdWxlIGlkID0gNzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=