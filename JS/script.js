const countdownDate = new Date("Jan 24, 2026 15:00:00").getTime();

// Создаем блоки таймера динамически (если их нет в HTML)
const timer = document.getElementById("timer");
if (timer && timer.children.length === 0) {
    timer.innerHTML = `
        <div class="days"><div class="numbers" id="days">00</div>днів</div>
        <div class="hours"><div class="numbers" id="hours">00</div>годин</div>
        <div class="minutes"><div class="numbers" id="minutes">00</div>хвилин</div>
        <div class="seconds"><div class="numbers" id="seconds">00</div>секунд</div>
    `;
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        timer.innerHTML = "Час вийшов!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Обновляем каждую секунду
setInterval(updateTimer, 1000);
updateTimer();