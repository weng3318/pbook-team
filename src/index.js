// 引入套件
const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('hello')
})

app.listen(3001,function(){
    console.log('啟動server 偵聽PORT 3001');
})
