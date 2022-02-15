document.getElementById('butn1').onclick = Task1;
document.getElementById('butn2').onclick = Task2;
document.getElementById('bavarages1').onclick = Task3;
document.getElementById('bavarages2').onclick = Task4;
document.getElementById('food1').onclick = Task5;
document.getElementById('food2').onclick = Task6;
document.getElementById('back').onclick = Task7;
document.getElementById('hide').onclick = reload;


var now = new Date();
if(now.getDay() == 4) {
    document.getElementById("notAvailable").style.display = "none";
} else {
    document.getElementById("Available").style.display = "none";
}
var contentHeight = document.getElementById('mainContainer').style.height;

function reload() {
    location.reload();
}

function addFood() {
    document.getElementById("food1").style.display = "flex";
    document.getElementById("food2").style.display = "flex";
}

function removeFood() {
    document.getElementById("food1").style.display = "none";
    document.getElementById("food2").style.display = "none";
}

function addBavarages() {
    document.getElementById("bavarages1").style.display = "flex";
    document.getElementById("bavarages2").style.display = "flex";
}

function removeBavarages() {
    document.getElementById("bavarages1").style.display = "none";
    document.getElementById("bavarages2").style.display = "none";
}

function isActive(buttunID) {
    var temp = document.getElementById(buttunID).style.color;
    if(temp == "white") return true;
    else if(temp == "black") return false;

}

function Task1() {
    if(isActive("butn1"))return;
    if(document.getElementById('butn2').style.color = "white") { //second buttun active
        document.getElementById('butn2').style = "color: black; background: white";
        addBavarages();
    }
    document.getElementById('butn1').style = "color: white; background: black";
    removeFood();
}

function Task2() {
    if(isActive("butn2"))return;
    if(document.getElementById('butn1').style.color = "white") { //first buttun active
        document.getElementById('butn1').style = "color: black; background: white";
        addFood();
    }
    document.getElementById('butn2').style = "color: white; background: black";
    removeBavarages();
}



function Task3() {
    let temp2 = document.getElementById("coffee");
    temp2.style.display = "flex";
    removeBavarages();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById('back').style.display = "inline-block";
    document.getElementById('mainContainer').style.height = "auto";
}

function Task4() {
    let temp2 = document.getElementById("tea");
    temp2.style.display = "flex";
    removeBavarages();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById('back').style.display = "inline-block";
    document.getElementById('mainContainer').style.height = "auto";
}

function Task5() {
    let temp2 = document.getElementById("snid");
    temp2.style.display = "flex";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById('back').style.display = "inline-block";
    document.getElementById('mainContainer').style.height = "auto";
}

function Task6() {
    let temp2 = document.getElementById("lanch");
    temp2.style.display = "flex";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById('back').style.display = "inline-block";
    document.getElementById('mainContainer').style.height = "auto";
}

function Task7() {
    document.getElementById("butn1").style.display = "flex";
    document.getElementById("butn2").style.display = "flex";
    document.getElementById('mainContainer').style.height = contentHeight;
    document.getElementById('back').style.display = "none";


    if(document.getElementById("snid").style.display == "flex") {
        document.getElementById("snid").style.display = "none";
        addFood();
    } 
    else if(document.getElementById("lanch").style.display == "flex") {
        document.getElementById("lanch").style.display = "none";
        addFood();
    }
    else if(document.getElementById("coffee").style.display == "flex") {
        document.getElementById("coffee").style.display = "none";
        addBavarages();
    } else {
        document.getElementById("tea").style.display = "none";
        addBavarages();
    }
}