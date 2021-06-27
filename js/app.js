
import Router from "./router.js";
import { RestartableRain } from "./animation/restartable-rain.js";
import { render as renderMainPage } from "./page/main.js";

console.log("Starting js app..")

function extractedCssVar(cssVar) {
    return getComputedStyle(document.body)
        .getPropertyValue(`--${cssVar}`);
}

function setupNavigation(nav) {
    nav.querySelectorAll("a").forEach(a => {
        const route = router.routeFromUrl(a.href);
        const routeInit = routes[route];

        router.addRoute(route, routeInit);

        a.addEventListener("click", e => {
            e.preventDefault();
            router.push(route);
        })
    });
};

function newRainOptions() {
    const rainColor = extractedCssVar('rain-color');
    const raintFontSize = parseInt(extractedCssVar('rain-font-size'));

    return {
        characters: `01010101?`,
        fontSize: 22,
        delay: -700,
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

document.addEventListener('themeChange', () => {
    console.log("Theme changed!");
    rain.restart();
});

const routes = {
    "/home": renderMainPage,
    "/about": function () {
        import('./page/about.js').then(page => page.render());
    },
    "/technologies": function () {
        import('./page/technologies.js').then(page => page.render());
    },
    "/experience": function () {
        import('./page/experience.js').then(page => page.render());
    },
    "/code": function () {
        import('./page/code.js').then(page => page.render());
    }
};

const router = new Router();

router.addDefaultRoute(renderMainPage);

const topNav = document.querySelector(".top-nav");
const topMobileNav = document.querySelector(".top-nav-mobile");

setupNavigation(topNav);
setupNavigation(topMobileNav);

router.init();

renderMainPage();