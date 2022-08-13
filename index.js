const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/chapter3', express.static(__dirname + '/chapter3'))
app.use('/chapter4', express.static(__dirname + '/chapter4'))
app.use('/css', express.static(__dirname + '/css'))

app.get('/', (req, res) => {
    res.send("hey test awal")
})

app.get('/chapter3', (req,res) => {
    res.sendFile(path.join(__dirname + '/chapter3/master.html'))
})

app.get('/chapter4', (req,res) => {
    res.sendFile(path.join(__dirname + '/chapter4/index.html'))
})

app.get('/user', (req,res) => {
    let myUser = JSON.parse(fs.readFileSync('user.json', 'utf-8'))
    res.send(myUser)
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
})

app.listen(5000)