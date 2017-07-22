webpackJsonp([60],{

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var km = moment.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
        nextDay: '[ស្អែក ម៉ោង] LT',
        nextWeek: 'dddd [ម៉ោង] LT',
        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%sទៀត',
        past: '%sមុន',
        s: 'ប៉ុន្មានវិនាទី',
        m: 'មួយនាទី',
        mm: '%d នាទី',
        h: 'មួយម៉ោង',
        hh: '%d ម៉ោង',
        d: 'មួយថ្ងៃ',
        dd: '%d ថ្ងៃ',
        M: 'មួយខែ',
        MM: '%d ខែ',
        y: 'មួយឆ្នាំ',
        yy: '%d ឆ្នាំ'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return km;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUva20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDIiwiZmlsZSI6IjYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENhbWJvZGlhbiBba21dXG4vLyEgYXV0aG9yIDogS3J1eSBWYW5uYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9rcnV5dmFubmFcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIga20gPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdrbScsIHtcbiAgICBtb250aHM6ICfhnpjhnoDhnprhnrZf4Z6A4Z674Z6Y4Z+S4Z6X4Z+IX+GemOGeuOGek+Getl/hnpjhn4Hhnp/hnrZf4Z6n4Z6f4Z6X4Z62X+GemOGet+GekOGeu+Gek+Getl/hnoDhnoDhn5LhnoDhnorhnrZf4Z6f4Z644Z6g4Z62X+GegOGeieGfkuGeieGetl/hno/hnrvhnpvhnrZf4Z6c4Z634Z6F4Z+S4Z6G4Z634Z6A4Z62X+GekuGfkuGek+GevCcuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydDogJ+GemOGegOGemuGetl/hnoDhnrvhnpjhn5Lhnpfhn4hf4Z6Y4Z644Z6T4Z62X+GemOGfgeGen+Getl/hnqfhnp/hnpfhnrZf4Z6Y4Z634Z6Q4Z674Z6T4Z62X+GegOGegOGfkuGegOGeiuGetl/hnp/hnrjhnqDhnrZf4Z6A4Z6J4Z+S4Z6J4Z62X+Gej+Geu+Gem+Getl/hnpzhnrfhnoXhn5LhnobhnrfhnoDhnrZf4Z6S4Z+S4Z6T4Z68Jy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzOiAn4Z6i4Z624Z6R4Z634Z6P4Z+S4Z6ZX+GeheGfkOGek+GfkuGekV/hnqLhnoThn5LhnoLhnrbhnppf4Z6W4Z674Z6SX+GeluGfkuGemuGeoOGen+GfkuGelOGej+Get+GfjV/hnp/hnrvhnoDhn5Lhnppf4Z6f4Z+F4Z6a4Z+NJy5zcGxpdCgnXycpLFxuICAgIHdlZWtkYXlzU2hvcnQ6ICfhnqLhnrbhnpHhnrfhno/hn5Lhnplf4Z6F4Z+Q4Z6T4Z+S4Z6RX+GeouGehOGfkuGeguGetuGeml/hnpbhnrvhnpJf4Z6W4Z+S4Z6a4Z6g4Z6f4Z+S4Z6U4Z6P4Z634Z+NX+Gen+Geu+GegOGfkuGeml/hnp/hn4Xhnprhn40nLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW46ICfhnqLhnrbhnpHhnrfhno/hn5Lhnplf4Z6F4Z+Q4Z6T4Z+S4Z6RX+GeouGehOGfkuGeguGetuGeml/hnpbhnrvhnpJf4Z6W4Z+S4Z6a4Z6g4Z6f4Z+S4Z6U4Z6P4Z634Z+NX+Gen+Geu+GegOGfkuGeml/hnp/hn4Xhnprhn40nLnNwbGl0KCdfJyksXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICAgIH0sXG4gICAgY2FsZW5kYXI6IHtcbiAgICAgICAgc2FtZURheTogJ1vhnpDhn5LhnoThn4PhnpPhn4Hhn4cg4Z6Y4Z+J4Z+E4Z6EXSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdb4Z6f4Z+S4Z6i4Z+C4Z6AIOGemOGfieGfhOGehF0gTFQnLFxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW+GemOGfieGfhOGehF0gTFQnLFxuICAgICAgICBsYXN0RGF5OiAnW+GemOGfkuGen+Get+Gem+GemOGet+GeiSDhnpjhn4nhn4ThnoRdIExUJyxcbiAgICAgICAgbGFzdFdlZWs6ICdkZGRkIFvhnp/hnpThn5Lhno/hnrbhnqDhn43hnpjhnrvhnpNdIFvhnpjhn4nhn4ThnoRdIExUJyxcbiAgICAgICAgc2FtZUVsc2U6ICdMJ1xuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgIGZ1dHVyZTogJyVz4Z6R4Z+A4Z6PJyxcbiAgICAgICAgcGFzdDogJyVz4Z6Y4Z674Z6TJyxcbiAgICAgICAgczogJ+GelOGfieGeu+Gek+GfkuGemOGetuGek+GenOGet+Gek+GetuGekeGeuCcsXG4gICAgICAgIG06ICfhnpjhnr3hnpnhnpPhnrbhnpHhnrgnLFxuICAgICAgICBtbTogJyVkIOGek+GetuGekeGeuCcsXG4gICAgICAgIGg6ICfhnpjhnr3hnpnhnpjhn4nhn4ThnoQnLFxuICAgICAgICBoaDogJyVkIOGemOGfieGfhOGehCcsXG4gICAgICAgIGQ6ICfhnpjhnr3hnpnhnpDhn5LhnoThn4MnLFxuICAgICAgICBkZDogJyVkIOGekOGfkuGehOGfgycsXG4gICAgICAgIE06ICfhnpjhnr3hnpnhnoHhn4InLFxuICAgICAgICBNTTogJyVkIOGegeGfgicsXG4gICAgICAgIHk6ICfhnpjhnr3hnpnhnobhn5LhnpPhnrbhn4YnLFxuICAgICAgICB5eTogJyVkIOGehuGfkuGek+GetuGfhidcbiAgICB9LFxuICAgIHdlZWs6IHtcbiAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95OiA0IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICB9XG59KTtcblxucmV0dXJuIGttO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZW1vdmVBTUQuanMhLi9+L21vbWVudC9sb2NhbGUva20uanNcbi8vIG1vZHVsZSBpZCA9IDcxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDYwIl0sInNvdXJjZVJvb3QiOiIifQ==