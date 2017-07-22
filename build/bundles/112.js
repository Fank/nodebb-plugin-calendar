webpackJsonp([112],{

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};

var arSa = moment.defineLocale('ar-sa', {
    months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    preparse: function (string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return arSa;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYXItc2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFyYWJpYyAoU2F1ZGkgQXJhYmlhKSBbYXItc2FdXG4vLyEgYXV0aG9yIDogU3VoYWlsIEFsa293YWlsZWV0IDogaHR0cHM6Ly9naXRodWIuY29tL3hzb2hcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgc3ltYm9sTWFwID0ge1xuICAgICcxJzogJ9mhJyxcbiAgICAnMic6ICfZoicsXG4gICAgJzMnOiAn2aMnLFxuICAgICc0JzogJ9mkJyxcbiAgICAnNSc6ICfZpScsXG4gICAgJzYnOiAn2aYnLFxuICAgICc3JzogJ9mnJyxcbiAgICAnOCc6ICfZqCcsXG4gICAgJzknOiAn2aknLFxuICAgICcwJzogJ9mgJ1xufTtcbnZhciBudW1iZXJNYXAgPSB7XG4gICAgJ9mhJzogJzEnLFxuICAgICfZoic6ICcyJyxcbiAgICAn2aMnOiAnMycsXG4gICAgJ9mkJzogJzQnLFxuICAgICfZpSc6ICc1JyxcbiAgICAn2aYnOiAnNicsXG4gICAgJ9mnJzogJzcnLFxuICAgICfZqCc6ICc4JyxcbiAgICAn2aknOiAnOScsXG4gICAgJ9mgJzogJzAnXG59O1xuXG52YXIgYXJTYSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2FyLXNhJywge1xuICAgIG1vbnRocyA6ICfZitmG2KfZitixX9mB2KjYsdin2YrYsV/Zhdin2LHYs1/Yo9io2LHZitmEX9mF2KfZitmIX9mK2YjZhtmK2Yhf2YrZiNmE2YrZiF/Yo9i62LPYt9izX9iz2KjYqtmF2KjYsV/Yo9mD2KrZiNio2LFf2YbZiNmB2YXYqNixX9iv2YrYs9mF2KjYsScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfZitmG2KfZitixX9mB2KjYsdin2YrYsV/Zhdin2LHYs1/Yo9io2LHZitmEX9mF2KfZitmIX9mK2YjZhtmK2Yhf2YrZiNmE2YrZiF/Yo9i62LPYt9izX9iz2KjYqtmF2KjYsV/Yo9mD2KrZiNio2LFf2YbZiNmB2YXYqNixX9iv2YrYs9mF2KjYsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfYp9mE2KPYrdivX9in2YTYpdir2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfYo9it2K9f2KXYq9mG2YrZhl/Yq9mE2KfYq9in2KFf2KPYsdio2LnYp9ihX9iu2YXZitizX9is2YXYudipX9iz2KjYqicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfYrV/Zhl/Yq1/YsV/Yrl/YrF/Ysycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL9i1fNmFLyxcbiAgICBpc1BNIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAn2YUnID09PSBpbnB1dDtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9i1JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn2YUnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1vYp9mE2YrZiNmFINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbmV4dERheTogJ1vYutiv2Kcg2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW9i52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgbGFzdERheTogJ1vYo9mF2LMg2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ2RkZGQgW9i52YTZiSDYp9mE2LPYp9i52KldIExUJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAn2YHZiiAlcycsXG4gICAgICAgIHBhc3QgOiAn2YXZhtiwICVzJyxcbiAgICAgICAgcyA6ICfYq9mI2KfZhicsXG4gICAgICAgIG0gOiAn2K/ZgtmK2YLYqScsXG4gICAgICAgIG1tIDogJyVkINiv2YLYp9im2YInLFxuICAgICAgICBoIDogJ9iz2KfYudipJyxcbiAgICAgICAgaGggOiAnJWQg2LPYp9i52KfYqicsXG4gICAgICAgIGQgOiAn2YrZiNmFJyxcbiAgICAgICAgZGQgOiAnJWQg2KPZitin2YUnLFxuICAgICAgICBNIDogJ9i02YfYsScsXG4gICAgICAgIE1NIDogJyVkINij2LTZh9ixJyxcbiAgICAgICAgeSA6ICfYs9mG2KknLFxuICAgICAgICB5eSA6ICclZCDYs9mG2YjYp9iqJ1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgICAgIH0pLnJlcGxhY2UoL9iML2csICcsJyk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgIH0pLnJlcGxhY2UoLywvZywgJ9iMJyk7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYXJTYTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMTIiXSwic291cmNlUm9vdCI6IiJ9