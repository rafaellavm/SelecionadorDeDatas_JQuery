$(function () {

    var horaescolhaCampo;

   $('input').bind('focus',function(){

       var pos = $(this).offset(); //devolve a posição do campo
       //var position = $(this).position(); //devolve a posição do campo
       //console.log(position);
       //console.log(pos);
       var width = $(this).width();

       $('.horaescolha').css('left',pos.left + width + 5);
       $('.horaescolha').css('top', pos.top);
       $('.horaescolha').show();

       horaescolhaCampo = $(this); //preenche com o próprio objeto, guarda o elemento ativo no momento
   });

    $('input').bind('blur',function(){

        setTimeout(function(){ //para a div não sumir logo
            $('.horaescolha').hide();
        },200);
    });

    $('.horaescolha button').bind('click',function(){

        var hora = $(this).html();
        horaescolhaCampo.val(hora);
    });
});