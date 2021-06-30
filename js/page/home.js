export function render(rootId="component") {

    const root = document.getElementById(rootId);

    root.innerHTML = `
        <div class="home-container">
            <div class="home-container-name">Igor Roztropiński</h2>
        </div>
        <div class="interaction-hint">Tap/click/press key</div>
    `;
};