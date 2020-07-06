var navContent = document.querySelector('nav').innerHTML;
var $mobileMenuButton = document.querySelector('.mobile_section_button');
var mobileMenu = document.querySelector('.mobile_section');



var $priceShowMore = document.querySelector('.price_showMore');
var $worksShowMore = document.querySelector('.works_showMore');


$priceShowMore.addEventListener('click', (event)=> {

   event.target.parentElement.parentElement.querySelector('.hidden_block').classList.remove('hidden_block');
event.target.style.display = 'none';
});

$worksShowMore.addEventListener('click', (event)=> {

    event.target.parentElement.parentElement.querySelector('.hidden_block').classList.remove('hidden_block');
    event.target.style.display = 'none';
});




// $priceShowMore.addEventListener('click', (event)=> {
//     $price_hidden_block.classList.remove('hidden_block');
//     event.target.style.display = 'none';
// });

mobileMenu.innerHTML = navContent;
var mobileMenuPoint = document.querySelectorAll('.mobile_section a');

console.log(mobileMenuPoint);


function mobileMenuShow() {
    mobileMenu.style.display = 'block';
}

function mobileMenuHide() {
    mobileMenu.style.display = 'none';
    console.log('work')
}

$mobileMenuButton.addEventListener('click', mobileMenuShow);
mobileMenu.addEventListener('click', mobileMenuHide);
mobileMenuPoint[1].addEventListener('click', mobileMenuHide);

for (var i=0; i<mobileMenuPoint.length; i++) {
    mobileMenuPoint[i].onclick = mobileMenuHide;
}