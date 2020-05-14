const testObject = {
    database : 'Where we store the data',
    api : 'Server which sends data in JSON',
    client : 'which request data from the server'
}

const outputKeys = Object.keys(testObject)
console.log('keys: ', outputKeys)

const outputValues = Object.values(testObject)
console.log('Values: ', outputValues)

const formatted = outputValues.join('\n')
console.log(formatted)