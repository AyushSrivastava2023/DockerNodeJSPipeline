const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})