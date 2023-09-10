import { render as renderHomePage } from "../page/home.js";
import { render as renderAbout } from "../page/about.js";
import { render as renderSkills } from "../page/skills.js";
import { render as renderExperience } from "../page/experience.js";

import Router from "./router.js";

const CURRENT_ROUTE_CLASS = "current";
const DEFAULT_ROUTE = "home";
const DEFAULT_ROUTE_TITLE = "Igor Roztropiński";

function enterRoute(route, render) {
    window.scrollTo({
        top: 0,
        left: 0
    });

    navLinks.forEach(l => {
        if (l.href.includes(route)) {
            l.classList.add(CURRENT_ROUTE_CLASS);
        } else {
            l.classList.remove(CURRENT_ROUTE_CLASS);
        }
    });

    render();
}

const router = new Router();

router.addDefaultRoute(() => enterRoute(DEFAULT_ROUTE, renderHomePage));

const routes = {
    "home": renderHomePage,
    "about": renderAbout,
    "skills": renderSkills,
    "experience": renderExperience
};

const routesTitles = {
    "home": DEFAULT_ROUTE_TITLE,
    "about": "About",
    "skills": "Skills",
    "experience": "Experience"
};

const navs = document.querySelectorAll("nav");
const navLinks = [];
navs.forEach(n => {
    const nLinks = n.querySelectorAll("a");
    nLinks.forEach(l => {
        l.classList.remove(CURRENT_ROUTE_CLASS);
        navLinks.push(l);
    });
});

for (const [route, render] of Object.entries(routes)) {
    router.addRoute(route, () => enterRoute(route, render));
}

router.init();

export function pushOrReplace(url = `${window.location}`) {
    const currentRoute = router.routeFromUrl(`${window.location}`);
    const route = router.routeFromUrl(url);

    if (currentRoute == route || !currentRoute) {
        router.replace(route);
    } else {
        router.push(route);
    }

    const title = routesTitles[route];
    document.title = title ? title : DEFAULT_ROUTE_TITLE;
}

export function isMain(url = `${window.location}`) {
    const route = router.routeFromUrl(url);
    const title = routesTitles[route];
    return !title || title == DEFAULT_ROUTE_TITLE;
}


