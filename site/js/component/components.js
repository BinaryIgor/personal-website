const EXPANDED_CLASS = "expanded";
const HIDDEN_CLASS = "hidden";

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


export function initAllCollapsibles() {
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