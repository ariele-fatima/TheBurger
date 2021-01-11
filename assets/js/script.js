/*Para que o menu mude de cor rolando a tela*/
(function () {
    var menuBackground = document.getElementById('conteinerHeaderId');
    var menuMainItems = document.getElementsByClassName('menuItemLink');
    var menuSocialItems = document.getElementsByClassName('socialMediaTopLink');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 150) {
            menuBackground.classList.add('conteinerHeaderAlt');
            for (var i = 0; i < menuMainItems.length; i++) {
                menuMainItems[i].classList.add('menuItemLinkAlt');
            }
            for (var i = 0; i < menuSocialItems.length; i++) {
                menuSocialItems[i].classList.add('socialMediaTopLinkAlt');
            }
        } else {
            menuBackground.classList.remove('conteinerHeaderAlt');
            for (var i = 0; i < menuMainItems.length; i++) {
                menuMainItems[i].classList.remove('menuItemLinkAlt');
            }
            for (var i = 0; i < menuSocialItems.length; i++) {
                menuSocialItems[i].classList.remove('socialMediaTopLinkAlt');
            }

        }
    });
})();

/* Para mostrar e esconder o menu mobile*/

var btnMenu = document.getElementById('btnMenuMobileImage');
var menu = document.getElementById('menuMobileId');
var btnMenuClose = document.getElementById('closedMobileId');
const media = matchMedia("(min-width: 1061px)")


btnMenu.addEventListener("click", function(){
    menu.classList.toggle('menuMobileMove')
});

btnMenuClose.addEventListener("click", function(){
    menu.classList.toggle('menuMobileMove')
});

media.addEventListener("change", function(){
    menu.classList.remove('menuMobileMove')
})



/*Para que o carrossel gire automaticamente*/
let timer = setInterval(AutoPlay, 5000);

var prev=document.getElementsByClassName('prev');
var next=document.getElementsByClassName('next');
var dots=document.getElementsByClassName('dots');
let counterNext = 1;
let counterCurrent = 1;
let result = 0;

for(var i = 0; i < prev.length; i++){
    prev[i].addEventListener("click",function(){
    resetTimer();
    });
}

for(var i = 0; i < next.length; i++){
    next[i].addEventListener("click",function(){
    resetTimer();
    });
}

for(var i = 0; i < dots.length; i++){
    dots[i].addEventListener("click",function(){
    resetTimer();
    });
}


function AutoPlay(){ 
    
    if(counterCurrent != document.querySelector("input[name=images]:checked").value){
        counterNext = document.querySelector("input[name=images]:checked").value;
    }
    document.getElementById('i' + counterNext).checked = true;
    counterCurrent = counterNext;
    counterNext++;
    if(counterNext > 5){
        counterNext = 1;
    }
    
};

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(AutoPlay, 5000);
};
