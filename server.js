const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const app = express();
const port = 3000 || process.env.PORT
const userRoutes = require('./user')
const emp = require('./userSchema')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(userRoutes);


app.listen(port, (req,res)=>{
    console.log('Server started on '+port)
})