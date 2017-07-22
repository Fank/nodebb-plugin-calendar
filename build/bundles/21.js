webpackJsonp([21],{

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var te = moment.defineLocale('te', {
    months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[నేడు] LT',
        nextDay : '[రేపు] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[నిన్న] LT',
        lastWeek : '[గత] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s లో',
        past : '%s క్రితం',
        s : 'కొన్ని క్షణాలు',
        m : 'ఒక నిమిషం',
        mm : '%d నిమిషాలు',
        h : 'ఒక గంట',
        hh : '%d గంటలు',
        d : 'ఒక రోజు',
        dd : '%d రోజులు',
        M : 'ఒక నెల',
        MM : '%d నెలలు',
        y : 'ఒక సంవత్సరం',
        yy : '%d సంవత్సరాలు'
    },
    dayOfMonthOrdinalParse : /\d{1,2}వ/,
    ordinal : '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'రాత్రి') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ఉదయం') {
            return hour;
        } else if (meridiem === 'మధ్యాహ్నం') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'సాయంత్రం') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'రాత్రి';
        } else if (hour < 10) {
            return 'ఉదయం';
        } else if (hour < 17) {
            return 'మధ్యాహ్నం';
        } else if (hour < 20) {
            return 'సాయంత్రం';
        } else {
            return 'రాత్రి';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return te;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDLElBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFRlbHVndSBbdGVdXG4vLyEgYXV0aG9yIDogS3Jpc2huYSBDaGFpdGFueWEgVGhvdGEgOiBodHRwczovL2dpdGh1Yi5jb20va2N0aG90YVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB0ZSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3RlJywge1xuICAgIG1vbnRocyA6ICfgsJzgsKjgsLXgsLDgsL9f4LCr4LC/4LCs4LGN4LCw4LC14LCw4LC/X+CwruCwvuCwsOCxjeCwmuCwv1/gsI/gsKrgsY3gsLDgsL/gsLLgsY1f4LCu4LGHX+CwnOCxguCwqOCxjV/gsJzgsYLgsLLgsYbgsZZf4LCG4LCX4LC44LGN4LCf4LGBX+CwuOCxhuCwquCxjeCwn+CxhuCwguCwrOCwsOCxjV/gsIXgsJXgsY3gsJ/gsYvgsKzgsLDgsY1f4LCo4LC14LCC4LCs4LCw4LGNX+CwoeCwv+CwuOCxhuCwguCwrOCwsOCxjScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfgsJzgsKguX+Cwq+Cwv+CwrOCxjeCwsC5f4LCu4LC+4LCw4LGN4LCa4LC/X+Cwj+CwquCxjeCwsOCwvy5f4LCu4LGHX+CwnOCxguCwqOCxjV/gsJzgsYLgsLLgsYbgsZZf4LCG4LCXLl/gsLjgsYbgsKrgsY0uX+CwheCwleCxjeCwn+Cxiy5f4LCo4LC1Ll/gsKHgsL/gsLjgsYYuJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ+CwhuCwpuCwv+CwteCwvuCwsOCwgl/gsLjgsYvgsK7gsLXgsL7gsLDgsIJf4LCu4LCC4LCX4LCz4LC14LC+4LCw4LCCX+CwrOCxgeCwp+CwteCwvuCwsOCwgl/gsJfgsYHgsLDgsYHgsLXgsL7gsLDgsIJf4LC24LGB4LCV4LGN4LCw4LC14LC+4LCw4LCCX+CwtuCwqOCwv+CwteCwvuCwsOCwgicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ+CwhuCwpuCwv1/gsLjgsYvgsK5f4LCu4LCC4LCX4LCzX+CwrOCxgeCwp1/gsJfgsYHgsLDgsYFf4LC24LGB4LCV4LGN4LCwX+CwtuCwqOCwvycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICfgsIZf4LC44LGLX+CwruCwgl/gsKzgsYFf4LCX4LGBX+CwtuCxgV/gsLYnLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0EgaDptbScsXG4gICAgICAgIExUUyA6ICdBIGg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSwgQSBoOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+CwqOCxh+CwoeCxgV0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vgsLDgsYfgsKrgsYFdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCwgTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vgsKjgsL/gsKjgsY3gsKhdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW+Cwl+CwpF0gZGRkZCwgTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMg4LCy4LGLJyxcbiAgICAgICAgcGFzdCA6ICclcyDgsJXgsY3gsLDgsL/gsKTgsIInLFxuICAgICAgICBzIDogJ+CwleCxiuCwqOCxjeCwqOCwvyDgsJXgsY3gsLfgsKPgsL7gsLLgsYEnLFxuICAgICAgICBtIDogJ+CwkuCwlSDgsKjgsL/gsK7gsL/gsLfgsIInLFxuICAgICAgICBtbSA6ICclZCDgsKjgsL/gsK7gsL/gsLfgsL7gsLLgsYEnLFxuICAgICAgICBoIDogJ+CwkuCwlSDgsJfgsILgsJ8nLFxuICAgICAgICBoaCA6ICclZCDgsJfgsILgsJ/gsLLgsYEnLFxuICAgICAgICBkIDogJ+CwkuCwlSDgsLDgsYvgsJzgsYEnLFxuICAgICAgICBkZCA6ICclZCDgsLDgsYvgsJzgsYHgsLLgsYEnLFxuICAgICAgICBNIDogJ+CwkuCwlSDgsKjgsYbgsLInLFxuICAgICAgICBNTSA6ICclZCDgsKjgsYbgsLLgsLLgsYEnLFxuICAgICAgICB5IDogJ+CwkuCwlSDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsIInLFxuICAgICAgICB5eSA6ICclZCDgsLjgsILgsLXgsKTgsY3gsLjgsLDgsL7gsLLgsYEnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ94LC1LyxcbiAgICBvcmRpbmFsIDogJyVk4LC1JyxcbiAgICBtZXJpZGllbVBhcnNlOiAv4LCw4LC+4LCk4LGN4LCw4LC/fOCwieCwpuCwr+CwgnzgsK7gsKfgsY3gsK/gsL7gsLngsY3gsKjgsIJ84LC44LC+4LCv4LCC4LCk4LGN4LCw4LCCLyxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICfgsLDgsL7gsKTgsY3gsLDgsL8nKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA8IDQgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4LCJ4LCm4LCv4LCCJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsK7gsKfgsY3gsK/gsL7gsLngsY3gsKjgsIInKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsLjgsL7gsK/gsILgsKTgsY3gsLDgsIInKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CwsOCwvuCwpOCxjeCwsOCwvyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CwieCwpuCwr+Cwgic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CwruCwp+CxjeCwr+CwvuCwueCxjeCwqOCwgic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CwuOCwvuCwr+CwguCwpOCxjeCwsOCwgic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CwsOCwvuCwpOCxjeCwsOCwvyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB0ZTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3RlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSJdLCJzb3VyY2VSb290IjoiIn0=