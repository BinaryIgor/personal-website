import { render as renderHomePage } from "./page/home.js";

import Router from "./router.js";

const CURRENT_ROUTE_CLASS = "current";

const router = new Router();

router.addDefaultRoute(renderHomePage);

const routes = {
    "home": renderHomePage,
    "about": () => import('./page/about.js').then(page => page.render()),
    "skills": () => import('./page/skills.js').then(page => page.render()),
    "experience": () => import('./page/experience.js').then(page => page.render()),
    "code": () => import('./page/code.js').then(page => page.render())
};

const routesTitles = {
    "home": "Igor Roztropiński",
    "about": "About",
    "skills": "Skills",
    "experience": "Experience",
    "code": "Code"
};

const navLinks = document.querySelectorAll("a");
navLinks.forEach(l => l.classList.remove(CURRENT_ROUTE_CLASS));

for (const [route, render] of Object.entries(routes)) {
    router.addRoute(route, () => {
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
    });
}

router.init();

export function push(url = `${window.location}`) {
    const route = router.routeFromUrl(url);
    router.push(route);

    const title = routesTitles[route];
    document.title = title;
}

export function resolveCurrent() {
    push();
}