const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')


const app = express()
const jsonParser = bodyParser.json()

app.use('/chapter3', express.static(__dirname + '/chapter3'))
app.use('/chapter4', express.static(__dirname + '/chapter4'))
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/views', express.static(__dirname + '/views'))

// challenge point 3 untuk pengecekan API via postman
app.get('/', (req, res) => {
    res.send("hey test awal")
})
// challenge point 1
app.get('/chapter3', (req,res) => {
    res.sendFile(path.join(__dirname + '/chapter3/master.html'))
})
// challenge point 1
app.get('/chapter4', (req,res) => {
    res.sendFile(path.join(__dirname + '/chapter4/index.html'))
})

// challenge point 4 membuat serving data user dalam bentuk json
app.get('/user', (req,res) => {
    let myUser = JSON.parse(fs.readFileSync('user.json', 'utf-8'))
    res.send(myUser)
})
// challenge point 2 untuk login user
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
})

// challenge point 3 untuk pengecekan via post dengan body API postman dan challenge 2
app.post('/authorized', jsonParser, (req, res) => {   

   let myUser = JSON.parse(fs.readFileSync('user.json', 'utf-8'))    
        // saya coba pakai looping for i,  tapi yang muncul hanya 1 object saja, seolah hanya bisa respon sekali saja. jadi terpaksa saya if satu persatu,  
        // dan saat pakai looping selau ada error Cannot set headers after they are sent to the client, belum saya temukan solusinya.
        if (myUser[4].user === req.body.user && myUser[4].password === req.body.password) {
            res.send("Authorized")
            console.log(myUser[4].user)
            let data5
        }
        else if (myUser[3].user === req.body.user && myUser[3].password === req.body.password) {
            res.send("Authorized")
            console.log(myUser[3].user)
        }
        else if (myUser[2].user === req.body.user && myUser[2].password === req.body.password) {
            res.send("Authorized")
            console.log(myUser[2].user)
        }
        else if (myUser[1].user === req.body.user && myUser[1].password === req.body.password) {
            res.send("Authorized")
            console.log(myUser[1].user)
        }
        else if (myUser[0].user === req.body.user && myUser[0].password === req.body.password) {
            res.send("Authorized")
            console.log(myUser[0].user)
        }
        else{
            res.status(401).send("Unauthorized")
        }    

})

app.listen(5000)