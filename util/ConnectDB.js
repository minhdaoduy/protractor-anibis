describe('MYSQL Test', function(){
    function ConnectDataBase(){
        var mysql = require("mysql");
        this.connection = mysql.createConnection({
            host:"localhost",
            port:3306,
            user:"root",
            password:"root",
            database:"tiki"
        })
    }
   it('DataBase testing in Protractor', function(done){
       var sql = "select * from product";
        var connectDatabase  = new ConnectDataBase();
       connectDatabase.connection.connect();
       connectDatabase.connection.query(sql, function (err, rows) {
           if(!err){
               console.log(rows);
               console.log(rows[0].id);
               console.log(rows.length);
           }else {
               console.log(err)
           }
        })
    });

});