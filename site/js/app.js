
import * as Routes from "./routes.js";
import { RestartableRain } from "./animation/restartable-rain.js";

function extractedCssVar(cssVar) {
    return getComputedStyle(document.body)
        .getPropertyValue(`--${cssVar}`);
}

function setupNavigation(nav, afterPushHook = null) {
    nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();

            Routes.push(a.href);

            if (afterPushHook) {
                afterPushHook();
            }
        })
    });
};

function newRainOptions() {
    const rainColor = extractedCssVar('rain-color');
    const raintFontSize = parseInt(extractedCssVar('rain-font-size'));

    return {
        characters: `0101010101?`,
        delay: -500,
        minimumSpeed: 1,
        maximumSpeed: 8,
        minimumChainLength: 10,
        maximumChainLength: 22,
        canvasId: 'canvas',
        interval: 50,
        fontFamily: 'monospace',
        fontColor: rainColor,
        fontSize: raintFontSize,
        fadeRange: 0.7,
        chainChangeResistance: 8,
        minimumCharChangeResistance: 50,
        maximumCharChangeResistance: 100,
        columnsGap: 2,
        backgroundColor: 'hsla(0, 0%, 0%, 0%)',
        firstCharLighterBy: 25
    };
}

const rain = new RestartableRain(newRainOptions);

rain.start();

document.addEventListener('themeChange', () => rain.restart());

const topNav = document.querySelector(".top-nav");
const topMobileNav = document.querySelector(".top-nav-mobile");

setupNavigation(topNav);
setupNavigation(topMobileNav, () => {
    topMobileNav.classList.remove('display');
    document.body.classList.remove("modal-open");
});
topMobileNav.addEventListener("click", e => e.stopPropagation());

setTimeout(() => {
    document.querySelectorAll(".hidden").forEach(h => {
        h.classList.remove("hidden");
    });

    Routes.resolveCurrent();
}, 1000);