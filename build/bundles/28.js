webpackJsonp([28],{

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var sq = moment.defineLocale('sq', {
    months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Sot në] LT',
        nextDay : '[Nesër në] LT',
        nextWeek : 'dddd [në] LT',
        lastDay : '[Dje në] LT',
        lastWeek : 'dddd [e kaluar në] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'në %s',
        past : '%s më parë',
        s : 'disa sekonda',
        m : 'një minutë',
        mm : '%d minuta',
        h : 'një orë',
        hh : '%d orë',
        d : 'një ditë',
        dd : '%d ditë',
        M : 'një muaj',
        MM : '%d muaj',
        y : 'një vit',
        yy : '%d vite'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sq;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc3EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQWxiYW5pYW4gW3NxXVxuLy8hIGF1dGhvciA6IEZsYWvDq3JpbSBJc21hbmkgOiBodHRwczovL2dpdGh1Yi5jb20vZmxha2VyaW1pXG4vLyEgYXV0aG9yIDogTWVuZWxpb24gRWxlbnPDumxlIDogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcbi8vISBhdXRob3IgOiBPZXJkIEN1a2FsbGEgOiBodHRwczovL2dpdGh1Yi5jb20vb2VyZFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBzcSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3NxJywge1xuICAgIG1vbnRocyA6ICdKYW5hcl9TaGt1cnRfTWFyc19QcmlsbF9NYWpfUWVyc2hvcl9Lb3JyaWtfR3VzaHRfU2h0YXRvcl9UZXRvcl9Ow6tudG9yX0RoamV0b3InLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnSmFuX1Noa19NYXJfUHJpX01hal9RZXJfS29yX0d1c19TaHRfVGV0X07Dq25fRGhqJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ0UgRGllbF9FIEjDq27Dq19FIE1hcnTDq19FIE3Dq3JrdXLDq19FIEVuanRlX0UgUHJlbXRlX0UgU2h0dW7Dqycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ0RpZV9Iw6tuX01hcl9Nw6tyX0Vual9QcmVfU2h0Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ0RfSF9NYV9Nw6tfRV9QX1NoJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbWVyaWRpZW1QYXJzZTogL1BEfE1ELyxcbiAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKSA9PT0gJ00nO1xuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGhvdXJzIDwgMTIgPyAnUEQnIDogJ01EJztcbiAgICB9LFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1tTb3QgbsOrXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW05lc8OrciBuw6tdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbbsOrXSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW0RqZSBuw6tdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnZGRkZCBbZSBrYWx1YXIgbsOrXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICduw6sgJXMnLFxuICAgICAgICBwYXN0IDogJyVzIG3DqyBwYXLDqycsXG4gICAgICAgIHMgOiAnZGlzYSBzZWtvbmRhJyxcbiAgICAgICAgbSA6ICduasOrIG1pbnV0w6snLFxuICAgICAgICBtbSA6ICclZCBtaW51dGEnLFxuICAgICAgICBoIDogJ25qw6sgb3LDqycsXG4gICAgICAgIGhoIDogJyVkIG9yw6snLFxuICAgICAgICBkIDogJ25qw6sgZGl0w6snLFxuICAgICAgICBkZCA6ICclZCBkaXTDqycsXG4gICAgICAgIE0gOiAnbmrDqyBtdWFqJyxcbiAgICAgICAgTU0gOiAnJWQgbXVhaicsXG4gICAgICAgIHkgOiAnbmrDqyB2aXQnLFxuICAgICAgICB5eSA6ICclZCB2aXRlJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIHNxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvc3EuanNcbi8vIG1vZHVsZSBpZCA9IDc0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDI4Il0sInNvdXJjZVJvb3QiOiIifQ==