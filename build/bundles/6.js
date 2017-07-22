webpackJsonp([6],{

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var yo = moment.defineLocale('yo', {
    months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Ònì ni] LT',
        nextDay : '[Ọ̀la ni] LT',
        nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
        lastDay : '[Àna ni] LT',
        lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ní %s',
        past : '%s kọjá',
        s : 'ìsẹjú aayá die',
        m : 'ìsẹjú kan',
        mm : 'ìsẹjú %d',
        h : 'wákati kan',
        hh : 'wákati %d',
        d : 'ọjọ́ kan',
        dd : 'ọjọ́ %d',
        M : 'osù kan',
        MM : 'osù %d',
        y : 'ọdún kan',
        yy : 'ọdún %d'
    },
    dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
    ordinal : 'ọjọ́ %d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return yo;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUveW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVDQUF1QyxJQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBZb3J1YmEgTmlnZXJpYSBbeW9dXG4vLyEgYXV0aG9yIDogQXRvbGFnYmUgQWJpc295ZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtYmF0b2xhZ2JlXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cblxudmFyIHlvID0gbW9tZW50LmRlZmluZUxvY2FsZSgneW8nLCB7XG4gICAgbW9udGhzIDogJ1PhurnMgXLhurnMgV9FzIByZcyAbGXMgF/hurhy4bq5zIBuYcyAX0nMgGdiZcyBX0XMgGJpYmlfT8yAa3XMgGR1X0Fn4bq5bW9fT8yAZ3XMgW5fT3dld2Vf4buMzIB3YcyAcmHMgF9CZcyBbHXMgV/hu4zMgHDhurnMgMyAJy5zcGxpdCgnXycpLFxuICAgIG1vbnRoc1Nob3J0IDogJ1PhurnMgXJfRcyAcmxf4bq4cm5fScyAZ2JfRcyAYmlfT8yAa3XMgF9BZ+G6uV9PzIBndcyBX093ZV/hu4zMgHdhzIBfQmXMgWxf4buMzIBw4bq5zIDMgCcuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdBzIBpzIBrdcyBX0FqZcyBX0nMgHPhurnMgWd1bl/hu4xq4buNzIFydcyBX+G7jGrhu43MgWLhu41f4bq4dGnMgF9BzIBiYcyBbeG6ucyBdGEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNTaG9ydCA6ICdBzIBpzIBrX0FqZcyBX0nMgHPhurnMgV/hu4xqcl/hu4xqYl/hurh0acyAX0HMgGJhzIEnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnQcyAacyAX0FqX0nMgHNf4buMcl/hu4xiX+G6uHRfQcyAYicuc3BsaXQoJ18nKSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnaDptbSBBJyxcbiAgICAgICAgTFRTIDogJ2g6bW06c3MgQScsXG4gICAgICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIGg6bW0gQScsXG4gICAgICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgaDptbSBBJ1xuICAgIH0sXG4gICAgY2FsZW5kYXIgOiB7XG4gICAgICAgIHNhbWVEYXkgOiAnW0/MgG5pzIAgbmldIExUJyxcbiAgICAgICAgbmV4dERheSA6ICdb4buMzIBsYSBuaV0gTFQnLFxuICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFvhu4xz4bq5zIAgdG/MgW5cXCdi4buNXSBbbmldIExUJyxcbiAgICAgICAgbGFzdERheSA6ICdbQcyAbmEgbmldIExUJyxcbiAgICAgICAgbGFzdFdlZWsgOiAnZGRkZCBb4buMc+G6ucyAIHRvzIFs4buNzIFdIFtuaV0gTFQnLFxuICAgICAgICBzYW1lRWxzZSA6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICBmdXR1cmUgOiAnbmnMgSAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMga+G7jWphzIEnLFxuICAgICAgICBzIDogJ2nMgHPhurlqdcyBIGFheWHMgSBkaWUnLFxuICAgICAgICBtIDogJ2nMgHPhurlqdcyBIGthbicsXG4gICAgICAgIG1tIDogJ2nMgHPhurlqdcyBICVkJyxcbiAgICAgICAgaCA6ICd3YcyBa2F0aSBrYW4nLFxuICAgICAgICBoaCA6ICd3YcyBa2F0aSAlZCcsXG4gICAgICAgIGQgOiAn4buNauG7jcyBIGthbicsXG4gICAgICAgIGRkIDogJ+G7jWrhu43MgSAlZCcsXG4gICAgICAgIE0gOiAnb3N1zIAga2FuJyxcbiAgICAgICAgTU0gOiAnb3N1zIAgJWQnLFxuICAgICAgICB5IDogJ+G7jWR1zIFuIGthbicsXG4gICAgICAgIHl5IDogJ+G7jWR1zIFuICVkJ1xuICAgIH0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC/hu41q4buNzIFcXHNcXGR7MSwyfS8sXG4gICAgb3JkaW5hbCA6ICfhu41q4buNzIEgJWQnLFxuICAgIHdlZWsgOiB7XG4gICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA0IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIHlvO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUveW8uanNcbi8vIG1vZHVsZSBpZCA9IDc3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9