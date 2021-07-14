
import * as Routes from "../routing/routes.js";

const EXPANDED_CLASS = "expanded";
const HIDDEN_CLASS = "hidden";
const LOADER_WRAPPER_CLASS = "loader-wrapper";
const LOADER_CLASS = "loader";

const EXPAND = "+";
const HIDE = "-";


export function content(body) {
    return `<div class="content-container">
                <div class="content fade-in">
                    ${body}
                </div>
            </div>`
}

export function collapsible(title, body) {
    return `<section>
                <div class="collapsible-container">
                    <h1>${title}</h1> 
                    <span>${EXPAND}</span>
                </div>
                <div class="${HIDDEN_CLASS}">
                    ${body}
                </div>
            </section>`;
}

export function initCollapsibles() {
    document.querySelectorAll(".collapsible-container").forEach(c => {
        const icon = c.querySelector("span");
        const content = c.nextElementSibling;
        c.onclick = e => {
            e.stopPropagation();

            c.parentElement.classList.toggle(EXPANDED_CLASS);
            content.classList.toggle(HIDDEN_CLASS);

            if (icon.textContent == EXPAND) {
                icon.textContent = HIDE;
            } else {
                icon.textContent = EXPAND;
            }
        }
    });
}

export function imageLoader(src, imgClass = "") {
    return `<div class="${LOADER_WRAPPER_CLASS}">
                <span class="${LOADER_CLASS}">Loading...</span>
                <img class="${imgClass} ${HIDDEN_CLASS}" src="${src}"></img>
            </div>`
}

export function initImageLoaders(newSrc = null) {
    document.querySelectorAll(`.${LOADER_WRAPPER_CLASS}`).forEach(il => {
        const loader = il.querySelector(`.${LOADER_CLASS}`);
        const img = il.querySelector("img");

        loader.classList.remove(HIDDEN_CLASS);
        img.classList.add(HIDDEN_CLASS);

        img.addEventListener("load", () => {
            loader.classList.add(HIDDEN_CLASS);
            img.classList.remove(HIDDEN_CLASS);
        });

        if (newSrc) {
            img.src = newSrc;
        }
    });
}

export function initInnerLinks() {
    document.querySelectorAll("a").forEach(a => {
        const link = a.href;
        const innerLink = link.includes(window.location.hostname);
        
        if (innerLink) {
            a.onclick = e => {
                e.preventDefault();
                e.stopPropagation();
                Routes.push(link);
            }
        }
    });
}