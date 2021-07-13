import { Rain } from "./animation/rain.js";

const MIN_WIDTH_DIFF = 10;

function RestartableRain(userOptionsProvider) {
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

function newRainOptions() {
    function extractedCssVar(cssVar) {
        return getComputedStyle(document.body)
            .getPropertyValue(`--${cssVar}`);
    }

    const rainColor = extractedCssVar('rain-color');
    const raintFontSize = parseInt(extractedCssVar('rain-font-size'));

    return {
        characters: `01010101?`,
        delay: -600,
        minimumSpeed: 21,
        maximumSpeed: 25,
        minimumChainLength: 10,
        maximumChainLength: 30,
        canvasId: 'canvas',
        interval: 30,
        fontFamily: 'monospace',
        fontColor: rainColor,
        fontSize: raintFontSize,
        fadeRange: 0.7,
        minimumCharChangeResistance: 50,
        maximumCharChangeResistance: 99,
        columnsGap: 2,
        backgroundColor: 'hsla(0, 0%, 0%, 0%)',
        firstCharLighterBy: 15
    };
}

const rain = new RestartableRain(newRainOptions);

rain.start();

document.addEventListener('themeChange', rain.restart);