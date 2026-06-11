const menssageInput = document.querySelector(".menssageInput");
const textBox = document.querySelector(".textBox");
const textCount = document.querySelector(".textCount");

textBox.classList.remove("maxText");
textCount.classList.remove("maxText");
menssageInput.classList.remove("maxText");

menssageInput.addEventListener("input", function(){
    const currentLength = menssageInput.value.length;
    const maxLength = 250;

    textCount.innerText = `${currentLength} / ${maxLength}`;

    if(currentLength >= maxLength){
        textBox.classList.add("maxText");
        textCount.classList.add("maxText");
        menssageInput.classList.add("maxText");
    }
    else{
        textBox.classList.remove("maxText");
        textCount.classList.remove("maxText");
        menssageInput.classList.remove("maxText");
    }
})