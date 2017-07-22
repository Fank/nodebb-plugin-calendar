webpackJsonp([39],{

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '੧',
    '2': '੨',
    '3': '੩',
    '4': '੪',
    '5': '੫',
    '6': '੬',
    '7': '੭',
    '8': '੮',
    '9': '੯',
    '0': '੦'
};
var numberMap = {
    '੧': '1',
    '੨': '2',
    '੩': '3',
    '੪': '4',
    '੫': '5',
    '੬': '6',
    '੭': '7',
    '੮': '8',
    '੯': '9',
    '੦': '0'
};

var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
    months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm ਵਜੇ',
        LTS : 'A h:mm:ss ਵਜੇ',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
        LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
    },
    calendar : {
        sameDay : '[ਅਜ] LT',
        nextDay : '[ਕਲ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ਕਲ] LT',
        lastWeek : '[ਪਿਛਲੇ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ਵਿੱਚ',
        past : '%s ਪਿਛਲੇ',
        s : 'ਕੁਝ ਸਕਿੰਟ',
        m : 'ਇਕ ਮਿੰਟ',
        mm : '%d ਮਿੰਟ',
        h : 'ਇੱਕ ਘੰਟਾ',
        hh : '%d ਘੰਟੇ',
        d : 'ਇੱਕ ਦਿਨ',
        dd : '%d ਦਿਨ',
        M : 'ਇੱਕ ਮਹੀਨਾ',
        MM : '%d ਮਹੀਨੇ',
        y : 'ਇੱਕ ਸਾਲ',
        yy : '%d ਸਾਲ'
    },
    preparse: function (string) {
        return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ਰਾਤ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ਸਵੇਰ') {
            return hour;
        } else if (meridiem === 'ਦੁਪਹਿਰ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ਸ਼ਾਮ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ਰਾਤ';
        } else if (hour < 10) {
            return 'ਸਵੇਰ';
        } else if (hour < 17) {
            return 'ਦੁਪਹਿਰ';
        } else if (hour < 20) {
            return 'ਸ਼ਾਮ';
        } else {
            return 'ਰਾਤ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return paIn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvcGEtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBQdW5qYWJpIChJbmRpYSkgW3BhLWluXVxuLy8hIGF1dGhvciA6IEhhcnByZWV0IFNpbmdoIDogaHR0cHM6Ly9naXRodWIuY29tL2hhcnByZWV0a2hhbHNhZ3RiaXRcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgc3ltYm9sTWFwID0ge1xuICAgICcxJzogJ+CppycsXG4gICAgJzInOiAn4KmoJyxcbiAgICAnMyc6ICfgqaknLFxuICAgICc0JzogJ+CpqicsXG4gICAgJzUnOiAn4KmrJyxcbiAgICAnNic6ICfgqawnLFxuICAgICc3JzogJ+CprScsXG4gICAgJzgnOiAn4KmuJyxcbiAgICAnOSc6ICfgqa8nLFxuICAgICcwJzogJ+Cppidcbn07XG52YXIgbnVtYmVyTWFwID0ge1xuICAgICfgqacnOiAnMScsXG4gICAgJ+CpqCc6ICcyJyxcbiAgICAn4KmpJzogJzMnLFxuICAgICfgqaonOiAnNCcsXG4gICAgJ+Cpqyc6ICc1JyxcbiAgICAn4KmsJzogJzYnLFxuICAgICfgqa0nOiAnNycsXG4gICAgJ+Cpric6ICc4JyxcbiAgICAn4KmvJzogJzknLFxuICAgICfgqaYnOiAnMCdcbn07XG5cbnZhciBwYUluID0gbW9tZW50LmRlZmluZUxvY2FsZSgncGEtaW4nLCB7XG4gICAgLy8gVGhlcmUgYXJlIG1vbnRocyBuYW1lIGFzIHBlciBOYW5ha3NoYWhpIENhbGVuZGVyIGJ1dCB0aGV5IGFyZSBub3QgdXNlZCBhcyByaWdpZGx5IGluIG1vZGVybiBQdW5qYWJpLlxuICAgIG1vbnRocyA6ICfgqJzgqKjgqLXgqLDgqYBf4Kir4Ki84Kiw4Ki14Kiw4KmAX+CoruCovuCosOComl/gqIXgqKrgqY3gqLDgqYjgqLJf4Kiu4KiIX+ConOCpguCoqF/gqJzgqYHgqLLgqL7gqIhf4KiF4KiX4Ki44KikX+CouOCopOCpsOCorOCosF/gqIXgqJXgqKTgqYLgqKzgqLBf4Kio4Ki14Kmw4Kis4KiwX+CopuCouOCpsOCorOCosCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfgqJzgqKjgqLXgqLDgqYBf4Kir4Ki84Kiw4Ki14Kiw4KmAX+CoruCovuCosOComl/gqIXgqKrgqY3gqLDgqYjgqLJf4Kiu4KiIX+ConOCpguCoqF/gqJzgqYHgqLLgqL7gqIhf4KiF4KiX4Ki44KikX+CouOCopOCpsOCorOCosF/gqIXgqJXgqKTgqYLgqKzgqLBf4Kio4Ki14Kmw4Kis4KiwX+CopuCouOCpsOCorOCosCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfgqJDgqKTgqLXgqL7gqLBf4Ki44KmL4Kiu4Ki14Ki+4KiwX+CoruCpsOCol+CosuCoteCovuCosF/gqKzgqYHgqKfgqLXgqL7gqLBf4Ki14KmA4Kiw4Ki14Ki+4KiwX+CouOCovOCpgeCpseColeCosOCoteCovuCosF/gqLjgqLzgqKjgqYDgqJrgqLDgqLXgqL7gqLAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfgqJDgqKRf4Ki44KmL4KiuX+CoruCpsOCol+Cosl/gqKzgqYHgqKdf4Ki14KmA4KiwX+CouOCovOCpgeColeCosF/gqLjgqLzgqKjgqYAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn4KiQ4KikX+CouOCpi+Corl/gqK7gqbDgqJfgqLJf4Kis4KmB4KinX+CoteCpgOCosF/gqLjgqLzgqYHgqJXgqLBf4Ki44Ki84Kio4KmAJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdBIGg6bW0g4Ki14Kic4KmHJyxcbiAgICAgICAgTFRTIDogJ0EgaDptbTpzcyDgqLXgqJzgqYcnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSwgQSBoOm1tIOCoteConOCphycsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSDgqLXgqJzgqYcnXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdb4KiF4KicXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW+ColeCosl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkLCBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW+ColeCosl0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb4Kiq4Ki/4Kib4Kiy4KmHXSBkZGRkLCBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcyDgqLXgqL/gqbHgqJonLFxuICAgICAgICBwYXN0IDogJyVzIOCoquCov+Com+CosuCphycsXG4gICAgICAgIHMgOiAn4KiV4KmB4KidIOCouOColeCov+CpsOConycsXG4gICAgICAgIG0gOiAn4KiH4KiVIOCoruCov+CpsOConycsXG4gICAgICAgIG1tIDogJyVkIOCoruCov+CpsOConycsXG4gICAgICAgIGggOiAn4KiH4Kmx4KiVIOComOCpsOCon+CovicsXG4gICAgICAgIGhoIDogJyVkIOComOCpsOCon+CphycsXG4gICAgICAgIGQgOiAn4KiH4Kmx4KiVIOCopuCov+CoqCcsXG4gICAgICAgIGRkIDogJyVkIOCopuCov+CoqCcsXG4gICAgICAgIE0gOiAn4KiH4Kmx4KiVIOCoruCoueCpgOCoqOCovicsXG4gICAgICAgIE1NIDogJyVkIOCoruCoueCpgOCoqOCphycsXG4gICAgICAgIHkgOiAn4KiH4Kmx4KiVIOCouOCovuCosicsXG4gICAgICAgIHl5IDogJyVkIOCouOCovuCosidcbiAgICB9LFxuICAgIHByZXBhcnNlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW+Cpp+CpqOCpqeCpquCpq+CprOCpreCpruCpr+Cppl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gUHVuamFiaSBub3RhdGlvbiBmb3IgbWVyaWRpZW1zIGFyZSBxdWl0ZSBmdXp6eSBpbiBwcmFjdGljZS4gV2hpbGUgdGhlcmUgZXhpc3RzXG4gICAgLy8gYSByaWdpZCBub3Rpb24gb2YgYSAnUGFoYXInIGl0IGlzIG5vdCB1c2VkIGFzIHJpZ2lkbHkgaW4gbW9kZXJuIFB1bmphYmkuXG4gICAgbWVyaWRpZW1QYXJzZTogL+CosOCovuCopHzgqLjgqLXgqYfgqLB84Kim4KmB4Kiq4Ki54Ki/4KiwfOCouOCovOCovuCori8sXG4gICAgbWVyaWRpZW1Ib3VyIDogZnVuY3Rpb24gKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmlkaWVtID09PSAn4Kiw4Ki+4KikJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPCA0ID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ+CouOCoteCph+CosCcpIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4Kim4KmB4Kiq4Ki54Ki/4KiwJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgPj0gMTAgPyBob3VyIDogaG91ciArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4Ki44Ki84Ki+4KiuJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgICAgICAgcmV0dXJuICfgqLDgqL7gqKQnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICfgqLjgqLXgqYfgqLAnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgICAgICAgcmV0dXJuICfgqKbgqYHgqKrgqLngqL/gqLAnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuICfgqLjgqLzgqL7gqK4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICfgqLDgqL7gqKQnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gcGFJbjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3BhLWluLmpzXG4vLyBtb2R1bGUgaWQgPSA3Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSAzOSJdLCJzb3VyY2VSb290IjoiIn0=