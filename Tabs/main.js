const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");

const allButtons = [button1, button2, button3, button4];

function clearActive(){
    allButtons.forEach(i => i.classList.remove("active-tab"));
}

clearActive();
button1.classList.add("active-tab");
text.innerText = "First Tab content to be displayed here";

button1.onclick = function() {
    clearActive();
    this.classList.add("active-tab");
    text.innerText = "First Tab content to be displayed here";
};

button2.onclick = function() {
    clearActive();
    this.classList.add("active-tab");
    text.innerText = "Second Tab content to be displayed here";
};

button3.onclick = function() {
    clearActive();
    this.classList.add("active-tab");
    text.innerText = "Third Tab content to be displayed here";
};

button4.onclick = function() {
    clearActive();
    this.classList.add("active-tab");
    text.innerText = "Forth Tab content to be displayed here";
};