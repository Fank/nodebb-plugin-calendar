webpackJsonp([106],{

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
    '0': '০'
};
var numberMap = {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0'
};

var bn = moment.defineLocale('bn', {
    months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
    longDateFormat : {
        LT : 'A h:mm সময়',
        LTS : 'A h:mm:ss সময়',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm সময়',
        LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar : {
        sameDay : '[আজ] LT',
        nextDay : '[আগামীকাল] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[গতকাল] LT',
        lastWeek : '[গত] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s পরে',
        past : '%s আগে',
        s : 'কয়েক সেকেন্ড',
        m : 'এক মিনিট',
        mm : '%d মিনিট',
        h : 'এক ঘন্টা',
        hh : '%d ঘন্টা',
        d : 'এক দিন',
        dd : '%d দিন',
        M : 'এক মাস',
        MM : '%d মাস',
        y : 'এক বছর',
        yy : '%d বছর'
    },
    preparse: function (string) {
        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'রাত' && hour >= 4) ||
                (meridiem === 'দুপুর' && hour < 5) ||
                meridiem === 'বিকাল') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'রাত';
        } else if (hour < 10) {
            return 'সকাল';
        } else if (hour < 17) {
            return 'দুপুর';
        } else if (hour < 20) {
            return 'বিকাল';
        } else {
            return 'রাত';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return bn;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEJlbmdhbGkgW2JuXVxuLy8hIGF1dGhvciA6IEthdXNoaWsgR2FuZGhpIDogaHR0cHM6Ly9naXRodWIuY29tL2thdXNoaWtnYW5kaGlcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgc3ltYm9sTWFwID0ge1xuICAgICcxJzogJ+CnpycsXG4gICAgJzInOiAn4KeoJyxcbiAgICAnMyc6ICfgp6knLFxuICAgICc0JzogJ+CnqicsXG4gICAgJzUnOiAn4KerJyxcbiAgICAnNic6ICfgp6wnLFxuICAgICc3JzogJ+CnrScsXG4gICAgJzgnOiAn4KeuJyxcbiAgICAnOSc6ICfgp68nLFxuICAgICcwJzogJ+Cnpidcbn07XG52YXIgbnVtYmVyTWFwID0ge1xuICAgICfgp6cnOiAnMScsXG4gICAgJ+CnqCc6ICcyJyxcbiAgICAn4KepJzogJzMnLFxuICAgICfgp6onOiAnNCcsXG4gICAgJ+Cnqyc6ICc1JyxcbiAgICAn4KesJzogJzYnLFxuICAgICfgp60nOiAnNycsXG4gICAgJ+Cnric6ICc4JyxcbiAgICAn4KevJzogJzknLFxuICAgICfgp6YnOiAnMCdcbn07XG5cbnZhciBibiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2JuJywge1xuICAgIG1vbnRocyA6ICfgppzgpr7gpqjgp4Hgp5/gpr7gprDgp4Bf4Kar4KeH4Kas4KeN4Kaw4KeB4Kef4Ka+4Kaw4Ka/X+CmruCmvuCmsOCnjeCmml/gpo/gpqrgp43gprDgpr/gprJf4Kau4KeHX+CmnOCngeCmqF/gppzgp4HgprLgpr7gpodf4KaG4KaX4Ka44KeN4KafX+CmuOCnh+CmquCnjeCmn+Cnh+CmruCnjeCmrOCmsF/gpoXgppXgp43gpp/gp4vgpqzgprBf4Kao4Kat4KeH4Kau4KeN4Kas4KawX+CmoeCmv+CmuOCnh+CmruCnjeCmrOCmsCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfgppzgpr7gpqjgp4Ff4Kar4KeH4KasX+CmruCmvuCmsOCnjeCmml/gpo/gpqrgp43gprBf4Kau4KeHX+CmnOCngeCmqF/gppzgp4HgprJf4KaG4KaXX+CmuOCnh+CmquCnjeCmn1/gpoXgppXgp43gpp/gp4tf4Kao4Kat4KeHX+CmoeCmv+CmuOCnhycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICfgprDgpqzgpr/gpqzgpr7gprBf4Ka44KeL4Kau4Kas4Ka+4KawX+CmruCmmeCnjeCml+CmsuCmrOCmvuCmsF/gpqzgp4Hgpqfgpqzgpr7gprBf4Kas4KeD4Ka54Ka44KeN4Kaq4Kak4Ka/4Kas4Ka+4KawX+CmtuCngeCmleCnjeCmsOCmrOCmvuCmsF/gprbgpqjgpr/gpqzgpr7gprAnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfgprDgpqzgpr9f4Ka44KeL4KauX+CmruCmmeCnjeCml+Cmsl/gpqzgp4Hgpqdf4Kas4KeD4Ka54Ka44KeN4Kaq4Kak4Ka/X+CmtuCngeCmleCnjeCmsF/gprbgpqjgpr8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn4Kaw4Kas4Ka/X+CmuOCni+Cmrl/gpq7gppngp43gppdf4Kas4KeB4KanX+CmrOCng+CmueCmg1/gprbgp4HgppXgp43gprBf4Ka24Kao4Ka/Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdBIGg6bW0g4Ka44Kau4KefJyxcbiAgICAgICAgTFRTIDogJ0EgaDptbTpzcyDgprjgpq7gp58nLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSwgQSBoOm1tIOCmuOCmruCnnycsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSDgprjgpq7gp58nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdb4KaG4KacXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW+CmhuCml+CmvuCmruCngOCmleCmvuCmsl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkLCBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW+Cml+CmpOCmleCmvuCmsl0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb4KaX4KakXSBkZGRkLCBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcyDgpqrgprDgp4cnLFxuICAgICAgICBwYXN0IDogJyVzIOCmhuCml+CnhycsXG4gICAgICAgIHMgOiAn4KaV4Kef4KeH4KaVIOCmuOCnh+CmleCnh+CmqOCnjeCmoScsXG4gICAgICAgIG0gOiAn4KaP4KaVIOCmruCmv+CmqOCmv+CmnycsXG4gICAgICAgIG1tIDogJyVkIOCmruCmv+CmqOCmv+CmnycsXG4gICAgICAgIGggOiAn4KaP4KaVIOCmmOCmqOCnjeCmn+CmvicsXG4gICAgICAgIGhoIDogJyVkIOCmmOCmqOCnjeCmn+CmvicsXG4gICAgICAgIGQgOiAn4KaP4KaVIOCmpuCmv+CmqCcsXG4gICAgICAgIGRkIDogJyVkIOCmpuCmv+CmqCcsXG4gICAgICAgIE0gOiAn4KaP4KaVIOCmruCmvuCmuCcsXG4gICAgICAgIE1NIDogJyVkIOCmruCmvuCmuCcsXG4gICAgICAgIHkgOiAn4KaP4KaVIOCmrOCmm+CmsCcsXG4gICAgICAgIHl5IDogJyVkIOCmrOCmm+CmsCdcbiAgICB9LFxuICAgIHByZXBhcnNlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW+Cnp+CnqOCnqeCnquCnq+CnrOCnreCnruCnr+Cnpl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL+CmsOCmvuCmpHzgprjgppXgpr7gprJ84Kam4KeB4Kaq4KeB4KawfOCmrOCmv+CmleCmvuCmsnzgprDgpr7gpqQvLFxuICAgIG1lcmlkaWVtSG91ciA6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgobWVyaWRpZW0gPT09ICfgprDgpr7gpqQnICYmIGhvdXIgPj0gNCkgfHxcbiAgICAgICAgICAgICAgICAobWVyaWRpZW0gPT09ICfgpqbgp4Hgpqrgp4HgprAnICYmIGhvdXIgPCA1KSB8fFxuICAgICAgICAgICAgICAgIG1lcmlkaWVtID09PSAn4Kas4Ka/4KaV4Ka+4KayJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CmsOCmvuCmpCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CmuOCmleCmvuCmsic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CmpuCngeCmquCngeCmsCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CmrOCmv+CmleCmvuCmsic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ+CmsOCmvuCmpCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBibjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2JuLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMDYiXSwic291cmNlUm9vdCI6IiJ9