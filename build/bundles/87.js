webpackJsonp([87],{

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
//! comment : miestasmia corrected the translation by colindean

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var eo = moment.defineLocale('eo', {
    months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
    weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
    weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
    weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D[-a de] MMMM, YYYY',
        LLL : 'D[-a de] MMMM, YYYY HH:mm',
        LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function (input) {
        return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'p.t.m.' : 'P.T.M.';
        } else {
            return isLower ? 'a.t.m.' : 'A.T.M.';
        }
    },
    calendar : {
        sameDay : '[Hodiaŭ je] LT',
        nextDay : '[Morgaŭ je] LT',
        nextWeek : 'dddd [je] LT',
        lastDay : '[Hieraŭ je] LT',
        lastWeek : '[pasinta] dddd [je] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'post %s',
        past : 'antaŭ %s',
        s : 'sekundoj',
        m : 'minuto',
        mm : '%d minutoj',
        h : 'horo',
        hh : '%d horoj',
        d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
        dd : '%d tagoj',
        M : 'monato',
        MM : '%d monatoj',
        y : 'jaro',
        yy : '%d jaroj'
    },
    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal : '%da',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return eo;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxRQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkJBQTJCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBFc3BlcmFudG8gW2VvXVxuLy8hIGF1dGhvciA6IENvbGluIERlYW4gOiBodHRwczovL2dpdGh1Yi5jb20vY29saW5kZWFuXG4vLyEgYXV0aG9yIDogTWlhIE5vcmRlbnRvZnQgSW1wZXJhdG9yaSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWVzdGFzbWlhXG4vLyEgY29tbWVudCA6IG1pZXN0YXNtaWEgY29ycmVjdGVkIHRoZSB0cmFuc2xhdGlvbiBieSBjb2xpbmRlYW5cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgZW8gPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdlbycsIHtcbiAgICBtb250aHMgOiAnamFudWFyb19mZWJydWFyb19tYXJ0b19hcHJpbG9fbWFqb19qdW5pb19qdWxpb19hxa1ndXN0b19zZXB0ZW1icm9fb2t0b2Jyb19ub3ZlbWJyb19kZWNlbWJybycuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYcWtZ19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAnZGltYW7EiW9fbHVuZG9fbWFyZG9fbWVya3JlZG9fxLVhxa1kb192ZW5kcmVkb19zYWJhdG8nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdkaW1fbHVuX21hcmRfbWVya1/EtWHFrV92ZW5fc2FiJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ2RpX2x1X21hX21lX8S1YV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ1lZWVktTU0tREQnLFxuICAgICAgICBMTCA6ICdEWy1hIGRlXSBNTU1NLCBZWVlZJyxcbiAgICAgICAgTExMIDogJ0RbLWEgZGVdIE1NTU0sIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ2RkZGQsIFtsYV0gRFstYSBkZV0gTU1NTSwgWVlZWSBISDptbSdcbiAgICB9LFxuICAgIG1lcmlkaWVtUGFyc2U6IC9bYXBdXFwudFxcLm0vaSxcbiAgICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpID09PSAncCc7XG4gICAgfSxcbiAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncC50Lm0uJyA6ICdQLlQuTS4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYS50Lm0uJyA6ICdBLlQuTS4nO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdbSG9kaWHFrSBqZV0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1tNb3JnYcWtIGplXSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW2plXSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW0hpZXJhxa0gamVdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW3Bhc2ludGFdIGRkZGQgW2plXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdwb3N0ICVzJyxcbiAgICAgICAgcGFzdCA6ICdhbnRhxa0gJXMnLFxuICAgICAgICBzIDogJ3Nla3VuZG9qJyxcbiAgICAgICAgbSA6ICdtaW51dG8nLFxuICAgICAgICBtbSA6ICclZCBtaW51dG9qJyxcbiAgICAgICAgaCA6ICdob3JvJyxcbiAgICAgICAgaGggOiAnJWQgaG9yb2onLFxuICAgICAgICBkIDogJ3RhZ28nLC8vbmUgJ2RpdXJubycsIMSJYXIgZXN0YXMgdXppdGEgcG9yIHByb2tzaW11bW9cbiAgICAgICAgZGQgOiAnJWQgdGFnb2onLFxuICAgICAgICBNIDogJ21vbmF0bycsXG4gICAgICAgIE1NIDogJyVkIG1vbmF0b2onLFxuICAgICAgICB5IDogJ2phcm8nLFxuICAgICAgICB5eSA6ICclZCBqYXJvaidcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfWEvLFxuICAgIG9yZGluYWwgOiAnJWRhJyxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH1cbn0pO1xuXG5yZXR1cm4gZW87XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9lby5qc1xuLy8gbW9kdWxlIGlkID0gNjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gODciXSwic291cmNlUm9vdCI6IiJ9