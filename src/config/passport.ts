import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userModel from '../models/user.js';
import bcrypt from 'bcryptjs';
import type { IUser } from '../models/user.js';

const options = {
  usernameField: 'email',
  passwordField: 'password',
};

async function verify(email: string, password: string, done: any) {
  try {
    const user = await userModel.findUserByEmail(email);

    if (!user)
      return done(null, false, {
        message: 'Incorrect email address or password',
      });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return done(null, false, {
        message: 'Incorrect email address or password',
      });

    return done(null, user);
  } catch (error) {
    if (error instanceof Error) return done(error);
  }
}

const localStrategy = new LocalStrategy(options, verify);

passport.use(localStrategy);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (user_id: string, done) => {
  try {
  } catch (error) {
    const user = await userModel.findUserById(user_id);
    console.log('deserialize', user, user_id);
    return done(null, user);
    if (error instanceof Error) {
      return done(error, null);
    }
  }
});
