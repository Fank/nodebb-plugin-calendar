webpackJsonp([68],{

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var hyAm = moment.defineLocale('hy-am', {
    months : {
        format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
        standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
    },
    monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
    weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
    weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY թ.',
        LLL : 'D MMMM YYYY թ., HH:mm',
        LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
    },
    calendar : {
        sameDay: '[այսօր] LT',
        nextDay: '[վաղը] LT',
        lastDay: '[երեկ] LT',
        nextWeek: function () {
            return 'dddd [օրը ժամը] LT';
        },
        lastWeek: function () {
            return '[անցած] dddd [օրը ժամը] LT';
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s հետո',
        past : '%s առաջ',
        s : 'մի քանի վայրկյան',
        m : 'րոպե',
        mm : '%d րոպե',
        h : 'ժամ',
        hh : '%d ժամ',
        d : 'օր',
        dd : '%d օր',
        M : 'ամիս',
        MM : '%d ամիս',
        y : 'տարի',
        yy : '%d տարի'
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function (input) {
        return /^(ցերեկվա|երեկոյան)$/.test(input);
    },
    meridiem : function (hour) {
        if (hour < 4) {
            return 'գիշերվա';
        } else if (hour < 12) {
            return 'առավոտվա';
        } else if (hour < 17) {
            return 'ցերեկվա';
        } else {
            return 'երեկոյան';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-ին';
                }
                return number + '-րդ';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return hyAm;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaHktYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJLElBQUksSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBcm1lbmlhbiBbaHktYW1dXG4vLyEgYXV0aG9yIDogQXJtZW5kYXJhYnlhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcm1lbmRhcmFieWFuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGh5QW0gPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdoeS1hbScsIHtcbiAgICBtb250aHMgOiB7XG4gICAgICAgIGZvcm1hdDogJ9Ww1bjWgtW21b7VodaA1atf1oPVpdW/1oDVvtWh1oDVq1/VtNWh1oDVv9WrX9Wh1brWgNWr1azVq1/VtNWh1bXVq9W91atf1bDVuNaC1bbVq9W91atf1bDVuNaC1azVq9W91atf1oXVo9W41b3Vv9W41b3Vq1/VvdWl1brVv9Wl1bTVotWl1oDVq1/VsNW41a/Vv9Wl1bTVotWl1oDVq1/VttW41bXVpdW01aLVpdaA1atf1aTVpdWv1b/VpdW01aLVpdaA1asnLnNwbGl0KCdfJyksXG4gICAgICAgIHN0YW5kYWxvbmU6ICfVsNW41oLVttW+1aHWgF/Wg9Wl1b/WgNW+1aHWgF/VtNWh1oDVv1/VodW61oDVq9WsX9W01aHVtdWr1b1f1bDVuNaC1bbVq9W9X9Ww1bjWgtWs1avVvV/WhdWj1bjVvdW/1bjVvV/VvdWl1brVv9Wl1bTVotWl1oBf1bDVuNWv1b/VpdW01aLVpdaAX9W21bjVtdWl1bTVotWl1oBf1aTVpdWv1b/VpdW01aLVpdaAJy5zcGxpdCgnXycpXG4gICAgfSxcbiAgICBtb250aHNTaG9ydCA6ICfVsNW21b5f1oPVv9aAX9W01oDVv1/VodW61oBf1bTVtdW9X9Ww1bbVvV/VsNWs1b1f1oXVo9W9X9W91brVv1/VsNWv1b9f1bbVtNWiX9Wk1a/Vvycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfVr9Wr1oDVodWv1atf1aXWgNWv1bjWgtW31aHVotWp1atf1aXWgNWl1oTVt9Wh1aLVqdWrX9W51bjWgNWl1oTVt9Wh1aLVqdWrX9Ww1avVttWj1bfVodWi1anVq1/VuNaC1oDVotWh1alf1bfVodWi1aHVqScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ9Wv1oDVr1/VpdaA1a9f1aXWgNaEX9W51oDWhF/VsNW21aNf1bjWgtaA1aJf1bfVotWpJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ9Wv1oDVr1/VpdaA1a9f1aXWgNaEX9W51oDWhF/VsNW21aNf1bjWgtaA1aJf1bfVotWpJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQuTU0uWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZINWpLicsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSDVqS4sIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSDVqS4sIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdb1aHVtdW91oXWgF0gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW9W+1aHVstWoXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdb1aXWgNWl1a9dIExUJyxcbiAgICAgICAgbmV4dFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGRkZCBb1oXWgNWoINWq1aHVtNWoXSBMVCc7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1vVodW21oHVodWuXSBkZGRkIFvWhdaA1agg1arVodW01ahdIExUJztcbiAgICAgICAgfSxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMg1bDVpdW/1bgnLFxuICAgICAgICBwYXN0IDogJyVzINWh1bzVodW7JyxcbiAgICAgICAgcyA6ICfVtNWrINaE1aHVttWrINW+1aHVtdaA1a/VtdWh1bYnLFxuICAgICAgICBtIDogJ9aA1bjVutWlJyxcbiAgICAgICAgbW0gOiAnJWQg1oDVuNW61aUnLFxuICAgICAgICBoIDogJ9Wq1aHVtCcsXG4gICAgICAgIGhoIDogJyVkINWq1aHVtCcsXG4gICAgICAgIGQgOiAn1oXWgCcsXG4gICAgICAgIGRkIDogJyVkINaF1oAnLFxuICAgICAgICBNIDogJ9Wh1bTVq9W9JyxcbiAgICAgICAgTU0gOiAnJWQg1aHVtNWr1b0nLFxuICAgICAgICB5IDogJ9W/1aHWgNWrJyxcbiAgICAgICAgeXkgOiAnJWQg1b/VodaA1asnXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv1aPVq9W31aXWgNW+1aF81aHVvNWh1b7VuNW/1b7VoXzWgdWl1oDVpdWv1b7VoXzVpdaA1aXVr9W41bXVodW2LyxcbiAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIC9eKNaB1aXWgNWl1a/VvtWhfNWl1oDVpdWv1bjVtdWh1bYpJC8udGVzdChpbnB1dCk7XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgICAgICAgcmV0dXJuICfVo9Wr1bfVpdaA1b7VoSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9Wh1bzVodW+1bjVv9W+1aEnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgICAgICAgcmV0dXJuICfWgdWl1oDVpdWv1b7VoSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ9Wl1oDVpdWv1bjVtdWh1bYnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn18XFxkezEsMn0tKNWr1bZ81oDVpCkvLFxuICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIsIHBlcmlvZCkge1xuICAgICAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICBjYXNlICdERERvJzpcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdWr1bYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3WgNWkJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGh5QW07XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9oeS1hbS5qc1xuLy8gbW9kdWxlIGlkID0gNzA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNjgiXSwic291cmNlUm9vdCI6IiJ9