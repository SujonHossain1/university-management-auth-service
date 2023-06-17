import dotenv from 'dotenv';
import path from 'path';
import process from 'process';

/* This code is using the `dotenv` package to load environment variables from a `.env` file located in
the root directory of the project. process.cwd() means the root directory*/
dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export default {
  port: process.env.PORT || 8000,
  database_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
};
