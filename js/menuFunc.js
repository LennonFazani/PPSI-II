
$(window).resize(function() {
    
    if(window.innerWidth>767){
        
        var btnMenu = document.getElementById('btnMenu');
        var body = document.getElementById('pag');
        var setaProf = document.getElementById('setaProf');
        var setaProf1 = document.getElementById('setaProf1');
        var setaProf2 = document.getElementById('setaProf2');
        var setaDisc = document.getElementById('setaDisc');
        var setaDisc1 = document.getElementById('setaDisc1');
        var setaDisc2 = document.getElementById('setaDisc2');
    
        $('#menuMobile').hide();
        $('#profSemestre').hide();
        $('#prof1Itens').hide();
        $('#prof2Itens').hide();
        $('#discSemestre').hide();
        $('#disc1Itens').hide();
        $('#disc2Itens').hide();
    
        btnMenu.classList.remove("fechar");
        body.classList.remove("flow");
        setaProf.classList.remove("cima");
        setaProf1.classList.remove("cima");
        setaProf2.classList.remove("cima");
        setaDisc.classList.remove("cima");
        setaDisc1.classList.remove("cima");
        setaDisc2.classList.remove("cima");
    
    }    
    
});
            
$('#btnMenu').click(function(){

    $('#menuMobile').slideToggle(200);
    
    var btnMenu = document.getElementById('btnMenu');
    var body = document.getElementById('pag');
    
    btnMenu.classList.toggle("fechar");
    body.classList.toggle("flow");
                    
});

$('#prof').click(function(){

    $('#profSemestre').slideToggle(200);
    
    var setaProf = document.getElementById('setaProf');
    
    setaProf.classList.toggle("cima");
                   
});

$('#prof1').click(function(){
    
    event.stopPropagation();
    $('#prof1Itens').slideToggle(200);
    
    var setaProf1 = document.getElementById('setaProf1');
    
    setaProf1.classList.toggle("cima");
    
});

$('#prof2').click(function(){
    
    event.stopPropagation();
    $('#prof2Itens').slideToggle(200);
    
    var setaProf2 = document.getElementById('setaProf2');
    
    setaProf2.classList.toggle("cima");
                   
});

$('#disc').click(function(){
    
    $('#discSemestre').slideToggle(200);
    
    var setaDisc = document.getElementById('setaDisc');
    
    setaDisc.classList.toggle("cima");
                   
});

$('#disc1').click(function(){
    
    event.stopPropagation();
    $('#disc1Itens').slideToggle(200);
    
    var setaDisc1 = document.getElementById('setaDisc1');
    
    setaDisc1.classList.toggle("cima");
                   
});

$('#disc2').click(function(){
    
    event.stopPropagation();
    $('#disc2Itens').slideToggle(200);
    
    var setaDisc2 = document.getElementById('setaDisc2');
    
    setaDisc2.classList.toggle("cima");
                   
});

$(window).on('scroll',_.debounce(function() {

    if(window.innerWidth>767){
        
        var $nav = $('#cab');
        var logo = $('#logo');
        var menu = $('.itens');
        var icone = $('.icone');
        var sub = $('.sub1');
        var text = $('.text');
        
        navHeight = $nav.outerHeight();
        windowTop = $(this).scrollTop();
        
        if (windowTop > navHeight) {
            
            
        
            $nav.addClass('scrollHeader');
            menu.addClass('scrollHeader');
            logo.addClass('scrollLogo');
            icone.addClass('scrollLink');
            sub.addClass('scrollSub');
            text.addClass('scrollText');
        
        } else {
      
            logo.removeClass('scrollLogo');
            $nav.removeClass('scrollHeader');
            menu.removeClass('scrollHeader');
            icone.removeClass('scrollLink');
            sub.removeClass('scrollSub');
            text.removeClass('scrollText');
        
        }
    
    }
    
}, 200));