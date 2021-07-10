function fullUrl(name) {
    return `/assets/${name}`;
}

function fullUrls(prefix, names) {
    return names.map(n => fullUrl(`${prefix}/${n}`));
}

export const Images = {
    profile: fullUrl("igor.png"),
    virtuocracy: [],
    foodController: fullUrls("food-controller", ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png"]),
    smartQuery: fullUrls("smart-query", ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"]),
    dailyWisdom: fullUrls("daily-wisdom",
        ["mobile_a.png", "mobile_b.png", "mobile_c.png", "mobile_c.png", "mobile_d.png", "mobile_e.png", "mobile_f.png", "mobile_g.png",
            "cms_a.jpg", "cms_b.jpg", "cms_c.jpg", "cms_d.jpg"]),
    brightServer: fullUrls("bright-server", ["a.jpg", "b.jpg", "c.jpg", "d.jpg"]),
    gentleRequest: fullUrls("gentle-request", ["a.jpg", "b.jpg", "c.jpg", "d.jpg"]),
    algorithmsAndDataStructures: fullUrls("algorithms-data-structures",
        ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg", "i.jpg", "j.jpg", "k.jpg"])
};