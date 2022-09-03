import * as Components from "../component/components.js";
import { Images } from "../links/images.js";
import { Repositories, Instances, Stores } from "../links/codes.js";


const FOOD_CONTROLLER_CONTENT = {
    goal: "Easy to use mobile application for controlling food intake.",
    description: `This was my first application written in Kotlin. 
        It's entirely self-contained and is shipped with SQLite database containing most frequently eaten food products. 
        It allows adding new ones, seting daily goals for food intake and keeping track of its history. All of which make it easy to control dieting habits.`,
    gallery: Images.foodController,
    links: {
        "Code": Repositories.foodController
    }
};

const SMART_QUERY_CONTENT = {
    goal: "Simple, yet powerful jdbc wrapper that gives both convenience and complete power over sql.",
    description: `Finding many problems with ORMs and Hibernate especially, I looked for alternatives.
        Being a fan of SQL, I have problems with hiding it behind ORM magic (experience that I have gained since that time only reinforced that view - ORM is a weak, leaky abstraction). 
        At the same time, writing repetitive, simple SQL statements is highly error-prone. <a href='https://www.jooq.org/'>JOOQ</a> is pretty nice, <del>but I find it too complex</del>
         (It's just right, for medium and large projects). 
        Being a fanatic of simplicity and being always curious of how things really work, drove me to create this library.
        Related to this, I also created a <a href='${Repositories.smartQueryMeta}'>database representation generator</a>.`,
    gallery: Images.smartQuery,
    links: {
        "Code": Repositories.smartQuery
    }
};

const VIRTUOCRACY_CONTENT = {
    goal: "Creating a place for publishing various thoughts about growing virtualization of reality.",
    description: `This project is something completely different. 
        Together with my brother, we wanted to try our hand at blogging. 
        As both of us are programmers and we like experimenting, we decided to code this blog ourselves. 
        Frontend was done by using a mixture of static site generator - <a href="https://jekyllrb.com/">Jekyll</a> and Vue framework. 
        Backend was written in Java, using Vertx and JOOQ. 
        We learned a lot during this journey - both in terms of programming and especially about writing and expressing one's thoughts clearly.
        The most important part is that we both prefer programming/engineering to writing/creating content and we will stick with it for now.`,
    gallery: Images.virtuocracy,
    links: {
        "Instance": Instances.virtuocracy,
        "Code": Repositories.virtuocracy
    }
};

const DAILY_WISDOM_CONTENT = {
    goal: "Mobile application for devices with Android that allows reading quotes from the greatest minds in history. CMS for adding and modifying data consumed by mobile application. RESTful backend that serves as a source of data for both of them.",
    description: `RESTful service is written in Java, using Spring Boot nad Hibernate. CMS was created in pure JavaScript.
        It was my first JS application, so I figured out that writing everything from scratch is a great idea to learn it. 
        It has a very simple UI and doesn't handle different screen resolutions well. 
        Modifying content that mobile app consumes is its only purpose. 
        This app is the most important component of the project and at the same time the only one that matters for the end user.
         It's a native Android application written in Java. Its primary objective is to allow reading quotes in the most comfortable and encouraging way possible. 
         Data comes from the backend, is fetched at the moment of installation and saved locally to a SQLite database. 
         From that time, data is synchronized on a weekly basis. Thanks to this approach, internet connection isn't needed most of the time.`,
    gallery: Images.dailyWisdom,
    links: {
        "Code": Repositories.dailyWisdomBackend,
        "Mobile app": Stores.dailyWisdom
    }
};

const BRIGHT_SERVER_CONTENT = {
    goal: "Lightweight, standalone, easy to use http server and java web framework.",
    description: `Soon after I began to search for less complex and opinionated alternatives to Spring I started to use Jetty in embedded mode. 
        That was pretty good, but I think that idea of embedded servers can be further simplified.
        <del>My goal is to provide most of the conveniences that Spring gives when developing web applications, but at the same time create something a lot simpler and lightweight</del>
         (It was amazing, eye-opening and confidence boosting, learning experience). 
        It doesn't have any dependencies and its API is so simple that any seasoned Java developer could become familiar with it in under one hour.`,
    gallery: Images.brightServer,
    links: {
        "Code": Repositories.brightServer
    }
};

