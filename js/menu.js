var navBarOnScreen = false;


function playFadeAnim(target, isShow) {
    if(isShow) {
        var fade = anime ({
            targets: target,
            easing: 'easeInOutSine',
            opacity: [0, 1],
            duration: 500
        })
    } else {
        var fade = anime ({
            targets: target,
            easing: 'easeInOutSine',
            display: [1, 0],
            duration: 500
        })
    }
}


function isActive(buttunID) {
    var temp = document.getElementById(buttunID).style.color;
    return temp == "white";
}




 
function scrollTracking(elemID){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $(elemID).offset().top;
	var eh = $(elemID).outerHeight();
 
	return (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh));
}

function activeClass() {
    let elemts = ["#navvAnti", "#navvSnid", "#navvLan", "#navvCoctels", "#navvCoff", "#navvTea"];
    for(let i = 0; i < elemts.length; i++) {
        if($(elemts[i]).hasClass('buttonActive')) return elemts[i];
    }
}
function setActive(elemId) {
    let temp = activeClass();
    $(temp).removeClass('buttonActive');
    $(elemId).addClass('buttonActive');
}

$(window).scroll (function () {
    if(scrollTracking('#nav')) {
        if(isActive(('butn1'))) {
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
    } else {
        if(isActive(('butn1'))) {
            $('#kitchen').css('display', 'flex');
            if(!navBarOnScreen) {
                playFadeAnim('#kitchen', true);
                navBarOnScreen = true;
            }
        } else {
            $('#bar').css('display', 'flex');
            if(!navBarOnScreen) {
                playFadeAnim('#bar', true);
                navBarOnScreen = true;
            }
        }
    }
    if(isActive(('butn1'))) {

        if(scrollTracking('#antiCris') && !scrollTracking('#snid') && !scrollTracking('#lanch')) setActive("#navvAnti");
        if(scrollTracking('#snid') && !scrollTracking('#antiCris') && !scrollTracking('#lanch')) setActive("#navvSnid");
        if(scrollTracking('#lanch') && !scrollTracking('#antiCris') && !scrollTracking('#snid')) setActive("#navvLan");

    } else if(isActive(('butn2'))) {
        if(scrollTracking('#coctels') && !scrollTracking('#coffee') && !scrollTracking('#tea')) setActive("#navvCoctels");
        if(scrollTracking('#coffee') && !scrollTracking('#coctels') && !scrollTracking('#tea')) setActive("#navvCoff");
        if(scrollTracking('#tea') && !scrollTracking('#coctels') && !scrollTracking('#coffee')) setActive("#navvTea");
    } else {
        return;
    }
});




document.getElementById('butn1').onclick = Task1;
document.getElementById('butn2').onclick = Task2;

document.getElementById('hide').onclick = reload;


function task3() {
    if(isActive('navvSnid')) return;
    scroll('#snid');
}
function task4() {
    if(isActive('navvLan')) return;
    scroll('#lanch');
}
function task5() {
    if(isActive('navvAnti')) return;
    scroll('#antiCris');
}
function task6() {
    if(isActive('navvCoctels')) return;
    scroll('#coctels');
}
function task7() {
    if(isActive('navvCoff')) return;
    scroll('#coffee');
}
function task8() {
    if(isActive('navvTea')) return;
    scroll('#tea');
}


function scroll(elemId) { // ID откуда кливаем
    let scrollWidth = $(elemId).offset().top - 44;
    $('html, body').animate({
        scrollTop: scrollWidth  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
}

/*
var now = new Date();
if(now.getDay() == 4) {
    document.getElementById("notAvailable").style.display = "none";
} else {
    document.getElementById("Available").style.display = "none";
}*/
var contentHeight = document.getElementById('mainContainer').style.height;


function reload() {
    location.reload();
}

function refreshScrollAnimation() {
    AOS.refresh();
}

function addFood() {
    $('#antiCris').show();
    $('#snid').show();
    $('#lanch').show();
}

function removeFood() {
    $('#antiCris').hide();
    $('#snid').hide();
    $('#lanch').hide();
}

function addBavarages() {
    $('#coffee').show();
    $('#tea').show();
    $('#coctels').show();
    slidersAppear();
}

function removeBavarages() {
    $('#coffee').hide();
    $('#tea').hide();
    $('#coctels').hide();
    slidersRemove();
}


function Task1() {
    if(isActive("butn1"))return;
    if(document.getElementById('butn2').style.color = "white") { //second buttun active
        document.getElementById('butn2').style = "color: black; background: white";
        addFood();
    }
    document.getElementById('butn1').style = "color: white; background: black";
    removeBavarages();
    refreshScrollAnimation();
}

function Task2() {
    if(isActive("butn2"))return;
    if(document.getElementById('butn1').style.color = "white") { //first buttun active
        document.getElementById('butn1').style = "color: black; background: white";
        addBavarages();
    }
    document.getElementById('butn2').style = "color: white; background: black";
    removeFood();
    refreshScrollAnimation();
}
