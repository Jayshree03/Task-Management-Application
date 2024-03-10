const express = require('express');
const app = express();
const mysql = require("mysql");

app.get('/', function(req, res){
    const config ={
        user: 'root',
        password: 'root',
        server: 'localhost',
        database: 'taskmanagement'
    };
    mysql.createConnection(config, function(err){
        let request = new mysql.Request();
        request.query('insert into task(newtask, deadline, priority, descrip) values ("Update student record", "2024-4-1", "High Priority", "Update the existing records of students by removing ex-student',
        function(err, records){
            if(err) console.log(err)
            res.send(records);
        });
    });
});
let server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});