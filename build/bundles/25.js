webpackJsonp([25],{

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var ss = moment.defineLocale('ss', {
    months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Namuhla nga] LT',
        nextDay : '[Kusasa nga] LT',
        nextWeek : 'dddd [nga] LT',
        lastDay : '[Itolo nga] LT',
        lastWeek : 'dddd [leliphelile] [nga] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'nga %s',
        past : 'wenteka nga %s',
        s : 'emizuzwana lomcane',
        m : 'umzuzu',
        mm : '%d emizuzu',
        h : 'lihora',
        hh : '%d emahora',
        d : 'lilanga',
        dd : '%d emalanga',
        M : 'inyanga',
        MM : '%d tinyanga',
        y : 'umnyaka',
        yy : '%d iminyaka'
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'ekuseni';
        } else if (hours < 15) {
            return 'emini';
        } else if (hours < 19) {
            return 'entsambama';
        } else {
            return 'ebusuku';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ekuseni') {
            return hour;
        } else if (meridiem === 'emini') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
            if (hour === 0) {
                return 0;
            }
            return hour + 12;
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : '%d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return ss;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7Ozs7QUFJNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBzaVN3YXRpIFtzc11cbi8vISBhdXRob3IgOiBOaWNvbGFpIERhdmllczxtYWlsQG5pY29sYWkuaW8+IDogaHR0cHM6Ly9naXRodWIuY29tL25pY29sYWlkYXZpZXNcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5cbnZhciBzcyA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3NzJywge1xuICAgIG1vbnRocyA6IFwiQmhpbWJpZHZ3YW5lX0luZGxvdmFuYV9JbmRsb3YnbGVua2h1bHVfTWFiYXNhX0lua2h3ZWtod2V0aV9JbmhsYWJhX0tob2x3YW5lX0luZ2NpX0lueW9uaV9JbXBoYWxhX0x3ZXRpX0luZ29uZ29uaVwiLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnQmhpX0luYV9JbnVfTWFiX0lua19JbmhfS2hvX0lnY19JbnlfSW1wX0x3ZV9JZ28nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnTGlzb250Zm9fVW1zb21idWx1a29fTGVzaWJpbGlfTGVzaXRzYXRmdV9MZXNpbmVfTGVzaWhsYW51X1VtZ2NpYmVsbycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ0xpc19VbWJfTHNiX0xlc19Mc2lfTHNoX1VtZycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdMaV9Vc19MYl9MdF9Mc19MaF9VZycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdoOm1tIEEnLFxuICAgICAgICBMVFMgOiAnaDptbTpzcyBBJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgaDptbSBBJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBoOm1tIEEnXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbTmFtdWhsYSBuZ2FdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbS3VzYXNhIG5nYV0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtuZ2FdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbSXRvbG8gbmdhXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ2RkZGQgW2xlbGlwaGVsaWxlXSBbbmdhXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICduZ2EgJXMnLFxuICAgICAgICBwYXN0IDogJ3dlbnRla2EgbmdhICVzJyxcbiAgICAgICAgcyA6ICdlbWl6dXp3YW5hIGxvbWNhbmUnLFxuICAgICAgICBtIDogJ3VtenV6dScsXG4gICAgICAgIG1tIDogJyVkIGVtaXp1enUnLFxuICAgICAgICBoIDogJ2xpaG9yYScsXG4gICAgICAgIGhoIDogJyVkIGVtYWhvcmEnLFxuICAgICAgICBkIDogJ2xpbGFuZ2EnLFxuICAgICAgICBkZCA6ICclZCBlbWFsYW5nYScsXG4gICAgICAgIE0gOiAnaW55YW5nYScsXG4gICAgICAgIE1NIDogJyVkIHRpbnlhbmdhJyxcbiAgICAgICAgeSA6ICd1bW55YWthJyxcbiAgICAgICAgeXkgOiAnJWQgaW1pbnlha2EnXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAvZWt1c2VuaXxlbWluaXxlbnRzYW1iYW1hfGVidXN1a3UvLFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA8IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VrdXNlbmknO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcbiAgICAgICAgICAgIHJldHVybiAnZW1pbmknO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZW50c2FtYmFtYSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VidXN1a3UnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyaWRpZW0gPT09ICdla3VzZW5pJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdlbWluaScpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ2VudHNhbWJhbWEnIHx8IG1lcmlkaWVtID09PSAnZWJ1c3VrdScpIHtcbiAgICAgICAgICAgIGlmIChob3VyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0vLFxuICAgIG9yZGluYWwgOiAnJWQnLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBzcztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSJdLCJzb3VyY2VSb290IjoiIn0=