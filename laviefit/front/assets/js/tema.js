function resizeBanner(){
    var lt = 1920 //largura total
    var l = 1200; //largura onde começa a sangria
    var a = $('#bannerprincipal').attr('data-altura-original');  //altura original
    
    var prop = l/a; //proporção da area responsiva        
    var t = $( window ).width(); //largura da tela
    var h = t/prop; //altura responsiva

    if(t>600){               
    
        if(t < l){  
            $('.owli').css('height', h);
            $('.owli a').css('height', h);
        } else {
            $('.owli').css('height', a);
            $('.owli a').css('height', a);
        }

    }else{
        
        $('.owli').css('height', 275);
        $('.owli a').css('height', 275);

    }

}//resizeBanner 
$( window ).resize(function() {                    
    resizeBanner();
});
var owl = $('.owl-banner');
owl.owlCarousel({
    loop:true,
    nav:false,
    items:1,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut'
});
resizeBanner();



$('#navbtn').click(function(event) {
  var tela = $( window ).width();
  if(tela<=990){
    var disp = $('#menu').css('display');
    if(disp=='block'){
      $('#menu').hide('fast');
    }else{
      $('#menu').show('fast');
    }
  }
});



// $('.modal').on('hidden.bs.modal', function (e) {
//   var id = $(this).attr("id");
//    $("#"+ id + " iframe").attr("src", $("#"+ id + " iframe").attr("src"));
// });



$('form.wpcf7-form').submit(function(event) {       
    $('.lds-ellipsis').css('display', 'block');
    $(this).removeClass('invalid');
    $(this).removeClass('sent');
});



//pra fazer o menu abrir o submenu no responsivo
$('.menu>li>a').each(function(index, el) {
    
    if($(this).siblings().length){
        $(this).addClass('temsubmenu');
        var tela = $( window ).width();
        if(tela<=990){

            $(this).click(function(event) {
                event.preventDefault();
                css = $(this).siblings().css('display');
                if(css=='block'){
                    $(this).siblings().show('fast');
                }else{
                    $(this).siblings().hide('fast');
                }                
            });

        }
    }

});



$(document).ready(function(){

    $('#tel').mask('(00) 000000009');
    $('#tel1').mask('(00) 000000009');
    $('#tel2').mask('(00) 000000009');
    $('#tel3').mask('(00) 000000009');

    $('#data').mask('00/00/0000');
    $('#data1').mask('00/00/0000');
    $('#data2').mask('00/00/0000');
    $('#data3').mask('00/00/0000');

    $('#hora').mask('00:00');
    $('#hora1').mask('00:00');
    $('#hora2').mask('00:00');
    $('#hora3').mask('00:00');

    $('#cep').mask('00000-000');
    $('#cep1').mask('00000-000');
    $('#cep2').mask('00000-000');

    $('#cpf').mask('000.000.000-00');
    $('#cpf1').mask('000.000.000-00');
    $('#cpf2').mask('000.000.000-00');
    $('#cnpj').mask('00.000.000/0000-00');
    $('#cnpj1').mask('00.000.000/0000-00');
    $('#cnpj2').mask('00.000.000/0000-00');
    $('#rg').mask('00.000.000-Z', {
        translation: {
            'Z': {
                pattern: /[0-9A-Za-z]/, 
                optional: false
            }
        }
    });
    $('#rg1').mask('00.000.000-Z', {
        translation: {
            'Z': {
                pattern: /[0-9A-Za-z]/, 
                optional: false
            }
        }
    });
    $('#rg2').mask('00.000.000-Z', {
        translation: {
            'Z': {
                pattern: /[0-9A-Za-z]/, 
                optional: false
            }
        }
    });

});

$('.postagemcompleta a').each(function(index, el) {
    $(this).attr('target', '_blank');
});


////aceitar_termos Cookie criado quando o usuário lê e concorda com nossa política e termos, assim o site não exibe a mensagem solicitando que o internauta concorde novamente.   
function aceitoCookie(){    
    var d = new Date();                
    d.setTime(d.getTime() + (120*24*60*60*1000));//120 dias
    var expires = "expires="+ d.toUTCString();
    document.cookie = "aceitar_termos=ok;" + expires + ";path=/";
    document.getElementById('aceitar_termos').style.display = 'none';
}
var x = document.cookie;   
var n = x.indexOf("ceitar_termos=ok");         
if(n<1){
    act = document.getElementById('aceitar_termos');
    if(act){
        act.style.display = 'block';
    }
}

$('.owl-carousel').owlCarousel({
    // option: value,
    merge: true,
    autoplay: true,
    rewind: false,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ["<",">"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// alert("I did my best")
// alert("I've learned a lot, and also improved some skills")
// alert("Hope u guys Like it")