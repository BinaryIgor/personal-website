import * as Components from "../component/components.js";


const HYCOM_CONTENT = {
    position: "Java/Python developer",
    period: "2019.11 - ",
    experience: {
        "Data processing": `Creating and modifying apps that consume data from various resources, do some sort of processing with it and/or send/store it. All of them are containerized and deployed on AWS and make heavy use of its infrastructure including RDS, DynamoDB, SQS, SNS, ECS and S3`,
        "Backend": `Creating and modifying apps that consume or produce RESTful APIs`,
        "Data analysis": `Writing analysis of various datasets produced by data processing apps or in a raw format. Tools of use: Python, Scikit-learn, Pandas, Grafana.`,
        "DevOps": `Taking care and improving existing CI/CD infrastructure. It's based on Jenkins and use host of Bash, Python, SQL and Ansible scripts.`
    }
};

const INOVATICA_CONTENT = {
    position: "Java developer",
    period: "2017.09 - 2019.11",
    experience: {
        "Mobile": `Writing native mobile apps using Java and Kotlin. All of them were communicating with RESTful API. Often integration with Google or Facebook services was needed. They were also making extensive use of hardware features including GPS, camera and step counter.`,
        "Backend": `Making typical RESTful apps written in Java, using Spring Boot and Hibernate. I was also responsible for maintenance of a journey planning service, which makes heavy use of <a href="https://en.wikipedia.org/wiki/General_Transit_Feed_Specification">GTFS</a>.`,
        "Desktop": `Creating various apps using Swing and JavaFX.`,
        "Algorithms": `Participating in autonomous forklift project I have opportunity to work on very interesting problems. One of them was a safety system, that allows forklift to firstly slow down and then stop, if detected obstacle is too close.`
    }
};

export function render(rootId = "component") {

    function sectionHtml(section) {
        const html = [];
        html.push(`
                <div class="fragment">
                    <h3>${section.position}</h3>
                    <h3>${section.period}</h3>
                </div>
               `);

        html.push(`<h2>Work</h2>`);

        for (const [title, text] of Object.entries(section.experience)) {
            html.push(`
                    <h3>${title}</h3>
                    <p>${text}</p>
                `);
        }
        return html.join("\n");
    }

    const root = document.getElementById(rootId);
    
    root.innerHTML = Components.content(`
        ${Components.collapsible("Hycom", sectionHtml(HYCOM_CONTENT))}
        ${Components.collapsible("Inovatica", sectionHtml(INOVATICA_CONTENT))}
    `);

    Components.initCollapsibles();
};