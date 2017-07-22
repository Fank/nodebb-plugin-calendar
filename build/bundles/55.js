webpackJsonp([55],{

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var lo = moment.defineLocale('lo', {
    months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function (input) {
        return input === 'ຕອນແລງ';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ຕອນເຊົ້າ';
        } else {
            return 'ຕອນແລງ';
        }
    },
    calendar : {
        sameDay : '[ມື້ນີ້ເວລາ] LT',
        nextDay : '[ມື້ອື່ນເວລາ] LT',
        nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
        lastDay : '[ມື້ວານນີ້ເວລາ] LT',
        lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ອີກ %s',
        past : '%sຜ່ານມາ',
        s : 'ບໍ່ເທົ່າໃດວິນາທີ',
        m : '1 ນາທີ',
        mm : '%d ນາທີ',
        h : '1 ຊົ່ວໂມງ',
        hh : '%d ຊົ່ວໂມງ',
        d : '1 ມື້',
        dd : '%d ມື້',
        M : '1 ເດືອນ',
        MM : '%d ເດືອນ',
        y : '1 ປີ',
        yy : '%d ປີ'
    },
    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
    ordinal : function (number) {
        return 'ທີ່' + number;
    }
});

return lo;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFDQUFxQyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiI1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMYW8gW2xvXVxuLy8hIGF1dGhvciA6IFJ5YW4gSGFydCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuaGFydDJcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgbG8gPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdsbycsIHtcbiAgICBtb250aHMgOiAn4Lqh4Lqx4LqH4LqB4Lqt4LqZX+C6geC6uOC6oeC6nuC6sl/guqHgurXgupngurJf4LuA4Lqh4Lqq4LqyX+C6nuC6tuC6lOC6quC6sOC6nuC6sl/guqHgurTgupbgurjgupngurJf4LqB4LuN4Lql4Lqw4LqB4Lq74LqUX+C6quC6tOC6h+C6q+C6sl/guoHgurHgupnguo3gurJf4LqV4Lq44Lql4LqyX+C6nuC6sOC6iOC6tOC6gV/gupfgurHgupnguqfgurInLnNwbGl0KCdfJyksXG4gICAgbW9udGhzU2hvcnQgOiAn4Lqh4Lqx4LqH4LqB4Lqt4LqZX+C6geC6uOC6oeC6nuC6sl/guqHgurXgupngurJf4LuA4Lqh4Lqq4LqyX+C6nuC6tuC6lOC6quC6sOC6nuC6sl/guqHgurTgupbgurjgupngurJf4LqB4LuN4Lql4Lqw4LqB4Lq74LqUX+C6quC6tOC6h+C6q+C6sl/guoHgurHgupnguo3gurJf4LqV4Lq44Lql4LqyX+C6nuC6sOC6iOC6tOC6gV/gupfgurHgupnguqfgurInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXMgOiAn4Lqt4Lqy4LqX4Lq04LqUX+C6iOC6seC6mV/guq3gurHguofguoTgurLguplf4Lqe4Lq44LqUX+C6nuC6sOC6q+C6seC6lF/guqrgurjguoFf4LuA4Lqq4Lq74LqyJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQgOiAn4LqX4Lq04LqUX+C6iOC6seC6mV/guq3gurHguofguoTgurLguplf4Lqe4Lq44LqUX+C6nuC6sOC6q+C6seC6lF/guqrgurjguoFf4LuA4Lqq4Lq74LqyJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzTWluIDogJ+C6l1/guohf4Lqt4LqEX+C6nl/gup7guqtf4Lqq4LqBX+C6qicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICfguqfgurHguplkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL+C6leC6reC6meC7gOC6iuC6u+C7ieC6snzgupXguq3gupngu4HguqXguocvLFxuICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT09ICfgupXguq3gupngu4HguqXguocnO1xuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAn4LqV4Lqt4LqZ4LuA4LqK4Lq74LuJ4LqyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn4LqV4Lqt4LqZ4LuB4Lql4LqHJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+C6oeC6t+C7ieC6meC6teC7ieC7gOC6p+C6peC6sl0gTFQnLFxuICAgICAgICBuZXh0RGF5IDogJ1vguqHgurfgu4nguq3gurfgu4jgupngu4DguqfguqXgurJdIExUJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW+C6p+C6seC6mV1kZGRkW+C7nOC7ieC6suC7gOC6p+C6peC6sl0gTFQnLFxuICAgICAgICBsYXN0RGF5IDogJ1vguqHgurfgu4nguqfgurLgupngupngurXgu4ngu4DguqfguqXgurJdIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnW+C6p+C6seC6mV1kZGRkW+C7geC6peC7ieC6p+C6meC6teC7ieC7gOC6p+C6peC6sl0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAn4Lqt4Lq14LqBICVzJyxcbiAgICAgICAgcGFzdCA6ICclc+C6nOC7iOC6suC6meC6oeC6sicsXG4gICAgICAgIHMgOiAn4Lqa4LuN4LuI4LuA4LqX4Lq74LuI4Lqy4LuD4LqU4Lqn4Lq04LqZ4Lqy4LqX4Lq1JyxcbiAgICAgICAgbSA6ICcxIOC6meC6suC6l+C6tScsXG4gICAgICAgIG1tIDogJyVkIOC6meC6suC6l+C6tScsXG4gICAgICAgIGggOiAnMSDguorgurvgu4jguqfgu4LguqHguocnLFxuICAgICAgICBoaCA6ICclZCDguorgurvgu4jguqfgu4LguqHguocnLFxuICAgICAgICBkIDogJzEg4Lqh4Lq34LuJJyxcbiAgICAgICAgZGQgOiAnJWQg4Lqh4Lq34LuJJyxcbiAgICAgICAgTSA6ICcxIOC7gOC6lOC6t+C6reC6mScsXG4gICAgICAgIE1NIDogJyVkIOC7gOC6lOC6t+C6reC6mScsXG4gICAgICAgIHkgOiAnMSDgupvgurUnLFxuICAgICAgICB5eSA6ICclZCDgupvgurUnXG4gICAgfSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvKOC6l+C6teC7iClcXGR7MSwyfS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICfgupfgurXgu4gnICsgbnVtYmVyO1xuICAgIH1cbn0pO1xuXG5yZXR1cm4gbG87XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9sby5qc1xuLy8gbW9kdWxlIGlkID0gNzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gNTUiXSwic291cmNlUm9vdCI6IiJ9