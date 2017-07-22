webpackJsonp([63],{

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var jv = moment.defineLocale('jv', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'enjing') {
            return hour;
        } else if (meridiem === 'siyang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'enjing';
        } else if (hours < 15) {
            return 'siyang';
        } else if (hours < 19) {
            return 'sonten';
        } else {
            return 'ndalu';
        }
    },
    calendar : {
        sameDay : '[Dinten puniko pukul] LT',
        nextDay : '[Mbenjang pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kala wingi pukul] LT',
        lastWeek : 'dddd [kepengker pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'wonten ing %s',
        past : '%s ingkang kepengker',
        s : 'sawetawis detik',
        m : 'setunggal menit',
        mm : '%d menit',
        h : 'setunggal jam',
        hh : '%d jam',
        d : 'sedinten',
        dd : '%d dinten',
        M : 'sewulan',
        MM : '%d wulan',
        y : 'setaun',
        yy : '%d taun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return jv;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvanYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBKYXZhbmVzZSBbanZdXG4vLyEgYXV0aG9yIDogUm9ueSBMYW50aXAgOiBodHRwczovL2dpdGh1Yi5jb20vbGFudGlwXG4vLyEgcmVmZXJlbmNlOiBodHRwOi8vanYud2lraXBlZGlhLm9yZy93aWtpL0Jhc2FfSmF3YVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBqdiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2p2Jywge1xuICAgIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hcmV0X0FwcmlsX01laV9KdW5pX0p1bGlfQWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3BlbWJlcl9EZXNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWVpX0p1bl9KdWxfQWdzX1NlcF9Pa3RfTm9wX0Rlcycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdNaW5nZ3VfU2VuZW5fU2Vsb3NvX1JlYnVfS2VtaXNfSmVtdXdhaF9TZXB0dScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JlYl9LZW1fSmVtX1NlcCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TcCcuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEgubW0nLFxuICAgICAgICBMVFMgOiAnSEgubW0uc3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL2VuamluZ3xzaXlhbmd8c29udGVufG5kYWx1LyxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICdlbmppbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NpeWFuZycpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NvbnRlbicgfHwgbWVyaWRpZW0gPT09ICduZGFsdScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VuamluZyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xuICAgICAgICAgICAgcmV0dXJuICdzaXlhbmcnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcbiAgICAgICAgICAgIHJldHVybiAnc29udGVuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbmRhbHUnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbRGludGVuIHB1bmlrbyBwdWt1bF0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1tNYmVuamFuZyBwdWt1bF0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtwdWt1bF0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1tLYWxhIHdpbmdpIHB1a3VsXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ2RkZGQgW2tlcGVuZ2tlciBwdWt1bF0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnd29udGVuIGluZyAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgaW5na2FuZyBrZXBlbmdrZXInLFxuICAgICAgICBzIDogJ3Nhd2V0YXdpcyBkZXRpaycsXG4gICAgICAgIG0gOiAnc2V0dW5nZ2FsIG1lbml0JyxcbiAgICAgICAgbW0gOiAnJWQgbWVuaXQnLFxuICAgICAgICBoIDogJ3NldHVuZ2dhbCBqYW0nLFxuICAgICAgICBoaCA6ICclZCBqYW0nLFxuICAgICAgICBkIDogJ3NlZGludGVuJyxcbiAgICAgICAgZGQgOiAnJWQgZGludGVuJyxcbiAgICAgICAgTSA6ICdzZXd1bGFuJyxcbiAgICAgICAgTU0gOiAnJWQgd3VsYW4nLFxuICAgICAgICB5IDogJ3NldGF1bicsXG4gICAgICAgIHl5IDogJyVkIHRhdW4nXG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4ganY7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9qdi5qc1xuLy8gbW9kdWxlIGlkID0gNzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNjMiXSwic291cmNlUm9vdCI6IiJ9