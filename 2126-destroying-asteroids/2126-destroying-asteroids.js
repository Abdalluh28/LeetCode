/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
    let n = asteroids.length
    asteroids.sort((a, b) => a - b)

    for (let asteroid of asteroids) {
        if (mass >= asteroid) {
            mass += asteroid
        } else return false;
    }
    return true;
};