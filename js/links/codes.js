const githubUrl = "https://github.com/Iprogrammerr";

function projectUrl(name) {
    return `${githubUrl}/${name}`;
}

export const Repositories = {
    virtuocracy: projectUrl("wirtuokrokracja"),
    foodController: projectUrl("Food-Controller"),
    smartQuery: projectUrl("Smart-Query"),
    smartQueryMeta: projectUrl("Smart-Query-Meta"),
    dailyWisdomBackend: projectUrl("Daily-Wisdom-Backend"),
    brightServer: projectUrl("Bright-Server"),
    gentleRequest: projectUrl("Gentle-Request"),
    algorithmsAndDataStructures: projectUrl("Algorithms-Data-Structures")
};

export const Instances = {
    virtuocracy: "https://wirtuokracja.pl"
};

export const Stores = {
    dailyWisdom: "https://play.google.com/store/apps/details?id=control.self.igor.dailywisdom"
};

