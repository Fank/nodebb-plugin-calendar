webpackJsonp([54],{

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var units = {
    'm' : 'minutė_minutės_minutę',
    'mm': 'minutės_minučių_minutes',
    'h' : 'valanda_valandos_valandą',
    'hh': 'valandos_valandų_valandas',
    'd' : 'diena_dienos_dieną',
    'dd': 'dienos_dienų_dienas',
    'M' : 'mėnuo_mėnesio_mėnesį',
    'MM': 'mėnesiai_mėnesių_mėnesius',
    'y' : 'metai_metų_metus',
    'yy': 'metai_metų_metus'
};
function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    } else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
function special(number) {
    return number % 10 === 0 || (number > 10 && number < 20);
}
function forms(key) {
    return units[key].split('_');
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
        if (isFuture) {
            return result + forms(key)[1];
        } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
var lt = moment.defineLocale('lt', {
    months : {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays : {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY [m.] MMMM D [d.]',
        LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l : 'YYYY-MM-DD',
        ll : 'YYYY [m.] MMMM D [d.]',
        lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar : {
        sameDay : '[Šiandien] LT',
        nextDay : '[Rytoj] LT',
        nextWeek : 'dddd LT',
        lastDay : '[Vakar] LT',
        lastWeek : '[Praėjusį] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'po %s',
        past : 'prieš %s',
        s : translateSeconds,
        m : translateSingular,
        mm : translate,
        h : translateSingular,
        hh : translate,
        d : translateSingular,
        dd : translate,
        M : translateSingular,
        MM : translate,
        y : translateSingular,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal : function (number) {
        return number + '-oji';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lt;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMaXRodWFuaWFuIFtsdF1cbi8vISBhdXRob3IgOiBNaW5kYXVnYXMgTW96xatyYXMgOiBodHRwczovL2dpdGh1Yi5jb20vbW1venVyYXNcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5pdHMgPSB7XG4gICAgJ20nIDogJ21pbnV0xJdfbWludXTEl3NfbWludXTEmScsXG4gICAgJ21tJzogJ21pbnV0xJdzX21pbnXEjWnFs19taW51dGVzJyxcbiAgICAnaCcgOiAndmFsYW5kYV92YWxhbmRvc192YWxhbmTEhScsXG4gICAgJ2hoJzogJ3ZhbGFuZG9zX3ZhbGFuZMWzX3ZhbGFuZGFzJyxcbiAgICAnZCcgOiAnZGllbmFfZGllbm9zX2RpZW7EhScsXG4gICAgJ2RkJzogJ2RpZW5vc19kaWVuxbNfZGllbmFzJyxcbiAgICAnTScgOiAnbcSXbnVvX23El25lc2lvX23El25lc8SvJyxcbiAgICAnTU0nOiAnbcSXbmVzaWFpX23El25lc2nFs19txJduZXNpdXMnLFxuICAgICd5JyA6ICdtZXRhaV9tZXTFs19tZXR1cycsXG4gICAgJ3l5JzogJ21ldGFpX21ldMWzX21ldHVzJ1xufTtcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNlY29uZHMobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kxJdzJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNGdXR1cmUgPyAna2VsacWzIHNla3VuZMW+acWzJyA6ICdrZWxpYXMgc2VrdW5kZXMnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpbmd1bGFyKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybXMoa2V5KVswXSA6IChpc0Z1dHVyZSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbn1cbmZ1bmN0aW9uIHNwZWNpYWwobnVtYmVyKSB7XG4gICAgcmV0dXJuIG51bWJlciAlIDEwID09PSAwIHx8IChudW1iZXIgPiAxMCAmJiBudW1iZXIgPCAyMCk7XG59XG5mdW5jdGlvbiBmb3JtcyhrZXkpIHtcbiAgICByZXR1cm4gdW5pdHNba2V5XS5zcGxpdCgnXycpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5LCBpc0Z1dHVyZSkge1xuICAgIHZhciByZXN1bHQgPSBudW1iZXIgKyAnICc7XG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXlbMF0sIGlzRnV0dXJlKTtcbiAgICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bWJlcikgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzRnV0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW1iZXIpID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIGx0ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnbHQnLCB7XG4gICAgbW9udGhzIDoge1xuICAgICAgICBmb3JtYXQ6ICdzYXVzaW9fdmFzYXJpb19rb3ZvX2JhbGFuZMW+aW9fZ2VndcW+xJdzX2JpcsW+ZWxpb19saWVwb3NfcnVncGrFq8SNaW9fcnVnc8SXam9fc3BhbGlvX2xhcGtyacSNaW9fZ3J1b2TFvmlvJy5zcGxpdCgnXycpLFxuICAgICAgICBzdGFuZGFsb25lOiAnc2F1c2lzX3Zhc2FyaXNfa292YXNfYmFsYW5kaXNfZ2VndcW+xJdfYmlyxb5lbGlzX2xpZXBhX3J1Z3Bqxat0aXNfcnVnc8SXamlzX3NwYWxpc19sYXBrcml0aXNfZ3J1b2Rpcycuc3BsaXQoJ18nKSxcbiAgICAgICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/fE1NTU0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStEW29EXT8vXG4gICAgfSxcbiAgICBtb250aHNTaG9ydCA6ICdzYXVfdmFzX2tvdl9iYWxfZ2VnX2Jpcl9saWVfcmdwX3Jnc19zcGFfbGFwX2dyZCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6IHtcbiAgICAgICAgZm9ybWF0OiAnc2VrbWFkaWVuxK9fcGlybWFkaWVuxK9fYW50cmFkaWVuxK9fdHJlxI1pYWRpZW7Er19rZXR2aXJ0YWRpZW7Er19wZW5rdGFkaWVuxK9fxaFlxaF0YWRpZW7Erycuc3BsaXQoJ18nKSxcbiAgICAgICAgc3RhbmRhbG9uZTogJ3Nla21hZGllbmlzX3Bpcm1hZGllbmlzX2FudHJhZGllbmlzX3RyZcSNaWFkaWVuaXNfa2V0dmlydGFkaWVuaXNfcGVua3RhZGllbmlzX8WhZcWhdGFkaWVuaXMnLnNwbGl0KCdfJyksXG4gICAgICAgIGlzRm9ybWF0OiAvZGRkZCBISDptbS9cbiAgICB9LFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnU2VrX1Bpcl9BbnRfVHJlX0tldF9QZW5fxaBlxaEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnU19QX0FfVF9LX1BuX8WgJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgICAgTCA6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcbiAgICAgICAgTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgICAgTExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZGQsIEhIOm1tIFt2YWwuXScsXG4gICAgICAgIGwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICAgIGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICAgIGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXG4gICAgICAgIGxsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGQsIEhIOm1tIFt2YWwuXSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vFoGlhbmRpZW5dIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdbUnl0b2pdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW1Zha2FyXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrIDogJ1tQcmHEl2p1c8SvXSBkZGRkIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogJ3BvICVzJyxcbiAgICAgICAgcGFzdCA6ICdwcmllxaEgJXMnLFxuICAgICAgICBzIDogdHJhbnNsYXRlU2Vjb25kcyxcbiAgICAgICAgbSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICAgICAgaCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgICBkZCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgTSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICAgICAgeSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgICB5eSA6IHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LW9qaS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciArICctb2ppJztcbiAgICB9LFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfVxufSk7XG5cbnJldHVybiBsdDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2x0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MjJcbi8vIG1vZHVsZSBjaHVua3MgPSA1NCJdLCJzb3VyY2VSb290IjoiIn0=