const GENTLE_REQUEST_CONTENT = {
    goal: "Compact library for making http requests.",
    description: `When writing heavily reliant on http protocol Android applications I was never happy with libraries available on the market. 
        Furthermore, as I have already written my own <a href="${Repositories.brightServer}">http server</a>
        I took the opportunity to test it from the client side and deepen my knowledge about http protocol. 
        It has a simple, yet powerful API, which allows sending and receiving bytes, text, json and files. 
        Multipart requests and asynchronicity are also supported.`,
    gallery: Images.gentleRequest,
    links: {
        "Code": Repositories.gentleRequest
    }
};

const ALGORITHMS_AND_DATA_STRUCTURES_CONTENT = {
    goal: "Implementation of various algorithms and data structures.",
    description: `This is the documentation of my interest in this fundamental topic. It has solutions for many popular problems like <a href="${Repositories.algorithmsAndDataStructures}/blob/master/src/main/java/com/iprogrammerr/algorithms_data_structures/algorithm/DynamicTwoSumProblemSolution.java">Two Sum Problem</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/blob/master/src/main/java/com/iprogrammerr/algorithms_data_structures/algorithm/ReservoirSampling.java" >Reservoir Sampling</a>, 
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/search">searching</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/sort">sorting</a>, 
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/graph">graph algorithms</a> or 
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/cache">cache</a>. 
        There are implementations of popular data structures like <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/tree">trees</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/hashtable">hash tables</a> and <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/queue">queues</a>. 
        Lastly, I grappled with a few <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/heuristics/meta">heuristic algorithms</a>.
    `,
    gallery: Images.algorithmsAndDataStructures,
    links: {
        "Code": Repositories.algorithmsAndDataStructures
    }
};

const PERSONAL_WEBSITE = {
    goal: "Simple, self contained website with easy to change content.",
    description: `I wanted to have an easy to edit and maintain personal website. 
        It was achieved by creating a simple SPA with static content (so without a need for a backend), 
        which is served by Nginx. Deployment is automated thanks to a few python scripts and everything is deployed on a VPS.
        The whole JS code is bundled (using <a href="https://rollupjs.org/">Rollup</a>) and minified (using <a href="https://terser.org/">terser</a>). 
        Thanks to this approach, the JS bundle with app code and content is pretty small (around 35KB) and besides images, 
        there is no need to load any data from the server (which, like all assets, are cached).`,
    links: {
        "Code": Repositories.personalWebsite
    }
};

const FOCUSED_IMAGE_CONTAINER_ID = "focused-image-container";
const FOCUSED_IMAGE_CONTAINER_CLASS = "focused-image-container";
const LOADER_WRAPPER_CLASS = "loader-fullscreen-wrapper";
const LOADER_GALLERY_CLASS = "loader-gallery";
const DISPLAY_CLASS = "display";
const HIDDEN_SCROLL_CLASS = "hidden-scroll";
const IMAGE_CONTAINER_CLASS = "image-container";
const IMAGES_COUNTER_ID = "images-counter";
const CLOSE_GALLERY_ID = "close-gallery";
const ZOOM_OUT_ID = "zoom-out";
const ZOOM_IN_ID = "zoom-in";
const GALLERY_CLASS = "gallery";
const HIDDEN_CLASS = "hidden";
const IMAGE_URL_ATTRIBUTE = "data-image";
const ARROW_LEFT_CLASS = "arrow-left";
const ARROW_RIGHT_CLASS = "arrow-right";
const FADE_IN_CLASS = "fade-in-1";

const MIN_ZOOM = 0;
const MAX_ZOOM = 4;
const ZOOM_STEP = 50;

const INITIAL_SIZE = 100;

