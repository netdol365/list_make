const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbconfig = 

router.get('/', function(reqeust,response,next){
    const connection = mysql.createPool({
        host:dbconfig.test['host'],
        user:dbconfig.test['username'],
        password:dbconfig.test['password'],
        port:dbconfig.test['port'],
        database:dbconfig.test['database'],
        acquireTimeout:dbconfig.test['acquireTimeout'],
        dateStrings:'date',
        multipleStatements:true,
    })
});