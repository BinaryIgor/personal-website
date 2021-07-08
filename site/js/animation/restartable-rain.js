import { Rain } from "./rain.js";

export function RestartableRain(userOptionsProvider) {
    const rainFactory = () => new Rain(userOptionsProvider());

    let rain = rainFactory();

    this.start = () => {
        rain.start();

        window.addEventListener("resize", debounce(() => {
            this.restart();
        }));
    }

    this.restart = () => {
        rain.dispose();
        const paused = rain.isPaused();
        rain = rainFactory();
        rain.start(paused);
    };


    function debounce(func) {
        let previousCall = null;
        return function (event) {
            if (previousCall) {
                clearTimeout(previousCall);
            }
            previousCall = setTimeout(func, 100, event);
        }
    }
}