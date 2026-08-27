const targetDate = new Date().getTime() + 3000;

const countdownScreen = document.getElementById("countdownScreen");
const openingScreen = document.getElementById("openingScreen");
const catScreen = document.getElementById("catScreen");
const countdown = document.getElementById("countdown");
const finalScreen = document.getElementById("finalScreen");
const replaySurprise = document.getElementById("replaySurprise");

const timer = setInterval(function () {

    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
    clearInterval(timer);

    countdownScreen.classList.add("hidden");
    openingScreen.classList.remove("hidden");

    // Opening scene for 5 seconds
    setTimeout(function () {
        openingScreen.classList.add("hidden");
        catScreen.classList.remove("hidden");
    }, 5000);

    return;
}

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    countdown.innerHTML =
        `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

}, 1000);
const openSurprise = document.getElementById("openSurprise");
const surpriseScreen = document.getElementById("surpriseScreen");

openSurprise.addEventListener("click", function () {
    catScreen.classList.add("hidden");
    surpriseScreen.classList.remove("hidden");
});
const watchVideo = document.getElementById("watchVideo");
const cinematicScreen = document.getElementById("cinematicScreen");

const birthdayMusic = document.getElementById("birthdayMusic");

watchVideo.addEventListener("click", function () {
    surpriseScreen.classList.add("hidden");
    cinematicScreen.classList.remove("hidden");

    // Start music from 00:31
    birthdayMusic.currentTime = 31;
    birthdayMusic.play();

    startBirthdayStory();
});

// Stop music automatically at 01:25
birthdayMusic.addEventListener("timeupdate", function () {
    if (birthdayMusic.currentTime >= 87) {
        birthdayMusic.pause();
        birthdayMusic.currentTime = 31;
    }
});

const scenes = [
    document.getElementById("scene1"),
    document.getElementById("scene2"),
    document.getElementById("scene3"),
    document.getElementById("scene4"),
    document.getElementById("scene5"),
    document.getElementById("scene6")
];

let currentScene = 0;
let storyTimer;

function startBirthdayStory() {

    currentScene = 0;

    scenes.forEach(scene => {
        scene.classList.add("hidden");
    });

    scenes[0].classList.remove("hidden");

    const sceneDurations = [
        6000,  // Scene 1
        9000,  // Scene 2
        9000,  // Scene 3
        9000,  // Scene 4
        9000,  // Scene 5
        9000   // Scene 6
    ];

    function nextScene() {

        scenes[currentScene].classList.add("hidden");

        currentScene++;

        if (currentScene < scenes.length) {

            scenes[currentScene].classList.remove("hidden");

            setTimeout(
                nextScene,
                sceneDurations[currentScene]
            );

        } else {

            // Music ends
            birthdayMusic.pause();

            // Small pause before final message
            setTimeout(function () {
                cinematicScreen.classList.add("hidden");
                finalScreen.classList.remove("hidden");
            }, 2000);
        }
    }

    setTimeout(nextScene, sceneDurations[0]);
}

const catHeart = document.getElementById("catHeart");

catHeart.addEventListener("click", function () {
    catHeart.classList.remove("heartBurst");

    // Restart animation
    void catHeart.offsetWidth;

    catHeart.classList.add("heartBurst");
});

replaySurprise.addEventListener("click", function () {

    finalScreen.classList.add("hidden");
    countdownScreen.classList.remove("hidden");

    location.reload();
});