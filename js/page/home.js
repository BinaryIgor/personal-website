const INITIAL_DELAY = 1000;
const NEXT_DELAY = 500;
const WORD_STEP_DURATION = 100;

export function render(rootId = "component") {
    const root = document.getElementById(rootId);

    root.innerHTML = `
        <div class="home-container no-select">
            <div class="home-container-name blink-cursor-animation">
                Igor Roztropiński
            </div>
        <div class="interaction-hint blink-cursor-animation">Tap/click/press key...</div>
    `;

    const name = document.querySelector(".home-container-name");
    const interactionHint = document.querySelector(".interaction-hint");

    animateTextTyping(name, INITIAL_DELAY, interactionHint);

    function animateTextTyping(textElement, initialDelay, nextTextElement = null) {
        const characters = textElement.textContent.trim().length;

        const characterSize = textElement.offsetWidth / characters;

        textElement.style.opacity = 1;
        textElement.style.width = "0px";

        let drawn = 0;

        function animateNext() {
            drawn++;
            textElement.style.width = `${(drawn * characterSize)}px`;
            if (drawn < characters) {
                setTimeout(animateNext, WORD_STEP_DURATION);
            } else {
                textElement.style.width = "auto";

                if (nextTextElement) {
                    setTimeout(() =>  animateTextTyping(nextTextElement, NEXT_DELAY, null), NEXT_DELAY);
                }
            }
        }

        setTimeout(animateNext, initialDelay);
    }
};