import * as Components from "../component/components.js";
import { Repositories, Libraries } from "../links/codes.js";

const LANGUAGES_CONTENT = {
    "Java": `This is my primary and favorite language. Most projects, in which I participated or created, use it. 
        I consider myself advanced Java programmer, as I have used it to created almost anything, including mobile, web, desktop and CLI applications.
        Nevertheless, I don't like the overcomplication of most popular Java frameworks. In many cases, costs of using them overweight promised benefits.`,
    "Python": `My tool of choice for writing helpful scripts, data analysis, predictions, simple tools and apps. 
        I love the simplicity of its philosophy. Java ecosystem has much to learn from it.`,
    "JavaScript": `I used it for frontend, web development and by playing with the Node.js.
        My minimalistic approach, which is to avoid frameworks in favor of small libraries, is constantly helping me to get deeper understanding of the language.
        I love its simplicity.`,
    "Kotlin": `I have written two Android apps in this language so far. As it has a lot in common with Java, it was very easy language to pick up. 
        I enjoyed it a lot, will definitely use it in the future and have hope to see it as Java successor (or not, if Java will keep its current pace of development, which seems to be the case with the Java 17 and beyond).`,
    "C/C++": `This is the language in which I have learned programming.
        I have never created anything of substantial complexity in it, but if there is a need I can quickly refresh and expand my skills.`,
    "Assembly": `I have also played with Assembly to have a better grasp of what is really going on on the lowest, machine level. 
        It's my strong conviction that every programmer should at least write some toy programs in it. 
        Even its basic knowledge gives comprehensive view of how words of high-level languages are translated to machine instructions and how many important details they hide from us. 
        The most importantly, it destroys <a href="https://blog.cleancoder.com/uncle-bob/2015/08/06/LetTheMagicDie.html">the magic</a> and gives confidence of understanding.</a>
        Which is more and more important, as we continue to create next layers of abstractions, hiding simple reality of ones and zeros.`
};

const ENVIRONMENTS_CONTENT = {
    "Web": `I created and participated in a development of many backends and websites, using monolith, modular monolith and microservices architectures alike.
        I am familiar with REST API concepts, HTTP protocol, WebRTC, HTML, CSS and JavaScript.`,
    "Cloud": `Work in the Data Lake project, which consisted of various, dockerized apps, scripts and jobs deployed on AWS allowed me to learn the specifics of cloud environment.
        I also had a chance to work with the GCP.`,
    "Command Line": `I authored many programs and algorithms that can be interacted with only through CLI. 
        This includes utility programs like file transformers, parsers, mappers or custom CI/CD pipelines wrappers.
        Participating in the autonomous forklift project, when working for Inovatica, 
        I developed a few algorithms that were exchanging data over TCP/IP, using <a href="https://hazelcast.com/">Hazelcast framework</a>.`,
    "Android": `I wrote a few native Android apps. Most of them used RESTful API as a data source.
        In two cases, SQLite database and periodical synchronization of data with backend were used.
        More than once, there was a need to integrate with Google or Facebook services and to use hardware features.`,
    "Desktop": `Creating apps using Swing and JavaFX. One of them had to work on a small, resistive touchscreen, which required customized approach.`
};

const TECHNOLOGIES_CONTENT = {
    "Git": `When it comes to version control system, choice is rather obvious now. I have used Git extensively both in my work and personal projects.`,
    "Maven": `If we talk about build systems, I prefer and have the most experience using Maven. I use it by default in every JVM project.
        My libraries can be found in <a href="${Libraries.maven}">The Central Maven Repository</a>.`,
    "Gradle": `It has to be used, when creating Android apps. Having done that, I know the basics of this system.`,
    "SQL": `Most applications, where I needed to store data in a persistent manner, take advantage of some relational database.
        Mostly, I used Postgres or MySQL on a server-side and SQLite on Android.
        Learning SQL through hours of practice and studying great materials from people like <a href="https://use-the-index-luke.com/">Markus Winand</a> or <a href="https://blog.jooq.org/">Lucas Edger</a>, made me a big fan of it.
        Relational data model has proved itself, through decades of practical use, to be extremely versatile and useful abstraction.
        Sometimes there is a valid use case for NoSQL database, but more often than not, it's used only because now (2022) there is a hype around it,
        as there is also hype around microservices.
        Unfortunately, hype, like propaganda and various ideologies, turns off thinking, which is quite dangerous. 
        Especially, when trying to bend computers to our will, where hard, deep and rigorous thinking is our only weapon and hope for succeeding.`,
    "AWS": `Participating in the creation of data lake at Hycom gave me a chance to use various AWS services.
        We were deploying applications on both Fargate and EC2, storing lots of data on EBS and S3 (even some in DynamoDB). 
        We were also taking config parameters from SSM and storing secrets in Secrets Manager.
        Some data was exchanged through SQS and SNS.
        Using CodeBuild, <a href="https://aws.amazon.com/cdk">CDK</a> and a host of Python scripts, we created CI/CD system customized to our GitFlow approach.`
};

const OTHER_CONTENT = {
    "HTTP": `Creating simple <a href="${Repositories.brightServer}">server</a> and using it from both <a href="${Repositories.gentleRequest}">client</a> and server side made me well versed with this protocol.`,
    "Design Patterns": `I think that there is a great value in knowing them, because in software engineering we often solve similar problems.
        Even tough they often don't have to be used exactly as described, knowledge of them helps to understand many frameworks, libraries and recognize category of problems being solved,
        which makes them a lot easier to solve (Decorator is my favorite).`,
    "Algorithms and Data Structures": `Every programmer should know basic <a href="${Repositories.algorithmsAndDataStructures}">algorithms and data structures</a>. 
        Although we often use, and should be doing so, ready-made solutions, we ought to know and understand logic and concepts behind them.`,
    "Dedication to learning": `I always learn something new and strive for more.`
};

export function render(rootId = "component") {

    function sectionHtml(subsections) {
        const html = [];
        for (const [title, text] of Object.entries(subsections)) {
            html.push(`<h2>${title}</h2>`);
            html.push(`<p>${text}</p>`);
        }
        return html.join("\n");
    }

    const root = document.getElementById(rootId);

    root.innerHTML = Components.content(`
        ${Components.collapsible("Languages", sectionHtml(LANGUAGES_CONTENT))}
        ${Components.collapsible("Environments", sectionHtml(ENVIRONMENTS_CONTENT))}
        ${Components.collapsible("Technologies", sectionHtml(TECHNOLOGIES_CONTENT))}
        ${Components.collapsible("Other", sectionHtml(OTHER_CONTENT))}
    `);

    Components.initCollapsibles();
};