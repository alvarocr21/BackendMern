const express = require('express');
var cors = require('cors')
const app = express();
const morgan = require('morgan');
//const cors=require('cors');
require('./database')

app.use(cors())
//Settings 
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/',require('./routes/prueba.routes'))

//Static files
//console.log(path.join(__dirname,'public'));
//app.use(express.static(path.join(__dirname,'public')))


//Starting Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});