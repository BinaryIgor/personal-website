export function render(rootId="component") {

    const root = document.getElementById(rootId);

    root.innerHTML = `
        <div>
            <h1>About</h1>
        </div>
    `;
};