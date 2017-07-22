webpackJsonp([53],{

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var units = {
    'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'h': 'stundas_stundām_stunda_stundas'.split('_'),
    'hh': 'stundas_stundām_stunda_stundas'.split('_'),
    'd': 'dienas_dienām_diena_dienas'.split('_'),
    'dd': 'dienas_dienām_diena_dienas'.split('_'),
    'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'y': 'gada_gadiem_gads_gadi'.split('_'),
    'yy': 'gada_gadiem_gads_gadi'.split('_')
};
/**
 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
 */
function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
        // E.g. "21 minūte", "3 minūtes".
        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
        // E.g. "21 minūtes" as in "pēc 21 minūtes".
        // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
}
function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
}
function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
}

var lv = moment.defineLocale('lv', {
    months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY.',
        LL : 'YYYY. [gada] D. MMMM',
        LLL : 'YYYY. [gada] D. MMMM, HH:mm',
        LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar : {
        sameDay : '[Šodien pulksten] LT',
        nextDay : '[Rīt pulksten] LT',
        nextWeek : 'dddd [pulksten] LT',
        lastDay : '[Vakar pulksten] LT',
        lastWeek : '[Pagājušā] dddd [pulksten] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'pēc %s',
        past : 'pirms %s',
        s : relativeSeconds,
        m : relativeTimeWithSingular,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithSingular,
        hh : relativeTimeWithPlural,
        d : relativeTimeWithSingular,
        dd : relativeTimeWithPlural,
        M : relativeTimeWithSingular,
        MM : relativeTimeWithPlural,
        y : relativeTimeWithSingular,
        yy : relativeTimeWithPlural
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lv;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbHYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsUUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJCQUEyQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMYXR2aWFuIFtsdl1cbi8vISBhdXRob3IgOiBLcmlzdGFwcyBLYXJsc29ucyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9za2Frcmlcbi8vISBhdXRob3IgOiBKxIFuaXMgRWxtZXJpcyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9KYW5pc0VcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5pdHMgPSB7XG4gICAgJ20nOiAnbWluxat0ZXNfbWluxat0xJNtX21pbsWrdGVfbWluxat0ZXMnLnNwbGl0KCdfJyksXG4gICAgJ21tJzogJ21pbsWrdGVzX21pbsWrdMSTbV9taW7Fq3RlX21pbsWrdGVzJy5zcGxpdCgnXycpLFxuICAgICdoJzogJ3N0dW5kYXNfc3R1bmTEgW1fc3R1bmRhX3N0dW5kYXMnLnNwbGl0KCdfJyksXG4gICAgJ2hoJzogJ3N0dW5kYXNfc3R1bmTEgW1fc3R1bmRhX3N0dW5kYXMnLnNwbGl0KCdfJyksXG4gICAgJ2QnOiAnZGllbmFzX2RpZW7EgW1fZGllbmFfZGllbmFzJy5zcGxpdCgnXycpLFxuICAgICdkZCc6ICdkaWVuYXNfZGllbsSBbV9kaWVuYV9kaWVuYXMnLnNwbGl0KCdfJyksXG4gICAgJ00nOiAnbcSTbmXFoWFfbcSTbmXFoWllbV9txJNuZXNpc19txJNuZcWhaScuc3BsaXQoJ18nKSxcbiAgICAnTU0nOiAnbcSTbmXFoWFfbcSTbmXFoWllbV9txJNuZXNpc19txJNuZcWhaScuc3BsaXQoJ18nKSxcbiAgICAneSc6ICdnYWRhX2dhZGllbV9nYWRzX2dhZGknLnNwbGl0KCdfJyksXG4gICAgJ3l5JzogJ2dhZGFfZ2FkaWVtX2dhZHNfZ2FkaScuc3BsaXQoJ18nKVxufTtcbi8qKlxuICogQHBhcmFtIHdpdGhvdXRTdWZmaXggYm9vbGVhbiB0cnVlID0gYSBsZW5ndGggb2YgdGltZTsgZmFsc2UgPSBiZWZvcmUvYWZ0ZXIgYSBwZXJpb2Qgb2YgdGltZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KGZvcm1zLCBudW1iZXIsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICAvLyBFLmcuIFwiMjEgbWluxat0ZVwiLCBcIjMgbWluxat0ZXNcIi5cbiAgICAgICAgcmV0dXJuIG51bWJlciAlIDEwID09PSAxICYmIG51bWJlciAlIDEwMCAhPT0gMTEgPyBmb3Jtc1syXSA6IGZvcm1zWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEUuZy4gXCIyMSBtaW7Fq3Rlc1wiIGFzIGluIFwicMSTYyAyMSBtaW7Fq3Rlc1wiLlxuICAgICAgICAvLyBFLmcuIFwiMyBtaW7Fq3TEk21cIiBhcyBpbiBcInDEk2MgMyBtaW7Fq3TEk21cIi5cbiAgICAgICAgcmV0dXJuIG51bWJlciAlIDEwID09PSAxICYmIG51bWJlciAlIDEwMCAhPT0gMTEgPyBmb3Jtc1swXSA6IGZvcm1zWzFdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICByZXR1cm4gbnVtYmVyICsgJyAnICsgZm9ybWF0KHVuaXRzW2tleV0sIG51bWJlciwgd2l0aG91dFN1ZmZpeCk7XG59XG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoU2luZ3VsYXIobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICByZXR1cm4gZm9ybWF0KHVuaXRzW2tleV0sIG51bWJlciwgd2l0aG91dFN1ZmZpeCk7XG59XG5mdW5jdGlvbiByZWxhdGl2ZVNlY29uZHMobnVtYmVyLCB3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZGHFvmFzIHNla3VuZGVzJyA6ICdkYcW+xIFtIHNla3VuZMSTbSc7XG59XG5cbnZhciBsdiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2x2Jywge1xuICAgIG1vbnRocyA6ICdqYW52xIFyaXNfZmVicnXEgXJpc19tYXJ0c19hcHLEq2xpc19tYWlqc19qxatuaWpzX2rFq2xpanNfYXVndXN0c19zZXB0ZW1icmlzX29rdG9icmlzX25vdmVtYnJpc19kZWNlbWJyaXMnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tYXJfYXByX21haV9qxatuX2rFq2xfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdzdsSTdGRpZW5hX3Bpcm1kaWVuYV9vdHJkaWVuYV90cmXFoWRpZW5hX2NldHVydGRpZW5hX3BpZWt0ZGllbmFfc2VzdGRpZW5hJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAnU3ZfUF9PX1RfQ19Qa19TJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ1N2X1BfT19UX0NfUGtfUycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQuTU0uWVlZWS4nLFxuICAgICAgICBMTCA6ICdZWVlZLiBbZ2FkYV0gRC4gTU1NTScsXG4gICAgICAgIExMTCA6ICdZWVlZLiBbZ2FkYV0gRC4gTU1NTSwgSEg6bW0nLFxuICAgICAgICBMTExMIDogJ1lZWVkuIFtnYWRhXSBELiBNTU1NLCBkZGRkLCBISDptbSdcbiAgICB9LFxuICAgIGNhbGVuZGFyIDoge1xuICAgICAgICBzYW1lRGF5IDogJ1vFoG9kaWVuIHB1bGtzdGVuXSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW1LEq3QgcHVsa3N0ZW5dIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVsa3N0ZW5dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbVmFrYXIgcHVsa3N0ZW5dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW1BhZ8SBanXFocSBXSBkZGRkIFtwdWxrc3Rlbl0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAncMSTYyAlcycsXG4gICAgICAgIHBhc3QgOiAncGlybXMgJXMnLFxuICAgICAgICBzIDogcmVsYXRpdmVTZWNvbmRzLFxuICAgICAgICBtIDogcmVsYXRpdmVUaW1lV2l0aFNpbmd1bGFyLFxuICAgICAgICBtbSA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIGggOiByZWxhdGl2ZVRpbWVXaXRoU2luZ3VsYXIsXG4gICAgICAgIGhoIDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgZCA6IHJlbGF0aXZlVGltZVdpdGhTaW5ndWxhcixcbiAgICAgICAgZGQgOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgICAgICBNIDogcmVsYXRpdmVUaW1lV2l0aFNpbmd1bGFyLFxuICAgICAgICBNTSA6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIHkgOiByZWxhdGl2ZVRpbWVXaXRoU2luZ3VsYXIsXG4gICAgICAgIHl5IDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGx2O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvbHYuanNcbi8vIG1vZHVsZSBpZCA9IDcyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUzIl0sInNvdXJjZVJvb3QiOiIifQ==