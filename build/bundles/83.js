webpackJsonp([83],{

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var eu = moment.defineLocale('eu', {
    months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    monthsParseExact : true,
    weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY[ko] MMMM[ren] D[a]',
        LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
        LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
        l : 'YYYY-M-D',
        ll : 'YYYY[ko] MMM D[a]',
        lll : 'YYYY[ko] MMM D[a] HH:mm',
        llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
    },
    calendar : {
        sameDay : '[gaur] LT[etan]',
        nextDay : '[bihar] LT[etan]',
        nextWeek : 'dddd LT[etan]',
        lastDay : '[atzo] LT[etan]',
        lastWeek : '[aurreko] dddd LT[etan]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s barru',
        past : 'duela %s',
        s : 'segundo batzuk',
        m : 'minutu bat',
        mm : '%d minutu',
        h : 'ordu bat',
        hh : '%d ordu',
        d : 'egun bat',
        dd : '%d egun',
        M : 'hilabete bat',
        MM : '%d hilabete',
        y : 'urte bat',
        yy : '%d urte'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return eu;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZXUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiODMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQmFzcXVlIFtldV1cbi8vISBhdXRob3IgOiBFbmVrbyBJbGxhcnJhbWVuZGkgOiBodHRwczovL2dpdGh1Yi5jb20vZWlsbGFycmFcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgZXUgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdldScsIHtcbiAgICBtb250aHMgOiAndXJ0YXJyaWxhX290c2FpbGFfbWFydHhvYV9hcGlyaWxhX21haWF0emFfZWthaW5hX3V6dGFpbGFfYWJ1enR1YV9pcmFpbGFfdXJyaWFfYXphcm9hX2FiZW5kdWEnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAndXJ0Ll9vdHMuX21hci5fYXBpLl9tYWkuX2VrYS5fdXp0Ll9hYnUuX2lyYS5fdXJyLl9hemEuX2FiZS4nLnNwbGl0KCdfJyksXG4gICAgbW9udGhzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgd2Vla2RheXMgOiAnaWdhbmRlYV9hc3RlbGVoZW5hX2FzdGVhcnRlYV9hc3RlYXprZW5hX29zdGVndW5hX29zdGlyYWxhX2xhcnVuYmF0YScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ2lnLl9hbC5fYXIuX2F6Ll9vZy5fb2wuX2xyLicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdpZ19hbF9hcl9hel9vZ19vbF9scicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICAgIExMIDogJ1lZWVlba29dIE1NTU1bcmVuXSBEW2FdJyxcbiAgICAgICAgTExMIDogJ1lZWVlba29dIE1NTU1bcmVuXSBEW2FdIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBZWVlZW2tvXSBNTU1NW3Jlbl0gRFthXSBISDptbScsXG4gICAgICAgIGwgOiAnWVlZWS1NLUQnLFxuICAgICAgICBsbCA6ICdZWVlZW2tvXSBNTU0gRFthXScsXG4gICAgICAgIGxsbCA6ICdZWVlZW2tvXSBNTU0gRFthXSBISDptbScsXG4gICAgICAgIGxsbGwgOiAnZGRkLCBZWVlZW2tvXSBNTU0gRFthXSBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1tnYXVyXSBMVFtldGFuXScsXG4gICAgICAgIG5leHREYXkgOiAnW2JpaGFyXSBMVFtldGFuXScsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFRbZXRhbl0nLFxuICAgICAgICBsYXN0RGF5IDogJ1thdHpvXSBMVFtldGFuXScsXG4gICAgICAgIGxhc3RXZWVrIDogJ1thdXJyZWtvXSBkZGRkIExUW2V0YW5dJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJyVzIGJhcnJ1JyxcbiAgICAgICAgcGFzdCA6ICdkdWVsYSAlcycsXG4gICAgICAgIHMgOiAnc2VndW5kbyBiYXR6dWsnLFxuICAgICAgICBtIDogJ21pbnV0dSBiYXQnLFxuICAgICAgICBtbSA6ICclZCBtaW51dHUnLFxuICAgICAgICBoIDogJ29yZHUgYmF0JyxcbiAgICAgICAgaGggOiAnJWQgb3JkdScsXG4gICAgICAgIGQgOiAnZWd1biBiYXQnLFxuICAgICAgICBkZCA6ICclZCBlZ3VuJyxcbiAgICAgICAgTSA6ICdoaWxhYmV0ZSBiYXQnLFxuICAgICAgICBNTSA6ICclZCBoaWxhYmV0ZScsXG4gICAgICAgIHkgOiAndXJ0ZSBiYXQnLFxuICAgICAgICB5eSA6ICclZCB1cnRlJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGV1O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZXUuanNcbi8vIG1vZHVsZSBpZCA9IDY5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDgzIl0sInNvdXJjZVJvb3QiOiIifQ==