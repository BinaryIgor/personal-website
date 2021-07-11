import { Rain } from "./rain.js";

const MIN_WIDTH_DIFF = 10;

export function RestartableRain(userOptionsProvider) {
    const rainFactory = () => new Rain(userOptionsProvider());

    let rain = rainFactory();

    this.start = () => {
        let previousWidth = window.innerWidth;

        rain.start();

        window.addEventListener("resize", debounce(() => {
            const widthDiff = Math.abs(window.innerWidth - previousWidth);
            if (widthDiff >= MIN_WIDTH_DIFF) {
                this.restart();
                previousWidth = window.innerWidth;
            }
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