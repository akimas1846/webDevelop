var ds1 = new Array("image/darksouls1-0.jpg","image/darksouls1-1.jpg","image/darksouls1-2.jpg");
var ds2 = new Array("image/darksouls2-0.jpg","image/darksouls2-1.jpg","image/darksouls2-2.jpg");
var ds3 = new Array("image/darksouls3-0.jpg","image/darksouls3-1.jpg","image/darksouls3-2.jpg");

var num1 = 0;
var num2 = 0;
var num3 = 0;

function change1() {
    if (num1 == 2) {
        num1 = 0;
    } else {
        num1++;
    }
    document.getElementById("darksouls").src = ds1[num1];
}

function change2() {
    
    if (num2 == 2) {
        num2 = 0;
    } else {
        num2++;
    }
    document.getElementById("darksouls2").src = ds2[num2];
}

function change3() {
    if (num3 == 2) {
        num3 = 0;
    } else {
        num3++;
    }
    document.getElementById("darksouls3").src = ds3[num3];
}


let nameText = document.getElementById('nameText');
nameText.value = '名無し';
let msg = document.getElementById('msg');
let name = document.getElementById('name');
name.innerText = nameText.value + "さん、ようこそ!";

function butotnClick() {
    msg.innerText = "変更しました!";
    name.innerText = nameText.value + "さん、ようこそ!";
}


let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);


