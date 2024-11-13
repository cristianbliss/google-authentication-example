import { GoogleAuth } from "../../infra/auth-provider/google/google-auth";

export class AuthCallBack {
  constructor(private readonly authProvider: GoogleAuth) {}
  auth = this.authProvider.loginCallback("google", {
    scope: ["profile", "email"],
    session: false,
  });
}
