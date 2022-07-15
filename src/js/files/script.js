// Подключение функционала "Чертогов Фрилансера"
import { CountUp } from "countup.js";
// Подключение списка активных модулей

if (document.querySelector(".info__video")) {
    const sourceWemb = document.getElementById("source-webm"),
        sourceMp4 = document.getElementById("source-mp4"),
        videoFile = document.getElementById("video-file"),
        videoWrap = document.getElementById("video-wrap");

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

    const updateVideo = (linkMp4, linkWebm) => {
        if (!sourceMp4.src.includes(linkMp4)) {
            videoFile.pause();
            sourceMp4.src = linkMp4;
            sourceWemb.src = linkWebm;
            videoFile.load();
            videoFile.play();
        } else {
            return;
        }
    };

    if (window.innerWidth <= 480) {
        videoFile.pause();
        sourceMp4.src = "videos/tesla-mobile.mp4";
        sourceWemb.src = "videos/tesla-mobile.webm";
        videoFile.load();
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 480) {
            updateVideo("videos/tesla-mobile.mp4", "videos/tesla-mobile.webm");
        } else {
            updateVideo("videos/tesla.mp4", "videos/tesla.webm");
        }
    });
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
