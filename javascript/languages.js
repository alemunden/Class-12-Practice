/**
 * @desc goes through an array of coding languages
 * @param {*} data The result of the array
 * @returns gives you the list of coding languages
 */

function languages(data) {
    var allLanguages = data;
    var allLanguages = [];

    allLanguages[1] = "JavaScript";
    allLanguages[3] = "Next.js";
    allLanguages[5] = "CSS";

    allLanguages.map((value, index) => {
    console.log(`${value} is at position ${index}`)
    });
    return allLanguages;
}
module.exports = languages;