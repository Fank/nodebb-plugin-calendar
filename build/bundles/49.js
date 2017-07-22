webpackJsonp([49],{

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ml = moment.defineLocale('ml', {
    months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm -നു',
        LTS : 'A h:mm:ss -നു',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm -നു',
        LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar : {
        sameDay : '[ഇന്ന്] LT',
        nextDay : '[നാളെ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ഇന്നലെ] LT',
        lastWeek : '[കഴിഞ്ഞ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s കഴിഞ്ഞ്',
        past : '%s മുൻപ്',
        s : 'അൽപ നിമിഷങ്ങൾ',
        m : 'ഒരു മിനിറ്റ്',
        mm : '%d മിനിറ്റ്',
        h : 'ഒരു മണിക്കൂർ',
        hh : '%d മണിക്കൂർ',
        d : 'ഒരു ദിവസം',
        dd : '%d ദിവസം',
        M : 'ഒരു മാസം',
        MM : '%d മാസം',
        y : 'ഒരു വർഷം',
        yy : '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'രാത്രി' && hour >= 4) ||
                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                meridiem === 'വൈകുന്നേരം') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'രാത്രി';
        } else if (hour < 12) {
            return 'രാവിലെ';
        } else if (hour < 17) {
            return 'ഉച്ച കഴിഞ്ഞ്';
        } else if (hour < 20) {
            return 'വൈകുന്നേരം';
        } else {
            return 'രാത്രി';
        }
    }
});

