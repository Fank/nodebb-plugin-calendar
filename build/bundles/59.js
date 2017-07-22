webpackJsonp([59],{

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '೧',
    '2': '೨',
    '3': '೩',
    '4': '೪',
    '5': '೫',
    '6': '೬',
    '7': '೭',
    '8': '೮',
    '9': '೯',
    '0': '೦'
};
var numberMap = {
    '೧': '1',
    '೨': '2',
    '೩': '3',
    '೪': '4',
    '೫': '5',
    '೬': '6',
    '೭': '7',
    '೮': '8',
    '೯': '9',
    '೦': '0'
};

var kn = moment.defineLocale('kn', {
    months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
    monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ'.split('_'),
    monthsParseExact: true,
    weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
    weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[ಇಂದು] LT',
        nextDay : '[ನಾಳೆ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ನಿನ್ನೆ] LT',
        lastWeek : '[ಕೊನೆಯ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ನಂತರ',
        past : '%s ಹಿಂದೆ',
        s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
        m : 'ಒಂದು ನಿಮಿಷ',
        mm : '%d ನಿಮಿಷ',
        h : 'ಒಂದು ಗಂಟೆ',
        hh : '%d ಗಂಟೆ',
        d : 'ಒಂದು ದಿನ',
        dd : '%d ದಿನ',
        M : 'ಒಂದು ತಿಂಗಳು',
        MM : '%d ತಿಂಗಳು',
        y : 'ಒಂದು ವರ್ಷ',
        yy : '%d ವರ್ಷ'
    },
    preparse: function (string) {
        return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ರಾತ್ರಿ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
            return hour;
        } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ಸಂಜೆ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ರಾತ್ರಿ';
        } else if (hour < 10) {
            return 'ಬೆಳಿಗ್ಗೆ';
        } else if (hour < 17) {
            return 'ಮಧ್ಯಾಹ್ನ';
        } else if (hour < 20) {
            return 'ಸಂಜೆ';
        } else {
            return 'ರಾತ್ರಿ';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal : function (number) {
        return number + 'ನೇ';
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return kn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUva24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogS2FubmFkYSBba25dXG4vLyEgYXV0aG9yIDogUmFqZWV2IE5haWsgOiBodHRwczovL2dpdGh1Yi5jb20vcmFqZWV2bmFpa3RlXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHN5bWJvbE1hcCA9IHtcbiAgICAnMSc6ICfgs6cnLFxuICAgICcyJzogJ+CzqCcsXG4gICAgJzMnOiAn4LOpJyxcbiAgICAnNCc6ICfgs6onLFxuICAgICc1JzogJ+CzqycsXG4gICAgJzYnOiAn4LOsJyxcbiAgICAnNyc6ICfgs60nLFxuICAgICc4JzogJ+CzricsXG4gICAgJzknOiAn4LOvJyxcbiAgICAnMCc6ICfgs6YnXG59O1xudmFyIG51bWJlck1hcCA9IHtcbiAgICAn4LOnJzogJzEnLFxuICAgICfgs6gnOiAnMicsXG4gICAgJ+CzqSc6ICczJyxcbiAgICAn4LOqJzogJzQnLFxuICAgICfgs6snOiAnNScsXG4gICAgJ+CzrCc6ICc2JyxcbiAgICAn4LOtJzogJzcnLFxuICAgICfgs64nOiAnOCcsXG4gICAgJ+Czryc6ICc5JyxcbiAgICAn4LOmJzogJzAnXG59O1xuXG52YXIga24gPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdrbicsIHtcbiAgICBtb250aHMgOiAn4LKc4LKo4LK14LKw4LK/X+Cyq+CzhuCyrOCzjeCysOCyteCysOCyv1/gsq7gsr7gsrDgs43gsprgs41f4LKP4LKq4LON4LKw4LK/4LKy4LONX+CyruCzhuCzlV/gspzgs4Lgsqjgs41f4LKc4LOB4LKy4LOG4LOWX+CyhuCyl+CyuOCzjeCyn+CzjV/gsrjgs4bgsqrgs43gsp/gs4bgsoLgsqzgsrDgs41f4LKF4LKV4LON4LKf4LOG4LOC4LOV4LKs4LKw4LONX+CyqOCyteCzhuCyguCyrOCysOCzjV/gsqHgsr/gsrjgs4bgsoLgsqzgsrDgs40nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn4LKc4LKoX+Cyq+CzhuCyrOCzjeCysF/gsq7gsr7gsrDgs43gsprgs41f4LKP4LKq4LON4LKw4LK/4LKy4LONX+CyruCzhuCzlV/gspzgs4Lgsqjgs41f4LKc4LOB4LKy4LOG4LOWX+CyhuCyl+CyuOCzjeCyn+CzjV/gsrjgs4bgsqrgs43gsp/gs4bgsoLgsqxf4LKF4LKV4LON4LKf4LOG4LOC4LOV4LKsX+CyqOCyteCzhuCyguCyrF/gsqHgsr/gsrjgs4bgsoLgsqwnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICB3ZWVrZGF5cyA6ICfgsq3gsr7gsqjgs4HgsrXgsr7gsrBf4LK44LOG4LOC4LOV4LKu4LK14LK+4LKwX+CyruCyguCyl+Cys+CyteCyvuCysF/gsqzgs4HgsqfgsrXgsr7gsrBf4LKX4LOB4LKw4LOB4LK14LK+4LKwX+CytuCzgeCyleCzjeCysOCyteCyvuCysF/gsrbgsqjgsr/gsrXgsr7gsrAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfgsq3gsr7gsqjgs4Ff4LK44LOG4LOC4LOV4LKuX+CyruCyguCyl+Cys1/gsqzgs4Hgsqdf4LKX4LOB4LKw4LOBX+CytuCzgeCyleCzjeCysF/gsrbgsqjgsr8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn4LKt4LK+X+CyuOCzhuCzguCzlV/gsq7gsoJf4LKs4LOBX+Cyl+CzgV/gsrbgs4Ff4LK2Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdBIGg6bW0nLFxuICAgICAgICBMVFMgOiAnQSBoOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVksIEEgaDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vgsofgsoLgsqbgs4FdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb4LKo4LK+4LKz4LOGXSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQsIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdb4LKo4LK/4LKo4LON4LKo4LOGXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vgspXgs4bgs4Lgsqjgs4bgsq9dIGRkZGQsIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIOCyqOCyguCypOCysCcsXG4gICAgICAgIHBhc3QgOiAnJXMg4LK54LK/4LKC4LKm4LOGJyxcbiAgICAgICAgcyA6ICfgspXgs4bgsrLgsrXgs4Eg4LKV4LON4LK34LKj4LKX4LKz4LOBJyxcbiAgICAgICAgbSA6ICfgspLgsoLgsqbgs4Eg4LKo4LK/4LKu4LK/4LK3JyxcbiAgICAgICAgbW0gOiAnJWQg4LKo4LK/4LKu4LK/4LK3JyxcbiAgICAgICAgaCA6ICfgspLgsoLgsqbgs4Eg4LKX4LKC4LKf4LOGJyxcbiAgICAgICAgaGggOiAnJWQg4LKX4LKC4LKf4LOGJyxcbiAgICAgICAgZCA6ICfgspLgsoLgsqbgs4Eg4LKm4LK/4LKoJyxcbiAgICAgICAgZGQgOiAnJWQg4LKm4LK/4LKoJyxcbiAgICAgICAgTSA6ICfgspLgsoLgsqbgs4Eg4LKk4LK/4LKC4LKX4LKz4LOBJyxcbiAgICAgICAgTU0gOiAnJWQg4LKk4LK/4LKC4LKX4LKz4LOBJyxcbiAgICAgICAgeSA6ICfgspLgsoLgsqbgs4Eg4LK14LKw4LON4LK3JyxcbiAgICAgICAgeXkgOiAnJWQg4LK14LKw4LON4LK3J1xuICAgIH0sXG4gICAgcHJlcGFyc2U6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9b4LOn4LOo4LOp4LOq4LOr4LOs4LOt4LOu4LOv4LOmXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv4LKw4LK+4LKk4LON4LKw4LK/fOCyrOCzhuCys+Cyv+Cyl+CzjeCyl+Czhnzgsq7gsqfgs43gsq/gsr7gsrngs43gsqh84LK44LKC4LKc4LOGLyxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICfgsrDgsr7gsqTgs43gsrDgsr8nKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA8IDQgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4LKs4LOG4LKz4LK/4LKX4LON4LKX4LOGJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsq7gsqfgs43gsq/gsr7gsrngs43gsqgnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMCA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgsrjgsoLgspzgs4YnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CysOCyvuCypOCzjeCysOCyvyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CyrOCzhuCys+Cyv+Cyl+CzjeCyl+Czhic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CyruCyp+CzjeCyr+CyvuCyueCzjeCyqCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CyuOCyguCynOCzhic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CysOCyvuCypOCzjeCysOCyvyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSjgsqjgs4bgs5UpLyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ+CyqOCzhuCzlSc7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4ga247XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9rbi5qc1xuLy8gbW9kdWxlIGlkID0gNzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNTkiXSwic291cmNlUm9vdCI6IiJ9