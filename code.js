const myTwitter = document.querySelector(".item-a");
const myFacebook = document.querySelector(".item-b");
const myLinkdin = document.querySelector(".item-c");
const myYoutub = document.querySelector(".item-d");
const myInstagram = document.querySelector(".item-e");
const myTiktok = document.querySelector(".item-f");
const myItems = document.querySelector(".items")
const myOn = document.querySelector(".on");
const myOff = document.querySelector(".off");

myOn.addEventListener("click", ()=>{
    myOn.style.zIndex = "-1";
    myOff.style.zIndex = "1";   
myFacebook.style.left = "100px";
myFacebook.style.top = "-90px";
myTwitter.style.top = "-150px";
myTwitter.style.left = "0";
myTiktok.style.top = "95px";
myTiktok.style.left = "0";
myInstagram.style.top = "-90px";
myInstagram.style.left = "-94px";
myYoutub.style.top = "40px";
myYoutub.style.left = "105px";
myLinkdin.style.top = "35px";
myLinkdin.style.left = "-94px";
});
myOff.addEventListener("click", ()=>{
    myOn.style.zIndex = "1";
    myOff.style.zIndex = "-1"; 
    myFacebook.style.left = "0px";
    myFacebook.style.top = "-25px";
    myTwitter.style.top = "-30px";
    myTwitter.style.left = "0";
    myTiktok.style.top = "-25px";
    myTiktok.style.left = "0";
    myInstagram.style.top = "-25px";
    myInstagram.style.left = "0px";
    myYoutub.style.top = "-30px";
    myYoutub.style.left = "0px";
    myLinkdin.style.top = "-30px";
    myLinkdin.style.left = "0px";
    });

