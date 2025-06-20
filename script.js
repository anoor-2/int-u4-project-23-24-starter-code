// JavaScript goes here.
let mango=0
let passionFruit=0
let lychee=0 
let dragonfruit=0

// Get all image elements inside buttons
const buttonImages = document.querySelectorAll("button img");

// Loop through them and set new size
buttonImages.forEach(img => {
  img.style.width = Max;
  img.style.height = Auto;
});

//Question One// 
justMe=document.querySelector(".justMe");
bestFriend=document.querySelector(".bestFriend");
twoPeople=document.querySelector(".twoPeople");
threeOrMore=document.querySelector(".threeOrMore");

//Question Two//
mountains=document.querySelector(".mountains");
beach=document.querySelector(".tropicalBeach");
city=document.querySelector(".city");
home=document.querySelector(".home");

//Question Three//
roadTrip=document.querySelector(".roadTrip");
plane=document.querySelector(".plane");
uber=document.querySelector(".uber");
walking=document.querySelector(".walking");

//Question Four//
findStay=document.querySelector("findStay");
explore=document.querySelector("explore");
attraction=document.querySelector(".attraction");
tanning=document.querySelector(".tan"); 

//Question Five//
bestHotel=document.querySelector(".bestHotel");
simpleHotel=document.querySelector(".simpleHotel");
airbnb=document.querySelector(".airbnb");
friendHouse=document.querySelector(".friend's house");

submitButton=document.querySelector(".submitButton"); 

//Question One//
justMe.addEventListener('click',function(){
  mango += 1
});
bestFriend.addEventListener('click',function(){
  passionFruit+=1
});
twoPeople.addEventListener('click',function(){
  lychee+=1 
});
threeOrMore.addEventListener('click',function(){
  dragonfruit+=1 
});

//Question Two// 
mountains.addEventListener('click', function(){
  lychee+=1 
});
beach.addEventListener('click',function(){
  dragonfruit+=1 
});
city.addEventListener('click',function(){
  passionFruit+=1
});
home.addEventListener('click',function(){
  mango+=1 
});

//Question Three 
roadTrip.addEventListener('click',function(){
  lychee+=1 
});
plane.addEventListener('click',function(){
  dragonfruit+=1 
});
uber.addEventListener('click',function(){
  passionFruit+=1 
});
walking.addEventListener('click',function(){
  mango+=1 
});

//Question Four
findStay.addEventListener('click',function(){
  mango+=1 
});
explore.addEventListener('click',function(){
  passionFruit+=1 
});
attraction.addEventListener('click',function(){
  lychee+=1 
});
tanning.addEventListener('click',function(){
  dragonfruit+=1 
});

//Question Five 
bestHotel.addEventListener('click',function(){
  dragonfruit+=1 
});
simpleHotel.addEventListener('click',function(){
  mango+=1 
});
airbnb.addEventListener('click',function(){
  lychee+=1 
});
friendHouse.addEventListener('click',function(){
  passionFruit+=1
});