return ml;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBNYWxheWFsYW0gW21sXVxuLy8hIGF1dGhvciA6IEZsb3lkIFBpbmsgOiBodHRwczovL2dpdGh1Yi5jb20vZmxveWRwaW5rXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIG1sID0gbW9tZW50LmRlZmluZUxvY2FsZSgnbWwnLCB7XG4gICAgbW9udGhzIDogJ+C0nOC0qOC1geC0teC0sOC0v1/gtKvgtYbgtKzgtY3gtLDgtYHgtLXgtLDgtL9f4LSu4LS+4LW84LSa4LWN4LSa4LWNX+C0j+C0quC1jeC0sOC0v+C1vV/gtK7gtYfgtK/gtY1f4LSc4LWC4LW6X+C0nOC1guC0suC1iF/gtJPgtJfgtLjgtY3gtLHgtY3gtLHgtY1f4LS44LWG4LSq4LWN4LSx4LWN4LSx4LSC4LSs4LW8X+C0kuC0leC1jeC0n+C1i+C0rOC1vF/gtKjgtLXgtILgtKzgtbxf4LSh4LS/4LS44LSC4LSs4LW8Jy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ+C0nOC0qOC1gS5f4LSr4LWG4LSs4LWN4LSw4LWBLl/gtK7gtL7gtbwuX+C0j+C0quC1jeC0sOC0vy5f4LSu4LWH4LSv4LWNX+C0nOC1guC1ul/gtJzgtYLgtLLgtYguX+C0k+C0ly5f4LS44LWG4LSq4LWN4LSx4LWN4LSxLl/gtJLgtJXgtY3gtJ/gtYsuX+C0qOC0teC0gi5f4LSh4LS/4LS44LSCLicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICB3ZWVrZGF5cyA6ICfgtJ7gtL7gtK/gtLHgtL7gtLTgtY3gtJpf4LSk4LS/4LSZ4LWN4LSV4LSz4LS+4LS04LWN4LSaX+C0muC1iuC0teC1jeC0teC0vuC0tOC1jeC0ml/gtKzgtYHgtKfgtKjgtL7gtLTgtY3gtJpf4LS14LWN4LSv4LS+4LS04LS+4LS04LWN4LSaX+C0teC1huC0s+C1jeC0s+C0v+C0r+C0vuC0tOC1jeC0ml/gtLbgtKjgtL/gtK/gtL7gtLTgtY3gtJonLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICfgtJ7gtL7gtK/gtbxf4LSk4LS/4LSZ4LWN4LSV4LW+X+C0muC1iuC0teC1jeC0tV/gtKzgtYHgtKfgtbtf4LS14LWN4LSv4LS+4LS04LSCX+C0teC1huC0s+C1jeC0s+C0v1/gtLbgtKjgtL8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn4LSe4LS+X+C0pOC0v1/gtJrgtYpf4LSs4LWBX+C0teC1jeC0r+C0vl/gtLXgtYZf4LS2Jy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdBIGg6bW0gLeC0qOC1gScsXG4gICAgICAgIExUUyA6ICdBIGg6bW06c3MgLeC0qOC1gScsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZLCBBIGg6bW0gLeC0qOC1gScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVksIEEgaDptbSAt4LSo4LWBJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+C0h+C0qOC1jeC0qOC1jV0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vgtKjgtL7gtLPgtYZdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCwgTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vgtIfgtKjgtY3gtKjgtLLgtYZdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW+C0leC0tOC0v+C0nuC1jeC0nl0gZGRkZCwgTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMg4LSV4LS04LS/4LSe4LWN4LSe4LWNJyxcbiAgICAgICAgcGFzdCA6ICclcyDgtK7gtYHgtbvgtKrgtY0nLFxuICAgICAgICBzIDogJ+C0heC1veC0qiDgtKjgtL/gtK7gtL/gtLfgtJngtY3gtJngtb4nLFxuICAgICAgICBtIDogJ+C0kuC0sOC1gSDgtK7gtL/gtKjgtL/gtLHgtY3gtLHgtY0nLFxuICAgICAgICBtbSA6ICclZCDgtK7gtL/gtKjgtL/gtLHgtY3gtLHgtY0nLFxuICAgICAgICBoIDogJ+C0kuC0sOC1gSDgtK7gtKPgtL/gtJXgtY3gtJXgtYLgtbwnLFxuICAgICAgICBoaCA6ICclZCDgtK7gtKPgtL/gtJXgtY3gtJXgtYLgtbwnLFxuICAgICAgICBkIDogJ+C0kuC0sOC1gSDgtKbgtL/gtLXgtLjgtIInLFxuICAgICAgICBkZCA6ICclZCDgtKbgtL/gtLXgtLjgtIInLFxuICAgICAgICBNIDogJ+C0kuC0sOC1gSDgtK7gtL7gtLjgtIInLFxuICAgICAgICBNTSA6ICclZCDgtK7gtL7gtLjgtIInLFxuICAgICAgICB5IDogJ+C0kuC0sOC1gSDgtLXgtbzgtLfgtIInLFxuICAgICAgICB5eSA6ICclZCDgtLXgtbzgtLfgtIInXG4gICAgfSxcbiAgICBtZXJpZGllbVBhcnNlOiAv4LSw4LS+4LSk4LWN4LSw4LS/fOC0sOC0vuC0teC0v+C0suC1hnzgtIngtJrgtY3gtJog4LSV4LS04LS/4LSe4LWN4LSe4LWNfOC0teC1iOC0leC1geC0qOC1jeC0qOC1h+C0sOC0gnzgtLDgtL7gtKTgtY3gtLDgtL8vaSxcbiAgICBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG1lcmlkaWVtID09PSAn4LSw4LS+4LSk4LWN4LSw4LS/JyAmJiBob3VyID49IDQpIHx8XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPT09ICfgtIngtJrgtY3gtJog4LSV4LS04LS/4LSe4LWN4LSe4LWNJyB8fFxuICAgICAgICAgICAgICAgIG1lcmlkaWVtID09PSAn4LS14LWI4LSV4LWB4LSo4LWN4LSo4LWH4LSw4LSCJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+C0sOC0vuC0pOC1jeC0sOC0vyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+C0sOC0vuC0teC0v+C0suC1hic7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gJ+C0ieC0muC1jeC0miDgtJXgtLTgtL/gtJ7gtY3gtJ7gtY0nO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuICfgtLXgtYjgtJXgtYHgtKjgtY3gtKjgtYfgtLDgtIInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICfgtLDgtL7gtKTgtY3gtLDgtL8nO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnJldHVybiBtbDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL21sLmpzXG4vLyBtb2R1bGUgaWQgPSA3Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSA0OSJdLCJzb3VyY2VSb290IjoiIn0=