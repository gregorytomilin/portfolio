var rangeMounth = document.getElementById('rangeMounth')
var mounthTotal = document.getElementById('mounthTotal')
mounthTotal.innerHTML = rangeMounth.value

var rangeSubjects = document.getElementById('rangeSubjects')
var subjectsTotal = document.getElementById('subjectsTotal')
subjectsTotal.innerHTML = rangeSubjects.value



var chbxFriend = document.getElementById('chbxFriend')
var chbxRepost = document.getElementById('chbxRepost')
var chbxPrepay = document.getElementById('chbxPrepay')
var $priceTotal = document.getElementById('priceTotal')
var $priceMounth = document.getElementById('priceMounth')
var $totalDiscount = document.getElementById('totalDiscount');
var $individTypes = document.querySelector('#individTypes');

var individ40 = document.querySelector('#individ40');
var individ60 = document.querySelector('#individ60');
var individ90 = document.querySelector('#individ90');


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

for (var i=0; i<groupeTypeRb.length; i++) {
    groupeTypeRb[i].onchange = priceGenerator
}
var $individType = document.getElementsByName('individType');
for (var i=0; i<$individType.length; i++) {
    $individType[i].onchange = priceGenerator
}

var $groupeAddress = document.getElementsByName('groupeAddress');
for (var i=0; i<$groupeAddress.length; i++) {
    $groupeAddress[i].onchange = priceGenerator;
}


/*---АДРЕСА---*/

var addressT = document.querySelector('#tambasova');
var addressZ = document.querySelector('#zanevski');
var addressOnline = document.querySelector('#online');

addressT.addEventListener('click', ()=>{
    chbxPrepay.checked = false;
});
addressZ.addEventListener('click', ()=>{
    chbxPrepay.checked = false;
});
addressOnline.addEventListener('click', ()=>{
    chbxPrepay.checked = false;
});


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

};

var rangesInfoSubjects = document.getElementById('rangesInfoSubjects');
var rangesInfoSubjectsBlock = document.getElementById('rangesInfoSubjectsBlock');
rangesInfoSubjects.onmouseover = function() { rangesInfoSubjectsBlock.style.display='block';};
rangesInfoSubjects.onmouseout = function() {rangesInfoSubjectsBlock.style.display='none';};

var chbxInfoFriend = document.getElementById('chbxInfoFriend');
var chbxInfoFriendBlock = document.getElementById('chbxInfoFriendBlock');
chbxInfoFriend.onmouseover = function() { chbxInfoFriendBlock.style.display='block';};
chbxInfoFriend.onmouseout = function() {chbxInfoFriendBlock.style.display='none';};


var chbxInfoRepost = document.getElementById('chbxInfoRepost');
var chbxInfoRepostBlock = document.getElementById('chbxInfoRepostBlock');
chbxInfoRepost.onmouseover = function() { chbxInfoRepostBlock.style.display='block';};
chbxInfoRepost.onmouseout = function() {chbxInfoRepostBlock.style.display='none';};


var chbxInfoPrepay = document.getElementById('chbxInfoPrepay');
var chbxInfoPrepayBlock = document.getElementById('chbxInfoPrepayBlock');
chbxInfoPrepay.onmouseover = function() { chbxInfoPrepayBlock.style.display='block';};
chbxInfoPrepay.onmouseout = function() {chbxInfoPrepayBlock.style.display='none';};







