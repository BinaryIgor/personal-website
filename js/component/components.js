export function collapsible(text, nestedHtml, id) {
    return `<div id="${id}" class="collapsible">
        <h1>${text}</h1>
        <div class="hidden"> 
            ${nestedHtml}
        </div>
    </div>`
}