import express from 'express';
import indexRouter from './routes/index.js';
import usersRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import messagesRouter from './routes/messages.js';
import errorHandler from './errors/errorHandler.js';
import notFound from './errors/notFound.js';
import cors from 'cors';
import './config/passport.js';
import session from 'express-session';
import passport from 'passport';
import { SESSION_SECRET } from './config/constants.js';
import getUser from './middlewares/getUser.js';
import pgSession from 'connect-pg-simple';
import pool from './config/pool.js';

const PostgresSession = pgSession(session);

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);
app.use(express.json());

app.use(
  session({
    store: new PostgresSession({
      pool,
      createTableIfMissing: true,
    }),
    secret: SESSION_SECRET,
    saveUninitialized: false,
    rolling: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  }),
);
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));

app.use('/api/messages', getUser, messagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/index', indexRouter);

app.use('/*splat', notFound);
app.use(errorHandler);

export default app;