function priceGenerator() {




    //Базовая цена в зависимости от типа занятий
if (oge.checked) {

        typeInfo.style.display = 'block';

        if (addressOnline.checked){
            typeInfo.innerHTML = '✔ 4 занятия в месяц по 80 минут  онлайн <br>✔ все занятия в записи<br>✔ личный куратор<br>✔ пробные тесты<br>✔ доведение до результата';
        }
        else {
            typeInfo.innerHTML = 'Занятие в минигруппе<br>4 занятия в месяц по 80 минут каждое';
        }

        $individTypes.style.display = 'none';
    }

else if (ege.checked) {

    typeInfo.style.display = 'block';

    if (addressOnline.checked){
        typeInfo.innerHTML = '✔ 4 занятия в месяц по 80 минут  онлайн <br>✔ все занятия в записи<br>✔ личный куратор<br>✔ пробные тесты<br>✔ доведение до результата';
    }
    else {
        typeInfo.innerHTML = 'Занятие в минигруппе<br>4 занятия в месяц по 120 минут каждое';
    }


    $individTypes.style.display = 'none';


    }

else if (individ.checked) {

    if (addressOnline.checked){
        typeInfo.style.display = 'block';
        typeInfo.innerHTML = '✔ 4 занятия в месяц по 80 минут  онлайн <br>✔ все занятия в записи<br>✔ личный куратор<br>✔ пробные тесты<br>✔ доведение до результата';
        $individTypes.style.display = 'none';
    }
    else {
        typeInfo.style.display = 'none';
        typeInfo.innerHTML = '';
        $individTypes.style.display = 'block';
    }
}








    //Скидки в зависимости от кол-ва предметов
if (oge.checked && +rangeSubjects.value === 1) {basePrice = 4900}
if (oge.checked && +rangeSubjects.value === 2){basePrice = 9500/2}
if (oge.checked && +rangeSubjects.value === 3){basePrice = 14000/3}
if (oge.checked && +rangeSubjects.value === 4){basePrice = 18400/4}

if (ege.checked && +rangeSubjects.value === 1){basePrice = 5900}
if (ege.checked && +rangeSubjects.value === 2){basePrice = 11500/2}
if (ege.checked && +rangeSubjects.value === 3){basePrice = 17000/3}
if (ege.checked && +rangeSubjects.value === 4){basePrice = 22400/4}

if (individ.checked && individ40.checked){basePrice = 5500}
if (individ.checked && individ60.checked){basePrice = 6700}
if (individ.checked && individ90.checked){basePrice = 10000}

if (addressOnline.checked){basePrice = 1900}
if (addressOnline.checked && individ.checked){basePrice = 4500}



//END Скидки в зависимости от кол-ва предметов


    if (chbxRepost.checked) {
        discountRepost = Math.round(basePrice * 0.05 * rangeSubjects.value)
    }
    else {
        discountRepost = 0
    }

    if (chbxFriend.checked) {
        discountFriend = Math.round(basePrice * 0.1 * rangeSubjects.value);
    }
    else {
        discountFriend = 0
    }




// Скидка пр предоплате
    if (chbxPrepay.checked ) {
        if (addressT.checked === true) {

            basePrice = basePrice - 500;
        }
    }
    else {
        discountPrepay = 0
    }



    mounthTotal_F();
    subjectsTotal_F();

    priceTotal =  Math.round(basePrice * rangeMounth.value * rangeSubjects.value - discountFriend - discountRepost);

    $priceTotal.innerHTML = priceTotal  + ' руб.';
    //расчет и запись цены за месяц
    $priceMounth.innerHTML = +Math.round(priceTotal/rangeMounth.value) + ' руб./мес';




    // priceMounthValue ();
    totalDiscount_F ();

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
    // priceMounth.value = Math.round(priceTotal/rangeMounth.value)

}

function totalDiscount_F () {

    var basePriceReal;
    if (oge.checked) {if(addressOnline.checked) {basePriceReal = 1900} else {basePriceReal = 4900}}
    else if (ege.checked) {if(addressOnline.checked) {basePriceReal = 1900} else {basePriceReal = 5900}}
    else if (individ.checked) {
        if (addressOnline.checked) {
            basePriceReal = 4500
        }
        else {
            basePriceReal = 5500
        }
    }

    totalDiscount = Math.round(((basePriceReal * rangeMounth.value * rangeSubjects.value)-priceTotal)/rangeMounth.value);
    if (totalDiscount>=0) {
        $totalDiscount.innerHTML = totalDiscount + ' руб./мес';
    }
    else {$totalDiscount.innerHTML = 0 + ' руб./мес'}

    console.log(basePriceReal)

}

priceGenerator()