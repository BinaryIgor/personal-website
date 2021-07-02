import * as Components from "../component/components.js";


const LANGUAGES_CONTENT = {
    "Java": `This is my primary and favorite langauge. Most projects in which I participated or created are written in it. 
    I consider myself advanced Java programmer, as I have used it to created almost anything including mobile, web, desktop and cli applications.`,
    "Python": `My tool of choice for writing helpful scripts, data analysis and predictions.`,
    "JavaScript": `I consider myself intermediate JS developer. I use it exclusively for frontend web development. My minimalist approach, which is to avoid frameworks in favor of small libraries, is constantly helping me to get deeper understanding of the language.`,
    "Kotlin": `I have written two Android apps in this language so far. As it has a lot in common with Java, it was very easy to pick up. I enjoyed it a lot, will definitely use it in the future and have hope to see it as Java successor.`,
    "C/C++": `This is the language in which I learned programming. I have never create anything of substantial complexity in it, but if there will be a need I could quickly refresh and expand my skills. I will also be happy to do so.`,
    "Assembly": `I have also played with Assembly to have a better grasp of what is going on on the lowest, machine level. It's my strong conviction that every programmer should at least write some toy programs in it. Knowledge of it gives comprehensive view of how words of high-level languages are translated to machine instructions and how many important details they hide from us. The most importantly, it destroys <a href="https://blog.cleancoder.com/uncle-bob/2015/08/06/LetTheMagicDie.html">the magic</a> and gives confidence of understanding.</a>`,
    "SQL": `Most applications, in which I needed to store data in a persistent manner take advantage of relational database. Mostly, I used MySQL on a server-side and SQLite on Android.`
};

const ENVIRONMENTS_CONTENT = {
    "Web": `I created and participated in development of a few backends and websites. I am familiar with REST API concepts, HTTP protocol, HTML, CSS and JavaScript.`,
    "Cloud": `Work in data lake project, which consists of various apps, scripts and jobs deployed on AWS allowed me to learn specifics of cloud environment`,
    "Command Line": `I authored many programs and algorithms that can be interacted with only through cli. This includes utility programs like file transformers, parsers and mappers. Participating in autonomous forklift project I developed a few algorithms exchanging data over TCP/IP using <a href="https://hazelcast.com/">Hazelcast</a>.`,
    "Android": `I wrote quite a few native Android apps. Most of them used RESTful API as a data source. In two cases, SQLite database and periodical synchronization of data with backend was used. More than once there was a need to integrate with Google or Facebook services and to use hardware features.`,
    "Desktop": `Creating apps using Swing and JavaFX. One of them had to work on a small, resistive touchscreen, which required very customized approach.`
};

const TECHNOLOGIES_CONTENT = {
    "Git": `When it comes to version control system, choice is rather obvious now. I have used Git extensively both in my work and personal projects.`,
    "Maven": `If we talk about build systems I prefer and have the most experience using Maven. I use it by default in every jvm project. My libraries can be found in <a href="https://search.maven.org/search?q=iprogrammerr">The Central Maven Repository</a>.`,
    "Gradle": `It has to be used, when creating Android apps. Having done that, I know the basics of this system.`
};

const OTHER_CONTENT = {
    "HTTP": `Creating simple <a href="https://github.com/Iprogrammerr/Bright-Server">server</a> and using it from both <a href="https://github.com/Iprogrammerr/Gentle-Request">client</a> and server side made me well versed with this protocol.`,
    "REST": `Participating in creating projects that take advantage of its principles and using them from both sides.`,
    "Design Patterns": `I think that there is a great value in knowing them, because in software engineering we often solve similar problems. Even tough they often don't have to be used exactly as described, knowledge of them helps to understand many frameworks, libraries and recognize category of problems being solved, which makes them a lot easier to solve.`,
    "Algorithms and Data Structures": `Every programmer should know basic <a href="https://github.com/Iprogrammerr/Algorithms-Data-Structures">algorithms and data structures</a>. Although we often use, and should be doing so, ready-made solutions, we ought to know and understand logic behind them.`,
    "Dedication to learning": `Programming is one of my biggest passions. I always learn something new and strive for more.`
};

export function render(rootId = "component") {

    const root = document.getElementById(rootId);

    function sectionHtml(subsections) {
        const html = [];
        for (const [title, text] of Object.entries(subsections)) {
            html.push(`<h2>${title}</h2>`);
            html.push(`<p>${text}</p>`);
        }
        return html.join("\n");
    }

    const languagesSection = Components.collapsible("Languages", sectionHtml(LANGUAGES_CONTENT));
    const environmentsSection = Components.collapsible("Environments", sectionHtml(ENVIRONMENTS_CONTENT));
    const technologiesSection = Components.collapsible("Technologies", sectionHtml(TECHNOLOGIES_CONTENT));
    const otherSection = Components.collapsible("Other", sectionHtml(OTHER_CONTENT));

    root.innerHTML = Components.content(`
                ${languagesSection}
                ${environmentsSection}
                ${technologiesSection}
                ${otherSection}`);

    Components.initAllCollapsibles();
};