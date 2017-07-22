webpackJsonp([66],{

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
                return result + 'mínúta';
            }
            return result + 'mínútu';
        case 'hh':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'mánuður';
            }
            return isFuture ? 'mánuð' : 'mánuði';
        case 'MM':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'mánuðir';
                }
                return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
                return result + 'mánuður';
            }
            return result + (isFuture ? 'mánuð' : 'mánuði');
        case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }
            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
}

var is = moment.defineLocale('is', {
    months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar : {
        sameDay : '[í dag kl.] LT',
        nextDay : '[á morgun kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[í gær kl.] LT',
        lastWeek : '[síðasta] dddd [kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'eftir %s',
        past : 'fyrir %s síðan',
        s : translate,
        m : translate,
        mm : translate,
        h : 'klukkustund',
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return is;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSWNlbGFuZGljIFtpc11cbi8vISBhdXRob3IgOiBIaW5yaWsgw5ZybiBTaWd1csOwc3NvbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaW5yaWtcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBwbHVyYWwobikge1xuICAgIGlmIChuICUgMTAwID09PSAxMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG4gJSAxMCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciByZXN1bHQgPSBudW1iZXIgKyAnICc7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdub2trcmFyIHNla8O6bmR1cicgOiAnbm9ra3J1bSBzZWvDum5kdW0nO1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ23DrW7DunRhJyA6ICdtw61uw7p0dSc7XG4gICAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgICAgIGlmIChwbHVyYWwobnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtw61uw7p0dXInIDogJ23DrW7DunR1bScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtw61uw7p0YSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23DrW7DunR1JztcbiAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICAgICAgaWYgKHBsdXJhbChudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2tsdWtrdXN0dW5kaXInIDogJ2tsdWtrdXN0dW5kdW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAna2x1a2t1c3R1bmQnO1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkYWd1cic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNGdXR1cmUgPyAnZGFnJyA6ICdkZWdpJztcbiAgICAgICAgY2FzZSAnZGQnOlxuICAgICAgICAgICAgaWYgKHBsdXJhbChudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkYWdhcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoaXNGdXR1cmUgPyAnZGFnYScgOiAnZMO2Z3VtJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2RhZ3VyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoaXNGdXR1cmUgPyAnZGFnJyA6ICdkZWdpJyk7XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ23DoW51w7B1cic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNGdXR1cmUgPyAnbcOhbnXDsCcgOiAnbcOhbnXDsGknO1xuICAgICAgICBjYXNlICdNTSc6XG4gICAgICAgICAgICBpZiAocGx1cmFsKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23DoW51w7Bpcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoaXNGdXR1cmUgPyAnbcOhbnXDsGknIDogJ23DoW51w7B1bScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtw6FudcOwdXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChpc0Z1dHVyZSA/ICdtw6FudcOwJyA6ICdtw6FudcOwaScpO1xuICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ8OhcicgOiAnw6FyaSc7XG4gICAgICAgIGNhc2UgJ3l5JzpcbiAgICAgICAgICAgIGlmIChwbHVyYWwobnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICfDoXInIDogJ8OhcnVtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnw6FyJyA6ICfDoXJpJyk7XG4gICAgfVxufVxuXG52YXIgaXMgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdpcycsIHtcbiAgICBtb250aHMgOiAnamFuw7phcl9mZWJyw7phcl9tYXJzX2FwcsOtbF9tYcOtX2rDum7DrV9qw7psw61fw6Fnw7pzdF9zZXB0ZW1iZXJfb2t0w7NiZXJfbsOzdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbWFyX2Fwcl9tYcOtX2rDum5fasO6bF/DoWfDul9zZXBfb2t0X27Ds3ZfZGVzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ3N1bm51ZGFndXJfbcOhbnVkYWd1cl/DvnJpw7BqdWRhZ3VyX21pw7B2aWt1ZGFndXJfZmltbXR1ZGFndXJfZsO2c3R1ZGFndXJfbGF1Z2FyZGFndXInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdzdW5fbcOhbl/DvnJpX21pw7BfZmltX2bDtnNfbGF1Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1N1X03DoV/DnnJfTWlfRmlfRsO2X0xhJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIFtrbC5dIEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBba2wuXSBIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW8OtIGRhZyBrbC5dIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbw6EgbW9yZ3VuIGtsLl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtrbC5dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbw60gZ8OmciBrbC5dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW3PDrcOwYXN0YV0gZGRkZCBba2wuXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdlZnRpciAlcycsXG4gICAgICAgIHBhc3QgOiAnZnlyaXIgJXMgc8Otw7BhbicsXG4gICAgICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgICBoIDogJ2tsdWtrdXN0dW5kJyxcbiAgICAgICAgaGggOiB0cmFuc2xhdGUsXG4gICAgICAgIGQgOiB0cmFuc2xhdGUsXG4gICAgICAgIGRkIDogdHJhbnNsYXRlLFxuICAgICAgICBNIDogdHJhbnNsYXRlLFxuICAgICAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICAgICAgeSA6IHRyYW5zbGF0ZSxcbiAgICAgICAgeXkgOiB0cmFuc2xhdGVcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXG4gICAgb3JkaW5hbCA6ICclZC4nLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBpcztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2lzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA2NiJdLCJzb3VyY2VSb290IjoiIn0=