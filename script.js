const speed = 2000,
    appearance = 1000,
    holes = document.querySelectorAll('main article');

for (const hole of holes) {
    hole.addEventListener('click', function () {
        if (this.classList.contains('mole')) {
            this.classList.remove('mole')
            this.classList.toggle('hit')
            this.addEventListener('animationend', () => {
            this.classList.toggle('hit')
            })
            document.querySelector('.moleswhackedElement b').textContent++
        }
    });
};

function loop() {
    const timeElement = document.querySelector('.timeleft b')
    const secondsLeft = timeElement.textContent.substring(0, timeElement.textContent.length - 1)
    const whackedElement = document.querySelector('.moleswhackedElement b')
    if (secondsLeft <= 0) {
        if (document.querySelector('.mole')) {
            document.querySelector('.mole').classList.remove('mole')
        }
        alert(`Slut på tid! Du lyckades slå ${whackedElement.textContent} mulvadar.`)
        if (confirm('Spela en gång till?')) {
            timeElement.textContent = 60 + "s"
            whackedElement.textContent = 0
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
            }, appearance - whackedElement.textContent * 25);
        }
        timeElement.textContent = secondsLeft - 1 + "s"
        loop();
    }, 1000);
}
window.addEventListener('DOMContentLoaded', () => {
    loop();
});