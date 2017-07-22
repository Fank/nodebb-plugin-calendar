webpackJsonp([17],{

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

function translateFuture(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'leS' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'waQ' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'nem' :
    time + ' pIq';
    return time;
}

function translatePast(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'Hu’' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'wen' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'ben' :
    time + ' ret';
    return time;
}

function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
        case 'mm':
            return numberNoun + ' tup';
        case 'hh':
            return numberNoun + ' rep';
        case 'dd':
            return numberNoun + ' jaj';
        case 'MM':
            return numberNoun + ' jar';
        case 'yy':
            return numberNoun + ' DIS';
    }
}

function numberAsNoun(number) {
    var hundred = Math.floor((number % 1000) / 100),
    ten = Math.floor((number % 100) / 10),
    one = number % 10,
    word = '';
    if (hundred > 0) {
        word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[one];
    }
    return (word === '') ? 'pagh' : word;
}

var tlh = moment.defineLocale('tlh', {
    months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact : true,
    weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[DaHjaj] LT',
        nextDay: '[wa’leS] LT',
        nextWeek: 'LLL',
        lastDay: '[wa’Hu’] LT',
        lastWeek: 'LLL',
        sameElse: 'L'
    },
    relativeTime : {
        future : translateFuture,
        past : translatePast,
        s : 'puS lup',
        m : 'wa’ tup',
        mm : translate,
        h : 'wa’ rep',
        hh : translate,
        d : 'wa’ jaj',
        dd : translate,
        M : 'wa’ jar',
        MM : translate,
        y : 'wa’ DIS',
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tlh;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdGxoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBLbGluZ29uIFt0bGhdXG4vLyEgYXV0aG9yIDogRG9taW5pa2EgS3J1ayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbWFyYW50aHJvc2VcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgbnVtYmVyc05vdW5zID0gJ3BhZ2hfd2HigJlfY2hh4oCZX3dlal9sb1NfdmFnaF9qYXZfU29jaF9jaG9yZ2hfSHV0Jy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVGdXR1cmUob3V0cHV0KSB7XG4gICAgdmFyIHRpbWUgPSBvdXRwdXQ7XG4gICAgdGltZSA9IChvdXRwdXQuaW5kZXhPZignamFqJykgIT09IC0xKSA/XG4gICAgdGltZS5zbGljZSgwLCAtMykgKyAnbGVTJyA6XG4gICAgKG91dHB1dC5pbmRleE9mKCdqYXInKSAhPT0gLTEpID9cbiAgICB0aW1lLnNsaWNlKDAsIC0zKSArICd3YVEnIDpcbiAgICAob3V0cHV0LmluZGV4T2YoJ0RJUycpICE9PSAtMSkgP1xuICAgIHRpbWUuc2xpY2UoMCwgLTMpICsgJ25lbScgOlxuICAgIHRpbWUgKyAnIHBJcSc7XG4gICAgcmV0dXJuIHRpbWU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVBhc3Qob3V0cHV0KSB7XG4gICAgdmFyIHRpbWUgPSBvdXRwdXQ7XG4gICAgdGltZSA9IChvdXRwdXQuaW5kZXhPZignamFqJykgIT09IC0xKSA/XG4gICAgdGltZS5zbGljZSgwLCAtMykgKyAnSHXigJknIDpcbiAgICAob3V0cHV0LmluZGV4T2YoJ2phcicpICE9PSAtMSkgP1xuICAgIHRpbWUuc2xpY2UoMCwgLTMpICsgJ3dlbicgOlxuICAgIChvdXRwdXQuaW5kZXhPZignRElTJykgIT09IC0xKSA/XG4gICAgdGltZS5zbGljZSgwLCAtMykgKyAnYmVuJyA6XG4gICAgdGltZSArICcgcmV0JztcbiAgICByZXR1cm4gdGltZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgIHZhciBudW1iZXJOb3VuID0gbnVtYmVyQXNOb3VuKG51bWJlcik7XG4gICAgc3dpdGNoIChzdHJpbmcpIHtcbiAgICAgICAgY2FzZSAnbW0nOlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlck5vdW4gKyAnIHR1cCc7XG4gICAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJOb3VuICsgJyByZXAnO1xuICAgICAgICBjYXNlICdkZCc6XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyTm91biArICcgamFqJztcbiAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlck5vdW4gKyAnIGphcic7XG4gICAgICAgIGNhc2UgJ3l5JzpcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJOb3VuICsgJyBESVMnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbnVtYmVyQXNOb3VuKG51bWJlcikge1xuICAgIHZhciBodW5kcmVkID0gTWF0aC5mbG9vcigobnVtYmVyICUgMTAwMCkgLyAxMDApLFxuICAgIHRlbiA9IE1hdGguZmxvb3IoKG51bWJlciAlIDEwMCkgLyAxMCksXG4gICAgb25lID0gbnVtYmVyICUgMTAsXG4gICAgd29yZCA9ICcnO1xuICAgIGlmIChodW5kcmVkID4gMCkge1xuICAgICAgICB3b3JkICs9IG51bWJlcnNOb3Vuc1todW5kcmVkXSArICd2YXRsaCc7XG4gICAgfVxuICAgIGlmICh0ZW4gPiAwKSB7XG4gICAgICAgIHdvcmQgKz0gKCh3b3JkICE9PSAnJykgPyAnICcgOiAnJykgKyBudW1iZXJzTm91bnNbdGVuXSArICdtYUgnO1xuICAgIH1cbiAgICBpZiAob25lID4gMCkge1xuICAgICAgICB3b3JkICs9ICgod29yZCAhPT0gJycpID8gJyAnIDogJycpICsgbnVtYmVyc05vdW5zW29uZV07XG4gICAgfVxuICAgIHJldHVybiAod29yZCA9PT0gJycpID8gJ3BhZ2gnIDogd29yZDtcbn1cblxudmFyIHRsaCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3RsaCcsIHtcbiAgICBtb250aHMgOiAndGVyYeKAmSBqYXIgd2HigJlfdGVyYeKAmSBqYXIgY2hh4oCZX3RlcmHigJkgamFyIHdlal90ZXJh4oCZIGphciBsb1NfdGVyYeKAmSBqYXIgdmFnaF90ZXJh4oCZIGphciBqYXZfdGVyYeKAmSBqYXIgU29jaF90ZXJh4oCZIGphciBjaG9yZ2hfdGVyYeKAmSBqYXIgSHV0X3RlcmHigJkgamFyIHdh4oCZbWFIX3RlcmHigJkgamFyIHdh4oCZbWFIIHdh4oCZX3RlcmHigJkgamFyIHdh4oCZbWFIIGNoYeKAmScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdqYXIgd2HigJlfamFyIGNoYeKAmV9qYXIgd2VqX2phciBsb1NfamFyIHZhZ2hfamFyIGphdl9qYXIgU29jaF9qYXIgY2hvcmdoX2phciBIdXRfamFyIHdh4oCZbWFIX2phciB3YeKAmW1hSCB3YeKAmV9qYXIgd2HigJltYUggY2hh4oCZJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ2xvam1JdGphal9EYVNqYWpfcG92amFqX2doSXRsaGphal9sb2doamFqX2J1cWphal9naEluamFqJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnbG9qbUl0amFqX0RhU2phal9wb3ZqYWpfZ2hJdGxoamFqX2xvZ2hqYWpfYnVxamFqX2doSW5qYWonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnbG9qbUl0amFqX0RhU2phal9wb3ZqYWpfZ2hJdGxoamFqX2xvZ2hqYWpfYnVxamFqX2doSW5qYWonLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXk6ICdbRGFIamFqXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdbd2HigJlsZVNdIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdMTEwnLFxuICAgICAgICBsYXN0RGF5OiAnW3dh4oCZSHXigJldIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdMTEwnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6IHRyYW5zbGF0ZUZ1dHVyZSxcbiAgICAgICAgcGFzdCA6IHRyYW5zbGF0ZVBhc3QsXG4gICAgICAgIHMgOiAncHVTIGx1cCcsXG4gICAgICAgIG0gOiAnd2HigJkgdHVwJyxcbiAgICAgICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgICAgIGggOiAnd2HigJkgcmVwJyxcbiAgICAgICAgaGggOiB0cmFuc2xhdGUsXG4gICAgICAgIGQgOiAnd2HigJkgamFqJyxcbiAgICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICAgIE0gOiAnd2HigJkgamFyJyxcbiAgICAgICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgICAgIHkgOiAnd2HigJkgRElTJyxcbiAgICAgICAgeXkgOiB0cmFuc2xhdGVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiB0bGg7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS90bGguanNcbi8vIG1vZHVsZSBpZCA9IDc1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3Il0sInNvdXJjZVJvb3QiOiIifQ==