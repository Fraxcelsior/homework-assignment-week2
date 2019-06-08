function groupAdultsByAgeRange(people) {
    const result = {
        /* this would make the code sooo much shorter, would not need to create agegroups
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []*/
    }
    const filtered = people.filter((currentPerson) => currentPerson.age >= 18)
    console.log("What is filtered??????", filtered)
    filtered.reduce((ageGroup, currentPerson) => {
    if (currentPerson.age <= 20) {
        result["20 and younger"] = []
    }
    if (currentPerson.age > 20 && currentPerson.age <= 30) {
        result["21-30"] = []
    }
    if (currentPerson.age > 30 && currentPerson.age <= 40) {
        result["31-40"] = []
    }
    if (currentPerson.age > 40 && currentPerson.age <= 50) {
        result["41-50"] = []
    }
    if (currentPerson.age > 50) {
        result["51 and older"] = []
    }  
    return ageGroup
        
},result)
console.log("WHAT IS FILTRD 2", filtered)
    
    filtered.reduce((ageGroup, currentPerson) => {
        if (currentPerson.age <= 20) {
            result["20 and younger"].push(currentPerson)
        }
        if (currentPerson.age > 20 && currentPerson.age <= 30) {
            result["21-30"].push(currentPerson)
        }
        if (currentPerson.age > 30 && currentPerson.age <= 40) {
            result["31-40"].push(currentPerson)
        }
        if (currentPerson.age > 40 && currentPerson.age <= 50) {
            result["41-50"].push(currentPerson)
        }
        if (currentPerson.age > 50) {
            result["51 and older"].push(currentPerson)
        }
        
        return ageGroup
        
    },result)
    return result
}


const grouping = groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ])

  console.log("WHAT DOES MY FUNCTION OUTPUT????????????", grouping)




module.exports = {groupAdultsByAgeRange}




/*

 These are the groups that your code needs to return. Use the text as the name of the property:
    - `20 and younger`
    - `21-30`
    - `31-40`
    - `41-50`
    - `51 and older`


const grouping = groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ])
  assert.deepStrictEqual(grouping,
    {
      '20 and younger':
        [{ name: 'dave', age: 18 },
        { name: 'hall', age: 19 },
        { name: 'donn', age: 20 }],
      '21-30':
        [{ name: 'trey', age: 21 },
        { name: 'hann', age: 29 },
        { name: 'chew', age: 30 }],
      '31-40':
        [{ name: 'cloe', age: 31 },
        { name: 'dart', age: 39 },
        { name: 'this', age: 40 }],
      '41-50':
        [{ name: 'dame', age: 41 },
        { name: 'henk', age: 49 },
        { name: 'anna', age: 50 }],
      '51 and older':
        [{ name: 'olga', age: 51 },
        { name: 'bert', age: 52 },
        { name: 'oldd', age: 120 }]
    }

    */