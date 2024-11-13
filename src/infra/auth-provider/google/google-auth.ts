import { AuthenticateOptionsGoogle } from "passport-google-oauth20";
import { authStrategies } from "../strategies";

export class GoogleAuth {
  login(
    strategy: "google",
    options: AuthenticateOptionsGoogle,
    callback?: (...args: any[]) => any
  ): any {
    return authStrategies.authenticate(strategy, options, callback);
  }

  loginCallback(
    strategy: "google",
    options: AuthenticateOptionsGoogle,
    callback?: (...args: any[]) => any
  ): any {
    return authStrategies.authenticate(strategy, options, callback);
  }
}
