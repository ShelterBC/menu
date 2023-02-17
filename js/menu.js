var navBarOnScreen = false;


function playFadeAnim(target, isShow) {
    var fade;
    if(isShow) {
        fade = anime ({
            targets: target,
            easing: 'easeInOutSine',
            opacity: [0, 1],
            duration: 500
        })
    } else {
        fade = anime ({
            targets: target,
            easing: 'easeInOutSine',
            display: [1, 0],
            duration: 500
        })
    }
}


function isActive(buttunID) {
    
    return $(buttunID).hasClass('active');
}




 
function scrollTracking(elemID){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $(elemID).offset().top;
	var eh = $(elemID).outerHeight();
 
	return (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh));
}

function activeClass() {
    let elemts = ["#navvSalats", "#navvSnid", "#navvLan", "#navvZak", "#navvCoctels", "#navvCoff", "#navvVine", '#navvShots'];
    for(let i = 0; i < elemts.length; i++) {
        if($(elemts[i]).hasClass('buttonActive')) return elemts[i];
    }
}
function setActive(elemId) {
    let temp = activeClass();
    $(temp).removeClass('buttonActive');
    $(elemId).addClass('buttonActive');
}


function leftScroll(activeBlockId) {
    
    var offsetLeft = $(activeBlockId).offset().left - 12;

    $(".navigationBar").scrollLeft(offsetLeft);

}

$(window).scroll (function () {

    if(scrollTracking('#nav') && navBarOnScreen) { //Меню навигации открепилось
        if(isActive(('#butn1'))) {
            if(navBarOnScreen) {
                playFadeAnim('#kitchen', false);
                navBarOnScreen = false;
            }
            $('#kitchen').css('display', 'none');
        } else {
            if(navBarOnScreen) {
                playFadeAnim('#bar', false);
                navBarOnScreen = false;
            }
            $('#bar').css('display', 'none');
        }
    } else if(!navBarOnScreen && !scrollTracking('#nav')){ //Меню навигации закрепилось
        if(isActive(('#butn1'))) {
            $('#kitchen').css('display', 'flex');
            if(!navBarOnScreen) {
                playFadeAnim('#kitchen', true);
            }
        } else {
            $('#bar').css('display', 'flex');
            if(!navBarOnScreen) {
                playFadeAnim('#bar', true);
            }
        }
        navBarOnScreen = true;
    }

    let currentActiceEl = activeClass();
    let newActiveEl = chaseNewActiveList(currentActiceEl);
    
    if(newActiveEl == -1) {
        console.log('Список продуктов не выбран!')
    } else if(currentActiceEl != newActiveEl) {
        setActive(newActiveEl);
        leftScroll(newActiveEl);
    } else {
        return;
    }
});

function chaseNewActiveList(currentElement) {
    if(isActive(('#butn1'))) {
        if(scrollTracking('#salats') && !scrollTracking('#snid') && !scrollTracking('#lanch') && !scrollTracking('#zak')) return "#navvSalats";
        if(scrollTracking('#snid') && !scrollTracking('#salats') && !scrollTracking('#lanch') && !scrollTracking('#zak')) return "#navvSnid";
        if(scrollTracking('#lanch') && !scrollTracking('#salats') && !scrollTracking('#snid') && !scrollTracking('#zak')) return "#navvLan";
        if(scrollTracking('#zak') && !scrollTracking('#salats') && !scrollTracking('#snid') && !scrollTracking('#lanch')) return "#navvZak";
        return currentElement;

    } else if(isActive(('#butn2'))) {
        if(scrollTracking('#coctels') && !scrollTracking('#coffee') && !scrollTracking('#vine')&& !scrollTracking('#shots')) return "#navvCoctels";
        if(scrollTracking('#coffee') && !scrollTracking('#coctels') && !scrollTracking('#vine')&& !scrollTracking('#shots')) return "#navvCoff";
        if(scrollTracking('#vine') && !scrollTracking('#coctels') && !scrollTracking('#coffee')&& !scrollTracking('#shots')) return "#navvVine";
        if(scrollTracking('#shots') && !scrollTracking('#coctels') && !scrollTracking('#coffee')&& !scrollTracking('#vine')) return "#navvShots";
        return currentElement;
    } else {
        return -1;
    }
}




document.getElementById('butn1').onclick = Task1;
document.getElementById('butn2').onclick = Task2;


function scrollToBLock(navigationId, blockId){
    if(isActive(navigationId)) return;
    scroll(blockId);

}



function scroll(elemId) { // ID откуда кливаем
    let scrollWidth = $(elemId).offset().top - 44;
    $('html, body').animate({
        scrollTop: scrollWidth  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
}


var contentHeight = document.getElementById('mainContainer').style.height;


function reload() {
    location.reload();
}

function refreshScrollAnimation() {
    AOS.refresh();
}

function addFood() {
    $('.food').show();
    playFadeAnim('.food', true)
}

function removeFood() {

    $('.food').hide();
}

function addBavarages() {
    $('.bavarages').show();
    playFadeAnim('.bavarages', true)

}

function removeBavarages() {
    $('.bavarages').hide();
}


function Task1() {
    if($('#butn1').hasClass('active'))return;

    $('#butn2').removeClass('active')
    $('#butn1').addClass('active')
    removeBavarages();
    addFood();

    refreshScrollAnimation();
}

function Task2() {

    if($('#butn2').hasClass('active'))return;

    $('#butn1').removeClass('active')
    $('#butn2').addClass('active')
    removeFood();
    addBavarages();

    refreshScrollAnimation();

}
