const express = require('express')
const app = express()

app.listen(3001, ()=>{
    console.log('Server rodando na porta 3001')
})

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

