const express =  require('express');
const bodyParser = require('body-parser');
const { connection } = require("./connects")

const cors = require('cors');
//const cookieParser = require("cookie-parser");
const app = express()
 
//Files
const user = require('./routes/user')
const login = require('./routes/login')
const answer = require('./routes/answer')

//MiddleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(cookieParser());
app.use(cors());

//Routes
app.use('/api' , user)
app.use('/api' , login)
app.use('/answer', answer)



//Listen 
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log("Serverr running at port, ", PORT));