webpackJsonp([43],{

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

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

var ne = moment.defineLocale('ne', {
    months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact : true,
    weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'Aको h:mm बजे',
        LTS : 'Aको h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, Aको h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
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
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'राति') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'बिहान') {
            return hour;
        } else if (meridiem === 'दिउँसो') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'साँझ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 3) {
            return 'राति';
        } else if (hour < 12) {
            return 'बिहान';
        } else if (hour < 16) {
            return 'दिउँसो';
        } else if (hour < 20) {
            return 'साँझ';
        } else {
            return 'राति';
        }
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[भोलि] LT',
        nextWeek : '[आउँदो] dddd[,] LT',
        lastDay : '[हिजो] LT',
        lastWeek : '[गएको] dddd[,] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sमा',
        past : '%s अगाडि',
        s : 'केही क्षण',
        m : 'एक मिनेट',
        mm : '%d मिनेट',
        h : 'एक घण्टा',
        hh : '%d घण्टा',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महिना',
        MM : '%d महिना',
        y : 'एक बर्ष',
        yy : '%d बर्ष'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return ne;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTmVwYWxlc2UgW25lXVxuLy8hIGF1dGhvciA6IHN1dmFzaCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdXZhc2hcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgc3ltYm9sTWFwID0ge1xuICAgICcxJzogJ+ClpycsXG4gICAgJzInOiAn4KWoJyxcbiAgICAnMyc6ICfgpaknLFxuICAgICc0JzogJ+ClqicsXG4gICAgJzUnOiAn4KWrJyxcbiAgICAnNic6ICfgpawnLFxuICAgICc3JzogJ+ClrScsXG4gICAgJzgnOiAn4KWuJyxcbiAgICAnOSc6ICfgpa8nLFxuICAgICcwJzogJ+Clpidcbn07XG52YXIgbnVtYmVyTWFwID0ge1xuICAgICfgpacnOiAnMScsXG4gICAgJ+ClqCc6ICcyJyxcbiAgICAn4KWpJzogJzMnLFxuICAgICfgpaonOiAnNCcsXG4gICAgJ+Clqyc6ICc1JyxcbiAgICAn4KWsJzogJzYnLFxuICAgICfgpa0nOiAnNycsXG4gICAgJ+Clric6ICc4JyxcbiAgICAn4KWvJzogJzknLFxuICAgICfgpaYnOiAnMCdcbn07XG5cbnZhciBuZSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ25lJywge1xuICAgIG1vbnRocyA6ICfgpJzgpKjgpLXgpLDgpYBf4KSr4KWH4KSs4KWN4KSw4KWB4KS14KSw4KWAX+CkruCkvuCksOCljeCkml/gpIXgpKrgpY3gpLDgpL/gpLJf4KSu4KSIX+CknOClgeCkqF/gpJzgpYHgpLLgpL7gpIhf4KSF4KSX4KS34KWN4KSfX+CkuOClh+CkquCljeCkn+Clh+CkruCljeCkrOCksF/gpIXgpJXgpY3gpJ/gpYvgpKzgpLBf4KSo4KWL4KSt4KWH4KSu4KWN4KSs4KSwX+CkoeCkv+CkuOClh+CkruCljeCkrOCksCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfgpJzgpKguX+Ckq+Clh+CkrOCljeCksOClgS5f4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCkvy5f4KSu4KSIX+CknOClgeCkqF/gpJzgpYHgpLLgpL7gpIguX+CkheCkly5f4KS44KWH4KSq4KWN4KSfLl/gpIXgpJXgpY3gpJ/gpYsuX+CkqOCli+CkreClhy5f4KSh4KS/4KS44KWHLicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICB3ZWVrZGF5cyA6ICfgpIbgpIfgpKTgpKzgpL7gpLBf4KS44KWL4KSu4KSs4KS+4KSwX+CkruCkmeCljeCkl+CksuCkrOCkvuCksF/gpKzgpYHgpKfgpKzgpL7gpLBf4KSs4KS/4KS54KS/4KSs4KS+4KSwX+CktuClgeCkleCljeCksOCkrOCkvuCksF/gpLbgpKjgpL/gpKzgpL7gpLAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfgpIbgpIfgpKQuX+CkuOCli+Ckri5f4KSu4KSZ4KWN4KSX4KSyLl/gpKzgpYHgpKcuX+CkrOCkv+CkueCkvy5f4KS24KWB4KSV4KWN4KSwLl/gpLbgpKjgpL8uJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+Ckhi5f4KS44KWLLl/gpK7gpIIuX+CkrOClgS5f4KSs4KS/Ll/gpLbgpYEuX+Ckti4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnQeCkleCliyBoOm1tIOCkrOCknOClhycsXG4gICAgICAgIExUUyA6ICdB4KSV4KWLIGg6bW06c3Mg4KSs4KSc4KWHJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVksIEHgpJXgpYsgaDptbSDgpKzgpJzgpYcnLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBB4KSV4KWLIGg6bW0g4KSs4KSc4KWHJ1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b4KWn4KWo4KWp4KWq4KWr4KWs4KWt4KWu4KWv4KWmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv4KSw4KS+4KSk4KS/fOCkrOCkv+CkueCkvuCkqHzgpKbgpL/gpIngpIHgpLjgpYt84KS44KS+4KSB4KSdLyxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICfgpLDgpL7gpKTgpL8nKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA8IDQgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4KSs4KS/4KS54KS+4KSoJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgpKbgpL/gpIngpIHgpLjgpYsnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgpLjgpL7gpIHgpJ0nKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CksOCkvuCkpOCkvyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CkrOCkv+CkueCkvuCkqCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE2KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CkpuCkv+CkieCkgeCkuOCliyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CkuOCkvuCkgeCknSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CksOCkvuCkpOCkvyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vgpIbgpJxdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb4KSt4KWL4KSy4KS/XSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ1vgpIbgpIngpIHgpKbgpYtdIGRkZGRbLF0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vgpLngpL/gpJzgpYtdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW+Ckl+Ckj+CkleCli10gZGRkZFssXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclc+CkruCkvicsXG4gICAgICAgIHBhc3QgOiAnJXMg4KSF4KSX4KS+4KSh4KS/JyxcbiAgICAgICAgcyA6ICfgpJXgpYfgpLngpYAg4KSV4KWN4KS34KSjJyxcbiAgICAgICAgbSA6ICfgpI/gpJUg4KSu4KS/4KSo4KWH4KSfJyxcbiAgICAgICAgbW0gOiAnJWQg4KSu4KS/4KSo4KWH4KSfJyxcbiAgICAgICAgaCA6ICfgpI/gpJUg4KSY4KSj4KWN4KSf4KS+JyxcbiAgICAgICAgaGggOiAnJWQg4KSY4KSj4KWN4KSf4KS+JyxcbiAgICAgICAgZCA6ICfgpI/gpJUg4KSm4KS/4KSoJyxcbiAgICAgICAgZGQgOiAnJWQg4KSm4KS/4KSoJyxcbiAgICAgICAgTSA6ICfgpI/gpJUg4KSu4KS54KS/4KSo4KS+JyxcbiAgICAgICAgTU0gOiAnJWQg4KSu4KS54KS/4KSo4KS+JyxcbiAgICAgICAgeSA6ICfgpI/gpJUg4KSs4KSw4KWN4KS3JyxcbiAgICAgICAgeXkgOiAnJWQg4KSs4KSw4KWN4KS3J1xuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIG5lO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDczM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQzIl0sInNvdXJjZVJvb3QiOiIifQ==