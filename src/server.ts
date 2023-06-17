import mongoose from 'mongoose';
import app from './app';
import config from './config';

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connected successfully`);
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(`Error while connecting to database: ${err}`);
  }
};

bootstrap();