export function render(rootId = "component") {

    function sectionHtml(section) {
        const html = [];

        html.push(`<h2>Goal</h2>`);
        html.push(`<p>${section.goal}</p>`);
        html.push(`<h2>Description</h2>`);
        html.push(`<p>${section.description}</p>`);

        if (section.gallery) {
            html.push("<h2>Gallery</h2>");

            html.push(`<div class="gallery">`)
            for (const i of section.gallery) {
                html.push(`
                    <div ${IMAGE_URL_ATTRIBUTE}="${i}">
                        <div class="${LOADER_GALLERY_CLASS}">
                            Loading...
                        </div>
                        <img class="gallery-image ${HIDDEN_CLASS}">
                    </div>`);
            }
            html.push("</div>")
        }

        if (section.links && Object.keys(section.links).length > 0) {
            html.push("<h2>Links</h2>");

            html.push(`<ul class="links">`)
            for (const [alias, url] of Object.entries(section.links)) {
                html.push(`<li><a href="${url}">${alias}</a></li>`);
            }
            html.push("</ul>")
        }

        return html.join("\n");
    }

    function thumbImageUrl(imageUrl) {
        const parts = imageUrl.split("/");
        const name = parts[parts.length - 1]
        return imageUrl.replace(name, `thumb_${name}`);
    }

    const root = document.getElementById(rootId);

    root.innerHTML = `
        <div id="${FOCUSED_IMAGE_CONTAINER_ID}" class="${FOCUSED_IMAGE_CONTAINER_CLASS}">
            <div class="gallery-menu">
                <div>
                    <button class="no-button clickable" id="${ZOOM_OUT_ID}" disabled>-</button>
                    <button class="no-button clickable" id="${ZOOM_IN_ID}">+</button>
                </div>
                <h1 id="${IMAGES_COUNTER_ID}"></h1>
                <button class="no-button clickable" id="${CLOSE_GALLERY_ID}">x</button>
            </div>
            <div class="${ARROW_LEFT_CLASS} clickable ${HIDDEN_CLASS}">
                &#10094
            </div>
            <div class="${ARROW_RIGHT_CLASS} clickable ${HIDDEN_CLASS}">
                &#10095
            </div>
            <div class="${IMAGE_CONTAINER_CLASS}">
                <div class="${LOADER_WRAPPER_CLASS} ${HIDDEN_CLASS}">
                    <span class="loader">Loading...</span>
                </div>
                <img></img>
            </div>
            <div class="focused-image-container-background"></div>
        </div>
        ${Components.content(`
            ${Components.collapsible("Food Controller", sectionHtml(FOOD_CONTROLLER_CONTENT))}
            ${Components.collapsible("Smart Query", sectionHtml(SMART_QUERY_CONTENT))}
            ${Components.collapsible("Wirtuokracja", sectionHtml(VIRTUOCRACY_CONTENT))}
            ${Components.collapsible("Daily Wisdom", sectionHtml(DAILY_WISDOM_CONTENT))}
            ${Components.collapsible("Bright Server", sectionHtml(BRIGHT_SERVER_CONTENT))}
            ${Components.collapsible("Gentle Request", sectionHtml(GENTLE_REQUEST_CONTENT))}
            ${Components.collapsible("Algorithms and Data Structures", sectionHtml(ALGORITHMS_AND_DATA_STRUCTURES_CONTENT))}
            ${Components.collapsible("This website", sectionHtml(PERSONAL_WEBSITE))}
    `)}`;

    Components.initCollapsibles(extended => {
        const loaders = extended.querySelectorAll(`.${LOADER_GALLERY_CLASS}`);
        loaders.forEach(l => {
            const parent = l.parentElement;
            const img = parent.querySelector("img");

            l.classList.remove(HIDDEN_CLASS);
            img.classList.add(HIDDEN_CLASS);

            img.onload = () => {
                l.classList.add(HIDDEN_CLASS);
                img.classList.remove(HIDDEN_CLASS);
            };

            img.src = thumbImageUrl(parent.getAttribute(IMAGE_URL_ATTRIBUTE));
        });
    });

    const focusedImageContainer = document.getElementById(FOCUSED_IMAGE_CONTAINER_ID);

    const previousImage = document.querySelector(`.${ARROW_LEFT_CLASS}`);
    const nextImage = document.querySelector(`.${ARROW_RIGHT_CLASS}`);
    const loaderWrapper = document.querySelector(`.${LOADER_WRAPPER_CLASS}`);

    const currentImageContainer = focusedImageContainer.querySelector(`.${IMAGE_CONTAINER_CLASS}`);
    const focusedImage = focusedImageContainer.querySelector(`.${IMAGE_CONTAINER_CLASS} > img`);
    const zoomOut = document.getElementById(ZOOM_OUT_ID);
    const zoomIn = document.getElementById(ZOOM_IN_ID);
    const imagesCounter = document.getElementById(IMAGES_COUNTER_ID);
    const closeGallery = document.getElementById(CLOSE_GALLERY_ID);

    let currentZoom = 0;

    focusedImage.addEventListener("load", () => {
        focusedImage.classList.add(FADE_IN_CLASS);
        loaderWrapper.classList.add(HIDDEN_CLASS);
    });

    for (const gallery of document.querySelectorAll(`.${GALLERY_CLASS}`)) {
        setupGallery(gallery);
    }

    focusedImageContainer.onclick = e => e.stopPropagation();

    closeGallery.onclick = e => {
        e.stopPropagation();

        focusedImageContainer.classList.toggle(DISPLAY_CLASS);
        document.body.classList.toggle(HIDDEN_SCROLL_CLASS);

        previousImage.classList.add(HIDDEN_CLASS);
        nextImage.classList.add(HIDDEN_CLASS);

        resetZoomIf();
    };

    zoomOut.onclick = () => {
        if (currentZoom <= MIN_ZOOM) {
            return;
        }

        const beforeWidth = focusedImage.offsetWidth;
        const beforeHeight = focusedImage.offsetHeight;

        currentZoom--;

        setNewImageSize();
        setScroll(beforeWidth, beforeHeight);
        setupZoomButtonsState();
    };

    function setNewImageSize() {
        const newSize = currentZoom > 0 ? (INITIAL_SIZE + (currentZoom * ZOOM_STEP)) : INITIAL_SIZE;

        focusedImage.style.width = `${newSize}%`;
        focusedImage.style.height = `${newSize}%`;
    }

    function setScroll(beforeWidth, beforeHeight) {
        const scrollX = (focusedImage.offsetWidth - beforeWidth) / 2;
        const scrollY = (focusedImage.offsetHeight - beforeHeight) / 2;

        currentImageContainer.scrollBy(scrollX, scrollY);
    }

    function setupZoomButtonsState() {
        zoomOut.disabled = currentZoom == MIN_ZOOM;
        zoomIn.disabled = currentZoom == MAX_ZOOM;
    }

    function resetZoomIf() {
        if (currentZoom > 0) {
            focusedImage.style.width = `${INITIAL_SIZE}%`
            focusedImage.style.height = `${INITIAL_SIZE}%`;
            currentZoom = 0;
        }
        setupZoomButtonsState();
    }

    zoomIn.onclick = () => {
        if (currentZoom >= MAX_ZOOM) {
            return;
        }

        const beforeWidth = focusedImage.offsetWidth;
        const beforeHeight = focusedImage.offsetHeight;

        currentZoom++;

        setNewImageSize();
        setScroll(beforeWidth, beforeHeight);
        setupZoomButtonsState();
    };

    function setupGallery(gallery) {
        const images = gallery.children;
        let focusedIdx = -1;

        for (let i = 0; i < images.length; i++) {
            const image = images[i];

            image.onclick = e => {
                e.stopPropagation();

                document.body.classList.toggle(HIDDEN_SCROLL_CLASS);
                loaderWrapper.classList.remove(HIDDEN_CLASS);

                setImageUrl(focusedImage, image);

                focusedImageContainer.classList.toggle(DISPLAY_CLASS);

                focusedIdx = i;
                setImagesCounter(focusedIdx, images);

                if (images.length > 1) {
                    previousImage.classList.remove(HIDDEN_CLASS);
                    nextImage.classList.remove(HIDDEN_CLASS);
                    setPreviousNextImageButtons(focusedIdx, images);
                } else {
                    previousImage.classList.add(HIDDEN_CLASS);
                    nextImage.classList.add(HIDDEN_CLASS);
                }
            }
        }
    }

    function setImagesCounter(idx, images) {
        imagesCounter.textContent = `${idx + 1}/${images.length}`;
    }

    function setImageUrl(focusedImage, image) {
        const url = image.getAttribute(IMAGE_URL_ATTRIBUTE);

        loaderWrapper.classList.remove(HIDDEN_CLASS);

        focusedImage.classList.remove(FADE_IN_CLASS);
        focusedImage.style.opacity = "0";
        focusedImage.src = url;
    }

    function setPreviousNextImageButtons(focusedIdx, images) {
        previousImage.onclick = e => {
            e.stopPropagation();
            focusedIdx--;
            if (focusedIdx < 0) {
                focusedIdx = images.length - 1;
            }
            resetZoomIf();
            setImageUrl(focusedImage, images[focusedIdx]);
            setImagesCounter(focusedIdx, images);
        };
        nextImage.onclick = e => {
            e.stopPropagation();
            focusedIdx++;
            if (focusedIdx >= images.length) {
                focusedIdx = 0;
            }
            resetZoomIf();
            setImageUrl(focusedImage, images[focusedIdx]);
            setImagesCounter(focusedIdx, images);
        };
    }
}