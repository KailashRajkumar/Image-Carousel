const image = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let idx = 0;


let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 1){
        idx = 0;
    } else if(idx < 0){
        idx = img.length -1;
    }
    image.style.transform = `translateX(${-idx * 500}px)`;
}

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInternal();
});

rightBtn.addEventListener('click', () =>{
    idx++;
    changeImage();
    resetInternal();
});

function resetInternal() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}