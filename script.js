const imgs = document.querySelector('#imgs')
const img = document.querySelectorAll('#imgs img')

let index = 0

const run = () => {
    index++;

    if(index > img.length - 1) {
        index = 0
    }

    imgs.style.transform = `translateX(${-index * 1000}px)`;

    
}
setInterval(run, 3000)