export function render(rootId="component") {

    const root = document.getElementById(rootId);

    root.innerHTML = `
        <div>
            <h1>Main</h1>
        </div>
    `;
};