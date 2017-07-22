webpackJsonp([81],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
var numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
function translate(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
}
function verbalNumber(number, isFuture) {
    return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
}

var fi = moment.defineLocale('fi', {
    months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'Do MMMM[ta] YYYY',
        LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l : 'D.M.YYYY',
        ll : 'Do MMM YYYY',
        lll : 'Do MMM YYYY, [klo] HH.mm',
        llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar : {
        sameDay : '[tänään] [klo] LT',
        nextDay : '[huomenna] [klo] LT',
        nextWeek : 'dddd [klo] LT',
        lastDay : '[eilen] [klo] LT',
        lastWeek : '[viime] dddd[na] [klo] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s päästä',
        past : '%s sitten',
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

return fi;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvZmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRmlubmlzaCBbZmldXG4vLyEgYXV0aG9yIDogVGFybW8gQWlkYW50YXVzdGEgOiBodHRwczovL2dpdGh1Yi5jb20vYmxlYWRvZlxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBudW1iZXJzUGFzdCA9ICdub2xsYSB5a3NpIGtha3NpIGtvbG1lIG5lbGrDpCB2aWlzaSBrdXVzaSBzZWl0c2Vtw6RuIGthaGRla3NhbiB5aGRla3PDpG4nLnNwbGl0KCcgJyk7XG52YXIgbnVtYmVyc0Z1dHVyZSA9IFtcbiAgICAgICAgJ25vbGxhJywgJ3loZGVuJywgJ2thaGRlbicsICdrb2xtZW4nLCAnbmVsasOkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcbiAgICAgICAgbnVtYmVyc1Bhc3RbN10sIG51bWJlcnNQYXN0WzhdLCBudW1iZXJzUGFzdFs5XVxuICAgIF07XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ211dXRhbWFuIHNla3VubmluJyA6ICdtdXV0YW1hIHNla3VudGknO1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGknO1xuICAgICAgICBjYXNlICdtbSc6XG4gICAgICAgICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGlhJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpJztcbiAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aWEnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3DDpGl2w6RuJyA6ICdww6RpdsOkJztcbiAgICAgICAgY2FzZSAnZGQnOlxuICAgICAgICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAncMOkaXbDpG4nIDogJ3DDpGl2w6TDpCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICByZXR1cm4gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXVzaSc7XG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ2t1dWthdWRlbicgOiAna3V1a2F1dHRhJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3NpJztcbiAgICAgICAgY2FzZSAneXknOlxuICAgICAgICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW90dGEnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlc3VsdCA9IHZlcmJhbE51bWJlcihudW1iZXIsIGlzRnV0dXJlKSArICcgJyArIHJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdmVyYmFsTnVtYmVyKG51bWJlciwgaXNGdXR1cmUpIHtcbiAgICByZXR1cm4gbnVtYmVyIDwgMTAgPyAoaXNGdXR1cmUgPyBudW1iZXJzRnV0dXJlW251bWJlcl0gOiBudW1iZXJzUGFzdFtudW1iZXJdKSA6IG51bWJlcjtcbn1cblxudmFyIGZpID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZmknLCB7XG4gICAgbW9udGhzIDogJ3RhbW1pa3V1X2hlbG1pa3V1X21hYWxpc2t1dV9odWh0aWt1dV90b3Vrb2t1dV9rZXPDpGt1dV9oZWluw6RrdXVfZWxva3V1X3N5eXNrdXVfbG9rYWt1dV9tYXJyYXNrdXVfam91bHVrdXUnLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAndGFtbWlfaGVsbWlfbWFhbGlzX2h1aHRpX3RvdWtvX2tlc8OkX2hlaW7DpF9lbG9fc3l5c19sb2thX21hcnJhc19qb3VsdScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdzdW5udW50YWlfbWFhbmFudGFpX3RpaXN0YWlfa2Vza2l2aWlra29fdG9yc3RhaV9wZXJqYW50YWlfbGF1YW50YWknLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c01pbiA6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEgubW0nLFxuICAgICAgICBMVFMgOiAnSEgubW0uc3MnLFxuICAgICAgICBMIDogJ0RELk1NLllZWVknLFxuICAgICAgICBMTCA6ICdEbyBNTU1NW3RhXSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0RvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgICAgIGwgOiAnRC5NLllZWVknLFxuICAgICAgICBsbCA6ICdEbyBNTU0gWVlZWScsXG4gICAgICAgIGxsbCA6ICdEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgICAgICBsbGxsIDogJ2RkZCwgRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW3TDpG7DpMOkbl0gW2tsb10gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1todW9tZW5uYV0gW2tsb10gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFtrbG9dIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbZWlsZW5dIFtrbG9dIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW3ZpaW1lXSBkZGRkW25hXSBba2xvXSBMVCcsXG4gICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICclcyBww6TDpHN0w6QnLFxuICAgICAgICBwYXN0IDogJyVzIHNpdHRlbicsXG4gICAgICAgIHMgOiB0cmFuc2xhdGUsXG4gICAgICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgICAgIG1tIDogdHJhbnNsYXRlLFxuICAgICAgICBoIDogdHJhbnNsYXRlLFxuICAgICAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZCA6IHRyYW5zbGF0ZSxcbiAgICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgICAgIE1NIDogdHJhbnNsYXRlLFxuICAgICAgICB5IDogdHJhbnNsYXRlLFxuICAgICAgICB5eSA6IHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgICBvcmRpbmFsIDogJyVkLicsXG4gICAgd2VlayA6IHtcbiAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGZpO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUvZmkuanNcbi8vIG1vZHVsZSBpZCA9IDY5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDgxIl0sInNvdXJjZVJvb3QiOiIifQ==