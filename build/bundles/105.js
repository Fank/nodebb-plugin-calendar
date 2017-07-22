webpackJsonp([105],{

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '༡',
    '2': '༢',
    '3': '༣',
    '4': '༤',
    '5': '༥',
    '6': '༦',
    '7': '༧',
    '8': '༨',
    '9': '༩',
    '0': '༠'
};
var numberMap = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0'
};

var bo = moment.defineLocale('bo', {
    months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[དི་རིང] LT',
        nextDay : '[སང་ཉིན] LT',
        nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
        lastDay : '[ཁ་སང] LT',
        lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ལ་',
        past : '%s སྔན་ལ',
        s : 'ལམ་སང',
        m : 'སྐར་མ་གཅིག',
        mm : '%d སྐར་མ',
        h : 'ཆུ་ཚོད་གཅིག',
        hh : '%d ཆུ་ཚོད',
        d : 'ཉིན་གཅིག',
        dd : '%d ཉིན་',
        M : 'ཟླ་བ་གཅིག',
        MM : '%d ཟླ་བ',
        y : 'ལོ་གཅིག',
        yy : '%d ལོ'
    },
    preparse: function (string) {
        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                (meridiem === 'ཉིན་གུང' && hour < 5) ||
                meridiem === 'དགོང་དག') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'མཚན་མོ';
        } else if (hour < 10) {
            return 'ཞོགས་ཀས';
        } else if (hour < 17) {
            return 'ཉིན་གུང';
        } else if (hour < 20) {
            return 'དགོང་དག';
        } else {
            return 'མཚན་མོ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return bo;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFRpYmV0YW4gW2JvXVxuLy8hIGF1dGhvciA6IFRodXB0ZW4gTi4gQ2hha3Jpc2hhciA6IGh0dHBzOi8vZ2l0aHViLmNvbS92YWpyYWRvZ1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBzeW1ib2xNYXAgPSB7XG4gICAgJzEnOiAn4LyhJyxcbiAgICAnMic6ICfgvKInLFxuICAgICczJzogJ+C8oycsXG4gICAgJzQnOiAn4LykJyxcbiAgICAnNSc6ICfgvKUnLFxuICAgICc2JzogJ+C8picsXG4gICAgJzcnOiAn4LynJyxcbiAgICAnOCc6ICfgvKgnLFxuICAgICc5JzogJ+C8qScsXG4gICAgJzAnOiAn4LygJ1xufTtcbnZhciBudW1iZXJNYXAgPSB7XG4gICAgJ+C8oSc6ICcxJyxcbiAgICAn4LyiJzogJzInLFxuICAgICfgvKMnOiAnMycsXG4gICAgJ+C8pCc6ICc0JyxcbiAgICAn4LylJzogJzUnLFxuICAgICfgvKYnOiAnNicsXG4gICAgJ+C8pyc6ICc3JyxcbiAgICAn4LyoJzogJzgnLFxuICAgICfgvKknOiAnOScsXG4gICAgJ+C8oCc6ICcwJ1xufTtcblxudmFyIGJvID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYm8nLCB7XG4gICAgbW9udGhzIDogJ+C9n+C+s+C8i+C9luC8i+C9keC9hOC8i+C9lOC9vF/gvZ/gvrPgvIvgvZbgvIvgvYLgvYngvbLgvabgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2C4L2m4L204L2Y4LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9nuC9suC8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvaPgvpTgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2R4L6y4L204L2C4LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9keC9tOC9k+C8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvZbgvaLgvpLgvrHgvZHgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2R4L2C4L204LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9heC9tOC8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvZbgvYXgvbTgvIvgvYLgvYXgvbLgvYLgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2W4L2F4L204LyL4L2C4L2J4L2y4L2m4LyL4L2UJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ+C9n+C+s+C8i+C9luC8i+C9keC9hOC8i+C9lOC9vF/gvZ/gvrPgvIvgvZbgvIvgvYLgvYngvbLgvabgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2C4L2m4L204L2Y4LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9nuC9suC8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvaPgvpTgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2R4L6y4L204L2C4LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9keC9tOC9k+C8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvZbgvaLgvpLgvrHgvZHgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2R4L2C4L204LyL4L2UX+C9n+C+s+C8i+C9luC8i+C9luC9heC9tOC8i+C9lF/gvZ/gvrPgvIvgvZbgvIvgvZbgvYXgvbTgvIvgvYLgvYXgvbLgvYLgvIvgvZRf4L2f4L6z4LyL4L2W4LyL4L2W4L2F4L204LyL4L2C4L2J4L2y4L2m4LyL4L2UJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ+C9guC9n+C9oOC8i+C9ieC9suC8i+C9mOC8i1/gvYLgvZ/gvaDgvIvgvZ/gvrPgvIvgvZbgvItf4L2C4L2f4L2g4LyL4L2Y4L2y4L2C4LyL4L2R4L2Y4L2i4LyLX+C9guC9n+C9oOC8i+C9o+C+t+C9guC8i+C9lOC8i1/gvYLgvZ/gvaDgvIvgvZXgvbTgvaLgvIvgvZbgvbRf4L2C4L2f4L2g4LyL4L2U4LyL4L2m4L2E4L2m4LyLX+C9guC9n+C9oOC8i+C9puC+pOC9uuC9k+C8i+C9lOC8iycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ+C9ieC9suC8i+C9mOC8i1/gvZ/gvrPgvIvgvZbgvItf4L2Y4L2y4L2C4LyL4L2R4L2Y4L2i4LyLX+C9o+C+t+C9guC8i+C9lOC8i1/gvZXgvbTgvaLgvIvgvZbgvbRf4L2U4LyL4L2m4L2E4L2m4LyLX+C9puC+pOC9uuC9k+C8i+C9lOC8iycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfgvYngvbLgvIvgvZjgvItf4L2f4L6z4LyL4L2W4LyLX+C9mOC9suC9guC8i+C9keC9mOC9ouC8i1/gvaPgvrfgvYLgvIvgvZTgvItf4L2V4L204L2i4LyL4L2W4L20X+C9lOC8i+C9puC9hOC9puC8i1/gvabgvqTgvbrgvZPgvIvgvZTgvIsnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0EgaDptbScsXG4gICAgICAgIExUUyA6ICdBIGg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSwgQSBoOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+C9keC9suC8i+C9ouC9suC9hF0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vgvabgvYTgvIvgvYngvbLgvZNdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW+C9luC9keC9tOC9k+C8i+C9leC+suC9guC8i+C9ouC+l+C9uuC9puC8i+C9mF0sIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdb4L2B4LyL4L2m4L2EXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vgvZbgvZHgvbTgvZPgvIvgvZXgvrLgvYLgvIvgvZjgvZDgvaDgvIvgvZhdIGRkZGQsIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIOC9o+C8iycsXG4gICAgICAgIHBhc3QgOiAnJXMg4L2m4L6U4L2T4LyL4L2jJyxcbiAgICAgICAgcyA6ICfgvaPgvZjgvIvgvabgvYQnLFxuICAgICAgICBtIDogJ+C9puC+kOC9ouC8i+C9mOC8i+C9guC9heC9suC9gicsXG4gICAgICAgIG1tIDogJyVkIOC9puC+kOC9ouC8i+C9mCcsXG4gICAgICAgIGggOiAn4L2G4L204LyL4L2a4L284L2R4LyL4L2C4L2F4L2y4L2CJyxcbiAgICAgICAgaGggOiAnJWQg4L2G4L204LyL4L2a4L284L2RJyxcbiAgICAgICAgZCA6ICfgvYngvbLgvZPgvIvgvYLgvYXgvbLgvYInLFxuICAgICAgICBkZCA6ICclZCDgvYngvbLgvZPgvIsnLFxuICAgICAgICBNIDogJ+C9n+C+s+C8i+C9luC8i+C9guC9heC9suC9gicsXG4gICAgICAgIE1NIDogJyVkIOC9n+C+s+C8i+C9licsXG4gICAgICAgIHkgOiAn4L2j4L284LyL4L2C4L2F4L2y4L2CJyxcbiAgICAgICAgeXkgOiAnJWQg4L2j4L28J1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b4Lyh4Lyi4Lyj4Lyk4Lyl4Lym4Lyn4Lyo4Lyp4LygXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv4L2Y4L2a4L2T4LyL4L2Y4L28fOC9nuC9vOC9guC9puC8i+C9gOC9pnzgvYngvbLgvZPgvIvgvYLgvbTgvYR84L2R4L2C4L284L2E4LyL4L2R4L2CfOC9mOC9muC9k+C8i+C9mOC9vC8sXG4gICAgbWVyaWRpZW1Ib3VyIDogZnVuY3Rpb24gKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChtZXJpZGllbSA9PT0gJ+C9mOC9muC9k+C8i+C9mOC9vCcgJiYgaG91ciA+PSA0KSB8fFxuICAgICAgICAgICAgICAgIChtZXJpZGllbSA9PT0gJ+C9ieC9suC9k+C8i+C9guC9tOC9hCcgJiYgaG91ciA8IDUpIHx8XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPT09ICfgvZHgvYLgvbzgvYTgvIvgvZHgvYInKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAn4L2Y4L2a4L2T4LyL4L2Y4L28JztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiAn4L2e4L284L2C4L2m4LyL4L2A4L2mJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgICAgICAgIHJldHVybiAn4L2J4L2y4L2T4LyL4L2C4L204L2EJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybiAn4L2R4L2C4L284L2E4LyL4L2R4L2CJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn4L2Y4L2a4L2T4LyL4L2Y4L28JztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGJvO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvYm8uanNcbi8vIG1vZHVsZSBpZCA9IDY3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwNSJdLCJzb3VyY2VSb290IjoiIn0=