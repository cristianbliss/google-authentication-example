import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { envs } from "../../shared/config/envs";

const {
  AUTH: { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL },
} = envs;

const authStrategies = passport;

authStrategies.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        email: profile.emails?.[0]?.value,
        name: profile.displayName,
        accessToken,
        refreshToken,
      };
      return done(null, user);
    }
  )
);

export { authStrategies };
