export const githubUrl = "https://github.com/BinaryIgor";

function projectUrl(name) {
    return `${githubUrl}/${name}`;
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

export const Instances = {
    virtuocracy: "https://wirtuokracja.pl"
};

export const Stores = {
    dailyWisdom: "https://play.google.com/store/apps/details?id=control.self.igor.dailywisdom"
};

export const Libraries = {
    maven: "https://search.maven.org/search?q=iprogrammerr"
};