import * as Components from "../component/components.js";

const CommonLinks = {
    jooq: Components.aLink("https://www.jooq.org", "JOOQ"),
    testContainers: Components.aLink("https://www.testcontainers.org", "Testcontainers")
};

const MODIVO_CONTENT = {
    position: "Senior Backend Developer",
    period: "2022.10",
    experience: {
        "Backend": "All things on the backend. Mostly Java/Kotlin in the cloud, also Terraform/Kubernetes/Prometheus and other DevOps'y stuff, here and there."
    }
};

const HAIRO_CONTENT = {
    position: "Founder",
    period: "2022.04 - 2023.05",
    experience: {
        "Backend": `Design and the implementation of the whole backend, from scratch. Used technologies/paradigms: Java 17, modular monolith, ${CommonLinks.jooq}, PostgreSQL, RabbitMQ, WebRTC, WebSockets and Web Push Notifications.
        <br>
        Writing lots of unit and integration tests using ${CommonLinks.testContainers}.`,
        "Infrastructure": `Design and the implementation of a custom infrastructure. It was built on ${Components.aLink("https://digitalocean.com", "DigitalOcean")}, using Docker and Python/Bash scripts.
        Combination of Python scripts, dedicated Java app and Grafana to provide constant, automatic monitoring.`,
        "Marketing": `Gathering new users through Discord and other social media platforms.`,
        "Delivering": `Everything that needs to be done to improve and market our ${Components.aLink("https://hairo.io", "idea")}, together with my brother, Aleksander Roztropiński.
        In any way, shape or form.`
    }
};

const UNCAPPED_CONTENT = {
    position: "Backend Engineer",
    period: "2021.11 - 2022.04",
    experience: {
        "Backend": `All things, backend related for ${Components.aLink("https://weareuncapped.com", "Uncapped")}.
        I worked on their set of products, both internal and client facing.
        Most important technologies/paradigms used were: Java 17, Spring Boot, microservices, ${CommonLinks.jooq}, GCP, BigQuery, ${Components.aLink("https://dataform.co", "dataform")}, Kubernetes and ${Components.aLink("https://fluxcd.io", "Flux")}.
        <br>
        Once again, I am not really sure microservices were needed here. Without them (and with modular monolith), the system could be a lot, a lot simpler.`,
        "Frontend": 'From time to time, I also implemented some small changes in the backoffice frontend, written in React.'
    }
};

const HYCOM_CONTENT = {
    position: "Java/Python Developer",
    period: "2019.11 - 2021.11",
    experience: {
        "Data Lake": `Creating and modifying apps that consume data from various resources, do some sort of processing with it and/or send/store it.
         All of them were containerized and deployed on AWS, making heavy use of cloud infrastructure, including RDS, DynamoDB, SQS, SNS, ECS and S3.
         Due to heavy usage of time series data, we later on switched from RDS to a customized ${Components.aLink("https://www.timescale.com", "TimescaleDB")} instance, deployed on EC2.
         Applications were written in <strong>both Java and Python</strong>. 
         Among others, technologies used were: Spring Boot, ${CommonLinks.jooq}, Spark, ${Components.aLink("https://pandas.pydata.org", "pandas")} and ${CommonLinks.testContainers}.`,
        "Backend": `Creating and modifying apps that consume or produce RESTful API's, implemented in microservices architecture. 
            Facing all of its downsides and enjoying some of the benefits. 
            At my current level of knowledge and experience, I think that, for the most part, costs of using this architecture outweigh benefits. 
            It shouldn't be used, unless such a need <strong>could be objectively, logically and empirically proven</strong>.
            Most of its benefits, without downsides, could be obtained using ${Components.aLink("https://www.kamilgrzybek.com/design/modular-monolith-primer", "modular monolith")} approach.
            Besides, let's not forget about the YAGNI principle. 
            The absolute majority of our systems is not the next Facebook, Youtube, Netflix or Google and it will never have problems of their scale.`,
        "Tests": `Almost every application that I have created/modified here, had very high test coverage (70%, often 80% and more). 
            We write both unit and integration tests, in both Python and Java applications.
            After this experience and experimenting with many side projects, I will never write anything of importance without focusing on tests and testability first.
            I have also encountered many drawbacks of heavy reliance on mocking. 
            Due to all of that, my approach to tests has evolved and is now very similar to one 
            described in a great article by ${Components.aLink("https://www.jamesshore.com/v2/blog/2018/testing-without-mocks", "James Shore: \"Testing Without Mocks: A Pattern Language\"")}`,
        "DevOps": `<del>Taking care and improving existing CI/CD infrastructure. 
            It was based on Jenkins and used a host of Bash, Python, SQL and Ansible scripts.</del> 
            We rewrote the CI/CD system from scratch, using a combination of Python scripts and AWS's CodeBuild service, automating everything that could be automated.
            Due to the growing number of applications and limited team size, we also decided to automate (as much as possible) maintenance and monitoring.
            Our custom monitoring system was based on: ${Components.aLink("https://grafana.com", "Grafana")}, Elasticsearch, CloudWatch and a dedicated Python application.`
    }
};

const INOVATICA_CONTENT = {
    position: "Java Developer",
    period: "2017.09 - 2019.11",
    experience: {
        "Mobile": `Writing native mobile apps using Java and Kotlin. 
            All of them were communicating with RESTful APIs, which sometimes were created in-house and sometimes by another company or even in another country.
            Often integration with Google or Facebook services was needed. 
            They were also making extensive use of hardware features, including GPS, camera or step counter.`,
        "Backend": `Making typical RESTful apps written in Java, using Spring Boot and Hibernate. 
            I was also responsible for maintenance of a journey planning service, 
            which makes heavy use of ${Components.aLink("https://en.wikipedia.org/wiki/General_Transit_Feed_Specification", "GTFS")}`,
        "Desktop": `Creating various apps using Swing and JavaFX for the purpose of monitoring and controlling autonomous forklift.`,
        "Algorithms": `Participating in the autonomous forklift project, I had the opportunity to work on fascinating problems. 
            One of them was about creating a safety system that allowed a forklift to firstly slow down and then stop, if the detected obstacle is too close.
            It was possible by getting data from the mounted on a forklift ${Components.aLink("https://en.wikipedia.org/wiki/Lidar", "Lidar")}</a>,
            which publishes point cloud over TCP/IP, multiple times per second.
            ${Components.aLink("https://github.com/locationtech/jts", "JTS Topology Suite")} was of great help here.
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
        ${Components.collapsible("Modivo", sectionHtml(MODIVO_CONTENT))}
        ${Components.collapsible("Hairo", sectionHtml(HAIRO_CONTENT))}
        ${Components.collapsible("Uncapped", sectionHtml(UNCAPPED_CONTENT))}
        ${Components.collapsible("Hycom", sectionHtml(HYCOM_CONTENT))}
        ${Components.collapsible("Inovatica", sectionHtml(INOVATICA_CONTENT))}
    `);

    Components.initCollapsibles();
};