import { Images } from "../links/images.js";
import * as Components from "../component/components.js";

const CONTENT = `
    <section class="expanded">
        <h2>Igor Roztropiński</h2>
        <p class="indented">born in 1994, Konin, Poland. Programmer, among other things.</p>
        ${Components.imageLoader(Images.profile, "profile-image")}
        <p>My road to become one was fairly long. Having wide range
            of interests, I studied psychology, food technology and electronics, not finishing any of them, searching
            for the craft to which I will want to commit for the long haul.
            In the meantime, I held various odd jobs. Among them were work in a construction,
            paper carton production, electronics production, on a peony plantation, as a postman, bodyguard and a
            warehouseman. Being interested in subjects as different as philosophy, history, economny, geopolitics, weightlifting,
            dietetics, engineering and hard sciences I had to try
            various
            things to
            find what fits my character and abilities best. In 2017, after year of studying electronics
            at the Lodz University of Technology I got a programming internship at Inovatica in Lodz. Already before
            that
            opportunity I developed fondness for programming. I did well there,
            so I took the risk, negotiated and got employed at the end of the internship. Not long after that, I dropped
            out of university
            and
            created rigorous plan of learning, which I had been executing zealously since then.</p>
        <p>From September 2017 to November 2019 I worked as a programmer for
            Inovatica in Lodz.
            At the very begining developing native Android applications was my only responsibility. Not long after
            that I was using Spring and Hibernate to create
            various backend
            services. There was a period in which I was working on very customized and
            domain specific Java applications that interact with <a href="http://www.ros.org">ROS</a>.
            Then again I worked on mobile apps, using Kotlin this time. At the end of my journey with Inovatica I was
            back in the autonomous
            forklift project, which was/is being done almost entirely in Java.</p>
        <p>Currently, I am working for <a href="https://www.hycom.pl">Hycom</a>.
            Being involved in building data lake, I deal with collecting and analyzing large amounts of data and
            building infrastructure that makes it possible.
            My responsibilities range from writing custom Java and Python applications to managing CI/CD pipelines or
            performing data analysis. Not long after that, I got involved in working on Java based miroservices system. 
            Seeing the whole picture of complex systems, being able to understand, design and implement their various parts is something that gives me tremendous ammount of joy.
        </p>
        <p>Programming is my greatest passion, so I am
            always learning and working on various <a href="code">projects</a>.
            I consider myself a programmer, not only web, desktop or mobile one. 
            Most of my experience is related to
            web development <a href="skills">using</a> Java and JavaScript related technologies.
            Due to my current work for Hycom, I also have become proficient in Python.
            Nevertheless I am constantly expanding my expertise, always seeking for new knowledge and skills. 
            Thinking about better ways of solving various problems is deeply ingrained in my nature. 
            Being on this way for so long, 
            I can't and don't want to stop improving myself, in every possible way.
        </p>
        <h2>Where am I?</h2>
        <ul class="links">
            <li><a href="mailto: iroztropinski@gmail.com">iroztropinski@gmail.com</a></li>
            <li><a href="https://github.com/Iprogrammerr">Github</a></li>
            <li><a href="https://www.linkedin.com/in/igor-roztropi%C5%84ski-621825192/">LinkedIn</a></li>
        </ul>
    </section>
`;

export function render(rootId = "component") {
    document.getElementById(rootId).innerHTML = Components.content(CONTENT);

    Components.initImageLoaders();
};