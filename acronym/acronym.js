function parse (str) {
    const words = str.split(/[ -]|[a-z](?=[A-Z])/) /*shoutout to ObtuseAuto for the improved RegExp*/
    let acronym = ''
    words.forEach( word => acronym += word[0])
    return acronym.toUpperCase()
}

module.exports.parse = parse
 
