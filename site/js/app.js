
import * as Routes from "./routing/routes.js";

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

const topNav = document.querySelector(".top-nav");
const topMobileNav = document.querySelector(".top-nav-mobile");

setupNavigation(topNav);
setupNavigation(topMobileNav, () => {
    topMobileNav.classList.remove('display');
    document.body.classList.remove("modal-open");
});
topMobileNav.addEventListener("click", e => e.stopPropagation());

const delay = Routes.isMain() ? 2000 : 1000;

setTimeout(() => {
    document.querySelectorAll(".hidden").forEach(h => h.classList.remove("hidden"));

    Routes.push();
}, delay);