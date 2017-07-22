webpackJsonp([56],{

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eng Minutt', 'enger Minutt'],
        'h': ['eng Stonn', 'enger Stonn'],
        'd': ['een Dag', 'engem Dag'],
        'M': ['ee Mount', 'engem Mount'],
        'y': ['ee Joer', 'engem Joer']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'a ' + string;
    }
    return 'an ' + string;
}
function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'viru ' + string;
    }
    return 'virun ' + string;
}
/**
 * Returns true if the word before the given number loses the '-n' ending.
 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
 *
 * @param number {integer}
 * @returns {boolean}
 */
function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number < 0) {
        // Negative Number --> always true
        return true;
    } else if (number < 10) {
        // Only 1 digit
        if (4 <= number && number <= 7) {
            return true;
        }
        return false;
    } else if (number < 100) {
        // 2 digits
        var lastDigit = number % 10, firstDigit = number / 10;
        if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
        }
        return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
        // 3 or 4 digits --> recursively check first digit
        while (number >= 10) {
            number = number / 10;
        }
        return eifelerRegelAppliesToNumber(number);
    } else {
        // Anything larger than 4 digits: recursively check first n-3 digits
        number = number / 1000;
        return eifelerRegelAppliesToNumber(number);
    }
}

var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm [Auer]',
        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
        sameDay: '[Haut um] LT',
        sameElse: 'L',
        nextDay: '[Muer um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gëschter um] LT',
        lastWeek: function () {
            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
            switch (this.day()) {
                case 2:
                case 4:
                    return '[Leschten] dddd [um] LT';
                default:
                    return '[Leschte] dddd [um] LT';
            }
        }
    },
    relativeTime : {
        future : processFutureTime,
        past : processPastTime,
        s : 'e puer Sekonnen',
        m : processRelativeTime,
        mm : '%d Minutten',
        h : processRelativeTime,
        hh : '%d Stonnen',
        d : processRelativeTime,
        dd : '%d Deeg',
        M : processRelativeTime,
        MM : '%d Méint',
        y : processRelativeTime,
        yy : '%d Joer'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lb;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTHV4ZW1ib3VyZ2lzaCBbbGJdXG4vLyEgYXV0aG9yIDogbXdlaW1lcnNraXJjaCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9td2VpbWVyc2tpcmNoXG4vLyEgYXV0aG9yIDogRGF2aWQgUmFpc29uIDogaHR0cHM6Ly9naXRodWIuY29tL2t3aXNhdHpcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICdtJzogWydlbmcgTWludXR0JywgJ2VuZ2VyIE1pbnV0dCddLFxuICAgICAgICAnaCc6IFsnZW5nIFN0b25uJywgJ2VuZ2VyIFN0b25uJ10sXG4gICAgICAgICdkJzogWydlZW4gRGFnJywgJ2VuZ2VtIERhZyddLFxuICAgICAgICAnTSc6IFsnZWUgTW91bnQnLCAnZW5nZW0gTW91bnQnXSxcbiAgICAgICAgJ3knOiBbJ2VlIEpvZXInLCAnZW5nZW0gSm9lciddXG4gICAgfTtcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG59XG5mdW5jdGlvbiBwcm9jZXNzRnV0dXJlVGltZShzdHJpbmcpIHtcbiAgICB2YXIgbnVtYmVyID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZignICcpKTtcbiAgICBpZiAoZWlmZWxlclJlZ2VsQXBwbGllc1RvTnVtYmVyKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuICdhICcgKyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiAnYW4gJyArIHN0cmluZztcbn1cbmZ1bmN0aW9uIHByb2Nlc3NQYXN0VGltZShzdHJpbmcpIHtcbiAgICB2YXIgbnVtYmVyID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZignICcpKTtcbiAgICBpZiAoZWlmZWxlclJlZ2VsQXBwbGllc1RvTnVtYmVyKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuICd2aXJ1ICcgKyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiAndmlydW4gJyArIHN0cmluZztcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB3b3JkIGJlZm9yZSB0aGUgZ2l2ZW4gbnVtYmVyIGxvc2VzIHRoZSAnLW4nIGVuZGluZy5cbiAqIGUuZy4gJ2FuIDEwIERlZWcnIGJ1dCAnYSA1IERlZWcnXG4gKlxuICogQHBhcmFtIG51bWJlciB7aW50ZWdlcn1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyLCAxMCk7XG4gICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvLyBOZWdhdGl2ZSBOdW1iZXIgLS0+IGFsd2F5cyB0cnVlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgMTApIHtcbiAgICAgICAgLy8gT25seSAxIGRpZ2l0XG4gICAgICAgIGlmICg0IDw9IG51bWJlciAmJiBudW1iZXIgPD0gNykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgMTAwKSB7XG4gICAgICAgIC8vIDIgZGlnaXRzXG4gICAgICAgIHZhciBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCwgZmlyc3REaWdpdCA9IG51bWJlciAvIDEwO1xuICAgICAgICBpZiAobGFzdERpZ2l0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZWlmZWxlclJlZ2VsQXBwbGllc1RvTnVtYmVyKGZpcnN0RGlnaXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobGFzdERpZ2l0KTtcbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMDAwKSB7XG4gICAgICAgIC8vIDMgb3IgNCBkaWdpdHMgLS0+IHJlY3Vyc2l2ZWx5IGNoZWNrIGZpcnN0IGRpZ2l0XG4gICAgICAgIHdoaWxlIChudW1iZXIgPj0gMTApIHtcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlciAvIDEwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobnVtYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBbnl0aGluZyBsYXJnZXIgdGhhbiA0IGRpZ2l0czogcmVjdXJzaXZlbHkgY2hlY2sgZmlyc3Qgbi0zIGRpZ2l0c1xuICAgICAgICBudW1iZXIgPSBudW1iZXIgLyAxMDAwO1xuICAgICAgICByZXR1cm4gZWlmZWxlclJlZ2VsQXBwbGllc1RvTnVtYmVyKG51bWJlcik7XG4gICAgfVxufVxuXG52YXIgbGIgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdsYicsIHtcbiAgICBtb250aHM6ICdKYW51YXJfRmVicnVhcl9Nw6RlcnpfQWJyw6tsbF9NZWVfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydDogJ0phbi5fRmVici5fTXJ6Ll9BYnIuX01lZV9KdW4uX0p1bC5fQXVnLl9TZXB0Ll9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICB3ZWVrZGF5czogJ1Nvbm5kZWdfTcOpaW5kZWdfRMOrbnNjaGRlZ19Nw6t0dHdvY2hfRG9ubmVzY2hkZWdfRnJlaWRlZ19TYW1zY2hkZWcnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydDogJ1NvLl9Nw6kuX0TDqy5fTcOrLl9Eby5fRnIuX1NhLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbjogJ1NvX03DqV9Ew6tfTcOrX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdIOm1tIFtBdWVyXScsXG4gICAgICAgIExUUzogJ0g6bW06c3MgW0F1ZXJdJyxcbiAgICAgICAgTDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tIFtBdWVyXScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSBbQXVlcl0nXG4gICAgfSxcbiAgICBjYWxlbmRhcjoge1xuICAgICAgICBzYW1lRGF5OiAnW0hhdXQgdW1dIExUJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgbmV4dERheTogJ1tNdWVyIHVtXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUJyxcbiAgICAgICAgbGFzdERheTogJ1tHw6tzY2h0ZXIgdW1dIExUJyxcbiAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIERpZmZlcmVudCBkYXRlIHN0cmluZyBmb3IgJ0TDq25zY2hkZWcnIChUdWVzZGF5KSBhbmQgJ0Rvbm5lc2NoZGVnJyAoVGh1cnNkYXkpIGR1ZSB0byBwaG9ub2xvZ2ljYWwgcnVsZVxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbTGVzY2h0ZW5dIGRkZGQgW3VtXSBMVCc7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbTGVzY2h0ZV0gZGRkZCBbdW1dIExUJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiBwcm9jZXNzRnV0dXJlVGltZSxcbiAgICAgICAgcGFzdCA6IHByb2Nlc3NQYXN0VGltZSxcbiAgICAgICAgcyA6ICdlIHB1ZXIgU2Vrb25uZW4nLFxuICAgICAgICBtIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgbW0gOiAnJWQgTWludXR0ZW4nLFxuICAgICAgICBoIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgaGggOiAnJWQgU3Rvbm5lbicsXG4gICAgICAgIGQgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICBkZCA6ICclZCBEZWVnJyxcbiAgICAgICAgTSA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgIE1NIDogJyVkIE3DqWludCcsXG4gICAgICAgIHkgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB5eSA6ICclZCBKb2VyJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsOiAnJWQuJyxcbiAgICB3ZWVrOiB7XG4gICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gbGI7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9sYi5qc1xuLy8gbW9kdWxlIGlkID0gNzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNTYiXSwic291cmNlUm9vdCI6IiJ9