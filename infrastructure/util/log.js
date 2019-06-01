var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(new winston.transports.Console({ timestamp: true }) );
winston.add(new winston.transports.File({filename: 'logs/winston-basic.log'}) );

module.exports = winston;


// const logger1 = createLogger({
//     format: combine(
//         label({ label: 'right meow!' }),
//         timestamp(),
//         myFormat
//     ),
//     transports: [new transports.Console()]
// });