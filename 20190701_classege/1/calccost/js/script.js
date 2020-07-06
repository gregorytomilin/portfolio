var rangeMounth = document.getElementById('rangeMounth')
var mounthTotal = document.getElementById('mounthTotal')
mounthTotal.innerHTML = rangeMounth.value

var rangeSubjects = document.getElementById('rangeSubjects')
var subjectsTotal = document.getElementById('subjectsTotal')
subjectsTotal.innerHTML = rangeSubjects.value



var chbxFriend = document.getElementById('chbxFriend')
var chbxRepost = document.getElementById('chbxRepost')
var chbxPrepay = document.getElementById('chbxPrepay')
var priceTotal = document.getElementById('priceTotal')
var priceMounth = document.getElementById('priceMounth')
var totalDiscount = document.getElementById('totalDiscount')


rangeMounth.oninput = priceGenerator;
rangeSubjects.oninput = priceGenerator;
chbxFriend.onchange = priceGenerator;
chbxRepost.onchange = priceGenerator;
chbxPrepay.onchange = priceGenerator;

var basePrice;
var discountMounth = 0;
var discountFriend = 0;
var discountPrepay = 0;
var discountRepost = 0;


var groupeTypeRb = document.getElementsByName('groupeType');



for (i=0; i<groupeTypeRb.length; i++) {
    groupeTypeRb[i].onchange = priceGenerator
}

var oge = document.getElementById('oge');
var ege = document.getElementById('ege');
var individ = document.getElementById('individ');
var typeInfo = document.getElementById('typeInfo');





var rangesInfoMounth = document.getElementById('rangesInfoMounth');
var rangesInfoMounthBlock = document.getElementById('rangesInfoMounthBlock');
rangesInfoMounth.onmouseover = function() {rangesInfoMounthBlock.style.display='block';}
rangesInfoMounth.onmouseout = function() {rangesInfoMounthBlock.style.display='none';}

rangesInfoMounth.onclick = function() {

    if(rangesInfoMounthBlock.style.display='none'){
        rangesInfoMounthBlock.style.display='block'
    }
    else {
        rangesInfoMounthBlock.style.display='none'
    }

}

var rangesInfoSubjects = document.getElementById('rangesInfoSubjects');
var rangesInfoSubjectsBlock = document.getElementById('rangesInfoSubjectsBlock');
rangesInfoSubjects.onmouseover = function() { rangesInfoSubjectsBlock.style.display='block';}
rangesInfoSubjects.onmouseout = function() {rangesInfoSubjectsBlock.style.display='none';}

var chbxInfoFriend = document.getElementById('chbxInfoFriend');
var chbxInfoFriendBlock = document.getElementById('chbxInfoFriendBlock');
chbxInfoFriend.onmouseover = function() { chbxInfoFriendBlock.style.display='block';}
chbxInfoFriend.onmouseout = function() {chbxInfoFriendBlock.style.display='none';}


var chbxInfoRepost = document.getElementById('chbxInfoRepost');
var chbxInfoRepostBlock = document.getElementById('chbxInfoRepostBlock');
chbxInfoRepost.onmouseover = function() { chbxInfoRepostBlock.style.display='block';}
chbxInfoRepost.onmouseout = function() {chbxInfoRepostBlock.style.display='none';}


var chbxInfoPrepay = document.getElementById('chbxInfoPrepay');
var chbxInfoPrepayBlock = document.getElementById('chbxInfoPrepayBlock');
chbxInfoPrepay.onmouseover = function() { chbxInfoPrepayBlock.style.display='block';}
chbxInfoPrepay.onmouseout = function() {chbxInfoPrepayBlock.style.display='none';}









function priceGenerator() {

    //Базовая цена в зависимости от типа занятий
if (oge.checked) {basePrice = 4900;
    typeInfo.innerHTML = 'Занятие в группе от 2 до 5 человек<br>4 занятия в месяц по 80 минут каждое'}
else if (ege.checked) {basePrice = 5900;
    typeInfo.innerHTML = 'Занятие в группе от 2 до 5 человек<br>4 занятия в месяц по 120 минут каждое'}
else if (individ.checked) {basePrice = 4500;
    typeInfo.innerHTML = '4 занятия в месяц по 40 минут<br>\t&#160;'}

    //Скидки в зависимости от кол-ва предметов
if (oge.checked && rangeSubjects.value == 2){basePrice = 9500/2}
else if (oge.checked && rangeSubjects.value == 3){basePrice = 14000/3}
else if (oge.checked && rangeSubjects.value == 4){basePrice = 18400/4}

if (ege.checked && rangeSubjects.value == 2){basePrice = 11500/2}
else if (ege.checked && rangeSubjects.value == 3){basePrice = 16900/3}
else if (ege.checked && rangeSubjects.value == 4){basePrice = 22200/4}

if (individ.checked && rangeSubjects.value == 2){basePrice = 5500}
else if (individ.checked && rangeSubjects.value == 3){basePrice = 5500}
else if (individ.checked && rangeSubjects.value == 4){basePrice = 5500}

// console.log(rangeSubjects.value.type)


    if (chbxRepost.checked) {
        discountRepost = Math.round(basePrice * 0.05 * rangeSubjects.value)
        console.log(basePrice)
    }
    else {
        discountRepost = 0
    }

    if (chbxFriend.checked) {
        discountFriend = Math.round(basePrice * 0.25 * rangeSubjects.value)
    }
    else {
        discountFriend = 0
    }




// Скидка пр предоплате
    if (chbxPrepay.checked && rangeMounth.value > 1 ) {
    basePrice = basePrice - 1000
        // discountPrepay = 1000*rangeSubjects.value
    }
    else {
        discountPrepay = 0
    }



    mounthTotal_F()
    subjectsTotal_F()

    priceTotal.value =  Math.round(basePrice * rangeMounth.value * rangeSubjects.value - discountFriend - discountPrepay - discountRepost)

    priceTotal.innerHTML =  Math.round(basePrice * rangeMounth.value * rangeSubjects.value - discountFriend - discountPrepay - discountRepost) + ' руб.'


    priceMounthValue ()
    totalDiscount_F ()

}


//запись кол-ва месяцев
function mounthTotal_F() {
    mounthTotal.innerHTML = 'Число месяцев: '+ rangeMounth.value
}

//запись кол-ва предметов
function subjectsTotal_F() {
    subjectsTotal.innerHTML = 'Число предметов: '+rangeSubjects.value
}

//расчет и запись цены за месяц
function priceMounthValue () {
    priceMounth.value = Math.round(priceTotal.value/rangeMounth.value)
    priceMounth.innerHTML = Math.round(priceTotal.value/rangeMounth.value) + ' руб./мес'
}

function totalDiscount_F () {

    var basePriceReal
    if (oge.checked) {basePriceReal = 4900}
    else if (ege.checked) {basePriceReal = 5900}
    else if (individ.checked) {basePriceReal = 5500}

console.log(basePriceReal)


    // totalDiscount.value = +Math.round(+priceTotal.value-(basePriceReal * rangeMounth.value * rangeSubjects.value));
    totalDiscount.innerHTML = Math.round(((basePriceReal * rangeMounth.value * rangeSubjects.value)-priceTotal.value)/rangeMounth.value) + ' руб./мес';
    console.log(totalDiscount.value)
}

priceGenerator()