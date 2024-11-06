import { createLogger, transports, format } from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
);

const winTransports = [
  new transports.Console({ level: 'info' }),
  new transports.File({ filename: 'logs/error.log', level: 'error' }),
  new transports.File({ filename: 'logs/all.log' })
];


const logger = createLogger({
  levels,
  level: 'info',
  format: logFormat,
  transports: winTransports,
});

export default logger;


