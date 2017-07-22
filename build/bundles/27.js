webpackJsonp([27],{

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['један минут', 'једне минуте'],
        mm: ['минут', 'минуте', 'минута'],
        h: ['један сат', 'једног сата'],
        hh: ['сат', 'сата', 'сати'],
        dd: ['дан', 'дана', 'дана'],
        MM: ['месец', 'месеца', 'месеци'],
        yy: ['година', 'године', 'година']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

var srCyrl = moment.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[данас у] LT',
        nextDay: '[сутра у] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[у] [недељу] [у] LT';
                case 3:
                    return '[у] [среду] [у] LT';
                case 6:
                    return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[у] dddd [у] LT';
            }
        },
        lastDay  : '[јуче у] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[прошле] [недеље] [у] LT',
                '[прошлог] [понедељка] [у] LT',
                '[прошлог] [уторка] [у] LT',
                '[прошле] [среде] [у] LT',
                '[прошлог] [четвртка] [у] LT',
                '[прошлог] [петка] [у] LT',
                '[прошле] [суботе] [у] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'за %s',
        past   : 'пре %s',
        s      : 'неколико секунди',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'дан',
        dd     : translator.translate,
        M      : 'месец',
        MM     : translator.translate,
        y      : 'годину',
        yy     : translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return srCyrl;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc3ItY3lybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTZXJiaWFuIEN5cmlsbGljIFtzci1jeXJsXVxuLy8hIGF1dGhvciA6IE1pbGFuIEphbmHEjWtvdmnEhzxtaWxhbmphbmFja292aWNAZ21haWwuY29tPiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWxhbi1qXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHRyYW5zbGF0b3IgPSB7XG4gICAgd29yZHM6IHsgLy9EaWZmZXJlbnQgZ3JhbW1hdGljYWwgY2FzZXNcbiAgICAgICAgbTogWyfRmNC10LTQsNC9INC80LjQvdGD0YInLCAn0ZjQtdC00L3QtSDQvNC40L3Rg9GC0LUnXSxcbiAgICAgICAgbW06IFsn0LzQuNC90YPRgicsICfQvNC40L3Rg9GC0LUnLCAn0LzQuNC90YPRgtCwJ10sXG4gICAgICAgIGg6IFsn0ZjQtdC00LDQvSDRgdCw0YInLCAn0ZjQtdC00L3QvtCzINGB0LDRgtCwJ10sXG4gICAgICAgIGhoOiBbJ9GB0LDRgicsICfRgdCw0YLQsCcsICfRgdCw0YLQuCddLFxuICAgICAgICBkZDogWyfQtNCw0L0nLCAn0LTQsNC90LAnLCAn0LTQsNC90LAnXSxcbiAgICAgICAgTU06IFsn0LzQtdGB0LXRhicsICfQvNC10YHQtdGG0LAnLCAn0LzQtdGB0LXRhtC4J10sXG4gICAgICAgIHl5OiBbJ9Cz0L7QtNC40L3QsCcsICfQs9C+0LTQuNC90LUnLCAn0LPQvtC00LjQvdCwJ11cbiAgICB9LFxuICAgIGNvcnJlY3RHcmFtbWF0aWNhbENhc2U6IGZ1bmN0aW9uIChudW1iZXIsIHdvcmRLZXkpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/IHdvcmRLZXlbMF0gOiAobnVtYmVyID49IDIgJiYgbnVtYmVyIDw9IDQgPyB3b3JkS2V5WzFdIDogd29yZEtleVsyXSk7XG4gICAgfSxcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICAgICAgICB2YXIgd29yZEtleSA9IHRyYW5zbGF0b3Iud29yZHNba2V5XTtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gd29yZEtleVswXSA6IHdvcmRLZXlbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJyAnICsgdHJhbnNsYXRvci5jb3JyZWN0R3JhbW1hdGljYWxDYXNlKG51bWJlciwgd29yZEtleSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgc3JDeXJsID0gbW9tZW50LmRlZmluZUxvY2FsZSgnc3ItY3lybCcsIHtcbiAgICBtb250aHM6ICfRmNCw0L3Rg9Cw0YBf0YTQtdCx0YDRg9Cw0YBf0LzQsNGA0YJf0LDQv9GA0LjQu1/QvNCw0Zhf0ZjRg9C9X9GY0YPQu1/QsNCy0LPRg9GB0YJf0YHQtdC/0YLQtdC80LHQsNGAX9C+0LrRgtC+0LHQsNGAX9C90L7QstC10LzQsdCw0YBf0LTQtdGG0LXQvNCx0LDRgCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydDogJ9GY0LDQvS5f0YTQtdCxLl/QvNCw0YAuX9Cw0L/RgC5f0LzQsNGYX9GY0YPQvV/RmNGD0Ltf0LDQstCzLl/RgdC10L8uX9C+0LrRgi5f0L3QvtCyLl/QtNC10YYuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgd2Vla2RheXM6ICfQvdC10LTQtdGZ0LBf0L/QvtC90LXQtNC10ZnQsNC6X9GD0YLQvtGA0LDQul/RgdGA0LXQtNCwX9GH0LXRgtCy0YDRgtCw0Lpf0L/QtdGC0LDQul/RgdGD0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydDogJ9C90LXQtC5f0L/QvtC9Ll/Rg9GC0L4uX9GB0YDQtS5f0YfQtdGCLl/Qv9C10YIuX9GB0YPQsS4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW46ICfQvdC1X9C/0L5f0YPRgl/RgdGAX9GH0LVf0L/QtV/RgdGDJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgICAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgICBzYW1lRGF5OiAnW9C00LDQvdCw0YEg0YNdIExUJyxcbiAgICAgICAgbmV4dERheTogJ1vRgdGD0YLRgNCwINGDXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9GDXSBb0L3QtdC00LXRmdGDXSBb0YNdIExUJztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9GDXSBb0YHRgNC10LTRg10gW9GDXSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vRg10gW9GB0YPQsdC+0YLRg10gW9GDXSBMVCc7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vRg10gZGRkZCBb0YNdIExUJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdERheSAgOiAnW9GY0YPRh9C1INGDXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhc3RXZWVrRGF5cyA9IFtcbiAgICAgICAgICAgICAgICAnW9C/0YDQvtGI0LvQtV0gW9C90LXQtNC10ZnQtV0gW9GDXSBMVCcsXG4gICAgICAgICAgICAgICAgJ1vQv9GA0L7RiNC70L7Qs10gW9C/0L7QvdC10LTQtdGZ0LrQsF0gW9GDXSBMVCcsXG4gICAgICAgICAgICAgICAgJ1vQv9GA0L7RiNC70L7Qs10gW9GD0YLQvtGA0LrQsF0gW9GDXSBMVCcsXG4gICAgICAgICAgICAgICAgJ1vQv9GA0L7RiNC70LVdIFvRgdGA0LXQtNC1XSBb0YNdIExUJyxcbiAgICAgICAgICAgICAgICAnW9C/0YDQvtGI0LvQvtCzXSBb0YfQtdGC0LLRgNGC0LrQsF0gW9GDXSBMVCcsXG4gICAgICAgICAgICAgICAgJ1vQv9GA0L7RiNC70L7Qs10gW9C/0LXRgtC60LBdIFvRg10gTFQnLFxuICAgICAgICAgICAgICAgICdb0L/RgNC+0YjQu9C1XSBb0YHRg9Cx0L7RgtC1XSBb0YNdIExUJ1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybiBsYXN0V2Vla0RheXNbdGhpcy5kYXkoKV07XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfQt9CwICVzJyxcbiAgICAgICAgcGFzdCAgIDogJ9C/0YDQtSAlcycsXG4gICAgICAgIHMgICAgICA6ICfQvdC10LrQvtC70LjQutC+INGB0LXQutGD0L3QtNC4JyxcbiAgICAgICAgbSAgICAgIDogdHJhbnNsYXRvci50cmFuc2xhdGUsXG4gICAgICAgIG1tICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlLFxuICAgICAgICBoICAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgaGggICAgIDogdHJhbnNsYXRvci50cmFuc2xhdGUsXG4gICAgICAgIGQgICAgICA6ICfQtNCw0L0nLFxuICAgICAgICBkZCAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgTSAgICAgIDogJ9C80LXRgdC10YYnLFxuICAgICAgICBNTSAgICAgOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZSxcbiAgICAgICAgeSAgICAgIDogJ9Cz0L7QtNC40L3RgycsXG4gICAgICAgIHl5ICAgICA6IHRyYW5zbGF0b3IudHJhbnNsYXRlXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgIG9yZGluYWwgOiAnJWQuJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gc3JDeXJsO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1xuLy8gbW9kdWxlIGlkID0gNzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjciXSwic291cmNlUm9vdCI6IiJ9