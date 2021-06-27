
import Router from "./router.js";

console.log("Starting js app..")


// let rain = new Rain({
//     characters: `01`,
//     fontSize: 22,
//     delay: -700,
//     minimumSpeed: 1,
//     maximumSpeed: 5,
//     minimumChainLength: 10,
//     maximumChainLength: 22,
//     canvasId: 'canvas',
//     interval: 35,
//     fontFamily: 'monospace',
//     fontColor: 'hsla(120, 87%, 53%, 1)',
//     fadeRange: 0.7,
//     chainChangeResistance: 8,
//     minimumCharChangeResistance: 50,
//     maximumCharChangeResistance: 100,
//     columnsGap: 2,
//     backgroundColor: 'hsla(0, 0%, 0%, 1)',
//     firstCharLighterBy: 25
// });

// rain.start();

const router = new Router();

router.addDefaultRoute(() => {
    console.log("Init default route...");
});

const topNav = document.querySelector(".top-nav");
const topMobileNav = document.querySelector(".top-nav-mobile");

setupNavigation(topNav);
setupNavigation(topMobileNav);

function setupNavigation(nav) {
    nav.querySelectorAll("a").forEach(a => {
        console.log("link = " + a);
    
        const route = router.routeFromUrl(a.href);
        router.addRoute(route, () => {
            console.log("Going ro route..." + route);
        });
    
        a.addEventListener("click", e => {
            e.preventDefault();
            console.log("Clicking..." + a.href);
    
            router.push(route);
        })
    });
};

router.init();
