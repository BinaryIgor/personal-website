const profileUrl = "igor.jpg";


function fullUrl(url) {
    return `/assets/${url}`;
}

export default {
    profile: fullUrl(profileUrl)
};