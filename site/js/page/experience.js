import * as Components from "../component/components.js";


const HYCOM_CONTENT = {
    position: "Java/Python developer",
    period: "2019.11 - ",
    experience: {
        "Data Lake": `Creating and modifying apps that consume data from various resources, do some sort of processing with it and/or send/store it.
         All of them are containerized and deployed on AWS and make heavy use of its infrastructure, including RDS, DynamoDB, SQS, SNS, ECS and S3.
         Due to often use of time series type of data, we later on switched from RDS to customized <a href="https://www.timescale.com/">TimescaleDb</a> instance, deployed on EC2.
         Applications are written in <strong>both Java and Python</strong>. 
         Among others, technologies used are: Spring Boot, JOOQ, Spark, <a href="https://pandas.pydata.org/">pandas</a> and <a href="https://www.testcontainers.org/">Testcontainers</a>.`,
        "Backend": `Creating and modifying apps that consume or produce RESTful API's, implemented in microservices architecture. 
            Facing all of its downsides and enjoying some of the benefits. 
            At my current level of knowledge and experience, I think, that for the most part, costs of using this architecture outweight benefits. 
            It shouldn't be used, unless such a need <strong>could be objectively and empirically proven</strong>.
            Most of its benefits, without downsides, could be obtained using <a href="https://www.kamilgrzybek.com/design/modular-monolith-primer/">modular monolith</a> approach.
            Besides, let's not forget about YAGNI principle. 
            The absolute majority of our systems is not the next Facebook, Youtube, Netflix or Google and it will never have problems of their scale.`,
        "Tests": `Almost every application that I have created/modified here had very high test coverage (70%, often 80% and more). 
            We write both unit and integration tests, in both Python and Java applications.
            After this experience and experimenting with many side projects I will never write anything of importance, without focusing on tests and testability first.
            I have also encounter many drawbacks of heavy reliance on mocking. My approach to tests have evolved and is now very similar to one 
            described in great article by <a href="https://www.jamesshore.com/v2/blog/2018/testing-without-mocks">James Shore: "Testing Without Mocks: A Pattern Language"</a>.`,
        "DevOps": `<del>Taking care and improving existing CI/CD infrastructure. 
            It's based on Jenkins and use host of Bash, Python, SQL and Ansible scripts.</del> 
            We rewrite it from scratch, using combination of Python scripts and AWS's CodeBuild service, automating everything that could be automated.
            Due to growing number of applications and limited team size, we have also decided to automate (as much as possible) maintenance and monitoring.
            Our custom monitoring system is based on: <a href="https://grafana.com/">Grafana</a>, Elasticsearch, CloudWatch and separate Python application.`
    }
};

const INOVATICA_CONTENT = {
    position: "Java developer",
    period: "2017.09 - 2019.11",
    experience: {
        "Mobile": `Writing native mobile apps using Java and Kotlin. 
            All of them were communicating with RESTful APIs, which sometimes were created in-house and sometimes by another company or even in another country.
            Often integration with Google or Facebook services was needed. 
            They were also making extensive use of hardware features including GPS, camera or step counter.`,
        "Backend": `Making typical RESTful apps written in Java, using Spring Boot and Hibernate. 
            I was also responsible for maintenance of a journey planning service, 
            which makes heavy use of <a href="https://en.wikipedia.org/wiki/General_Transit_Feed_Specification">GTFS</a>.`,
        "Desktop": `Creating various apps using Swing and JavaFX for the purpose of monitoring and controlling autonomous forklift.`,
        "Algorithms": `Participating in autonomous forklift project I had the opportunity to work on very interesting problems. 
            One of them was creating a safety system, that allows forklift to firstly slow down and then stop, if detected obstacle is too close.
            It was possible by getting data from mounted on forklift <a href="https://en.wikipedia.org/wiki/Lidar">Lidar</a>,
            which publishes point cloud over TCP/IP protocol, multiple times per second.
            <a href="https://github.com/locationtech/jts">JTS Topology Suite</a> was of great help here.
            Excluding drivers, all system components were written in Java.`
    }
};

export function render(rootId = "component") {

    function sectionHtml(section) {
        const html = [];
        html.push(`
                <div class="fragment">
                    <h2>${section.position}</h2>
                    <h2>${section.period}</h2>
                </div>
               `);

        for (const [title, text] of Object.entries(section.experience)) {
            html.push(`
                    <h2>${title}</h2>
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