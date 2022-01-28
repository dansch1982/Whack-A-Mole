const   speed = 2000,
        appearance = 1000,
        holes = document.querySelectorAll('main article');

for (const hole of holes) {
    hole.addEventListener('click', function() {
        if (this.classList.contains('mole')) {
            this.classList.remove('mole')
            this.classList.toggle('hit')
            setTimeout(() => {
                this.classList.toggle('hit')
            }, 800);
            const element = document.querySelector('.moleswhacked b')
            element.textContent++
        }
    });
};

function loop() {
    const element = document.querySelector('.timeleft b')
    const secondsLeft = element.textContent.substring(0, element.textContent.length-1)
    const whacked = document.querySelector('.moleswhacked b').textContent
    if (secondsLeft <= 0) {
        const element = document.querySelector('.mole')
        if (element) {
            element.classList.remove('mole')
        }
        return alert(`Slut på tid! Du lyckades slå ${whacked} mulvadar.`)
    }
    const index = Math.floor(Math.random() * holes.length)
    setTimeout(() => {
        if (secondsLeft % (speed/1000) === 0) {
            holes[index].classList.add("mole")
            setTimeout(() => {
                holes[index].classList.remove("mole")
            }, appearance - whacked * 25);
        }
        element.textContent = secondsLeft - 1 + "s"
        loop();
    }, 1000);
}
loop();