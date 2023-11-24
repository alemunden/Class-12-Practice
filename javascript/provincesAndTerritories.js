/**
 * @desc Checking province locations and displaying a province name
 * @param {*} canadianLocationData The location of a province
 * @param {*} number W
 * @returns the name of a province
 */

function provincesAndTerritories(canadianLocationData, number) {
    var sentence = "";
    if(canadianLocationData[number] == "Alberta") {
        sentence = "Alberta";
    } else if(canadianLocationData[number] == "British Columbia") {
        sentence = "British Columbia";
    } else if(canadianLocationData[number] == "Manitoba") {
        sentence = "Manitoba";
    } else if(canadianLocationData[number] == "New Brunswick") {
        sentence = "New Brunswick";
    } else if(canadianLocationData[number] == "Newfoundland") {
        sentence = "Newfoundland";
    } else if(canadianLocationData[number] == "Nova Scotia") {
        sentence = "Nova Scotia";
    } else if(canadianLocationData[number] == "Ontario") {
        sentence = "Ontario";
    } else if(canadianLocationData[number] == "Prince Edward Island") {
        sentence = "Prince Edward Island";
    } else if(canadianLocationData[number] == "Quebec") {
        sentence = "Quebec";
    } else if(canadianLocationData[number] == "Saskatchewan") {
        sentence = "Saskatchewan";
    } else if(canadianLocationData[number] == "Nunavut") {
        sentence = "Nunavut";
    } else if(canadianLocationData[number] == "The Northwest Territories") {
        sentence = "Northwest Territories";
    } else if(canadianLocationData[number] == "Yukon") {
        sentence = "Yukon";
    } else {
        throw new TypeError ('UNKNOWN ERROR');
    }
    return sentence;
}
module.exports = provincesAndTerritories;