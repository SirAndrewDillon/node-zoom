const express = require('express')
const app = express()
const server = require('http').Server(app)
const { v4: uuidV4 } = require('uuid')


// Port address for server     
PORT = 6060

app.use(express.static('public'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req,res) => {
    res.render('room', {roomId: req.params.room})
})







server.listen(PORT, () => {
    console.log('Server reporting for duty on port 6060')
})
