
import Router from "./router.js";
import { RestartableRain } from "./animation/restartable-rain.js";
import { render as renderHomePage } from "./page/home.js";

console.log("Starting js app..")

function extractedCssVar(cssVar) {
    return getComputedStyle(document.body)
        .getPropertyValue(`--${cssVar}`);
}

function setupNavigation(nav, afterPushHook = null) {
    nav.querySelectorAll("a").forEach(a => {
        const route = router.routeFromUrl(a.href);
        const routeInit = routes[route];

        router.addRoute(route, routeInit);

        a.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();

            router.push(route);

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
        fontSize: 9,
        delay: -500,
        minimumSpeed: 1,
        maximumSpeed: 5,
        minimumChainLength: 10,
        maximumChainLength: 22,
        canvasId: 'canvas',
        interval: 35,
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

const routes = {
    "/home": renderHomePage,
    "/about": () => import('./page/about.js').then(page => page.render()),
    "/technologies": () => import('./page/technologies.js').then(page => page.render()),
    "/experience": () => import('./page/experience.js').then(page => page.render()),
    "/code": () => import('./page/code.js').then(page => page.render())
};

const router = new Router();

router.addDefaultRoute(renderHomePage);

const topNav = document.querySelector(".top-nav");
const topMobileNav = document.querySelector(".top-nav-mobile");

setupNavigation(topNav);
setupNavigation(topMobileNav, () => {
    topMobileNav.classList.remove('display');
    document.body.classList.remove("modal-open");
});
topMobileNav.addEventListener("click", e => e.stopPropagation());

router.init();

const currentRoute = router.routeFromUrl(`${window.location}`);
const routeInit = routes[currentRoute];


setTimeout(() => {
    console.log("Rendering something...");

    document.querySelectorAll(".hidden").forEach(h => {
        h.classList.remove("hidden");
    });

    if (routeInit) {
        routeInit();
    } else {
        renderHomePage();
    }
}, 1000);