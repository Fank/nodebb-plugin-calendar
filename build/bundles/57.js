webpackJsonp([57],{

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var suffixes = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү'
};

var ky = moment.defineLocale('ky', {
    months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгүн саат] LT',
        nextDay : '[Эртең саат] LT',
        nextWeek : 'dddd [саат] LT',
        lastDay : '[Кече саат] LT',
        lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ичинде',
        past : '%s мурун',
        s : 'бирнече секунд',
        m : 'бир мүнөт',
        mm : '%d мүнөт',
        h : 'бир саат',
        hh : '%d саат',
        d : 'бир күн',
        dd : '%d күн',
        M : 'бир ай',
        MM : '%d ай',
        y : 'бир жыл',
        yy : '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ky;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUva3kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7Ozs7QUFJNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLeXJneXogW2t5XVxuLy8hIGF1dGhvciA6IENoeW5neXogQXJ5c3RhbiB1dWx1IDogaHR0cHM6Ly9naXRodWIuY29tL2NoeW5neXpcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5cbnZhciBzdWZmaXhlcyA9IHtcbiAgICAwOiAnLdGH0q8nLFxuICAgIDE6ICct0YfQuCcsXG4gICAgMjogJy3Rh9C4JyxcbiAgICAzOiAnLdGH0q8nLFxuICAgIDQ6ICct0YfSrycsXG4gICAgNTogJy3Rh9C4JyxcbiAgICA2OiAnLdGH0YsnLFxuICAgIDc6ICct0YfQuCcsXG4gICAgODogJy3Rh9C4JyxcbiAgICA5OiAnLdGH0YMnLFxuICAgIDEwOiAnLdGH0YMnLFxuICAgIDIwOiAnLdGH0YsnLFxuICAgIDMwOiAnLdGH0YMnLFxuICAgIDQwOiAnLdGH0YsnLFxuICAgIDUwOiAnLdGH0q8nLFxuICAgIDYwOiAnLdGH0YsnLFxuICAgIDcwOiAnLdGH0LgnLFxuICAgIDgwOiAnLdGH0LgnLFxuICAgIDkwOiAnLdGH0YMnLFxuICAgIDEwMDogJy3Rh9KvJ1xufTtcblxudmFyIGt5ID0gbW9tZW50LmRlZmluZUxvY2FsZSgna3knLCB7XG4gICAgbW9udGhzIDogJ9GP0L3QstCw0YDRjF/RhNC10LLRgNCw0LvRjF/QvNCw0YDRgl/QsNC/0YDQtdC70Yxf0LzQsNC5X9C40Y7QvdGMX9C40Y7Qu9GMX9Cw0LLQs9GD0YHRgl/RgdC10L3RgtGP0LHRgNGMX9C+0LrRgtGP0LHRgNGMX9C90L7Rj9Cx0YDRjF/QtNC10LrQsNCx0YDRjCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfRj9C90LJf0YTQtdCyX9C80LDRgNGCX9Cw0L/RgF/QvNCw0Llf0LjRjtC90Yxf0LjRjtC70Yxf0LDQstCzX9GB0LXQvV/QvtC60YJf0L3QvtGPX9C00LXQuicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfQltC10LrRiNC10LzQsdC4X9CU0q/QudGI06nQvNCx0q9f0KjQtdC50YjQtdC80LHQuF/QqNCw0YDRiNC10LzQsdC4X9CR0LXQudGI0LXQvNCx0Lhf0JbRg9C80LBf0JjRiNC10LzQsdC4Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn0JbQtdC6X9CU0q/QuV/QqNC10Llf0KjQsNGAX9CR0LXQuV/QltGD0Lxf0JjRiNC1Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ9CW0Lpf0JTQuV/QqNC5X9Co0YBf0JHQuV/QltC8X9CY0YgnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW9CR0q/Qs9Kv0L0g0YHQsNCw0YJdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb0K3RgNGC0LXSoyDRgdCw0LDRgl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFvRgdCw0LDRgl0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vQmtC10YfQtSDRgdCw0LDRgl0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb06jRgtC60LXQvSDQsNC/0YLQsNC90YvQvV0gZGRkZCBb0LrSr9C90q9dIFvRgdCw0LDRgl0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMg0LjRh9C40L3QtNC1JyxcbiAgICAgICAgcGFzdCA6ICclcyDQvNGD0YDRg9C9JyxcbiAgICAgICAgcyA6ICfQsdC40YDQvdC10YfQtSDRgdC10LrRg9C90LQnLFxuICAgICAgICBtIDogJ9Cx0LjRgCDQvNKv0L3TqdGCJyxcbiAgICAgICAgbW0gOiAnJWQg0LzSr9C906nRgicsXG4gICAgICAgIGggOiAn0LHQuNGAINGB0LDQsNGCJyxcbiAgICAgICAgaGggOiAnJWQg0YHQsNCw0YInLFxuICAgICAgICBkIDogJ9Cx0LjRgCDQutKv0L0nLFxuICAgICAgICBkZCA6ICclZCDQutKv0L0nLFxuICAgICAgICBNIDogJ9Cx0LjRgCDQsNC5JyxcbiAgICAgICAgTU0gOiAnJWQg0LDQuScsXG4gICAgICAgIHkgOiAn0LHQuNGAINC20YvQuycsXG4gICAgICAgIHl5IDogJyVkINC20YvQuydcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0o0YfQuHzRh9GLfNGH0q980YfRgykvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBhID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBiID0gbnVtYmVyID49IDEwMCA/IDEwMCA6IG51bGw7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAoc3VmZml4ZXNbbnVtYmVyXSB8fCBzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSk7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4ga3k7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9reS5qc1xuLy8gbW9kdWxlIGlkID0gNzE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNTciXSwic291cmNlUm9vdCI6IiJ9