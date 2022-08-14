
const fs = require('fs')

const retrieveDataJson = () => {
    return JSON.parse(fs.readFileSync('user.json', 'utf-8'))
}

const printUrl = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
}

module.exports = {
    retrieveDataJson,
    printUrl
}