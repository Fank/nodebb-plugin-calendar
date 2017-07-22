webpackJsonp([80],{

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fo = moment.defineLocale('fo', {
    months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Í dag kl.] LT',
        nextDay : '[Í morgin kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[Í gjár kl.] LT',
        lastWeek : '[síðstu] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'um %s',
        past : '%s síðani',
        s : 'fá sekund',
        m : 'ein minutt',
        mm : '%d minuttir',
        h : 'ein tími',
        hh : '%d tímar',
        d : 'ein dagur',
        dd : '%d dagar',
        M : 'ein mánaði',
        MM : '%d mánaðir',
        y : 'eitt ár',
        yy : '%d ár'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fo;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRmFyb2VzZSBbZm9dXG4vLyEgYXV0aG9yIDogUmFnbmFyIEpvaGFubmVzZW4gOiBodHRwczovL2dpdGh1Yi5jb20vcmFnbmFyMTIzXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIGZvID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZm8nLCB7XG4gICAgbW9udGhzIDogJ2phbnVhcl9mZWJydWFyX21hcnNfYXByw61sX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbWFyX2Fwcl9tYWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVzJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDogJ3N1bm51ZGFndXJfbcOhbmFkYWd1cl90w71zZGFndXJfbWlrdWRhZ3VyX2jDs3NkYWd1cl9mcsOtZ2dqYWRhZ3VyX2xleWdhcmRhZ3VyJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnc3VuX23DoW5fdMO9c19taWtfaMOzc19mcsOtX2xleScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdzdV9tw6FfdMO9X21pX2jDs19mcl9sZScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEwgOiAnZGRkZCBELiBNTU1NLCBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW8ONIGRhZyBrbC5dIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbw40gbW9yZ2luIGtsLl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtrbC5dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbw40gZ2rDoXIga2wuXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1tzw63DsHN0dV0gZGRkZCBba2xdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ3VtICVzJyxcbiAgICAgICAgcGFzdCA6ICclcyBzw63DsGFuaScsXG4gICAgICAgIHMgOiAnZsOhIHNla3VuZCcsXG4gICAgICAgIG0gOiAnZWluIG1pbnV0dCcsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0dGlyJyxcbiAgICAgICAgaCA6ICdlaW4gdMOtbWknLFxuICAgICAgICBoaCA6ICclZCB0w61tYXInLFxuICAgICAgICBkIDogJ2VpbiBkYWd1cicsXG4gICAgICAgIGRkIDogJyVkIGRhZ2FyJyxcbiAgICAgICAgTSA6ICdlaW4gbcOhbmHDsGknLFxuICAgICAgICBNTSA6ICclZCBtw6FuYcOwaXInLFxuICAgICAgICB5IDogJ2VpdHQgw6FyJyxcbiAgICAgICAgeXkgOiAnJWQgw6FyJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGZvO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZm8uanNcbi8vIG1vZHVsZSBpZCA9IDY5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDgwIl0sInNvdXJjZVJvb3QiOiIifQ==