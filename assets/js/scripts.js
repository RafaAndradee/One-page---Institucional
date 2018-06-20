///Debounce
		debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};



///Scrollanime
(function(){
		var $target = $('.anime-right, .anime-left, .anime-top, .anime-fade'),
		 animationClass = 'anime-start';



		function animeScroll() {
			var documentTop = $(document).scrollTop();

			$target.each(function(){
				var itemTop = $(this).offset().top;
				if(documentTop > itemTop - 500) {
					$(this).addClass(animationClass);
				} else {
					$(this).removeClass(animationClass);
				}
			})
		}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();


  var link = $(".navbar-nav li a");


        link.on("click", function() {
          var seletor = $(this).attr("href");
          var posicao = $(seletor).offset().top;
          $("html, body").animate({scrollTop: posicao - 60},1000);
        });



$(document).ready(function(){
	setInterval(function(){
	$('.iconScroll').fadeOut();
	$('.iconScroll').fadeIn();
},1050);
});




$('.iconScroll').on('click', function(){
  var sobre = $('#sobre');
  var posicao = $(sobre).offset().top;
  $("html, body").animate({scrollTop: posicao},1000);
});

//essa função moviventa o slider e também para ativar o botão next

function slider(){
  var current = $('.slider div.active');

if(current.length==0){
  $('.slider div:first-child').addClass('active');
  }else{
    var nextframe = current.removeClass('active').next();
    if(nextframe.length==0){
      $('.slider div:first-child').addClass('active');
  }else{
  var retornoframe = nextframe.addClass('active');
  (function(){
    retornoframe.fadeIn();
  });
  }
 }
}

slider();
var intervalo = setInterval(slider, 3000);



var contadorslider = $('.slider div.active');
var sliderchild = $('.slider div');

function nextframe(){
slider();
}


//////////////

function previous(){
var current = $('.slider div.active');

if(current.length==0){
  $('.slider div:first-child').addClass('active');
  }else{
    var prev = current.removeClass('active').prev();
    if(prev.length==0){
      $('.slider div:first-child').addClass('active');

  }else{
    (function(){
      prev.addClass('active').fadeIn();
    });
  }
 }
}

function previuosframe(){
  var current = $('.slider div.active');
  var prev = current.removeClass('active').prev();
  prev.addClass('active');
}
var slidenumberleft = $('.slide-number-left');
var sliderchild = $('.slider div');


var clickslider = $('.slide-number-left');




///VALIDAÇÃO FORMULÁRIO

function validar_form_contato(){
  var nome = formcontato.nome.value;
  var email = formcontato.email.value;
  var telefone = formcontato.telefone.value;
  var mensagem = formcontato.mensagem.value;

  if(nome == ""){
    alert("Campo nome é obrigatorio");
    formcontato.nome.focus();
    return false;
  }if(email == ""){
    alert("Campo email é obrigatorio");
    formcontato.email.focus();
    return false;
  }if(assunto == ""){
    alert("Campo telefone é obrigatorio");
    formcontato.telefone.focus();
    return false;
  }if(mensagem == ""){
    alert("Campo mensagem é obrigatorio");
    formcontato.mensagem.focus();
    return false;
  }
}
