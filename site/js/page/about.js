import { Links, Images } from "../links/links.js";
import * as Components from "../component/components.js";


function profileImageUrl() {
    const mode = localStorage.getItem("MODE");
    return mode && mode == 'light' ? Images.lightProfile : Images.darkProfile;
}

document.addEventListener("themeChange", () => Components.initImageLoaders(profileImageUrl()));

export function render(rootId = "component") {
    const LinkComponents = {
        inovatica: Components.aLink("https://inovatica.com", "Inovatica"),
        ros: Components.aLink("https://ros.org", "ROS"),
        hairoVenture: Components.aLink("https://hairo.io", "build my own venture (Hairo)"),
        hycom: Components.aLink("https://hycom.digital", "Hycom"),
        uncapped: Components.aLink("https://weareuncapped.com", "Uncapped"),
        modivo: Components.aLink("https://modivo.pl", "Modivo"),
        githubProjects: Components.aLink(Links.github, "projects"),
        email: Components.aLink(`mailto: ${Links.email}`, Links.email, "_blank"),
        linkedin: Components.aLink(Links.linkedin, "LinkedIn"),
        github: Components.aLink(Links.github, "Github"),
        blog: Components.aLink(Links.blog, "Blog"),
        youtube: Components.aLink(Links.youtube, "Youtube")
    };

    const content = `
        <section class="expanded">
            <h2>Igor Roztropiński</h2>
            <p class="indented">born in 1994, Konin, Poland. Programmer, among other things.</p>
            ${Components.imageLoader(profileImageUrl(), "profile-image")}
            <p>My road to become one was fairly long. Having many varied interests, I studied psychology, food technology and electronics.
                I didn't finish any of these majors. I was continuously expanding my general knowledge, 
                exploring various paths and searching for the craft to which I will want to commit for the long haul, and put all my heart into it.
                In the meantime, I held various odd jobs. Among them were work in construction,
                paper carton production, electronics production, on a peony plantation, as a postman, bodyguard and a
                warehouseman. Having interests as different as philosophy, history, economics, geopolitics, weightlifting,
                dietetics, engineering and hard sciences, pushed me to try various things to
                find what fits my character and abilities best. In 2017, after a year of studying electronics at the Lodz University of Technology, I got a programming internship at Inovatica in Lodz. 
                Already before that opportunity, I developed a fondness for programming. 
                I did well there, so taking the risk, negotiating and getting employed was the next, natural step for me. 
                Not long after that, I dropped out of university and created a rigorous plan of learning, 
                which I had been executing zealously since then. 
                From this moment onwards, my real journey as a programmer has begun.</p>
            <p>From September 2017 to November 2019, I worked as a programmer for ${LinkComponents.inovatica} in Lodz.
                At the very beginning, developing native Android applications was my only responsibility. Not long after
                that, I was using Spring and Hibernate to create various backend services.
                There was also a period when I was working on very customized and
                domain specific Java applications that were interacting with ${LinkComponents.ros} (Robot Operating System).
                From the very first days of my career, I was reluctant to specialize. 
                There is a burning desire in me to know and understand everything, and to acquire as many skills as possible.</p>
            <p>Afterwards, I worked for ${LinkComponents.hycom}.
                At the very beginning, I was involved in creating a data lake, dealing with collecting and analyzing large amounts of data, and
                building infrastructure that makes it possible.
                My responsibilities ranged from writing custom Java and Python applications to managing CI/CD pipelines, automating repetitive tasks,
                optimizing performance of databases or even performing data analysis, occasionally. Not long after that, I got involved in working on a Java and microservices based system. 
                Seeing the whole picture of complex systems, being able to understand, design and implement their various parts, is something that gives me tremendous joy.
            </p>
            <p>Then, I was a Backend Engineer at ${LinkComponents.uncapped}, where things were moving rather fast. 
            Mainly, I worked with a system based on microservices, written in Java and deployed on GCP.</p>
            <p>
                In the meantime, I tried (together with my brother Aleksander/Olek) to ${LinkComponents.hairoVenture} and failed, but I have learned sooo much.
                I am forever grateful for this experience.
            </p>
            <p>Currently, I am working for ${LinkComponents.modivo}, building ads system from scratch. 
            In my spare time I explore new tech avenues (and sharing it on my blog and a youtube channel), seeking for additional challenges and opportunities.
            </p>
            <p>Programming is my greatest passion, so I am
                always learning and working on various ${LinkComponents.githubProjects}.
                I consider myself a programmer, not only web, desktop or mobile one. A problem solver, would perhaps be a better description of me.
                I am not married to any technology, language or framework. Most of my <a href="experience">experience</a> is related to
                web development <a href="skills">using</a> Java and JavaScript related technologies.
                Due to my work for Hycom and various side projects, I also have become proficient in Python.
                Nevertheless, I am constantly expanding my expertise, always seeking for new knowledge and skills. 
                Thinking about better ways of solving various problems is something deeply ingrained in my nature. 
                Being on this path for so long, I can't and don't want to stop improving myself, in every possible way.
            </p>
            <h2>You can find me here:</h2>
            <ul class="links">
                <li>${LinkComponents.email}</li>
                <li>${LinkComponents.linkedin}</li>
                <li>${LinkComponents.github}</li>
                <li>${LinkComponents.blog}</li>
                <li>${LinkComponents.youtube}</li>
            </ul>
        </section>
    `;

    document.getElementById(rootId).innerHTML = Components.content(content);

    Components.initImageLoaders();
    Components.initInnerLinks();
};