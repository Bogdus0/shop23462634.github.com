const infoBtns=document.querySelectorAll('.info-dot');
const infoHints=document.querySelectorAll('.info-hint');



for(let btn of infoBtns){
  
    btn.addEventListener('click', showHint);
}
function showHint (e){
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none')

}
//Закрить при клік по всьому док

document.addEventListener('click',closeHints)

function closeHints(){
    for(let hint of infoHints){
        hint.classList.add('none');
    }


}


for(let hint of infoHints){
    hint.addEventListener('click',(e)=> e.stopPropagation());

}



//Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'horizontal',
    loop: true,
    freeMode:true,

    slidesPerView:4,
    spaceBetween:42,

    breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        608: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
  
  });
  //Tabs
    const tabsBtns = document.querySelectorAll('[data-tab]');
    const tabsProducts = document.querySelectorAll('[data-tab-value]');

    

    for (let btn of tabsBtns){

    
  
      btn.addEventListener('click',function(){
    
    for(let btn of tabsBtns){
      btn.classList.remove('tab-controls_btn--active');
    }

    
     
    
    this.classList.add('tab-controls_btn--active');

    

    //скрить всі зайві
    for(let product of tabsProducts){
      

      if(product.dataset.tabValue===this.dataset.tab){
        product.classList.remove('none');

      }
      else{ 
        product.classList.add('none');
      }
      swiper.update();

      

    }


    
  })
}
//Mobile Nav

const mobileNavOpenBtn=document.querySelector('#open-mobile-nav');
const mobileNav=document.querySelector('#mobile-nav');
const mobileNavClose = document.querySelector('#close-mobile-nav');

mobileNavOpenBtn.onclick =function(){
  mobileNav.classList.add('mobile-nav-wrapper--open');

}
mobileNavClose.onclick=function(){
  mobileNav.classList.remove('mobile-nav-wrapper--open');

}