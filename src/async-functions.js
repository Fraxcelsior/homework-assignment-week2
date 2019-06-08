const superagent = require('superagent');

function getTatooineResidents() {
    return new Promise(function (resolve, reject) {
    superagent
    .get("https://swapi.co/api/planets/1/")
    .then((res) => res.body.residents) 
    .catch((error) => console.log(error))
    })
}

console.log(getTatooineResidents())

function promiseMeAString(inputString) {
    return new Promise (function(resolve, reject) {
        if (typeof inputString === 'string' || inputString instanceof String) {
            resolve("You kept the Promise!")
        } 
        reject("You have failed me!")
    })
}

console.log(promiseMeAString("I Promise!"))
console.log(promiseMeAString("addnnd ananan"))
console.log(promiseMeAString(3))
console.log(promiseMeAString(null))
console.log(promiseMeAString())


module.exports = {
    getTatooineResidents,
    promiseMeAString,
  }

/*
 residents: [
    'https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/2/',
    'https://swapi.co/api/people/4/',
    'https://swapi.co/api/people/6/',
    'https://swapi.co/api/people/7/',
    'https://swapi.co/api/people/8/',
    'https://swapi.co/api/people/9/',
    'https://swapi.co/api/people/11/',
    'https://swapi.co/api/people/43/',
    'https://swapi.co/api/people/62/'
  ],

  */