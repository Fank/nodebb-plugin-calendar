webpackJsonp([69],{

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
function translate(number, withoutSuffix, key, isFuture) {
    var num = number,
        suffix;
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}

var hu = moment.defineLocale('hu', {
    months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY.MM.DD.',
        LL : 'YYYY. MMMM D.',
        LLL : 'YYYY. MMMM D. H:mm',
        LLLL : 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        } else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar : {
        sameDay : '[ma] LT[-kor]',
        nextDay : '[holnap] LT[-kor]',
        nextWeek : function () {
            return week.call(this, true);
        },
        lastDay : '[tegnap] LT[-kor]',
        lastWeek : function () {
            return week.call(this, false);
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s múlva',
        past : '%s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
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

return hu;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvaHUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBIdW5nYXJpYW4gW2h1XVxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB3ZWVrRW5kaW5ncyA9ICd2YXPDoXJuYXAgaMOpdGbFkW4ga2VkZGVuIHN6ZXJkw6FuIGNzw7x0w7ZydMO2a8O2biBww6ludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciBudW0gPSBudW1iZXIsXG4gICAgICAgIHN1ZmZpeDtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnbsOpaMOhbnkgbcOhc29kcGVyYycgOiAnbsOpaMOhbnkgbcOhc29kcGVyY2UnO1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICAgICAgY2FzZSAnbW0nOlxuICAgICAgICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcbiAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgICAgICBjYXNlICdkZCc6XG4gICAgICAgICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDs25hcCcgOiAnIGjDs25hcGphJyk7XG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcbiAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw6l2JyA6ICcgw6l2ZScpO1xuICAgICAgICBjYXNlICd5eSc6XG4gICAgICAgICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOpdicgOiAnIMOpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gd2Vlayhpc0Z1dHVyZSkge1xuICAgIHJldHVybiAoaXNGdXR1cmUgPyAnJyA6ICdbbcO6bHRdICcpICsgJ1snICsgd2Vla0VuZGluZ3NbdGhpcy5kYXkoKV0gKyAnXSBMVFsta29yXSc7XG59XG5cbnZhciBodSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2h1Jywge1xuICAgIG1vbnRocyA6ICdqYW51w6FyX2ZlYnJ1w6FyX23DoXJjaXVzX8OhcHJpbGlzX23DoWp1c19qw7puaXVzX2rDumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w7NiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw6FyY1/DoXByX23DoWpfasO6bl9qw7psX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICd2YXPDoXJuYXBfaMOpdGbFkV9rZWRkX3N6ZXJkYV9jc8O8dMO2cnTDtmtfcMOpbnRla19zem9tYmF0Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAndmFzX2jDqXRfa2VkZF9zemVfY3PDvHRfcMOpbl9zem8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdIOm1tJyxcbiAgICAgICAgTFRTIDogJ0g6bW06c3MnLFxuICAgICAgICBMIDogJ1lZWVkuTU0uREQuJyxcbiAgICAgICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXG4gICAgICAgIExMTCA6ICdZWVlZLiBNTU1NIEQuIEg6bW0nLFxuICAgICAgICBMTExMIDogJ1lZWVkuIE1NTU0gRC4sIGRkZGQgSDptbSdcbiAgICB9LFxuICAgIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxuICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd1JztcbiAgICB9LFxuICAgIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXG4gICAgICAgIG5leHREYXkgOiAnW2hvbG5hcF0gTFRbLWtvcl0nLFxuICAgICAgICBuZXh0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3REYXkgOiAnW3RlZ25hcF0gTFRbLWtvcl0nLFxuICAgICAgICBsYXN0V2VlayA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLmNhbGwodGhpcywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnJXMgbcO6bHZhJyxcbiAgICAgICAgcGFzdCA6ICclcycsXG4gICAgICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgICBoIDogdHJhbnNsYXRlLFxuICAgICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgICAgIE1NIDogdHJhbnNsYXRlLFxuICAgICAgICB5IDogdHJhbnNsYXRlLFxuICAgICAgICB5eSA6IHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGh1O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvaHUuanNcbi8vIG1vZHVsZSBpZCA9IDcwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDY5Il0sInNvdXJjZVJvb3QiOiIifQ==