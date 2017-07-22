webpackJsonp([71],{

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

var hi = moment.defineLocale('hi', {
    months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat : {
        LT : 'A h:mm बजे',
        LTS : 'A h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[कल] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[कल] LT',
        lastWeek : '[पिछले] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s में',
        past : '%s पहले',
        s : 'कुछ ही क्षण',
        m : 'एक मिनट',
        mm : '%d मिनट',
        h : 'एक घंटा',
        hh : '%d घंटे',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महीने',
        MM : '%d महीने',
        y : 'एक वर्ष',
        yy : '%d वर्ष'
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सुबह') {
            return hour;
        } else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        } else if (hour < 10) {
            return 'सुबह';
        } else if (hour < 17) {
            return 'दोपहर';
        } else if (hour < 20) {
            return 'शाम';
        } else {
            return 'रात';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return hi;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIaW5kaSBbaGldXG4vLyEgYXV0aG9yIDogTWF5YW5rIFNpbmdoYWwgOiBodHRwczovL2dpdGh1Yi5jb20vbWF5YW5rc2luZ2hhbFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBzeW1ib2xNYXAgPSB7XG4gICAgJzEnOiAn4KWnJyxcbiAgICAnMic6ICfgpagnLFxuICAgICczJzogJ+ClqScsXG4gICAgJzQnOiAn4KWqJyxcbiAgICAnNSc6ICfgpasnLFxuICAgICc2JzogJ+ClrCcsXG4gICAgJzcnOiAn4KWtJyxcbiAgICAnOCc6ICfgpa4nLFxuICAgICc5JzogJ+ClrycsXG4gICAgJzAnOiAn4KWmJ1xufTtcbnZhciBudW1iZXJNYXAgPSB7XG4gICAgJ+Clpyc6ICcxJyxcbiAgICAn4KWoJzogJzInLFxuICAgICfgpaknOiAnMycsXG4gICAgJ+Clqic6ICc0JyxcbiAgICAn4KWrJzogJzUnLFxuICAgICfgpawnOiAnNicsXG4gICAgJ+ClrSc6ICc3JyxcbiAgICAn4KWuJzogJzgnLFxuICAgICfgpa8nOiAnOScsXG4gICAgJ+Clpic6ICcwJ1xufTtcblxudmFyIGhpID0gbW9tZW50LmRlZmluZUxvY2FsZSgnaGknLCB7XG4gICAgbW9udGhzIDogJ+CknOCkqOCkteCksOClgF/gpKvgpLzgpLDgpLXgpLDgpYBf4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCliOCksl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksuCkvuCkiF/gpIXgpJfgpLjgpY3gpKRf4KS44KS/4KSk4KSu4KWN4KSs4KSwX+CkheCkleCljeCkn+ClguCkrOCksF/gpKjgpLXgpK7gpY3gpKzgpLBf4KSm4KS/4KS44KSu4KWN4KSs4KSwJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ+CknOCkqC5f4KSr4KS84KSwLl/gpK7gpL7gpLDgpY3gpJpf4KSF4KSq4KWN4KSw4KWILl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksi5f4KSF4KSXLl/gpLjgpL/gpKQuX+CkheCkleCljeCkn+Clgi5f4KSo4KS1Ll/gpKbgpL/gpLguJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgd2Vla2RheXMgOiAn4KSw4KS14KS/4KS14KS+4KSwX+CkuOCli+CkruCkteCkvuCksF/gpK7gpILgpJfgpLLgpLXgpL7gpLBf4KSs4KWB4KSn4KS14KS+4KSwX+Ckl+ClgeCksOClguCkteCkvuCksF/gpLbgpYHgpJXgpY3gpLDgpLXgpL7gpLBf4KS24KSo4KS/4KS14KS+4KSwJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn4KSw4KS14KS/X+CkuOCli+Ckrl/gpK7gpILgpJfgpLJf4KSs4KWB4KSnX+Ckl+ClgeCksOClgl/gpLbgpYHgpJXgpY3gpLBf4KS24KSo4KS/Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+CksF/gpLjgpYtf4KSu4KSCX+CkrOClgV/gpJfgpYFf4KS24KWBX+Ckticuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnQSBoOm1tIOCkrOCknOClhycsXG4gICAgICAgIExUUyA6ICdBIGg6bW06c3Mg4KSs4KSc4KWHJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVksIEEgaDptbSDgpKzgpJzgpYcnLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0g4KSs4KSc4KWHJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+CkhuCknF0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vgpJXgpLJdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCwgTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vgpJXgpLJdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW+CkquCkv+Ckm+CksuClh10gZGRkZCwgTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMg4KSu4KWH4KSCJyxcbiAgICAgICAgcGFzdCA6ICclcyDgpKrgpLngpLLgpYcnLFxuICAgICAgICBzIDogJ+CkleClgeCkmyDgpLngpYAg4KSV4KWN4KS34KSjJyxcbiAgICAgICAgbSA6ICfgpI/gpJUg4KSu4KS/4KSo4KSfJyxcbiAgICAgICAgbW0gOiAnJWQg4KSu4KS/4KSo4KSfJyxcbiAgICAgICAgaCA6ICfgpI/gpJUg4KSY4KSC4KSf4KS+JyxcbiAgICAgICAgaGggOiAnJWQg4KSY4KSC4KSf4KWHJyxcbiAgICAgICAgZCA6ICfgpI/gpJUg4KSm4KS/4KSoJyxcbiAgICAgICAgZGQgOiAnJWQg4KSm4KS/4KSoJyxcbiAgICAgICAgTSA6ICfgpI/gpJUg4KSu4KS54KWA4KSo4KWHJyxcbiAgICAgICAgTU0gOiAnJWQg4KSu4KS54KWA4KSo4KWHJyxcbiAgICAgICAgeSA6ICfgpI/gpJUg4KS14KSw4KWN4KS3JyxcbiAgICAgICAgeXkgOiAnJWQg4KS14KSw4KWN4KS3J1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b4KWn4KWo4KWp4KWq4KWr4KWs4KWt4KWu4KWv4KWmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBIaW5kaSBub3RhdGlvbiBmb3IgbWVyaWRpZW1zIGFyZSBxdWl0ZSBmdXp6eSBpbiBwcmFjdGljZS4gV2hpbGUgdGhlcmUgZXhpc3RzXG4gICAgLy8gYSByaWdpZCBub3Rpb24gb2YgYSAnUGFoYXInIGl0IGlzIG5vdCB1c2VkIGFzIHJpZ2lkbHkgaW4gbW9kZXJuIEhpbmRpLlxuICAgIG1lcmlkaWVtUGFyc2U6IC/gpLDgpL7gpKR84KS44KWB4KSs4KS5fOCkpuCli+CkquCkueCksHzgpLbgpL7gpK4vLFxuICAgIG1lcmlkaWVtSG91ciA6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJpZGllbSA9PT0gJ+CksOCkvuCkpCcpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyIDwgNCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgpLjgpYHgpKzgpLknKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CkpuCli+CkquCkueCksCcpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CktuCkvuCkricpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAn4KSw4KS+4KSkJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiAn4KS44KWB4KSs4KS5JztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgICAgICAgIHJldHVybiAn4KSm4KWL4KSq4KS54KSwJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybiAn4KS24KS+4KSuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn4KSw4KS+4KSkJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGhpO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvaGkuanNcbi8vIG1vZHVsZSBpZCA9IDcwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDcxIl0sInNvdXJjZVJvb3QiOiIifQ==