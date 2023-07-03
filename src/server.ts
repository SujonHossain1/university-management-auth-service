/* eslint-disable no-unused-expressions */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

process.on('uncaughtException', err => {
  errorLogger.error(`Uncaught Exception: ${err}`);
  process.exit(1);
});

let server: Server;

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    config.env === 'production'
      ? logger.info(`Database connected successfully`)
      : console.log(`Database connected successfully`);
    server = app.listen(config.port, () => {
      if (config.env === 'production') {
        logger.info(`Server running on port ${config.port}`);
      } else {
        console.log(`Server running on port ${config.port}`);
      }
    });
  } catch (err) {
    errorLogger.error(`Error while connecting to database: ${err}`);
  }
  process.on('unhandledRejection', err => {
    errorLogger.error(`Unhandled Rejection: ${err}`);
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

bootstrap();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM received, shutting down gracefully');

//   if (server) {
//     server.close();
//   }
// });
