const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//setiing 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//router
app.use(require('./routes/index'));
app.use(require('./routes/movies'));
//INICIA EL SERVIDOR
app.listen(3000, () => {

    console.log(`Server on port ${3000}`);
});