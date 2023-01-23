function changeQuestion() {

}

setTimeout(changeQuestion, 30000);

let timer = 30
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timer == -1) {
        clearTimeout(timerId);
        // changer question
    } else {
        document.querySelector('#timer').innerHTML = timer;
        timer--;
    }
}


