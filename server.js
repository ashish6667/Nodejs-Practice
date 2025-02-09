const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How i can help you')
})

app.get('/chicken', (req, res)=>{
    res.send('sure sir, i would love to serve chicken')
})

app.get('/idli', (req, res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10cm daimeter',
        is_sambhar: true
    }
    res.send(customized_idli)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})