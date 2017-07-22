webpackJsonp([19],{

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var th = moment.defineLocale('th', {
    months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
    weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY เวลา H:mm',
        LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        } else {
            return 'หลังเที่ยง';
        }
    },
    calendar : {
        sameDay : '[วันนี้ เวลา] LT',
        nextDay : '[พรุ่งนี้ เวลา] LT',
        nextWeek : 'dddd[หน้า เวลา] LT',
        lastDay : '[เมื่อวานนี้ เวลา] LT',
        lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'อีก %s',
        past : '%sที่แล้ว',
        s : 'ไม่กี่วินาที',
        m : '1 นาที',
        mm : '%d นาที',
        h : '1 ชั่วโมง',
        hh : '%d ชั่วโมง',
        d : '1 วัน',
        dd : '%d วัน',
        M : '1 เดือน',
        MM : '%d เดือน',
        y : '1 ปี',
        yy : '%d ปี'
    }
});

return th;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBUaGFpIFt0aF1cbi8vISBhdXRob3IgOiBLcmlkc2FkYSBUaGFuYWJ1bHBvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vc2lyblxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB0aCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3RoJywge1xuICAgIG1vbnRocyA6ICfguKHguIHguKPguLLguITguKFf4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMX+C4oeC4teC4meC4suC4hOC4oV/guYDguKHguKnguLLguKLguJlf4Lie4Lik4Lip4Lig4Liy4LiE4LihX+C4oeC4tOC4luC4uOC4meC4suC4ouC4mV/guIHguKPguIHguI7guLLguITguKFf4Liq4Li04LiH4Lir4Liy4LiE4LihX+C4geC4seC4meC4ouC4suC4ouC4mV/guJXguLjguKXguLLguITguKFf4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZX+C4mOC4seC4meC4p+C4suC4hOC4oScuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICfguKEu4LiELl/guIEu4LieLl/guKHguLUu4LiELl/guYDguKEu4LiiLl/guJ4u4LiELl/guKHguLQu4LiiLl/guIEu4LiELl/guKou4LiELl/guIEu4LiiLl/guJUu4LiELl/guJ4u4LiiLl/guJgu4LiELicuc3BsaXQoJ18nKSxcbiAgICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICAgIHdlZWtkYXlzIDogJ+C4reC4suC4l+C4tOC4leC4ouC5jF/guIjguLHguJnguJfguKPguYxf4Lit4Lix4LiH4LiE4Liy4LijX+C4nuC4uOC4mF/guJ7guKTguKvguLHguKrguJrguJTguLVf4Lio4Li44LiB4Lij4LmMX+C5gOC4quC4suC4o+C5jCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ+C4reC4suC4l+C4tOC4leC4ouC5jF/guIjguLHguJnguJfguKPguYxf4Lit4Lix4LiH4LiE4Liy4LijX+C4nuC4uOC4mF/guJ7guKTguKvguLHguKpf4Lio4Li44LiB4Lij4LmMX+C5gOC4quC4suC4o+C5jCcuc3BsaXQoJ18nKSwgLy8geWVzLCB0aHJlZSBjaGFyYWN0ZXJzIGRpZmZlcmVuY2VcbiAgICB3ZWVrZGF5c01pbiA6ICfguK3guLIuX+C4iC5f4LitLl/guJ4uX+C4nuC4pC5f4LioLl/guKouJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gICAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgIExUIDogJ0g6bW0nLFxuICAgICAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJyxcbiAgICAgICAgTExMTCA6ICfguKfguLHguJlkZGRk4LiX4Li14LmIIEQgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJ1xuICAgIH0sXG4gICAgbWVyaWRpZW1QYXJzZTogL+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4h3zguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcvLFxuICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT09ICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xuICAgIH0sXG4gICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIHJldHVybiAn4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAn4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW+C4p+C4seC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb4Lie4Lij4Li44LmI4LiH4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkW+C4q+C4meC5ieC4siDguYDguKfguKXguLJdIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdb4LmA4Lih4Li34LmI4Lit4Lin4Liy4LiZ4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdb4Lin4Lix4LiZXWRkZGRb4LiX4Li14LmI4LmB4Lil4LmJ4LinIOC5gOC4p+C4peC4sl0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAn4Lit4Li14LiBICVzJyxcbiAgICAgICAgcGFzdCA6ICclc+C4l+C4teC5iOC5geC4peC5ieC4pycsXG4gICAgICAgIHMgOiAn4LmE4Lih4LmI4LiB4Li14LmI4Lin4Li04LiZ4Liy4LiX4Li1JyxcbiAgICAgICAgbSA6ICcxIOC4meC4suC4l+C4tScsXG4gICAgICAgIG1tIDogJyVkIOC4meC4suC4l+C4tScsXG4gICAgICAgIGggOiAnMSDguIrguLHguYjguKfguYLguKHguIcnLFxuICAgICAgICBoaCA6ICclZCDguIrguLHguYjguKfguYLguKHguIcnLFxuICAgICAgICBkIDogJzEg4Lin4Lix4LiZJyxcbiAgICAgICAgZGQgOiAnJWQg4Lin4Lix4LiZJyxcbiAgICAgICAgTSA6ICcxIOC5gOC4lOC4t+C4reC4mScsXG4gICAgICAgIE1NIDogJyVkIOC5gOC4lOC4t+C4reC4mScsXG4gICAgICAgIHkgOiAnMSDguJvguLUnLFxuICAgICAgICB5eSA6ICclZCDguJvguLUnXG4gICAgfVxufSk7XG5cbnJldHVybiB0aDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVtb3ZlQU1ELmpzIS4vfi9tb21lbnQvbG9jYWxlL3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSJdLCJzb3VyY2VSb290IjoiIn0=