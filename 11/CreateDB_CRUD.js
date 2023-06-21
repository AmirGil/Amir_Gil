const SQL = require('./DB');

const createTable = (req,res)=>{
    const Q1 = "CREATE TABLE usersAA (id INT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255));";
    SQL.query(Q1,(err,mysqlres)=>{
        if(err) throw err;
        console.log("table created");
    })
};

module.exports={createTable};