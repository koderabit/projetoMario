const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.gameOver');
const gameBoard = document.querySelector('.gameBoard');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        gameOver.style.display = 'block';

        gameBoard.style.width = '600px';
        gameBoard.style.height = '600px';
        gameBoard.style.border = 'none';
        gameBoard.style.background = 'black';
        gameBoard.style.borderRadius = '100%';
        gameBoard.style.transition = '1.5s';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);