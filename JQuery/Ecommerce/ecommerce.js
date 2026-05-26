
var  btn_men = document.getElementById("btn-men");
var  btn_women = document.getElementById("btn-women");
var  btn_kid = document.getElementById("btn-kid");
var  btn_mobile = document.getElementById("btn-mobile");
var  btn_watch = document.getElementById("btn-watch");
var new_arrival_products_men = document.getElementById("new-arrival-products-men")
var new_arrival_products_women = document.getElementById("new-arrival-products-women")
var new_arrival_products_kid = document.getElementById("new-arrival-products-kid")
var new_arrival_products_mobile = document.getElementById("new-arrival-products-mobile")
var new_arrival_products_watch = document.getElementById("new-arrival-products-watch")


btn_men.addEventListener('click', ()=>{
    new_arrival_products_men.style.display='block';
    new_arrival_products_women.style.display='none';
    new_arrival_products_kid.style.display='none';
    new_arrival_products_mobile.style.display='none';
    new_arrival_products_watch.style.display='none';


});
btn_women.addEventListener('click', ()=>{
  new_arrival_products_men.style.display='none';
    new_arrival_products_women.style.display='block';
    new_arrival_products_kid.style.display='none';
    new_arrival_products_mobile.style.display='none';
    new_arrival_products_watch.style.display='none';
})
btn_kid.addEventListener('click', ()=>{
  new_arrival_products_men.style.display='none';
    new_arrival_products_women.style.display='none';
    new_arrival_products_kid.style.display='block';
    new_arrival_products_mobile.style.display='none';
    new_arrival_products_watch.style.display='none';
})
btn_mobile.addEventListener('click', ()=>{
  new_arrival_products_men.style.display='none';
    new_arrival_products_women.style.display='none';
    new_arrival_products_kid.style.display='none';
    new_arrival_products_mobile.style.display='block';
    new_arrival_products_watch.style.display='none';
})
btn_watch.addEventListener('click', ()=>{
  new_arrival_products_men.style.display='none';
    new_arrival_products_women.style.display='none';
    new_arrival_products_kid.style.display='none';
    new_arrival_products_mobile.style.display='none';
    new_arrival_products_watch.style.display='block';
})



gsap.to("#page1 h1",{
  transform:"translateX(-100%)",
  fontWeight:"100",
  scrollTrigger:{
      trigger: "#page1" ,
      scroller:"body",
      markers:true,
      start:"top 0",
      end:"top -200%",
      scrub:2,
      pin:true
  }
})

gsap.to("#top",{
  top:"-50%",
  scrollTrigger:{
      trigger:".popular-products",
      markers:true,
      start:"50% 50%",
      end:"50% 10%",
      scrub: 2,
      
  }
})



gsap.to("#bottom",{
bottom:"-50%",
  scrollTrigger:{
      trigger:".popular-products",
      markers:true,
      start:"50% 50%",
      end:"50% 10%",
      scrub: 2,
      pin:true
  }
})




