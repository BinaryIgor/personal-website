export function render(rootId="component") {

    const root = document.getElementById(rootId);

    root.innerHTML = `
    <div class="content-container">
        <div class="content fade-in">
            <h1>Wirtuokracja</h1>
            <h1>Food Controller</h1>
            <h1>Time Ruler</h1>
            <h1>Smart Query</h1>
            <h1>Bright Server</h1>
            <h1>Gentle Request</h1>
            <h1>Algorithms and Data Structures</h1>
        </div>
    </div>
    `;
};