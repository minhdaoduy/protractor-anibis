var DateTime = function () {
    this.fulllocalTime = function (offset) {
        // create Date object for current location
        var d = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000*offset));

        // return time as a string
        return nd.toLocaleString();
    };

    this.localTime_date = function (offset) {
        // create Date object for current location
        var today = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));

        var dd = nd.getDate();
        var mm = nd.getMonth()+1; //January is 0!
        var yyyy = nd.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        return today.toString();
    };

    this.fulllocalTime_Time = function (offset) {
        var today = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);

        var nd = new Date(utc + (3600000*offset));
        var hh = nd.getHours();
        var mm = nd.getMinutes(); //January is 0!
        var ss = nd.getSeconds();

        if(hh<10) {
            hh = '0'+hh
        }

        if(mm<10) {
            mm = '0'+mm
        }
        if(ss<10) {
            ss = '0'+ss
        }
        var current_time = hh + ':' + mm + ':' + ss;
        return current_time.toString();
    };

    console.log("The local time is " + this.fulllocalTime('7'));
    // console.log("Date of the local time is " + localTime_date('7'));
    // console.log("Time of the local time is " + fulllocalTime_Time('7'));



    this.localTime_date_full = function (offset) {
        // create Date object for current location
        var today = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));

        var dd = nd.getDate();
        var mm = nd.getMonth()+1; //January is 0!
        var yyyy = nd.getFullYear();
        var hh = nd.getHours();
        var mi = nd.getMinutes(); //January is 0!
        var ss = nd.getSeconds();
        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = yyyy + mm + dd + hh + mi + ss;
        return today.toString();
    };
};


module.exports = new DateTime();