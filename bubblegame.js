let playgame = function () {
    let playgamecall = document.querySelector(".play");
    playgamecall.style.opacity = "0";
    let bubble = document.querySelector(".bubble");
    let pbtm = document.querySelector(".pbtm");
    let timer = 10;
    let scr = 0;
    let rn = 0;
    let highScore = 0;
    function createBubble() {
        let clutter = "";
        for (let i = 1; i <= 198; i++) {
            rn = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble">${rn}</div>`
        }
        pbtm.innerHTML = clutter;
    }
    function runtimer() {
        let time = document.querySelector(".time");
        let id = setInterval(
            function () {

                if (timer <= 0) {
                    highSc();
                    pbtm.innerHTML = `<h2>Game Over Your score is ${scr}</h2> <br> <h2>High Score is ${highScore}</h2>`;
                    setTimeout(() => {
                        pbtm.playgamecall.style.opacity = "1";
                        playgamecall.innerText = "Restart";
                    }, 2000);
                    clearInterval(id);
                } else {
                    timer--;
                    time.textContent = timer;//time.innerText =timer; also work as same.
                }

            }, 1000)
    }
    function getHit() {
        let hit = document.querySelector(".hit");
        rn = Math.floor(Math.random() * 10);
        hit.textContent = rn;
    }
    function scoreCount() {
        let score = document.querySelector(".score");
        scr += 10;
        score.textContent = scr;
    }
    function highSc() {
        if (highScore < scr) {
            highScore = scr;
            pbtm.innerHTML = `High Score is ${highScore}`;
        } else {
            pbtm.innerHTML = `High Score is ${highScore}`;
        }
    }
    pbtm.addEventListener("click", function (details) {
        // console.log(Number(details.target.textContent));//<div class="bubble">2</div>(this is print cause of target, it means that target point the element whick is clicked.)
        let clickednum = Number(details.target.textContent);
        if (clickednum === rn) {
            scoreCount();
            createBubble();
            getHit();
        }
    });
    runtimer();
    createBubble();
    getHit();
}
playgame();