webpackJsonp([37],{

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
    true ? factory(__webpack_require__(29)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ptBr = moment.defineLocale('pt-br', {
    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : '%s atrás',
        s : 'poucos segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal : '%dº'
});

return ptBr;

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21vbWVudC9sb2NhbGUvcHQtYnIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELFFBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLElBQUk7QUFDcEM7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUMiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUG9ydHVndWVzZSAoQnJhemlsKSBbcHQtYnJdXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG52YXIgcHRCciA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3B0LWJyJywge1xuICAgIG1vbnRocyA6ICdKYW5laXJvX0ZldmVyZWlyb19NYXLDp29fQWJyaWxfTWFpb19KdW5ob19KdWxob19BZ29zdG9fU2V0ZW1icm9fT3V0dWJyb19Ob3ZlbWJyb19EZXplbWJybycuc3BsaXQoJ18nKSxcbiAgICBtb250aHNTaG9ydCA6ICdKYW5fRmV2X01hcl9BYnJfTWFpX0p1bl9KdWxfQWdvX1NldF9PdXRfTm92X0Rleicuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5cyA6ICdEb21pbmdvX1NlZ3VuZGEtZmVpcmFfVGVyw6dhLWZlaXJhX1F1YXJ0YS1mZWlyYV9RdWludGEtZmVpcmFfU2V4dGEtZmVpcmFfU8OhYmFkbycuc3BsaXQoJ18nKSxcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ0RvbV9TZWdfVGVyX1F1YV9RdWlfU2V4X1PDoWInLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNNaW4gOiAnRG9fMsKqXzPCql80wqpfNcKqXzbCql9Tw6EnLnNwbGl0KCdfJyksXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcbiAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTCA6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgICAgICBMTEwgOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8Ogc10gSEg6bW0nXG4gICAgfSxcbiAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgc2FtZURheTogJ1tIb2plIMOgc10gTFQnLFxuICAgICAgICBuZXh0RGF5OiAnW0FtYW5ow6Mgw6BzXSBMVCcsXG4gICAgICAgIG5leHRXZWVrOiAnZGRkZCBbw6BzXSBMVCcsXG4gICAgICAgIGxhc3REYXk6ICdbT250ZW0gw6BzXSBMVCcsXG4gICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZGF5KCkgPT09IDAgfHwgdGhpcy5kYXkoKSA9PT0gNikgP1xuICAgICAgICAgICAgICAgICdbw5psdGltb10gZGRkZCBbw6BzXSBMVCcgOiAvLyBTYXR1cmRheSArIFN1bmRheVxuICAgICAgICAgICAgICAgICdbw5psdGltYV0gZGRkZCBbw6BzXSBMVCc7IC8vIE1vbmRheSAtIEZyaWRheVxuICAgICAgICB9LFxuICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgfSxcbiAgICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgICAgIGZ1dHVyZSA6ICdlbSAlcycsXG4gICAgICAgIHBhc3QgOiAnJXMgYXRyw6FzJyxcbiAgICAgICAgcyA6ICdwb3Vjb3Mgc2VndW5kb3MnLFxuICAgICAgICBtIDogJ3VtIG1pbnV0bycsXG4gICAgICAgIG1tIDogJyVkIG1pbnV0b3MnLFxuICAgICAgICBoIDogJ3VtYSBob3JhJyxcbiAgICAgICAgaGggOiAnJWQgaG9yYXMnLFxuICAgICAgICBkIDogJ3VtIGRpYScsXG4gICAgICAgIGRkIDogJyVkIGRpYXMnLFxuICAgICAgICBNIDogJ3VtIG3DqnMnLFxuICAgICAgICBNTSA6ICclZCBtZXNlcycsXG4gICAgICAgIHkgOiAndW0gYW5vJyxcbiAgICAgICAgeXkgOiAnJWQgYW5vcydcbiAgICB9LFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcbiAgICBvcmRpbmFsIDogJyVkwronXG59KTtcblxucmV0dXJuIHB0QnI7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlbW92ZUFNRC5qcyEuL34vbW9tZW50L2xvY2FsZS9wdC1ici5qc1xuLy8gbW9kdWxlIGlkID0gNzM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMzciXSwic291cmNlUm9vdCI6IiJ9