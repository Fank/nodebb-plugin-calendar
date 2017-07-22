webpackJsonp([67],{

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var id = moment.defineLocale('id', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'siang';
        } else if (hours < 19) {
            return 'sore';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Besok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kemarin pukul] LT',
        lastWeek : 'dddd [lalu pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lalu',
        s : 'beberapa detik',
        m : 'semenit',
        mm : '%d menit',
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

return id;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBJbmRvbmVzaWFuIFtpZF1cbi8vISBhdXRob3IgOiBNb2hhbW1hZCBTYXRyaW8gVXRvbW8gOiBodHRwczovL2dpdGh1Yi5jb20vdHlva1xuLy8hIHJlZmVyZW5jZTogaHR0cDovL2lkLndpa2lzb3VyY2Uub3JnL3dpa2kvUGVkb21hbl9VbXVtX0VqYWFuX0JhaGFzYV9JbmRvbmVzaWFfeWFuZ19EaXNlbXB1cm5ha2FuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGlkID0gbW9tZW50LmRlZmluZUxvY2FsZSgnaWQnLCB7XG4gICAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFyZXRfQXByaWxfTWVpX0p1bmlfSnVsaV9BZ3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NZWlfSnVuX0p1bF9BZ3NfU2VwX09rdF9Ob3ZfRGVzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ01pbmdndV9TZW5pbl9TZWxhc2FfUmFidV9LYW1pc19KdW1hdF9TYWJ0dScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JhYl9LYW1fSnVtX1NhYicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TYicuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEgubW0nLFxuICAgICAgICBMVFMgOiAnSEgubW0uc3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL3BhZ2l8c2lhbmd8c29yZXxtYWxhbS8sXG4gICAgbWVyaWRpZW1Ib3VyIDogZnVuY3Rpb24gKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc2lhbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzb3JlJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXJzIDwgMTEpIHtcbiAgICAgICAgICAgIHJldHVybiAncGFnaSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgICAgICAgcmV0dXJuICdzaWFuZyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxOSkge1xuICAgICAgICAgICAgcmV0dXJuICdzb3JlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbWFsYW0nO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbSGFyaSBpbmkgcHVrdWxdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbQmVzb2sgcHVrdWxdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbS2VtYXJpbiBwdWt1bF0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdkZGRkIFtsYWx1IHB1a3VsXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdkYWxhbSAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgeWFuZyBsYWx1JyxcbiAgICAgICAgcyA6ICdiZWJlcmFwYSBkZXRpaycsXG4gICAgICAgIG0gOiAnc2VtZW5pdCcsXG4gICAgICAgIG1tIDogJyVkIG1lbml0JyxcbiAgICAgICAgaCA6ICdzZWphbScsXG4gICAgICAgIGhoIDogJyVkIGphbScsXG4gICAgICAgIGQgOiAnc2VoYXJpJyxcbiAgICAgICAgZGQgOiAnJWQgaGFyaScsXG4gICAgICAgIE0gOiAnc2VidWxhbicsXG4gICAgICAgIE1NIDogJyVkIGJ1bGFuJyxcbiAgICAgICAgeSA6ICdzZXRhaHVuJyxcbiAgICAgICAgeXkgOiAnJWQgdGFodW4nXG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gaWQ7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9pZC5qc1xuLy8gbW9kdWxlIGlkID0gNzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNjciXSwic291cmNlUm9vdCI6IiJ9