webpackJsonp([12],{

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
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
        'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        'dd': 'день_дні_днів',
        'MM': 'місяць_місяці_місяців',
        'yy': 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}
function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    };

    if (!m) {
        return weekdays['nominative'];
    }

    var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][m.day()];
}
function processHoursFunction(str) {
    return function () {
        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
}

var uk = moment.defineLocale('uk', {
    months : {
        'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays : weekdaysCaseReplace,
    weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY р.',
        LLL : 'D MMMM YYYY р., HH:mm',
        LLLL : 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar : {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [').call(this);
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'за %s',
        past : '%s тому',
        s : 'декілька секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : 'годину',
        hh : relativeTimeWithPlural,
        d : 'день',
        dd : relativeTimeWithPlural,
        M : 'місяць',
        MM : relativeTimeWithPlural,
        y : 'рік',
        yy : relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function (input) {
        return /^(дня|вечора)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночі';
        } else if (hour < 12) {
            return 'ранку';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечора';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-й';
            case 'D':
                return number + '-го';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return uk;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdWsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVWtyYWluaWFuIFt1a11cbi8vISBhdXRob3IgOiB6ZW1sYW5pbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW1sYW5pblxuLy8hIEF1dGhvciA6IE1lbmVsaW9uIEVsZW5zw7psZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gcGx1cmFsKHdvcmQsIG51bSkge1xuICAgIHZhciBmb3JtcyA9IHdvcmQuc3BsaXQoJ18nKTtcbiAgICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMSA/IGZvcm1zWzBdIDogKG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl0pO1xufVxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICdtbSc6IHdpdGhvdXRTdWZmaXggPyAn0YXQstC40LvQuNC90LBf0YXQstC40LvQuNC90Lhf0YXQstC40LvQuNC9JyA6ICfRhdCy0LjQu9C40L3Rg1/RhdCy0LjQu9C40L3QuF/RhdCy0LjQu9C40L0nLFxuICAgICAgICAnaGgnOiB3aXRob3V0U3VmZml4ID8gJ9Cz0L7QtNC40L3QsF/Qs9C+0LTQuNC90Lhf0LPQvtC00LjQvScgOiAn0LPQvtC00LjQvdGDX9Cz0L7QtNC40L3QuF/Qs9C+0LTQuNC9JyxcbiAgICAgICAgJ2RkJzogJ9C00LXQvdGMX9C00L3Rll/QtNC90ZbQsicsXG4gICAgICAgICdNTSc6ICfQvNGW0YHRj9GG0Yxf0LzRltGB0Y/RhtGWX9C80ZbRgdGP0YbRltCyJyxcbiAgICAgICAgJ3l5JzogJ9GA0ZbQul/RgNC+0LrQuF/RgNC+0LrRltCyJ1xuICAgIH07XG4gICAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9GF0LLQuNC70LjQvdCwJyA6ICfRhdCy0LjQu9C40L3Rgyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gJ2gnKSB7XG4gICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9Cz0L7QtNC40L3QsCcgOiAn0LPQvtC00LjQvdGDJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW1iZXIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdlZWtkYXlzQ2FzZVJlcGxhY2UobSwgZm9ybWF0KSB7XG4gICAgdmFyIHdlZWtkYXlzID0ge1xuICAgICAgICAnbm9taW5hdGl2ZSc6ICfQvdC10LTRltC70Y9f0L/QvtC90LXQtNGW0LvQvtC6X9Cy0ZbQstGC0L7RgNC+0Lpf0YHQtdGA0LXQtNCwX9GH0LXRgtCy0LXRgF/Qv+KAmdGP0YLQvdC40YbRj1/RgdGD0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgICAgICdhY2N1c2F0aXZlJzogJ9C90LXQtNGW0LvRjl/Qv9C+0L3QtdC00ZbQu9C+0Lpf0LLRltCy0YLQvtGA0L7Qul/RgdC10YDQtdC00YNf0YfQtdGC0LLQtdGAX9C/4oCZ0Y/RgtC90LjRhtGOX9GB0YPQsdC+0YLRgycuc3BsaXQoJ18nKSxcbiAgICAgICAgJ2dlbml0aXZlJzogJ9C90LXQtNGW0LvRll/Qv9C+0L3QtdC00ZbQu9C60LBf0LLRltCy0YLQvtGA0LrQsF/RgdC10YDQtdC00Lhf0YfQtdGC0LLQtdGA0LPQsF/Qv+KAmdGP0YLQvdC40YbRll/RgdGD0LHQvtGC0LgnLnNwbGl0KCdfJylcbiAgICB9O1xuXG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiB3ZWVrZGF5c1snbm9taW5hdGl2ZSddO1xuICAgIH1cblxuICAgIHZhciBub3VuQ2FzZSA9ICgvKFxcW1vQktCy0KPRg11cXF0pID9kZGRkLykudGVzdChmb3JtYXQpID9cbiAgICAgICAgJ2FjY3VzYXRpdmUnIDpcbiAgICAgICAgKCgvXFxbPyg/OtC80LjQvdGD0LvQvtGXfNC90LDRgdGC0YPQv9C90L7Rlyk/ID9cXF0gP2RkZGQvKS50ZXN0KGZvcm1hdCkgP1xuICAgICAgICAgICAgJ2dlbml0aXZlJyA6XG4gICAgICAgICAgICAnbm9taW5hdGl2ZScpO1xuICAgIHJldHVybiB3ZWVrZGF5c1tub3VuQ2FzZV1bbS5kYXkoKV07XG59XG5mdW5jdGlvbiBwcm9jZXNzSG91cnNGdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3RyICsgJ9C+JyArICh0aGlzLmhvdXJzKCkgPT09IDExID8gJ9CxJyA6ICcnKSArICddIExUJztcbiAgICB9O1xufVxuXG52YXIgdWsgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd1aycsIHtcbiAgICBtb250aHMgOiB7XG4gICAgICAgICdmb3JtYXQnOiAn0YHRltGH0L3Rj1/Qu9GO0YLQvtCz0L5f0LHQtdGA0LXQt9C90Y9f0LrQstGW0YLQvdGPX9GC0YDQsNCy0L3Rj1/Rh9C10YDQstC90Y9f0LvQuNC/0L3Rj1/RgdC10YDQv9C90Y9f0LLQtdGA0LXRgdC90Y9f0LbQvtCy0YLQvdGPX9C70LjRgdGC0L7Qv9Cw0LTQsF/Qs9GA0YPQtNC90Y8nLnNwbGl0KCdfJyksXG4gICAgICAgICdzdGFuZGFsb25lJzogJ9GB0ZbRh9C10L3RjF/Qu9GO0YLQuNC5X9Cx0LXRgNC10LfQtdC90Yxf0LrQstGW0YLQtdC90Yxf0YLRgNCw0LLQtdC90Yxf0YfQtdGA0LLQtdC90Yxf0LvQuNC/0LXQvdGMX9GB0LXRgNC/0LXQvdGMX9Cy0LXRgNC10YHQtdC90Yxf0LbQvtCy0YLQtdC90Yxf0LvQuNGB0YLQvtC/0LDQtF/Qs9GA0YPQtNC10L3RjCcuc3BsaXQoJ18nKVxuICAgIH0sXG4gICAgbW9udGhzU2hvcnQgOiAn0YHRltGHX9C70Y7Rgl/QsdC10YBf0LrQstGW0YJf0YLRgNCw0LJf0YfQtdGA0LJf0LvQuNC/X9GB0LXRgNC/X9Cy0LXRgF/QttC+0LLRgl/Qu9C40YHRgl/Qs9GA0YPQtCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6IHdlZWtkYXlzQ2FzZVJlcGxhY2UsXG4gICAgd2Vla2RheXNTaG9ydCA6ICfQvdC0X9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ9C90LRf0L/QvV/QstGCX9GB0YBf0YfRgl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVkg0YAuJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZINGALiwgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZINGALiwgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogcHJvY2Vzc0hvdXJzRnVuY3Rpb24oJ1vQodGM0L7Qs9C+0LTQvdGWICcpLFxuICAgICAgICBuZXh0RGF5OiBwcm9jZXNzSG91cnNGdW5jdGlvbignW9CX0LDQstGC0YDQsCAnKSxcbiAgICAgICAgbGFzdERheTogcHJvY2Vzc0hvdXJzRnVuY3Rpb24oJ1vQktGH0L7RgNCwICcpLFxuICAgICAgICBuZXh0V2VlazogcHJvY2Vzc0hvdXJzRnVuY3Rpb24oJ1vQo10gZGRkZCBbJyksXG4gICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzSG91cnNGdW5jdGlvbignW9Cc0LjQvdGD0LvQvtGXXSBkZGRkIFsnKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0hvdXJzRnVuY3Rpb24oJ1vQnNC40L3Rg9C70L7Qs9C+XSBkZGRkIFsnKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfQt9CwICVzJyxcbiAgICAgICAgcGFzdCA6ICclcyDRgtC+0LzRgycsXG4gICAgICAgIHMgOiAn0LTQtdC60ZbQu9GM0LrQsCDRgdC10LrRg9C90LQnLFxuICAgICAgICBtIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgbW0gOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICBoIDogJ9Cz0L7QtNC40L3RgycsXG4gICAgICAgIGhoIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgZCA6ICfQtNC10L3RjCcsXG4gICAgICAgIGRkIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgTSA6ICfQvNGW0YHRj9GG0YwnLFxuICAgICAgICBNTSA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIHkgOiAn0YDRltC6JyxcbiAgICAgICAgeXkgOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gICAgfSxcbiAgICAvLyBNLiBFLjogdGhvc2UgdHdvIGFyZSB2aXJ0dWFsbHkgdW51c2VkIGJ1dCBhIHVzZXIgbWlnaHQgd2FudCB0byBpbXBsZW1lbnQgdGhlbSBmb3IgaGlzL2hlciB3ZWJzaXRlIGZvciBzb21lIHJlYXNvblxuICAgIG1lcmlkaWVtUGFyc2U6IC/QvdC+0YfRlnzRgNCw0L3QutGDfNC00L3Rj3zQstC10YfQvtGA0LAvLFxuICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gL14o0LTQvdGPfNCy0LXRh9C+0YDQsCkkLy50ZXN0KGlucHV0KTtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAn0L3QvtGH0ZYnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgcmV0dXJuICfRgNCw0L3QutGDJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgICAgICAgIHJldHVybiAn0LTQvdGPJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn0LLQtdGH0L7RgNCwJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjQuXzQs9C+KS8sXG4gICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlciwgcGVyaW9kKSB7XG4gICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LknO1xuICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LPQvic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB1aztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3VrLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=