webpackJsonp([18],{

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tlPh = moment.defineLocale('tl-ph', {
    months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'MM/D/YYYY',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY HH:mm',
        LLLL : 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar : {
        sameDay: 'LT [ngayong araw]',
        nextDay: '[Bukas ng] LT',
        nextWeek: 'LT [sa susunod na] dddd',
        lastDay: 'LT [kahapon]',
        lastWeek: 'LT [noong nakaraang] dddd',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'sa loob ng %s',
        past : '%s ang nakalipas',
        s : 'ilang segundo',
        m : 'isang minuto',
        mm : '%d minuto',
        h : 'isang oras',
        hh : '%d oras',
        d : 'isang araw',
        dd : '%d araw',
        M : 'isang buwan',
        MM : '%d buwan',
        y : 'isang taon',
        yy : '%d taon'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tlPh;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdGwtcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVGFnYWxvZyAoUGhpbGlwcGluZXMpIFt0bC1waF1cbi8vISBhdXRob3IgOiBEYW4gSGFnbWFuIDogaHR0cHM6Ly9naXRodWIuY29tL2hhZ21hbmRhblxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB0bFBoID0gbW9tZW50LmRlZmluZUxvY2FsZSgndGwtcGgnLCB7XG4gICAgbW9udGhzIDogJ0VuZXJvX1BlYnJlcm9fTWFyc29fQWJyaWxfTWF5b19IdW55b19IdWx5b19BZ29zdG9fU2V0eWVtYnJlX09rdHVicmVfTm9ieWVtYnJlX0Rpc3llbWJyZScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdFbmVfUGViX01hcl9BYnJfTWF5X0h1bl9IdWxfQWdvX1NldF9Pa3RfTm9iX0Rpcycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdMaW5nZ29fTHVuZXNfTWFydGVzX01peWVya3VsZXNfSHV3ZWJlc19CaXllcm5lc19TYWJhZG8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdMaW5fTHVuX01hcl9NaXlfSHV3X0JpeV9TYWInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnTGlfTHVfTWFfTWlfSHVfQmlfU2FiJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnTU0vRC9ZWVlZJyxcbiAgICAgICAgTEwgOiAnTU1NTSBELCBZWVlZJyxcbiAgICAgICAgTExMIDogJ01NTU0gRCwgWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgTU1NTSBERCwgWVlZWSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5OiAnTFQgW25nYXlvbmcgYXJhd10nLFxuICAgICAgICBuZXh0RGF5OiAnW0J1a2FzIG5nXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnTFQgW3NhIHN1c3Vub2QgbmFdIGRkZGQnLFxuICAgICAgICBsYXN0RGF5OiAnTFQgW2thaGFwb25dJyxcbiAgICAgICAgbGFzdFdlZWs6ICdMVCBbbm9vbmcgbmFrYXJhYW5nXSBkZGRkJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnc2EgbG9vYiBuZyAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgYW5nIG5ha2FsaXBhcycsXG4gICAgICAgIHMgOiAnaWxhbmcgc2VndW5kbycsXG4gICAgICAgIG0gOiAnaXNhbmcgbWludXRvJyxcbiAgICAgICAgbW0gOiAnJWQgbWludXRvJyxcbiAgICAgICAgaCA6ICdpc2FuZyBvcmFzJyxcbiAgICAgICAgaGggOiAnJWQgb3JhcycsXG4gICAgICAgIGQgOiAnaXNhbmcgYXJhdycsXG4gICAgICAgIGRkIDogJyVkIGFyYXcnLFxuICAgICAgICBNIDogJ2lzYW5nIGJ1d2FuJyxcbiAgICAgICAgTU0gOiAnJWQgYnV3YW4nLFxuICAgICAgICB5IDogJ2lzYW5nIHRhb24nLFxuICAgICAgICB5eSA6ICclZCB0YW9uJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH0sXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIHRsUGg7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS90bC1waC5qc1xuLy8gbW9kdWxlIGlkID0gNzU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiXSwic291cmNlUm9vdCI6IiJ9