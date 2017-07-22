webpackJsonp([104],{

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
        'mm': 'munutenn',
        'MM': 'miz',
        'dd': 'devezh'
    };
    return number + ' ' + mutation(format[key], number);
}
function specialMutationForYears(number) {
    switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
    }
}
function lastNumber(number) {
    if (number > 9) {
        return lastNumber(number % 10);
    }
    return number;
}
function mutation(text, number) {
    if (number === 2) {
        return softMutation(text);
    }
    return text;
}
function softMutation(text) {
    var mutationTable = {
        'm': 'v',
        'b': 'v',
        'd': 'z'
    };
    if (mutationTable[text.charAt(0)] === undefined) {
        return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
}

var br = moment.defineLocale('br', {
    months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h[e]mm A',
        LTS : 'h[e]mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D [a viz] MMMM YYYY',
        LLL : 'D [a viz] MMMM YYYY h[e]mm A',
        LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
    },
    calendar : {
        sameDay : '[Hiziv da] LT',
        nextDay : '[Warc\'hoazh da] LT',
        nextWeek : 'dddd [da] LT',
        lastDay : '[Dec\'h da] LT',
        lastWeek : 'dddd [paset da] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'a-benn %s',
        past : '%s \'zo',
        s : 'un nebeud segondennoù',
        m : 'ur vunutenn',
        mm : relativeTimeWithMutation,
        h : 'un eur',
        hh : '%d eur',
        d : 'un devezh',
        dd : relativeTimeWithMutation,
        M : 'ur miz',
        MM : relativeTimeWithMutation,
        y : 'ur bloaz',
        yy : specialMutationForYears
    },
    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
    ordinal : function (number) {
        var output = (number === 1) ? 'añ' : 'vet';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return br;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvYnIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBCcmV0b24gW2JyXVxuLy8hIGF1dGhvciA6IEplYW4tQmFwdGlzdGUgTGUgRHVpZ291IDogaHR0cHM6Ly9naXRodWIuY29tL2pibGVkdWlnb3VcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoTXV0YXRpb24obnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICB2YXIgZm9ybWF0ID0ge1xuICAgICAgICAnbW0nOiAnbXVudXRlbm4nLFxuICAgICAgICAnTU0nOiAnbWl6JyxcbiAgICAgICAgJ2RkJzogJ2RldmV6aCdcbiAgICB9O1xuICAgIHJldHVybiBudW1iZXIgKyAnICcgKyBtdXRhdGlvbihmb3JtYXRba2V5XSwgbnVtYmVyKTtcbn1cbmZ1bmN0aW9uIHNwZWNpYWxNdXRhdGlvbkZvclllYXJzKG51bWJlcikge1xuICAgIHN3aXRjaCAobGFzdE51bWJlcihudW1iZXIpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICcgYmxvYXonO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICcgdmxvYXonO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxhc3ROdW1iZXIobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGxhc3ROdW1iZXIobnVtYmVyICUgMTApO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyO1xufVxuZnVuY3Rpb24gbXV0YXRpb24odGV4dCwgbnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXR1cm4gc29mdE11dGF0aW9uKHRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbn1cbmZ1bmN0aW9uIHNvZnRNdXRhdGlvbih0ZXh0KSB7XG4gICAgdmFyIG11dGF0aW9uVGFibGUgPSB7XG4gICAgICAgICdtJzogJ3YnLFxuICAgICAgICAnYic6ICd2JyxcbiAgICAgICAgJ2QnOiAneidcbiAgICB9O1xuICAgIGlmIChtdXRhdGlvblRhYmxlW3RleHQuY2hhckF0KDApXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbXV0YXRpb25UYWJsZVt0ZXh0LmNoYXJBdCgwKV0gKyB0ZXh0LnN1YnN0cmluZygxKTtcbn1cblxudmFyIGJyID0gbW9tZW50LmRlZmluZUxvY2FsZSgnYnInLCB7XG4gICAgbW9udGhzIDogJ0dlbnZlcl9DXFwnaHdldnJlcl9NZXVyemhfRWJyZWxfTWFlX01lemhldmVuX0dvdWVyZV9Fb3N0X0d3ZW5nb2xvX0hlcmVfRHVfS2VyenUnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnR2VuX0NcXCdod2VfTWV1X0Vicl9NYWVfRXZlX0dvdV9Fb3NfR3dlX0hlcl9EdV9LZXInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnU3VsX0x1bl9NZXVyemhfTWVyY1xcJ2hlcl9ZYW91X0d3ZW5lcl9TYWRvcm4nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdTdWxfTHVuX01ldV9NZXJfWWFvX0d3ZV9TYWQnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnU3VfTHVfTWVfTWVyX1lhX0d3X1NhJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ2hbZV1tbSBBJyxcbiAgICAgICAgTFRTIDogJ2hbZV1tbTpzcyBBJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBbYSB2aXpdIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIFthIHZpel0gTU1NTSBZWVlZIGhbZV1tbSBBJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIFthIHZpel0gTU1NTSBZWVlZIGhbZV1tbSBBJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW0hpeml2IGRhXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW1dhcmNcXCdob2F6aCBkYV0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtkYV0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1tEZWNcXCdoIGRhXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ2RkZGQgW3Bhc2V0IGRhXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdhLWJlbm4gJXMnLFxuICAgICAgICBwYXN0IDogJyVzIFxcJ3pvJyxcbiAgICAgICAgcyA6ICd1biBuZWJldWQgc2Vnb25kZW5ub8O5JyxcbiAgICAgICAgbSA6ICd1ciB2dW51dGVubicsXG4gICAgICAgIG1tIDogcmVsYXRpdmVUaW1lV2l0aE11dGF0aW9uLFxuICAgICAgICBoIDogJ3VuIGV1cicsXG4gICAgICAgIGhoIDogJyVkIGV1cicsXG4gICAgICAgIGQgOiAndW4gZGV2ZXpoJyxcbiAgICAgICAgZGQgOiByZWxhdGl2ZVRpbWVXaXRoTXV0YXRpb24sXG4gICAgICAgIE0gOiAndXIgbWl6JyxcbiAgICAgICAgTU0gOiByZWxhdGl2ZVRpbWVXaXRoTXV0YXRpb24sXG4gICAgICAgIHkgOiAndXIgYmxvYXonLFxuICAgICAgICB5eSA6IHNwZWNpYWxNdXRhdGlvbkZvclllYXJzXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oYcOxfHZldCkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAobnVtYmVyID09PSAxKSA/ICdhw7EnIDogJ3ZldCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gYnI7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9ici5qc1xuLy8gbW9kdWxlIGlkID0gNjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTA0Il0sInNvdXJjZVJvb3QiOiIifQ==