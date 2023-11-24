/**
 * @desc measures speed using distance divided by time
 * @param {*} distance the distance traveled
 * @param {*} time how long it took to travel that distance
 * @returns the overall speed
 */

function speed(distance, time) {
    var metersPerSecond = 0;
    var j = 0;

for (var i = 0; i < distance.length; i++, j++ ) {

while (time[j] < 0) {
    j++;
}

metersPerSecond += distance[i]/time[j];

    console.log(metersPerSecond.toFixed(1));
}
return Number(metersPerSecond.toFixed(1));
}

module.exports = speed;
