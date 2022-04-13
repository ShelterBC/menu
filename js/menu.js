document.getElementById('butn1').onclick = Task1;
document.getElementById('butn2').onclick = Task2;
document.getElementById('bavarages1').onclick = Task3;
document.getElementById('bavarages2').onclick = Task4;
//document.getElementById('bavarages3').onclick = Task12;
document.getElementById('food1').onclick = Task5;
document.getElementById('food2').onclick = Task6;
document.getElementById('food3').onclick = Task14;
document.getElementById('backk').onclick = Task7;
document.getElementById('hide').onclick = reload;
document.getElementById('navvSnid').onclick = Task8;
document.getElementById('navvLan').onclick = Task9;
document.getElementById('navvCoff').onclick = Task10;
document.getElementById('navvTea').onclick = Task11;
//document.getElementById('navvCoctels').onclick = Task13;
document.getElementById('navvAnti').onclick = Task15;


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
    document.getElementById("food3").style.display = "flex";
}

function removeFood() {
    document.getElementById("food1").style.display = "none";
    document.getElementById("food2").style.display = "none";
    document.getElementById("food3").style.display = "none";
}

function addBavarages() {
    document.getElementById("bavarages1").style.display = "flex";
    document.getElementById("bavarages2").style.display = "flex";
    document.getElementById("bavarages3").style.display = "flex";
}

function removeBavarages() {
    document.getElementById("bavarages1").style.display = "none";
    document.getElementById("bavarages2").style.display = "none";
    document.getElementById("bavarages3").style.display = "none";
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
        addFood();
    }
    document.getElementById('butn1').style = "color: white; background: black";
    removeBavarages();
}

function Task2() {
    if(isActive("butn2"))return;
    if(document.getElementById('butn1').style.color = "white") { //first buttun active
        document.getElementById('butn1').style = "color: black; background: white";
        addBavarages();
    }
    document.getElementById('butn2').style = "color: white; background: black";
    removeFood();
}



function Task3() {
    let temp2 = document.getElementById("coffee");
    temp2.style.display = "flex";
    removeBavarages();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvCoff").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}

function Task4() {
    let temp2 = document.getElementById("tea");
    temp2.style.display = "flex";
    removeBavarages();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvTea").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}
/*
function Task12() {
    let temp2 = document.getElementById("coctels");
    temp2.style.display = "flex";
    removeBavarages();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvCoctels").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}*/

function Task5() {
    let temp2 = document.getElementById("snid");
    temp2.style.display = "flex";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvSnid").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}

function Task14() {
    let temp2 = document.getElementById("antiCris");
    temp2.style.display = "flex";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvAnti").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}



function Task6() {
    let temp2 = document.getElementById("lanch");
    temp2.style.display = "flex";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
    document.getElementById("navv").style.display = "flex";
    document.getElementById("navvLan").className = "buttonActive";
    document.getElementById('mainContainer').style.height = "auto";
    document.getElementById('shelter-info').style.display = 'none';
}

function Task7() {
    document.getElementById("butn1").style.display = "flex";
    document.getElementById("butn2").style.display = "flex";
    document.getElementById('mainContainer').style.height = contentHeight;
    document.getElementById("navv").style.display = "none";
    document.getElementById('shelter-info').style.display = 'flex';


    if(document.getElementById("snid").style.display == "flex") {
        document.getElementById("snid").style.display = "none";
        document.getElementById("navvSnid").className = "";
        addFood();
        document.getElementById('butn1').style = "color: white; background: black";
        document.getElementById('butn2').style = "color: black; background: white";
    }
    else if(document.getElementById("antiCris").style.display == "flex") {
        document.getElementById("antiCris").style.display = "none";
        document.getElementById("navvAnti").className = "";
        addFood();
        document.getElementById('butn1').style = "color: white; background: black";
        document.getElementById('butn2').style = "color: black; background: white";
    } 
    else if(document.getElementById("lanch").style.display == "flex") {
        document.getElementById("lanch").style.display = "none";
        document.getElementById("navvLan").className = "";
        addFood();
        document.getElementById('butn1').style = "color: white; background: black";
        document.getElementById('butn2').style = "color: black; background: white";
    }
    else if(document.getElementById("coffee").style.display == "flex") {
        document.getElementById("coffee").style.display = "none";
        document.getElementById("navvCoff").className = "";
        addBavarages();
        document.getElementById('butn2').style = "color: white; background: black";
        document.getElementById('butn1').style = "color: black; background: white";
    }
    else if(document.getElementById("coctels").style.display == "flex") {
        document.getElementById("coctels").style.display = "none";
        document.getElementById("navvCoctels").className = "";
        addBavarages();
        document.getElementById('butn2').style = "color: white; background: black";
        document.getElementById('butn1').style = "color: black; background: white";
    } else {
        document.getElementById("tea").style.display = "none";
        document.getElementById("navvTea").className = "";
        addBavarages();
        document.getElementById('butn2').style = "color: white; background: black";
        document.getElementById('butn1').style = "color: black; background: white";
    }
}

function categoryOnDisplay() {
    if(document.getElementById("snid").style.display == "flex") {
        document.getElementById("navvSnid").className = "";
        return "snid";
    }
    else if(document.getElementById("antiCris").style.display == "flex") {
        document.getElementById("navvAnti").className = "";
        return "antiCris";
    } 
    else if(document.getElementById("lanch").style.display == "flex") {
        document.getElementById("navvLan").className = "";
        return "lanch";
    }
    else if(document.getElementById("coffee").style.display == "flex") {
        document.getElementById("navvCoff").className = "";
        return "coffee";
    }else if(document.getElementById("coctels").style.display == "flex") {
        document.getElementById("navvCoctels").className = "";
        return "coctels";
    }
     else {
        document.getElementById("navvTea").className = "";
        return "tea"
    }
}

function Task8() {
    if(isActive('navvSnid'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('snid').style.display = "flex";
    document.getElementById("navvSnid").className = "buttonActive";
}

function Task9() {
    if(isActive('navvLan'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('lanch').style.display = "flex";
    document.getElementById("navvLan").className = "buttonActive";
}

function Task10() {
    if(isActive('navvCoff'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('coffee').style.display = "flex";
    document.getElementById("navvCoff").className = "buttonActive";
}

function Task11() {
    if(isActive('navvTea'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('tea').style.display = "flex";
    document.getElementById("navvTea").className = "buttonActive";
}
/*
function Task13() {
    if(isActive('navvCoctels'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('coctels').style.display = "flex";
    document.getElementById("navvCoctels").className = "buttonActive";
}*/

function Task15() {
    if(isActive('navvAnti'))return;
    let category = categoryOnDisplay();
    document.getElementById(category).style.display = "none";
    document.getElementById('antiCris').style.display = "flex";
    document.getElementById("navvAnti").className = "buttonActive";
}
