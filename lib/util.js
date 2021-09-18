function setCookie(cookie, value) {
    localStorage.setItem(cookie, value);
}

function getCookie(cookie) {
    localStorage.getItem(cookie);
}

module.exports.setCookie = setCookie;
module.exports.getCookie = getCookie;