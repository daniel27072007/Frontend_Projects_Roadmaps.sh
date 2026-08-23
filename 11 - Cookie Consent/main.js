const cookieButton = document.querySelector("#cookieButton");
const closeButton = document.querySelector("#closeButton");
const cookieBox = document.querySelector(".cookieBox");
const cookieContainer = document.querySelector("#cookieContainer");

const cookieConsent = localStorage.getItem("cookiesAceitos");

if(cookieConsent === "sim"){
    cookieContainer.classList.add("cookieBoxClose");
}
else{
    cookieContainer.classList.remove("cookieBoxClose");
}

closeButton.onclick = function(){
    cookieContainer.classList.add("cookieBoxClose");
}

cookieButton.onclick = function(){
    cookieContainer.classList.add("cookieBoxClose");
    localStorage.setItem("cookiesAceitos", "sim");
}