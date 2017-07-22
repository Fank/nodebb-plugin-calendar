webpackJsonp([51],{

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var mi = moment.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [i] HH:mm',
        LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
    },
    calendar: {
        sameDay: '[i teie mahana, i] LT',
        nextDay: '[apopo i] LT',
        nextWeek: 'dddd [i] LT',
        lastDay: '[inanahi i] LT',
        lastWeek: 'dddd [whakamutunga i] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'i roto i %s',
        past: '%s i mua',
        s: 'te hēkona ruarua',
        m: 'he meneti',
        mm: '%d meneti',
        h: 'te haora',
        hh: '%d haora',
        d: 'he ra',
        dd: '%d ra',
        M: 'he marama',
        MM: '%d marama',
        y: 'he tau',
        yy: '%d tau'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return mi;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCx5REFBeUQsSUFBSTtBQUM3RCx3REFBd0QsSUFBSTtBQUM1RCw4REFBOEQsSUFBSTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTWFvcmkgW21pXVxuLy8hIGF1dGhvciA6IEpvaG4gQ29ycmlnYW4gPHJvYmJpZWNsb3NldEBnbWFpbC5jb20+IDogaHR0cHM6Ly9naXRodWIuY29tL2pvaG5pZGVhbFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBtaSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ21pJywge1xuICAgIG1vbnRoczogJ0tvaGktdMSBdGVfSHVpLXRhbmd1cnVfUG91dMWrLXRlLXJhbmdpX1BhZW5nYS13aMSBd2jEgV9IYXJhdHVhX1BpcGlyaV9IxY1uZ29pbmdvaV9IZXJlLXR1cmkta8WNa8SBX01haHVydV9XaGlyaW5nYS3EgS1udWt1X1doaXJpbmdhLcSBLXJhbmdpX0hha2loZWEnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQ6ICdLb2hpX0h1aV9Qb3VfUGFlX0hhcmFfUGlwaV9IxY1uZ29pX0hlcmVfTWFodV9XaGktbnVfV2hpLXJhX0hha2knLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUmVnZXg6IC8oPzpbJ2EtelxcdTAxMDFcXHUwMTREXFx1MDE2Ql0rXFwtPyl7MSwzfS9pLFxuICAgIG1vbnRoc1N0cmljdFJlZ2V4OiAvKD86WydhLXpcXHUwMTAxXFx1MDE0RFxcdTAxNkJdK1xcLT8pezEsM30vaSxcbiAgICBtb250aHNTaG9ydFJlZ2V4OiAvKD86WydhLXpcXHUwMTAxXFx1MDE0RFxcdTAxNkJdK1xcLT8pezEsM30vaSxcbiAgICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvKD86WydhLXpcXHUwMTAxXFx1MDE0RFxcdTAxNkJdK1xcLT8pezEsMn0vaSxcbiAgICB3ZWVrZGF5czogJ1LEgXRhcHVfTWFuZV9UxatyZWlfV2VuZXJlaV9UxIFpdGVfUGFyYWlyZV9IxIF0YXJlaScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0OiAnVGFfTWFfVMWrX1dlX1TEgWlfUGFfSMSBJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluOiAnVGFfTWFfVMWrX1dlX1TEgWlfUGFfSMSBJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIFtpXSBISDptbScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBbaV0gSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgICBzYW1lRGF5OiAnW2kgdGVpZSBtYWhhbmEsIGldIExUJyxcbiAgICAgICAgbmV4dERheTogJ1thcG9wbyBpXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBbaV0gTFQnLFxuICAgICAgICBsYXN0RGF5OiAnW2luYW5haGkgaV0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ2RkZGQgW3doYWthbXV0dW5nYSBpXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICBmdXR1cmU6ICdpIHJvdG8gaSAlcycsXG4gICAgICAgIHBhc3Q6ICclcyBpIG11YScsXG4gICAgICAgIHM6ICd0ZSBoxJNrb25hIHJ1YXJ1YScsXG4gICAgICAgIG06ICdoZSBtZW5ldGknLFxuICAgICAgICBtbTogJyVkIG1lbmV0aScsXG4gICAgICAgIGg6ICd0ZSBoYW9yYScsXG4gICAgICAgIGhoOiAnJWQgaGFvcmEnLFxuICAgICAgICBkOiAnaGUgcmEnLFxuICAgICAgICBkZDogJyVkIHJhJyxcbiAgICAgICAgTTogJ2hlIG1hcmFtYScsXG4gICAgICAgIE1NOiAnJWQgbWFyYW1hJyxcbiAgICAgICAgeTogJ2hlIHRhdScsXG4gICAgICAgIHl5OiAnJWQgdGF1J1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICAgIG9yZGluYWw6ICclZMK6JyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbWk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9taS5qc1xuLy8gbW9kdWxlIGlkID0gNzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNTEiXSwic291cmNlUm9vdCI6IiJ9