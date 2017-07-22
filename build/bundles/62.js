webpackJsonp([62],{

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ka = moment.defineLocale('ka', {
    months : {
        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
    },
    monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays : {
        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
        isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[დღეს] LT[-ზე]',
        nextDay : '[ხვალ] LT[-ზე]',
        lastDay : '[გუშინ] LT[-ზე]',
        nextWeek : '[შემდეგ] dddd LT[-ზე]',
        lastWeek : '[წინა] dddd LT-ზე',
        sameElse : 'L'
    },
    relativeTime : {
        future : function (s) {
            return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                s.replace(/ი$/, 'ში') :
                s + 'ში';
        },
        past : function (s) {
            if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                return s.replace(/(ი|ე)$/, 'ის უკან');
            }
            if ((/წელი/).test(s)) {
                return s.replace(/წელი$/, 'წლის უკან');
            }
        },
        s : 'რამდენიმე წამი',
        m : 'წუთი',
        mm : '%d წუთი',
        h : 'საათი',
        hh : '%d საათი',
        d : 'დღე',
        dd : '%d დღე',
        M : 'თვე',
        MM : '%d თვე',
        y : 'წელი',
        yy : '%d წელი'
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal : function (number) {
        if (number === 0) {
            return number;
        }
        if (number === 1) {
            return number + '-ლი';
        }
        if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
            return 'მე-' + number;
        }
        return number + '-ე';
    },
    week : {
        dow : 1,
        doy : 7
    }
});

return ka;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUva2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMENBQTBDLElBQUksSUFBSSxJQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR2VvcmdpYW4gW2thXVxuLy8hIGF1dGhvciA6IElyYWtsaSBKYW5pYXNodmlsaSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pcmFrbGktamFuaWFzaHZpbGlcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIga2EgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdrYScsIHtcbiAgICBtb250aHMgOiB7XG4gICAgICAgIHN0YW5kYWxvbmU6ICfhg5jhg5Dhg5zhg5Xhg5Dhg6Dhg5hf4YOX4YOU4YOR4YOU4YOg4YOV4YOQ4YOa4YOYX+GDm+GDkOGDoOGDouGDmF/hg5Dhg57hg6Dhg5jhg5rhg5hf4YOb4YOQ4YOY4YOh4YOYX+GDmOGDleGDnOGDmOGDoeGDmF/hg5jhg5Xhg5rhg5jhg6Hhg5hf4YOQ4YOS4YOV4YOY4YOh4YOi4YOdX+GDoeGDlOGDpeGDouGDlOGDm+GDkeGDlOGDoOGDmF/hg53hg6Xhg6Lhg53hg5vhg5Hhg5Thg6Dhg5hf4YOc4YOd4YOU4YOb4YOR4YOU4YOg4YOYX+GDk+GDlOGDmeGDlOGDm+GDkeGDlOGDoOGDmCcuc3BsaXQoJ18nKSxcbiAgICAgICAgZm9ybWF0OiAn4YOY4YOQ4YOc4YOV4YOQ4YOg4YOhX+GDl+GDlOGDkeGDlOGDoOGDleGDkOGDmuGDoV/hg5vhg5Dhg6Dhg6Lhg6Ff4YOQ4YOe4YOg4YOY4YOa4YOY4YOhX+GDm+GDkOGDmOGDoeGDoV/hg5jhg5Xhg5zhg5jhg6Hhg6Ff4YOY4YOV4YOa4YOY4YOh4YOhX+GDkOGDkuGDleGDmOGDoeGDouGDoV/hg6Hhg5Thg6Xhg6Lhg5Thg5vhg5Hhg5Thg6Dhg6Ff4YOd4YOl4YOi4YOd4YOb4YOR4YOU4YOg4YOhX+GDnOGDneGDlOGDm+GDkeGDlOGDoOGDoV/hg5Phg5Thg5nhg5Thg5vhg5Hhg5Thg6Dhg6EnLnNwbGl0KCdfJylcbiAgICB9LFxuICAgIG1vbnRoc1Nob3J0IDogJ+GDmOGDkOGDnF/hg5fhg5Thg5Ff4YOb4YOQ4YOgX+GDkOGDnuGDoF/hg5vhg5Dhg5hf4YOY4YOV4YOcX+GDmOGDleGDml/hg5Dhg5Lhg5Vf4YOh4YOU4YOlX+GDneGDpeGDol/hg5zhg53hg5Rf4YOT4YOU4YOZJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzIDoge1xuICAgICAgICBzdGFuZGFsb25lOiAn4YOZ4YOV4YOY4YOg4YOQX+GDneGDoOGDqOGDkOGDkeGDkOGDl+GDmF/hg6Hhg5Dhg5vhg6jhg5Dhg5Hhg5Dhg5fhg5hf4YOd4YOX4YOu4YOo4YOQ4YOR4YOQ4YOX4YOYX+GDruGDo+GDl+GDqOGDkOGDkeGDkOGDl+GDmF/hg57hg5Dhg6Dhg5Dhg6Hhg5nhg5Thg5Xhg5hf4YOo4YOQ4YOR4YOQ4YOX4YOYJy5zcGxpdCgnXycpLFxuICAgICAgICBmb3JtYXQ6ICfhg5nhg5Xhg5jhg6Dhg5Dhg6Ff4YOd4YOg4YOo4YOQ4YOR4YOQ4YOX4YOhX+GDoeGDkOGDm+GDqOGDkOGDkeGDkOGDl+GDoV/hg53hg5fhg67hg6jhg5Dhg5Hhg5Dhg5fhg6Ff4YOu4YOj4YOX4YOo4YOQ4YOR4YOQ4YOX4YOhX+GDnuGDkOGDoOGDkOGDoeGDmeGDlOGDleGDoV/hg6jhg5Dhg5Hhg5Dhg5fhg6EnLnNwbGl0KCdfJyksXG4gICAgICAgIGlzRm9ybWF0OiAvKOGDrOGDmOGDnOGDkHzhg6jhg5Thg5vhg5Phg5Thg5IpL1xuICAgIH0sXG4gICAgd2Vla2RheXNTaG9ydCA6ICfhg5nhg5Xhg5hf4YOd4YOg4YOoX+GDoeGDkOGDm1/hg53hg5fhg65f4YOu4YOj4YOXX+GDnuGDkOGDoF/hg6jhg5Dhg5EnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAn4YOZ4YOVX+GDneGDoF/hg6Hhg5Bf4YOd4YOXX+GDruGDo1/hg57hg5Bf4YOo4YOQJy5zcGxpdCgnXycpLFxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICBMVCA6ICdoOm1tIEEnLFxuICAgICAgICBMVFMgOiAnaDptbTpzcyBBJyxcbiAgICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgaDptbSBBJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBoOm1tIEEnXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheSA6ICdb4YOT4YOm4YOU4YOhXSBMVFst4YOW4YOUXScsXG4gICAgICAgIG5leHREYXkgOiAnW+GDruGDleGDkOGDml0gTFRbLeGDluGDlF0nLFxuICAgICAgICBsYXN0RGF5IDogJ1vhg5Lhg6Phg6jhg5jhg5xdIExUWy3hg5bhg5RdJyxcbiAgICAgICAgbmV4dFdlZWsgOiAnW+GDqOGDlOGDm+GDk+GDlOGDkl0gZGRkZCBMVFst4YOW4YOUXScsXG4gICAgICAgIGxhc3RXZWVrIDogJ1vhg6zhg5jhg5zhg5BdIGRkZGQgTFQt4YOW4YOUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgZnV0dXJlIDogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiAoLyjhg6zhg5Dhg5vhg5h84YOs4YOj4YOX4YOYfOGDoeGDkOGDkOGDl+GDmHzhg6zhg5Thg5rhg5gpLykudGVzdChzKSA/XG4gICAgICAgICAgICAgICAgcy5yZXBsYWNlKC/hg5gkLywgJ+GDqOGDmCcpIDpcbiAgICAgICAgICAgICAgICBzICsgJ+GDqOGDmCc7XG4gICAgICAgIH0sXG4gICAgICAgIHBhc3QgOiBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgaWYgKCgvKOGDrOGDkOGDm+GDmHzhg6zhg6Phg5fhg5h84YOh4YOQ4YOQ4YOX4YOYfOGDk+GDpuGDlHzhg5fhg5Xhg5QpLykudGVzdChzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoLyjhg5h84YOUKSQvLCAn4YOY4YOhIOGDo+GDmeGDkOGDnCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgv4YOs4YOU4YOa4YOYLykudGVzdChzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL+GDrOGDlOGDmuGDmCQvLCAn4YOs4YOa4YOY4YOhIOGDo+GDmeGDkOGDnCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzIDogJ+GDoOGDkOGDm+GDk+GDlOGDnOGDmOGDm+GDlCDhg6zhg5Dhg5vhg5gnLFxuICAgICAgICBtIDogJ+GDrOGDo+GDl+GDmCcsXG4gICAgICAgIG1tIDogJyVkIOGDrOGDo+GDl+GDmCcsXG4gICAgICAgIGggOiAn4YOh4YOQ4YOQ4YOX4YOYJyxcbiAgICAgICAgaGggOiAnJWQg4YOh4YOQ4YOQ4YOX4YOYJyxcbiAgICAgICAgZCA6ICfhg5Phg6bhg5QnLFxuICAgICAgICBkZCA6ICclZCDhg5Phg6bhg5QnLFxuICAgICAgICBNIDogJ+GDl+GDleGDlCcsXG4gICAgICAgIE1NIDogJyVkIOGDl+GDleGDlCcsXG4gICAgICAgIHkgOiAn4YOs4YOU4YOa4YOYJyxcbiAgICAgICAgeXkgOiAnJWQg4YOs4YOU4YOa4YOYJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogLzB8MS3hg5rhg5h84YOb4YOULVxcZHsxLDJ9fFxcZHsxLDJ9LeGDlC8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3hg5rhg5gnO1xuICAgICAgICB9XG4gICAgICAgIGlmICgobnVtYmVyIDwgMjApIHx8IChudW1iZXIgPD0gMTAwICYmIChudW1iZXIgJSAyMCA9PT0gMCkpIHx8IChudW1iZXIgJSAxMDAgPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gJ+GDm+GDlC0nICsgbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnLeGDlCc7XG4gICAgfSxcbiAgICB3ZWVrIDoge1xuICAgICAgICBkb3cgOiAxLFxuICAgICAgICBkb3kgOiA3XG4gICAgfVxufSk7XG5cbnJldHVybiBrYTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL2thLmpzXG4vLyBtb2R1bGUgaWQgPSA3MTRcbi8vIG1vZHVsZSBjaHVua3MgPSA2MiJdLCJzb3VyY2VSb290IjoiIn0=