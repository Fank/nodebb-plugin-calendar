webpackJsonp([45],{

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '၁',
    '2': '၂',
    '3': '၃',
    '4': '၄',
    '5': '၅',
    '6': '၆',
    '7': '၇',
    '8': '၈',
    '9': '၉',
    '0': '၀'
};
var numberMap = {
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
    '၀': '0'
};

var my = moment.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ယနေ.] LT [မှာ]',
        nextDay: '[မနက်ဖြန်] LT [မှာ]',
        nextWeek: 'dddd LT [မှာ]',
        lastDay: '[မနေ.က] LT [မှာ]',
        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'လာမည့် %s မှာ',
        past: 'လွန်ခဲ့သော %s က',
        s: 'စက္ကန်.အနည်းငယ်',
        m: 'တစ်မိနစ်',
        mm: '%d မိနစ်',
        h: 'တစ်နာရီ',
        hh: '%d နာရီ',
        d: 'တစ်ရက်',
        dd: '%d ရက်',
        M: 'တစ်လ',
        MM: '%d လ',
        y: 'တစ်နှစ်',
        yy: '%d နှစ်'
    },
    preparse: function (string) {
        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 1st is the first week of the year.
    }
});

return my;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBCdXJtZXNlIFtteV1cbi8vISBhdXRob3IgOiBTcXVhciB0ZWFtLCBteXNxdWFyLmNvbVxuLy8hIGF1dGhvciA6IERhdmlkIFJvc3NlbGxhdCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9naG9sYWRyXG4vLyEgYXV0aG9yIDogVGluIEF1bmcgTGluIDogaHR0cHM6Ly9naXRodWIuY29tL3RoYW55YXd6aW5taW5cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgc3ltYm9sTWFwID0ge1xuICAgICcxJzogJ+GBgScsXG4gICAgJzInOiAn4YGCJyxcbiAgICAnMyc6ICfhgYMnLFxuICAgICc0JzogJ+GBhCcsXG4gICAgJzUnOiAn4YGFJyxcbiAgICAnNic6ICfhgYYnLFxuICAgICc3JzogJ+GBhycsXG4gICAgJzgnOiAn4YGIJyxcbiAgICAnOSc6ICfhgYknLFxuICAgICcwJzogJ+GBgCdcbn07XG52YXIgbnVtYmVyTWFwID0ge1xuICAgICfhgYEnOiAnMScsXG4gICAgJ+GBgic6ICcyJyxcbiAgICAn4YGDJzogJzMnLFxuICAgICfhgYQnOiAnNCcsXG4gICAgJ+GBhSc6ICc1JyxcbiAgICAn4YGGJzogJzYnLFxuICAgICfhgYcnOiAnNycsXG4gICAgJ+GBiCc6ICc4JyxcbiAgICAn4YGJJzogJzknLFxuICAgICfhgYAnOiAnMCdcbn07XG5cbnZhciBteSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ215Jywge1xuICAgIG1vbnRoczogJ+GAh+GAlOGAuuGAlOGAneGAq+GAm+GArl/hgJbhgLHhgJbhgLHhgKzhgLrhgJ3hgKvhgJvhgK5f4YCZ4YCQ4YC6X+GAp+GAleGAvOGArl/hgJnhgLFf4YCH4YC94YCU4YC6X+GAh+GAsOGAnOGAreGAr+GAhOGAul/hgJ7hgLzhgILhgK/hgJDhgLpf4YCF4YCA4YC64YCQ4YCE4YC64YCY4YCsX+GAoeGAseGArOGAgOGAuuGAkOGAreGAr+GAmOGArF/hgJThgK3hgK/hgJ3hgIThgLrhgJjhgKxf4YCS4YCu4YCH4YCE4YC64YCY4YCsJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0OiAn4YCH4YCU4YC6X+GAluGAsV/hgJnhgJDhgLpf4YCV4YC84YCuX+GAmeGAsV/hgIfhgL3hgJThgLpf4YCc4YCt4YCv4YCE4YC6X+GAnuGAvF/hgIXhgIDhgLpf4YCh4YCx4YCs4YCA4YC6X+GAlOGAreGAr1/hgJLhgK4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXM6ICfhgJDhgJThgIThgLrhgLnhgILhgJThgL3hgLFf4YCQ4YCU4YCE4YC64YC54YCc4YCsX+GAoeGAhOGAuuGAueGAguGAq1/hgJfhgK/hgJLhgLnhgJPhgJ/hgLDhgLhf4YCA4YC84YCs4YCe4YCV4YCQ4YCx4YC4X+GAnuGAseGArOGAgOGAvOGArF/hgIXhgJThgLEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydDogJ+GAlOGAveGAsV/hgJzhgKxf4YCC4YCrX+GAn+GAsOGAuF/hgIDhgLzhgKxf4YCe4YCx4YCsX+GAlOGAsScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbjogJ+GAlOGAveGAsV/hgJzhgKxf4YCC4YCrX+GAn+GAsOGAuF/hgIDhgLzhgKxf4YCe4YCx4YCsX+GAlOGAsScuc3BsaXQoJ18nKSxcblxuICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgICBzYW1lRGF5OiAnW+GAmuGAlOGAsS5dIExUIFvhgJnhgL7hgKxdJyxcbiAgICAgICAgbmV4dERheTogJ1vhgJnhgJThgIDhgLrhgJbhgLzhgJThgLpdIExUIFvhgJnhgL7hgKxdJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIExUIFvhgJnhgL7hgKxdJyxcbiAgICAgICAgbGFzdERheTogJ1vhgJnhgJThgLEu4YCAXSBMVCBb4YCZ4YC+4YCsXScsXG4gICAgICAgIGxhc3RXZWVrOiAnW+GAleGAvOGAruGAuOGAgeGAsuGAt+GAnuGAseGArF0gZGRkZCBMVCBb4YCZ4YC+4YCsXScsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICBmdXR1cmU6ICfhgJzhgKzhgJnhgIrhgLrhgLcgJXMg4YCZ4YC+4YCsJyxcbiAgICAgICAgcGFzdDogJ+GAnOGAveGAlOGAuuGAgeGAsuGAt+GAnuGAseGArCAlcyDhgIAnLFxuICAgICAgICBzOiAn4YCF4YCA4YC54YCA4YCU4YC6LuGAoeGAlOGAiuGAuuGAuOGAhOGAmuGAuicsXG4gICAgICAgIG06ICfhgJDhgIXhgLrhgJnhgK3hgJThgIXhgLonLFxuICAgICAgICBtbTogJyVkIOGAmeGAreGAlOGAheGAuicsXG4gICAgICAgIGg6ICfhgJDhgIXhgLrhgJThgKzhgJvhgK4nLFxuICAgICAgICBoaDogJyVkIOGAlOGArOGAm+GAricsXG4gICAgICAgIGQ6ICfhgJDhgIXhgLrhgJvhgIDhgLonLFxuICAgICAgICBkZDogJyVkIOGAm+GAgOGAuicsXG4gICAgICAgIE06ICfhgJDhgIXhgLrhgJwnLFxuICAgICAgICBNTTogJyVkIOGAnCcsXG4gICAgICAgIHk6ICfhgJDhgIXhgLrhgJThgL7hgIXhgLonLFxuICAgICAgICB5eTogJyVkIOGAlOGAvuGAheGAuidcbiAgICB9LFxuICAgIHByZXBhcnNlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW+GBgeGBguGBg+GBhOGBheGBhuGBh+GBiOGBieGBgF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgd2Vlazoge1xuICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3k6IDQgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbXk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9teS5qc1xuLy8gbW9kdWxlIGlkID0gNzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNDUiXSwic291cmNlUm9vdCI6IiJ9