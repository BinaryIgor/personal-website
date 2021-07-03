import * as Components from "../component/components.js";
import Images from "../links/images.js";
import { Repositories, Instances, Stores } from "../links/codes.js";

const VIRTUOCRACY_CONTENT = {
    goal: "TODO",
    description: "TODO",
    images: [],
    links: {
        "Instance": Instances.virtuocracy,
        "Code": Repositories.virtuocracy
    }
};

const FOOD_CONTROLLER_CONTENT = {
    goal: "Easy to use mobile application for controlling food intake.",
    description: `This was my first application written in Kotlin. It's entirely self-contained and is shipped with SQLite database containing most frequently eaten food products. It allows adding new ones, seting daily goals for food intake and keeping track of its history. All of which make it easy to control dieting habits.`,
    images: [],
    links: {
        "Code": Repositories.foodController
    }
};

const SMART_QUERY_CONTENT = {
    goal: "Simple, yet powerful jdbc wrapper that gives both convenience and complete power over sql.",
    description: `Finding many problems with ORMs and Hibernate especially, I looked for alternative approach. Being fan of SQL, I have trouble with justifing hiding it behind ORM magic. 
        At the same time, writing repeative, simple SQL statements is very error-prone. <a href='https://www.jooq.org/'>JOOQ</a> is very nice, but I find it too complex. 
        Being fanatic of simplicity and curious of how things work drives me to create this library. Related to this, I also created <a href='${Repositories.smartQueryMeta}'>database representation generator</a>.`,
    images: [],
    links: {
        "Code": Repositories.smartQuery
    }
};

const DAILY_WISDOM_CONTENT = {
    goal: "Mobile application for devices with Android that allows reading quotes from the greatest minds in history. CMS for adding and modyfing data consumed by mobile application. RESTful backend that serves as a source of data for both of them.",
    description: `RESTful service is written in Java, using Spring Boot nad Hibernate. CMS was created in pure JavaScript.
        It was my first JS application, so I figured out that writing everything from scratch is a great idea to learn it. 
        It has very simple UI and doesn't handle well different screen resolutions. Modyfing content that mobile app consumes is its only purpose. 
        This app is the most important component of the project and at the same time the only one that matters for the end user.
         It's a native Android application written in Java. Its primary objective is to allow reading quotes in the most comfortable and encouraging way possible. 
         Data comes from the backend, is fetched at the moment of installation and saved locally to a SQLite database. 
         From that time it's synchronized on a weekly basis. Thanks to this approach internet connection isn't needed most of the time.`,
    images: [],
    links: {
        "Code": Repositories.dailyWisdomBackend,
        "Mobile app": Stores.dailyWisdom
    }
};

const BRIGHT_SERVER_CONTENT = {
    goal: "Lightweight, standalone easy to use http server and java web framework.",
    description: `Soon after I began to search for less complex and opinionated alternatives to Spring I started to use Jetty in embedded mode. That was pretty good, but I think that idea of embedded servers can be further simplified.
        My goal is to provide most of the conveniences that Spring gives when developing web applications, but at the same time create something a lot simpler and lightweight. It doesn't have any dependencies and its API is so simple that any seasoned Java developer could become familiar with it under an hour.`,
    images: [],
    links: {
        "Code": Repositories.brightServer
    }
};

const GENTLE_REQUEST_CONTENT = {
    goal: "Compact library for making http requests.",
    description: `When writing heavily reliant on http protocol Android applications I was never happy with libraries available on the market. Furthermore, as I have already written my own <a href="${Repositories.brightServer}">http server</a>
        I took the opportunity to test it from the client side and deepen my knowledge about http protocol. It has simple, yet powerful api, which allows sending and receiving bytes, text, json and files. 
        Multipart requests and asynchronicity are also supported.`,
    images: [],
    links: {
        "Code": Repositories.gentleRequest
    }
};

const ALGORITHMS_AND_DATA_STRUCTURES_CONTENT = {
    goal: "Implementation of various algorithms and data structures.",
    description: `This is the documentation of my interest in this fundamental topic. It has solutions for many popular problems like <a href="${Repositories.algorithmsAndDataStructures}/blob/master/src/main/java/com/iprogrammerr/algorithms_data_structures/algorithm/DynamicTwoSumProblemSolution.java">Two Sum Problem</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/blob/master/src/main/java/com/iprogrammerr/algorithms_data_structures/algorithm/ReservoirSampling.java" >Reservoir Sampling</a>, <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/search">searching</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/sort">sorting</a>, <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/graph">graph algorthms</a> or 
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/cache">cache</a>. 
        There are implementations of popular data structures like <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/tree">trees</a>,
        <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/hashtable">hash tables</a> and <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/queue">queues</a>. 
        Lastly, I grappled with a few <a href="${Repositories.algorithmsAndDataStructures}/tree/master/src/main/java/com/iprogrammerr/algorithms_data_structures/heuristics/meta">herustic algorithms</a>.
    `,
    images: [],
    links: {
        "Code": Repositories.algorithmsAndDataStructures
    }
};

export function render(rootId = "component") {

    function sectionHtml(section) {
        const html = [];

        html.push(`<h2>Goal</h2>`);
        html.push(`<p>${section.goal}</p>`);
        html.push(`<h2>Description</h2>`);
        html.push(`<p>${section.description}</p>`);

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

    const root = document.getElementById(rootId);

    root.innerHTML = Components.content(`
        ${Components.collapsible("Wirtuokracja", sectionHtml(VIRTUOCRACY_CONTENT))}
        ${Components.collapsible("Food Controller", sectionHtml(FOOD_CONTROLLER_CONTENT))}
        ${Components.collapsible("Smart Query", sectionHtml(SMART_QUERY_CONTENT))}
        ${Components.collapsible("Daily Wisdom", sectionHtml(DAILY_WISDOM_CONTENT))}
        ${Components.collapsible("Bright Server", sectionHtml(BRIGHT_SERVER_CONTENT))}
        ${Components.collapsible("Gentle Request", sectionHtml(GENTLE_REQUEST_CONTENT))}
        ${Components.collapsible("Algorithms and Data Structures", sectionHtml(ALGORITHMS_AND_DATA_STRUCTURES_CONTENT))}
    `);

    Components.initAllCollapsibles();
};