const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("hey test awal")
})

app.listen(5000)