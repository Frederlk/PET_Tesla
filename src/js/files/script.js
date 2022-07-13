// Подключение функционала "Чертогов Фрилансера"
import { CountUp } from "countup.js";
// Подключение списка активных модулей

if (document.querySelector(".info__video")) {
    const videoFile = document.getElementById("video-file");
    const videoWrap = document.getElementById("video-wrap");
    let observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            if (mutation.type === "attributes") {
                if (videoWrap.classList.contains("_watcher-view") && videoFile.paused) {
                    videoFile.play();
                } else {
                    videoFile.pause();
                }
            }
        }
    });

    observer.observe(videoWrap, { attributes: true });
}

if (document.getElementById("count-up")) {
    const countUpWrap = document.getElementById("count-up");
    let observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            if (mutation.type === "attributes") {
                if (countUpWrap.classList.contains("_watcher-view")) {
                    const acceleration = {
                        decimal: ",",
                        decimalPlaces: 1,
                    };
                    const batteryOptions = {
                        separator: "",
                    };
                    let countUp = new CountUp("acceleration", 2.1, acceleration);
                    let battery = new CountUp("battery", 1000, batteryOptions);
                    let speed = new CountUp("speed", 400);
                    countUp.start();
                    battery.start();
                    speed.start();
                }
            }
        }
    });

    observer.observe(countUpWrap, { attributes: true });
}
