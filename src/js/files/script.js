// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
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
};
