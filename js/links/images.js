const _profileUrl = "igor.jpg";


function fullUrl(url) {
    return `/assets/${url}`;
}

//TODO dynamic
export const Images = {
    profile: fullUrl(_profileUrl),
    foodController: [
        fullUrl("food-controller/a.png"),
        fullUrl("food-controller/b.png"),
        fullUrl("food-controller/c.png"),
        fullUrl("food-controller/d.png"),
        fullUrl("food-controller/e.png"),
        fullUrl("food-controller/f.png"),
        fullUrl("food-controller/g.png"),
        fullUrl("food-controller/h.png")
    ],
    smartQuery: [
        fullUrl("smart-query/a.jpg"),
        fullUrl("smart-query/b.jpg"),
        fullUrl("smart-query/c.jpg"),
        fullUrl("smart-query/d.jpg"),
        fullUrl("smart-query/e.jpg"),
        fullUrl("smart-query/f.jpg")
    ]
};