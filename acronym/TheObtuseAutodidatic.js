var parse = function(string) {
    return string.split(/[ -]|[a-z](?=[A-Z])/).map(function(word) {
        return word[0].toUpperCase()
    }).join("")
};

module.exports = { parse };