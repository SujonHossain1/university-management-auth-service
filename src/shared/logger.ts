import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, prettyPrint } = format;

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'uma-%DATE%-success.log'
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '1d',
    }),
  ],
});

export const errorLogger = createLogger({
  level: 'error',
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'uma-%DATE%-error.log'
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '1d',
    }),
  ],
});
