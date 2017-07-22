webpackJsonp([94],{

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލު',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު'
];
var weekdays = [
    'އާދިއްތަ',
    'ހޯމަ',
    'އަންގާރަ',
    'ބުދަ',
    'ބުރާސްފަތި',
    'ހުކުރު',
    'ހޮނިހިރު'
];

var dv = moment.defineLocale('dv', {
    months : months,
    monthsShort : months,
    weekdays : weekdays,
    weekdaysShort : weekdays,
    weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat : {

        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/M/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /މކ|މފ/,
    isPM : function (input) {
        return 'މފ' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'މކ';
        } else {
            return 'މފ';
        }
    },
    calendar : {
        sameDay : '[މިއަދު] LT',
        nextDay : '[މާދަމާ] LT',
        nextWeek : 'dddd LT',
        lastDay : '[އިއްޔެ] LT',
        lastWeek : '[ފާއިތުވި] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ތެރޭގައި %s',
        past : 'ކުރިން %s',
        s : 'ސިކުންތުކޮޅެއް',
        m : 'މިނިޓެއް',
        mm : 'މިނިޓު %d',
        h : 'ގަޑިއިރެއް',
        hh : 'ގަޑިއިރު %d',
        d : 'ދުވަހެއް',
        dd : 'ދުވަސް %d',
        M : 'މަހެއް',
        MM : 'މަސް %d',
        y : 'އަހަރެއް',
        yy : 'އަހަރު %d'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 7,  // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return dv;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZHYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTWFsZGl2aWFuIFtkdl1cbi8vISBhdXRob3IgOiBKYXdpc2ggSGFtZWVkIDogaHR0cHM6Ly9naXRodWIuY29tL2phd2lzaFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBtb250aHMgPSBbXG4gICAgJ96W3qzegt6q3ofept6D3qknLFxuICAgICfeit6s3oTesN6D3qreh96m3oPeqScsXG4gICAgJ96J3qfeg96o3pfeqicsXG4gICAgJ96H3q3eld6w3oPeqd6N3qonLFxuICAgICfeid6tJyxcbiAgICAn3pbeq96C3rAnLFxuICAgICfelt6q3o3ept6H3qgnLFxuICAgICfeh96v3o7ept6Q3rDek96qJyxcbiAgICAn3pDerN6V3rDek96s3onesN6E3qbeg96qJyxcbiAgICAn3ofert6G3rDek96v3oTept6D3qonLFxuICAgICfegt6u3ojerN6J3rDehN6m3oPeqicsXG4gICAgJ96R3qjekN6s3onesN6E3qbeg96qJ1xuXTtcbnZhciB3ZWVrZGF5cyA9IFtcbiAgICAn3ofep96L3qjeh96w3ozepicsXG4gICAgJ96A3q/eid6mJyxcbiAgICAn3ofept6C3rDejt6n3oPepicsXG4gICAgJ96E3qrei96mJyxcbiAgICAn3oTeqt6D3qfekN6w3orept6M3qgnLFxuICAgICfegN6q3obeqt6D3qonLFxuICAgICfegN6u3oLeqN6A3qjeg96qJ1xuXTtcblxudmFyIGR2ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZHYnLCB7XG4gICAgbW9udGhzIDogbW9udGhzLFxuICAgIG1vbnRoc1Nob3J0IDogbW9udGhzLFxuICAgIHdlZWtkYXlzIDogd2Vla2RheXMsXG4gICAgd2Vla2RheXNTaG9ydCA6IHdlZWtkYXlzLFxuICAgIHdlZWtkYXlzTWluIDogJ96H3qfei96oX96A3q/eid6mX96H3qbegt6wX96E3qrei96mX96E3qreg96nX96A3qreht6qX96A3q7egt6oJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuXG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdEL00vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL96J3oZ83oneii8sXG4gICAgaXNQTSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gJ96J3oonID09PSBpbnB1dDtcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ96J3oYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICfeid6KJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW96J3qjeh96m3oveql0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1veid6n3ovept6J3qddIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW96H3qjeh96w3pTerF0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb3orep96H3qjejN6q3ojeqF0gZGRkZCBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICfejN6s3oPerd6O3qbeh96oICVzJyxcbiAgICAgICAgcGFzdCA6ICfeht6q3oPeqN6C3rAgJXMnLFxuICAgICAgICBzIDogJ96Q3qjeht6q3oLesN6M3qreht6u3oXerN6H3rAnLFxuICAgICAgICBtIDogJ96J3qjegt6o3pPerN6H3rAnLFxuICAgICAgICBtbSA6ICfeid6o3oLeqN6T3qogJWQnLFxuICAgICAgICBoIDogJ96O3qbekd6o3ofeqN6D3qzeh96wJyxcbiAgICAgICAgaGggOiAn3o7ept6R3qjeh96o3oPeqiAlZCcsXG4gICAgICAgIGQgOiAn3oveqt6I3qbegN6s3ofesCcsXG4gICAgICAgIGRkIDogJ96L3qreiN6m3pDesCAlZCcsXG4gICAgICAgIE0gOiAn3onept6A3qzeh96wJyxcbiAgICAgICAgTU0gOiAn3onept6Q3rAgJWQnLFxuICAgICAgICB5IDogJ96H3qbegN6m3oPerN6H3rAnLFxuICAgICAgICB5eSA6ICfeh96m3oDept6D3qogJWQnXG4gICAgfSxcbiAgICBwcmVwYXJzZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL9iML2csICcsJyk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvLC9nLCAn2IwnKTtcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDcsICAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogMTIgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGR2O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZHYuanNcbi8vIG1vZHVsZSBpZCA9IDY4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDk0Il0sInNvdXJjZVJvb3QiOiIifQ==