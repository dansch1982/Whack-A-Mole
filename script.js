const speed = 2000,
    appearance = 1000,
    holes = document.querySelectorAll('main article');

for (const hole of holes) {
    hole.addEventListener('click', function () {
        if (this.classList.contains('mole')) {
            this.classList.remove('mole')
            this.classList.toggle('hit')
            setTimeout(() => {
                this.classList.toggle('hit')
            }, 800);
            document.querySelector('.moleswhacked b').textContent++
        }
    });
};

function loop() {
    const element = document.querySelector('.timeleft b')
    const secondsLeft = element.textContent.substring(0, element.textContent.length - 1)
    const whacked = document.querySelector('.moleswhacked b')
    if (secondsLeft <= 0) {
        if (document.querySelector('.mole')) {
            document.querySelector('.mole').classList.remove('mole')
        }
        alert(`Slut på tid! Du lyckades slå ${whacked.textContent} mulvadar.`)
        if (confirm('Spela en gång till?')) {
            element.textContent = 60 + "s"
            whacked.textContent = 0
            return loop();
        }
        return        
    }
    const index = Math.floor(Math.random() * holes.length)
    setTimeout(() => {
        if (secondsLeft % (speed / 1000) === 0) {
            holes[index].classList.add("mole")
            setTimeout(() => {
                holes[index].classList.remove("mole")
            }, appearance - whacked.textContent * 25);
        }
        element.textContent = secondsLeft - 1 + "s"
        loop();
    }, 1000);
}
window.addEventListener('DOMContentLoaded', () => {
    loop();
});