const winston = require('winston');
const { transports, addColors } = require('winston');

let myCustomConsoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.label({ label: '[LOGGER]' }),
  winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
  winston.format.printf(
    (info) =>
      `${info.label} ${info.timestamp}  ${info.level} : ${info.message}`
  )
);

function removeAnsiEscapeCodes(input) {
  // Define a regular expression to match ANSI escape codes
  const ansiEscapeRegex = /(\u001b\[\d+m)+/g;
  
  // Use replace to remove ANSI escape codes
  const cleanString = input.replace(ansiEscapeRegex, '');
  
  return cleanString;
};

let myCustomFileFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.label(),
  winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
  winston.format.printf(
    (info) =>
      `${info.label} ${info.timestamp}  ${removeAnsiEscapeCodes(info.level)} : ${removeAnsiEscapeCodes(info.message)}`
  )
);

addColors({
  info: 'italic blue',
  warn: 'italic yellow',
  error: 'italic bold red',
  debug: 'italic magenta',
  verbose: 'italic grey'
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  transports: [
    new transports.Console({
      format: winston.format.combine(myCustomConsoleFormat)
    }),
    new transports.File({
      format: winston.format.combine(myCustomFileFormat),
      filename: 'error.log',
      level: 'error'
    }),
    new transports.File({
      format: winston.format.combine(myCustomFileFormat),
      filename: 'common.log',
    }),
],
});

module.exports = logger;