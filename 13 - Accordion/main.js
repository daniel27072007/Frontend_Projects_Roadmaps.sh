function accordionConfig(num1){
    const question = document.querySelector(`#question${num1}`);
    const answer = document.querySelector(`#answer${num1}`);
    const arrow = document.querySelector(`#arrow${num1}`);

    var checked = 0;

    arrow.classList.remove("open");
    arrow.classList.add("close");

    question.onclick = function(){
        if(checked === 0){
            arrow.classList.remove("close");
            arrow.classList.add("open");
            answer.classList.remove("closed");
            checked = 1;
        }
        else{
            arrow.classList.remove("open");
            arrow.classList.add("close");
            answer.classList.add("closed");
            checked = 0;
        }
    }
}

accordionConfig(1);
accordionConfig(2);
accordionConfig(3);
accordionConfig(4);
accordionConfig(5);
accordionConfig(6);