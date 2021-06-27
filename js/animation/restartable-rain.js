import { Rain } from "./rain.js";

export function RestartableRain(userOptionsProvider) {
    const rainFactory = () => new Rain(userOptionsProvider());

    let rain = rainFactory();

    this.start = () => rain.start();

    this.restart = (clearState = false) => {
        rain.dispose(clearState);
        rain = rainFactory();
        rain.start();
    };
}