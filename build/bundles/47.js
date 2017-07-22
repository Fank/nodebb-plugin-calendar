webpackJsonp([47],{

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var msMy = moment.defineLocale('ms-my', {
    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'tengahari';
        } else if (hours < 19) {
            return 'petang';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Esok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kelmarin pukul] LT',
        lastWeek : 'dddd [lepas pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lepas',
        s : 'beberapa saat',
        m : 'seminit',
        mm : '%d minit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return msMy;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbXMtbXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBNYWxheSBbbXMtbXldXG4vLyEgbm90ZSA6IERFUFJFQ0FURUQsIHRoZSBjb3JyZWN0IG9uZSBpcyBbbXNdXG4vLyEgYXV0aG9yIDogV2VsZGFuIEphbWlsaSA6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWxkYW5cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgbXNNeSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ21zLW15Jywge1xuICAgIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hY19BcHJpbF9NZWlfSnVuX0p1bGFpX09nb3NfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGlzZW1iZXInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYWNfQXByX01laV9KdW5fSnVsX09nc19TZXBfT2t0X05vdl9EaXMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnQWhhZF9Jc25pbl9TZWxhc2FfUmFidV9LaGFtaXNfSnVtYWF0X1NhYnR1Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnQWhkX0lzbl9TZWxfUmFiX0toYV9KdW1fU2FiJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ0FoX0lzX1NsX1JiX0ttX0ptX1NiJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISC5tbScsXG4gICAgICAgIExUUyA6ICdISC5tbS5zcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAvcGFnaXx0ZW5nYWhhcml8cGV0YW5nfG1hbGFtLyxcbiAgICBtZXJpZGllbUhvdXI6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXJpZGllbSA9PT0gJ3BhZ2knKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3RlbmdhaGFyaScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3BldGFuZycgfHwgbWVyaWRpZW0gPT09ICdtYWxhbScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BhZ2knO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcbiAgICAgICAgICAgIHJldHVybiAndGVuZ2FoYXJpJztcbiAgICAgICAgfSBlbHNlIGlmIChob3VycyA8IDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BldGFuZyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ21hbGFtJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW0hhcmkgaW5pIHB1a3VsXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW0Vzb2sgcHVrdWxdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbS2VsbWFyaW4gcHVrdWxdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnZGRkZCBbbGVwYXMgcHVrdWxdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ2RhbGFtICVzJyxcbiAgICAgICAgcGFzdCA6ICclcyB5YW5nIGxlcGFzJyxcbiAgICAgICAgcyA6ICdiZWJlcmFwYSBzYWF0JyxcbiAgICAgICAgbSA6ICdzZW1pbml0JyxcbiAgICAgICAgbW0gOiAnJWQgbWluaXQnLFxuICAgICAgICBoIDogJ3NlamFtJyxcbiAgICAgICAgaGggOiAnJWQgamFtJyxcbiAgICAgICAgZCA6ICdzZWhhcmknLFxuICAgICAgICBkZCA6ICclZCBoYXJpJyxcbiAgICAgICAgTSA6ICdzZWJ1bGFuJyxcbiAgICAgICAgTU0gOiAnJWQgYnVsYW4nLFxuICAgICAgICB5IDogJ3NldGFodW4nLFxuICAgICAgICB5eSA6ICclZCB0YWh1bidcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBtc015O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvbXMtbXkuanNcbi8vIG1vZHVsZSBpZCA9IDcyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQ3Il0sInNvdXJjZVJvb3QiOiIifQ==