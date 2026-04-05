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
import checkIsAuthenticated from './middlewares/checkIsAuthenticated.js';
import pgSession from 'connect-pg-simple';
import pool from './config/pool.js';
import logger from './middlewares/logger.js';

const PostgresSession = pgSession(session);

const store = new PostgresSession({
  pool,
  createTableIfMissing: true,
});

const app = express();

app.set('trust proxy', 1);

app.use(
  cors({
    origin: ['https://members-only-client-ohyz.onrender.com'],
    credentials: true,
  }),
);

app.use(
  session({
    secret: SESSION_SECRET,
    store,
    saveUninitialized: true,
    rolling: true,
    resave: false,
    cookie: {
      // domain: 'members-only-client-ohyz.onrender.com',
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    },
  }),
);

app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use('/api/messages', checkIsAuthenticated, messagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/index', indexRouter);

app.use('/*splat', notFound);
app.use(errorHandler);

export default app;
