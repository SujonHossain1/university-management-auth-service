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
    logger.info(`Database connected successfully`);
    server = app.listen(config.port, () => {
      logger.info(`Server is listening on port ${config.port}`);
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
