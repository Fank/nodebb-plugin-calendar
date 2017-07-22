webpackJsonp([23],{

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var sw = moment.defineLocale('sw', {
    months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[leo saa] LT',
        nextDay : '[kesho saa] LT',
        nextWeek : '[wiki ijayo] dddd [saat] LT',
        lastDay : '[jana] LT',
        lastWeek : '[wiki iliyopita] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s baadaye',
        past : 'tokea %s',
        s : 'hivi punde',
        m : 'dakika moja',
        mm : 'dakika %d',
        h : 'saa limoja',
        hh : 'masaa %d',
        d : 'siku moja',
        dd : 'masiku %d',
        M : 'mwezi mmoja',
        MM : 'miezi %d',
        y : 'mwaka mmoja',
        yy : 'miaka %d'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return sw;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvc3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3dhaGlsaSBbc3ddXG4vLyEgYXV0aG9yIDogRmFoYWQgS2Fzc2ltIDogaHR0cHM6Ly9naXRodWIuY29tL2ZhZHNlbFxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBzdyA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3N3Jywge1xuICAgIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hY2hpX0FwcmlsaV9NZWlfSnVuaV9KdWxhaV9BZ29zdGlfU2VwdGVtYmFfT2t0b2JhX05vdmVtYmFfRGVzZW1iYScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hY19BcHJfTWVpX0p1bl9KdWxfQWdvX1NlcF9Pa3RfTm92X0Rlcycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdKdW1hcGlsaV9KdW1hdGF0dV9KdW1hbm5lX0p1bWF0YW5vX0FsaGFtaXNpX0lqdW1hYV9KdW1hbW9zaScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ0pwbF9KdGF0X0pubmVfSnRhbl9BbGhfSWptX0ptb3MnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnSjJfSjNfSjRfSjVfQWxfSWpfSjEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbbGVvIHNhYV0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1trZXNobyBzYWFdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW3dpa2kgaWpheW9dIGRkZGQgW3NhYXRdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbamFuYV0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdbd2lraSBpbGl5b3BpdGFdIGRkZGQgW3NhYXRdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIGJhYWRheWUnLFxuICAgICAgICBwYXN0IDogJ3Rva2VhICVzJyxcbiAgICAgICAgcyA6ICdoaXZpIHB1bmRlJyxcbiAgICAgICAgbSA6ICdkYWtpa2EgbW9qYScsXG4gICAgICAgIG1tIDogJ2Rha2lrYSAlZCcsXG4gICAgICAgIGggOiAnc2FhIGxpbW9qYScsXG4gICAgICAgIGhoIDogJ21hc2FhICVkJyxcbiAgICAgICAgZCA6ICdzaWt1IG1vamEnLFxuICAgICAgICBkZCA6ICdtYXNpa3UgJWQnLFxuICAgICAgICBNIDogJ213ZXppIG1tb2phJyxcbiAgICAgICAgTU0gOiAnbWllemkgJWQnLFxuICAgICAgICB5IDogJ213YWthIG1tb2phJyxcbiAgICAgICAgeXkgOiAnbWlha2EgJWQnXG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gc3c7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9zdy5qc1xuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjMiXSwic291cmNlUm9vdCI6IiJ9