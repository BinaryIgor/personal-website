import { render as renderHomePage } from "./page/home.js";

import Router from "./router.js";

const CURRENT_ROUTE_CLASS = "current";
const DEFAULT_ROUTE = "home";

const router = new Router();

router.addDefaultRoute(renderHomePage);

const routes = {
    "home": renderHomePage,
    "about": () => import('./page/about.js').then(page => page.render()),
    "technologies": () => import('./page/technologies.js').then(page => page.render()),
    "experience": () => import('./page/experience.js').then(page => page.render()),
    "code": () => import('./page/code.js').then(page => page.render())
};

for (const [k, v] of Object.entries(routes)) {
    router.addRoute(k, v);
}

const navLinks = document.querySelectorAll("a");
navLinks.forEach(l => l.classList.remove(CURRENT_ROUTE_CLASS));

router.init();

export function push(url = `${window.location}`) {
    const route = router.routeFromUrl(url);
    const resolved = router.push(route);

    navLinks.forEach(l => {
        if (resolved == null) {
            if (l.href.includes(DEFAULT_ROUTE)) {
                l.classList.add(CURRENT_ROUTE_CLASS);
            } else {
                l.classList.remove(CURRENT_ROUTE_CLASS);
            }
        } else if (l.href.includes(route)) {
            l.classList.add(CURRENT_ROUTE_CLASS);
        } else {
            l.classList.remove(CURRENT_ROUTE_CLASS);
        }
    });
}

export function resolveCurrent() {
    push();
}