export function render(rootId="component") {

    const root = document.getElementById(rootId);

    root.innerHTML = `
    <div class="content-container">
        <div class="content fade-in">
            <section>
                <h1>Hycom</h1>
                <p>
                    <h3>Java/Python developer</h3>
                    <h3>2019.11 - </h2>
                </p>
                <h2>Work</h1>
                <h3>Data processing</h2>
                <p>Creating and modifying apps that consume data from various resources, do some sort of processing with it and/or send/store it. All of them are containerized and deployed on AWS and make heavy use of its infrastructure including RDS, DynamoDB, SQS, SNS, ECS and S3.</p>
                <h3>Backend</h2>
                <p>Creating and modifying apps that consume or produce RESTful APIs</p>
                <h3>Data analysis</h2>
                <p>Writing analysis of various datasets produced by data processing apps or in a raw format. Tools of use: Python, Scikit-learn, Pandas, Grafana.</p>
                <h3>DevOps</h2>
                <p>Taking care and improving existing CI/CD infrastructure. It's based on Jenkins and use host of Bash, Python, SQL and Ansible scripts.</p>
            </section>
            <section>
                <h1>Inovatica</h1>
                <p>
                    <h3>Java developer</h3>
                    <h3>2017.09 - 2019.11</h3>
                </p>
                <h2>Work</h2>
                <h3>Mobile</h3>
                <p>Writing native mobile apps using Java and Kotlin. All of them were communicating with RESTful API. Often integration with Google or Facebook services was needed. They were also making extensive use of hardware features including GPS, camera and step counter.</p>
                <h3>Backend</h3>
                <p>Making typical RESTful apps written in Java, using Spring Boot and Hibernate. I was also responsible for maintenance of a journey planning service, which makes heavy use of <a href="https://en.wikipedia.org/wiki/General_Transit_Feed_Specification">GTFS</a>.</p>
                <h3>Desktop</h3>
                <p>Creating various apps using Swing and JavaFX.</p>
                <h3>Algorithms</h3>
                <p>Participating in autonomous forklift project I have opportunity to work on very interesting problems. One of them was a safety system, that allows forklift to firstly slow down and then stop, if detected obstacle is too close.</p>
            </section>
        </div>
    </div>
    `;
};