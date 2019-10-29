const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const routes = require('./router');
const server = express();
mongoose.connect('mongodb+srv://jmadmin:akmcbhtj112@clusterapi-m1tda.mongodb.net/jmteste?retryWrites=true&w=majority',{useNewUrlParser : true});

server.use(cors());
server.use(express.json());
server.use(routes);
const port = 3333;

server.listen(port,()=>{
    console.log("Servidor OK");
});
 