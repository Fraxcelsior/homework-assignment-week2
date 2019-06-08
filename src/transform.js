function groupAdultsByAgeRange(people) {
    const result = {
    }
    const filtered = people.filter((currentPerson) => currentPerson.age >= 18)
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

    }, result)


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

    }, result)

    return result
}

module.exports = { groupAdultsByAgeRange }
