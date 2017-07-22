webpackJsonp([22],{

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '௧',
    '2': '௨',
    '3': '௩',
    '4': '௪',
    '5': '௫',
    '6': '௬',
    '7': '௭',
    '8': '௮',
    '9': '௯',
    '0': '௦'
};
var numberMap = {
    '௧': '1',
    '௨': '2',
    '௩': '3',
    '௪': '4',
    '௫': '5',
    '௬': '6',
    '௭': '7',
    '௮': '8',
    '௯': '9',
    '௦': '0'
};

var ta = moment.defineLocale('ta', {
    months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, HH:mm',
        LLLL : 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar : {
        sameDay : '[இன்று] LT',
        nextDay : '[நாளை] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[நேற்று] LT',
        lastWeek : '[கடந்த வாரம்] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s இல்',
        past : '%s முன்',
        s : 'ஒரு சில விநாடிகள்',
        m : 'ஒரு நிமிடம்',
        mm : '%d நிமிடங்கள்',
        h : 'ஒரு மணி நேரம்',
        hh : '%d மணி நேரம்',
        d : 'ஒரு நாள்',
        dd : '%d நாட்கள்',
        M : 'ஒரு மாதம்',
        MM : '%d மாதங்கள்',
        y : 'ஒரு வருடம்',
        yy : '%d ஆண்டுகள்'
    },
    dayOfMonthOrdinalParse: /\d{1,2}வது/,
    ordinal : function (number) {
        return number + 'வது';
    },
    preparse: function (string) {
        return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem : function (hour, minute, isLower) {
        if (hour < 2) {
            return ' யாமம்';
        } else if (hour < 6) {
            return ' வைகறை';  // வைகறை
        } else if (hour < 10) {
            return ' காலை'; // காலை
        } else if (hour < 14) {
            return ' நண்பகல்'; // நண்பகல்
        } else if (hour < 18) {
            return ' எற்பாடு'; // எற்பாடு
        } else if (hour < 22) {
            return ' மாலை'; // மாலை
        } else {
            return ' யாமம்';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'யாமம்') {
            return hour < 2 ? hour : hour + 12;
        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
            return hour;
        } else if (meridiem === 'நண்பகல்') {
            return hour >= 10 ? hour : hour + 12;
        } else {
            return hour + 12;
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return ta;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixTQUFTO0FBQ1QsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCw4QkFBOEI7QUFDOUIsU0FBUztBQUNULDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFRhbWlsIFt0YV1cbi8vISBhdXRob3IgOiBBcmp1bmt1bWFyIEtyaXNobmFtb29ydGh5IDogaHR0cHM6Ly9naXRodWIuY29tL3RrMTIwNDA0XG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHN5bWJvbE1hcCA9IHtcbiAgICAnMSc6ICfgr6cnLFxuICAgICcyJzogJ+CvqCcsXG4gICAgJzMnOiAn4K+pJyxcbiAgICAnNCc6ICfgr6onLFxuICAgICc1JzogJ+CvqycsXG4gICAgJzYnOiAn4K+sJyxcbiAgICAnNyc6ICfgr60nLFxuICAgICc4JzogJ+CvricsXG4gICAgJzknOiAn4K+vJyxcbiAgICAnMCc6ICfgr6YnXG59O1xudmFyIG51bWJlck1hcCA9IHtcbiAgICAn4K+nJzogJzEnLFxuICAgICfgr6gnOiAnMicsXG4gICAgJ+CvqSc6ICczJyxcbiAgICAn4K+qJzogJzQnLFxuICAgICfgr6snOiAnNScsXG4gICAgJ+CvrCc6ICc2JyxcbiAgICAn4K+tJzogJzcnLFxuICAgICfgr64nOiAnOCcsXG4gICAgJ+Cvryc6ICc5JyxcbiAgICAn4K+mJzogJzAnXG59O1xuXG52YXIgdGEgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd0YScsIHtcbiAgICBtb250aHMgOiAn4K6c4K6p4K614K6w4K6/X+CuquCuv+CuquCvjeCusOCuteCusOCuv1/grq7grr7grrDgr43grprgr41f4K6P4K6q4K+N4K6w4K6y4K+NX+CuruCvh1/grpzgr4Lgrqngr41f4K6c4K+C4K6y4K+IX+CuhuCuleCuuOCvjeCun+CvjV/grprgr4bgrqrgr43grp/gr4bgrq7gr43grqrgrrDgr41f4K6F4K6V4K+N4K6f4K+H4K6+4K6q4K6w4K+NX+CuqOCuteCuruCvjeCuquCusOCvjV/grp/grr/grprgrq7gr43grqrgrrDgr40nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn4K6c4K6p4K614K6w4K6/X+CuquCuv+CuquCvjeCusOCuteCusOCuv1/grq7grr7grrDgr43grprgr41f4K6P4K6q4K+N4K6w4K6y4K+NX+CuruCvh1/grpzgr4Lgrqngr41f4K6c4K+C4K6y4K+IX+CuhuCuleCuuOCvjeCun+CvjV/grprgr4bgrqrgr43grp/gr4bgrq7gr43grqrgrrDgr41f4K6F4K6V4K+N4K6f4K+H4K6+4K6q4K6w4K+NX+CuqOCuteCuruCvjeCuquCusOCvjV/grp/grr/grprgrq7gr43grqrgrrDgr40nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn4K6e4K6+4K6v4K6/4K6x4K+N4K6x4K+B4K6V4K+N4K6V4K6/4K604K6u4K+IX+CupOCuv+CumeCvjeCuleCun+CvjeCuleCuv+CutOCuruCviF/grprgr4bgrrXgr43grrXgrr7grq/gr43grpXgrr/grrTgrq7gr4hf4K6q4K+B4K6k4K6p4K+N4K6V4K6/4K604K6u4K+IX+CuteCuv+Cur+CuvuCutOCuleCvjeCuleCuv+CutOCuruCviF/grrXgr4bgrrPgr43grrPgrr/grpXgr43grpXgrr/grrTgrq7gr4hf4K6a4K6p4K6/4K6V4K+N4K6V4K6/4K604K6u4K+IJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn4K6e4K6+4K6v4K6/4K6x4K+BX+CupOCuv+CumeCvjeCuleCus+CvjV/grprgr4bgrrXgr43grrXgrr7grq/gr41f4K6q4K+B4K6k4K6p4K+NX+CuteCuv+Cur+CuvuCutOCuqeCvjV/grrXgr4bgrrPgr43grrPgrr9f4K6a4K6p4K6/Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+CunuCuvl/grqTgrr9f4K6a4K+GX+CuquCvgV/grrXgrr9f4K614K+GX+Cumicuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSwgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vgrofgrqngr43grrHgr4FdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb4K6o4K6+4K6z4K+IXSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQsIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdb4K6o4K+H4K6x4K+N4K6x4K+BXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vgrpXgrp/grqjgr43grqQg4K614K6+4K6w4K6u4K+NXSBkZGRkLCBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcyDgrofgrrLgr40nLFxuICAgICAgICBwYXN0IDogJyVzIOCuruCvgeCuqeCvjScsXG4gICAgICAgIHMgOiAn4K6S4K6w4K+BIOCumuCuv+CusiDgrrXgrr/grqjgrr7grp/grr/grpXgrrPgr40nLFxuICAgICAgICBtIDogJ+CukuCusOCvgSDgrqjgrr/grq7grr/grp/grq7gr40nLFxuICAgICAgICBtbSA6ICclZCDgrqjgrr/grq7grr/grp/grpngr43grpXgrrPgr40nLFxuICAgICAgICBoIDogJ+CukuCusOCvgSDgrq7grqPgrr8g4K6o4K+H4K6w4K6u4K+NJyxcbiAgICAgICAgaGggOiAnJWQg4K6u4K6j4K6/IOCuqOCvh+CusOCuruCvjScsXG4gICAgICAgIGQgOiAn4K6S4K6w4K+BIOCuqOCuvuCus+CvjScsXG4gICAgICAgIGRkIDogJyVkIOCuqOCuvuCun+CvjeCuleCus+CvjScsXG4gICAgICAgIE0gOiAn4K6S4K6w4K+BIOCuruCuvuCupOCuruCvjScsXG4gICAgICAgIE1NIDogJyVkIOCuruCuvuCupOCumeCvjeCuleCus+CvjScsXG4gICAgICAgIHkgOiAn4K6S4K6w4K+BIOCuteCusOCvgeCun+CuruCvjScsXG4gICAgICAgIHl5IDogJyVkIOCuhuCuo+CvjeCun+CvgeCuleCus+CvjSdcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfeCuteCupOCvgS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciArICfgrrXgrqTgr4EnO1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b4K+n4K+o4K+p4K+q4K+r4K+s4K+t4K+u4K+v4K+mXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyByZWZlciBodHRwOi8vdGEud2lraXBlZGlhLm9yZy9zLzFlcjFcbiAgICBtZXJpZGllbVBhcnNlOiAv4K6v4K6+4K6u4K6u4K+NfOCuteCviOCuleCuseCviHzgrpXgrr7grrLgr4h84K6o4K6j4K+N4K6q4K6V4K6y4K+NfOCujuCuseCvjeCuquCuvuCun+CvgXzgrq7grr7grrLgr4gvLFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAnIOCur+CuvuCuruCuruCvjSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDYpIHtcbiAgICAgICAgICAgIHJldHVybiAnIOCuteCviOCuleCuseCviCc7ICAvLyDgrrXgr4jgrpXgrrHgr4hcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiAnIOCuleCuvuCusuCviCc7IC8vIOCuleCuvuCusuCviFxuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNCkge1xuICAgICAgICAgICAgcmV0dXJuICcg4K6o4K6j4K+N4K6q4K6V4K6y4K+NJzsgLy8g4K6o4K6j4K+N4K6q4K6V4K6y4K+NXG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE4KSB7XG4gICAgICAgICAgICByZXR1cm4gJyDgro7grrHgr43grqrgrr7grp/gr4EnOyAvLyDgro7grrHgr43grqrgrr7grp/gr4FcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgMjIpIHtcbiAgICAgICAgICAgIHJldHVybiAnIOCuruCuvuCusuCviCc7IC8vIOCuruCuvuCusuCviFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcg4K6v4K6+4K6u4K6u4K+NJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW1Ib3VyIDogZnVuY3Rpb24gKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmlkaWVtID09PSAn4K6v4K6+4K6u4K6u4K+NJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPCAyID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CuteCviOCuleCuseCviCcgfHwgbWVyaWRpZW0gPT09ICfgrpXgrr7grrLgr4gnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CuqOCuo+CvjeCuquCuleCusuCvjScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB0YTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3RhLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiJdLCJzb3VyY2VSb290IjoiIn0=