export const Links = {
    email: "iroztropinski@gmail.com",
    github: "https://github.com/BinaryIgor",
    blog: "https://binaryigor.com",
    youtube: "https://www.youtube.com/@BinaryIgor",
    linkedin: "https://www.linkedin.com/in/igroz"
};

function fullUrl(name) {
    return `/assets/${name}`;
}

export const Images = {
    lightProfile: fullUrl("igor_light.png"),
    darkProfile: fullUrl("igor_dark.png"),
};

function projectUrl(name) {
    return `${Links.github}/${name}`;
}

export const Repositories = {
    virtuocracy: projectUrl("wirtuokracja"),
    foodController: projectUrl("Food-Controller"),
    smartQuery: projectUrl("Smart-Query"),
    smartQueryMeta: projectUrl("Smart-Query-Meta"),
    dailyWisdomBackend: projectUrl("Daily-Wisdom-Backend"),
    brightServer: projectUrl("Bright-Server"),
    gentleRequest: projectUrl("Gentle-Request"),
    algorithmsAndDataStructures: projectUrl("Algorithms-Data-Structures"),
    personalWebsite: projectUrl("personal-website")
};