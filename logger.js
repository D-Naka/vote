//@flow
var winston = require('winston')
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
});

transport.on('rotate', function(oldFilename, newFilename) {
    console.log('switch from %s to %s', oldFilename, newFilename);
  });

const logger = winston.createLogger({
  // format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.simple()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new (winston.transports.DailyRotateFile)({
      filename: 'application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
    }),
    new winston.transports.File({ filename: 'combinedLog.log' })
  ]
});

exports {
  logger,
}
