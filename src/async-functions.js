const superagent = require('superagent');

function getTatooineResidents() {
    return new Promise(function (resolve, reject) {
        superagent
            .get("https://swapi.co/api/planets/1/")
            .then((res) => resolve(res.body.residents))
            .catch((error) => reject(error))
    })
}

function promiseMeAString(inputString) {
    return new Promise(function (resolve, reject) {
        if (typeof inputString === 'string' || inputString instanceof String) {
            resolve("You kept the Promise!")
        }
        reject("You have failed me!")
    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString,
}
