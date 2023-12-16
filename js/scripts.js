var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button")
console.log(burgerBtn);

var canYouSeeMainNav = false;

function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav == false){
        console.log("show menu");
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;
        
    }
}