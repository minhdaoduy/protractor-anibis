var pg = require('pg');
var conString = "postgres://postgres:root@localhost:3307/postgres";

describe('MYSQL Test', function(){

    it('DataBase testing in Protractor', function(done){
        var client = new pg.Client(conString);
        client.connect();
        var sql = "SELECT * FROM public.product";
        client.query(sql, function (err, result) {
            if(!err){
                console.log(result.rows);
                console.log(result.rows[0].ID);
                console.log(result.rows.length);
            }else {
                console.log(err)
            }
        });
    });
    it('DataBase testing in Protractor', function(done){
        client.end();
    });

});