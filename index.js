// Code your solution here
const findMatching = (list, str) => {
    const result = list.filter(item => item.toLowerCase() === str.toLowerCase())
    return result
}

const fuzzyMatch = (list, param) => {
    const result = list.filter(item => item.substring(0, param.length).toLowerCase() === param.toLowerCase())
    return result
}

const matchName = (list, param) => {
    const result = list.filter(item => item.name.toLowerCase() === param.toLowerCase())
    return result
}

// Executions
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(fuzzyMatch(drivers, 'sa'))
