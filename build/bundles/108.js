webpackJsonp([108],{

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        'dd': 'дзень_дні_дзён',
        'MM': 'месяц_месяцы_месяцаў',
        'yy': 'год_гады_гадоў'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвіліна' : 'хвіліну';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'гадзіна' : 'гадзіну';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

var be = moment.defineLocale('be', {
    months : {
        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
        standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
    },
    monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays : {
        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY г.',
        LLL : 'D MMMM YYYY г., HH:mm',
        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar : {
        sameDay: '[Сёння ў] LT',
        nextDay: '[Заўтра ў] LT',
        lastDay: '[Учора ў] LT',
        nextWeek: function () {
            return '[У] dddd [ў] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                    return '[У мінулы] dddd [ў] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'праз %s',
        past : '%s таму',
        s : 'некалькі секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithPlural,
        hh : relativeTimeWithPlural,
        d : 'дзень',
        dd : relativeTimeWithPlural,
        M : 'месяц',
        MM : relativeTimeWithPlural,
        y : 'год',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM : function (input) {
        return /^(дня|вечара)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночы';
        } else if (hour < 12) {
            return 'раніцы';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечара';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
            case 'D':
                return number + '-га';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return be;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIxMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQmVsYXJ1c2lhbiBbYmVdXG4vLyEgYXV0aG9yIDogRG1pdHJ5IERlbWlkb3YgOiBodHRwczovL2dpdGh1Yi5jb20vZGVtaWRvdjkxXG4vLyEgYXV0aG9yOiBQcmFsZXNrYTogaHR0cDovL3ByYWxlc2thLnByby9cbi8vISBBdXRob3IgOiBNZW5lbGlvbiBFbGVuc8O6bGUgOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIHBsdXJhbCh3b3JkLCBudW0pIHtcbiAgICB2YXIgZm9ybXMgPSB3b3JkLnNwbGl0KCdfJyk7XG4gICAgcmV0dXJuIG51bSAlIDEwID09PSAxICYmIG51bSAlIDEwMCAhPT0gMTEgPyBmb3Jtc1swXSA6IChudW0gJSAxMCA+PSAyICYmIG51bSAlIDEwIDw9IDQgJiYgKG51bSAlIDEwMCA8IDEwIHx8IG51bSAlIDEwMCA+PSAyMCkgPyBmb3Jtc1sxXSA6IGZvcm1zWzJdKTtcbn1cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICB2YXIgZm9ybWF0ID0ge1xuICAgICAgICAnbW0nOiB3aXRob3V0U3VmZml4ID8gJ9GF0LLRltC70ZbQvdCwX9GF0LLRltC70ZbQvdGLX9GF0LLRltC70ZbQvScgOiAn0YXQstGW0LvRltC90YNf0YXQstGW0LvRltC90Ytf0YXQstGW0LvRltC9JyxcbiAgICAgICAgJ2hoJzogd2l0aG91dFN1ZmZpeCA/ICfQs9Cw0LTQt9GW0L3QsF/Qs9Cw0LTQt9GW0L3Ri1/Qs9Cw0LTQt9GW0L0nIDogJ9Cz0LDQtNC30ZbQvdGDX9Cz0LDQtNC30ZbQvdGLX9Cz0LDQtNC30ZbQvScsXG4gICAgICAgICdkZCc6ICfQtNC30LXQvdGMX9C00L3Rll/QtNC30ZHQvScsXG4gICAgICAgICdNTSc6ICfQvNC10YHRj9GGX9C80LXRgdGP0YbRi1/QvNC10YHRj9GG0LDRnicsXG4gICAgICAgICd5eSc6ICfQs9C+0LRf0LPQsNC00Ytf0LPQsNC00L7RnidcbiAgICB9O1xuICAgIGlmIChrZXkgPT09ICdtJykge1xuICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfRhdCy0ZbQu9GW0L3QsCcgOiAn0YXQstGW0LvRltC90YMnO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfQs9Cw0LTQt9GW0L3QsCcgOiAn0LPQsNC00LfRltC90YMnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciArICcgJyArIHBsdXJhbChmb3JtYXRba2V5XSwgK251bWJlcik7XG4gICAgfVxufVxuXG52YXIgYmUgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdiZScsIHtcbiAgICBtb250aHMgOiB7XG4gICAgICAgIGZvcm1hdDogJ9GB0YLRg9C00LfQtdC90Y9f0LvRjtGC0LDQs9CwX9GB0LDQutCw0LLRltC60LBf0LrRgNCw0YHQsNCy0ZbQutCwX9GC0YDQsNGe0L3Rj1/Rh9GN0YDQstC10L3Rj1/Qu9GW0L/QtdC90Y9f0LbQvdGW0Z7QvdGPX9Cy0LXRgNCw0YHQvdGPX9C60LDRgdGC0YDRi9GH0L3RltC60LBf0LvRltGB0YLQsNC/0LDQtNCwX9GB0L3QtdC20L3Rjycuc3BsaXQoJ18nKSxcbiAgICAgICAgc3RhbmRhbG9uZTogJ9GB0YLRg9C00LfQtdC90Yxf0LvRjtGC0Ytf0YHQsNC60LDQstGW0Lpf0LrRgNCw0YHQsNCy0ZbQul/RgtGA0LDQstC10L3RjF/Rh9GN0YDQstC10L3RjF/Qu9GW0L/QtdC90Yxf0LbQvdGW0LLQtdC90Yxf0LLQtdGA0LDRgdC10L3RjF/QutCw0YHRgtGA0YvRh9C90ZbQul/Qu9GW0YHRgtCw0L/QsNC0X9GB0L3QtdC20LDQvdGMJy5zcGxpdCgnXycpXG4gICAgfSxcbiAgICBtb250aHNTaG9ydCA6ICfRgdGC0YPQtF/Qu9GO0YJf0YHQsNC6X9C60YDQsNGBX9GC0YDQsNCyX9GH0Y3RgNCyX9C70ZbQv1/QttC90ZbQsl/QstC10YBf0LrQsNGB0YJf0LvRltGB0YJf0YHQvdC10LYnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiB7XG4gICAgICAgIGZvcm1hdDogJ9C90Y/QtNC30LXQu9GOX9C/0LDQvdGP0LTQt9C10LvQsNC6X9Cw0Z7RgtC+0YDQsNC6X9GB0LXRgNCw0LTRg1/Rh9Cw0YbQstC10YBf0L/Rj9GC0L3RltGG0YNf0YHRg9Cx0L7RgtGDJy5zcGxpdCgnXycpLFxuICAgICAgICBzdGFuZGFsb25lOiAn0L3Rj9C00LfQtdC70Y9f0L/QsNC90Y/QtNC30LXQu9Cw0Lpf0LDRntGC0L7RgNCw0Lpf0YHQtdGA0LDQtNCwX9GH0LDRhtCy0LXRgF/Qv9GP0YLQvdGW0YbQsF/RgdGD0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgICAgIGlzRm9ybWF0OiAvXFxbID9b0JLQsl0gPyg/OtC80ZbQvdGD0LvRg9GOfNC90LDRgdGC0YPQv9C90YPRjik/ID9cXF0gP2RkZGQvXG4gICAgfSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ9C90LRf0L/QvV/QsNGCX9GB0YBf0YfRhl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn0L3QtF/Qv9C9X9Cw0YJf0YHRgF/Rh9GGX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWSDQsy4nLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkg0LMuLCBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkg0LMuLCBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnW9Ch0ZHQvdC90Y8g0Z5dIExUJyxcbiAgICAgICAgbmV4dERheTogJ1vQl9Cw0Z7RgtGA0LAg0Z5dIExUJyxcbiAgICAgICAgbGFzdERheTogJ1vQo9GH0L7RgNCwINGeXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1vQo10gZGRkZCBb0Z5dIExUJztcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0KMg0LzRltC90YPQu9GD0Y5dIGRkZGQgW9GeXSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CjINC80ZbQvdGD0LvRi10gZGRkZCBb0Z5dIExUJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAn0L/RgNCw0LcgJXMnLFxuICAgICAgICBwYXN0IDogJyVzINGC0LDQvNGDJyxcbiAgICAgICAgcyA6ICfQvdC10LrQsNC70YzQutGWINGB0LXQutGD0L3QtCcsXG4gICAgICAgIG0gOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICBtbSA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIGggOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICBoaCA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIGQgOiAn0LTQt9C10L3RjCcsXG4gICAgICAgIGRkIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgTSA6ICfQvNC10YHRj9GGJyxcbiAgICAgICAgTU0gOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICB5IDogJ9Cz0L7QtCcsXG4gICAgICAgIHl5IDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL9C90L7Rh9GLfNGA0LDQvdGW0YbRi3zQtNC90Y980LLQtdGH0LDRgNCwLyxcbiAgICBpc1BNIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAvXijQtNC90Y980LLQtdGH0LDRgNCwKSQvLnRlc3QoaW5wdXQpO1xuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgICAgICAgcmV0dXJuICfQvdC+0YfRiyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9GA0LDQvdGW0YbRiyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ9C00L3Rjyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ9Cy0LXRh9Cw0YDQsCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0o0ZZ80Yt80LPQsCkvLFxuICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIsIHBlcmlvZCkge1xuICAgICAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgICAgIHJldHVybiAobnVtYmVyICUgMTAgPT09IDIgfHwgbnVtYmVyICUgMTAgPT09IDMpICYmIChudW1iZXIgJSAxMDAgIT09IDEyICYmIG51bWJlciAlIDEwMCAhPT0gMTMpID8gbnVtYmVyICsgJy3RlicgOiBudW1iZXIgKyAnLdGLJztcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdCz0LAnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYmU7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9iZS5qc1xuLy8gbW9kdWxlIGlkID0gNjY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTA4Il0sInNvdXJjZVJvb3QiOiIifQ==