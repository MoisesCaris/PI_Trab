const express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : '3306',
    database : 'healthcare'
});

connection.connect(function(e){
    if(e) throw e;
    console.log("conectadp");
});


module.exports = connection;