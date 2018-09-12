const express = require('express');

let app = express();


app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
    // res.send(('Hello Expresss!'))
    //
    //send JSON Dataa
    res.send({
        name: 'Robbie',
        sports: [ 'Baseball', 'Football', 'Veebs']
    })
});

app.get('/home', (req,res) => {
    res.send({
       msg: 'Welcome to this page'
    })
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: "Unable to handle request"
    });
});

app.listen(3000, ()=>{
    console.log('Server is up')
});