function parseCityName(cityName) {
    return cityName
    .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
    .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
    .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
    .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
}

function kToC(t) {
    return Math.round(parseFloat(t) - 273.15);
}

function kToF(t) {
    return cToF(parseFloat(t) - 273.15);
}

function cToF(t) {
    return Math.round(32 + parseFloat(t)*1.8);
}

function fToC(t) {
    return Math.round((parseFloat(t) - 32)*5/9);
}

function mpsToKmph(s) {
    return Math.round(parseFloat(s)*3.6);
}

function mpsToMph(s) {
    return Math.round(parseFloat(s)*2.23694);
}

export {kToC, cToF, fToC, kToF, mpsToKmph, mpsToMph, parseCityName};

