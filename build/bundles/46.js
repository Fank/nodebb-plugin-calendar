webpackJsonp([46],{

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ms = moment.defineLocale('ms', {
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

return ms;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTWFsYXkgW21zXVxuLy8hIGF1dGhvciA6IFdlbGRhbiBKYW1pbGkgOiBodHRwczovL2dpdGh1Yi5jb20vd2VsZGFuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIG1zID0gbW9tZW50LmRlZmluZUxvY2FsZSgnbXMnLCB7XG4gICAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFjX0FwcmlsX01laV9KdW5fSnVsYWlfT2dvc19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EaXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hY19BcHJfTWVpX0p1bl9KdWxfT2dzX1NlcF9Pa3RfTm92X0Rpcycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdBaGFkX0lzbmluX1NlbGFzYV9SYWJ1X0toYW1pc19KdW1hYXRfU2FidHUnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdBaGRfSXNuX1NlbF9SYWJfS2hhX0p1bV9TYWInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnQWhfSXNfU2xfUmJfS21fSm1fU2InLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hILm1tJyxcbiAgICAgICAgTFRTIDogJ0hILm1tLnNzJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbSdcbiAgICB9LFxuICAgIG1lcmlkaWVtUGFyc2U6IC9wYWdpfHRlbmdhaGFyaXxwZXRhbmd8bWFsYW0vLFxuICAgIG1lcmlkaWVtSG91cjogZnVuY3Rpb24gKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAndGVuZ2FoYXJpJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAncGV0YW5nJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXJzIDwgMTEpIHtcbiAgICAgICAgICAgIHJldHVybiAncGFnaSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgICAgICAgcmV0dXJuICd0ZW5nYWhhcmknO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcbiAgICAgICAgICAgIHJldHVybiAncGV0YW5nJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbWFsYW0nO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbSGFyaSBpbmkgcHVrdWxdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbRXNvayBwdWt1bF0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtwdWt1bF0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1tLZWxtYXJpbiBwdWt1bF0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdkZGRkIFtsZXBhcyBwdWt1bF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnZGFsYW0gJXMnLFxuICAgICAgICBwYXN0IDogJyVzIHlhbmcgbGVwYXMnLFxuICAgICAgICBzIDogJ2JlYmVyYXBhIHNhYXQnLFxuICAgICAgICBtIDogJ3NlbWluaXQnLFxuICAgICAgICBtbSA6ICclZCBtaW5pdCcsXG4gICAgICAgIGggOiAnc2VqYW0nLFxuICAgICAgICBoaCA6ICclZCBqYW0nLFxuICAgICAgICBkIDogJ3NlaGFyaScsXG4gICAgICAgIGRkIDogJyVkIGhhcmknLFxuICAgICAgICBNIDogJ3NlYnVsYW4nLFxuICAgICAgICBNTSA6ICclZCBidWxhbicsXG4gICAgICAgIHkgOiAnc2V0YWh1bicsXG4gICAgICAgIHl5IDogJyVkIHRhaHVuJ1xuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIG1zO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvbXMuanNcbi8vIG1vZHVsZSBpZCA9IDczMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQ2Il0sInNvdXJjZVJvb3QiOiIifQ==