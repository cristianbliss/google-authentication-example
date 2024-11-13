import { GoogleAuth } from "../../infra/auth-provider/google/google-auth";
import { AuthCallBack } from "./auth-callback";

export const makeAuthCallback = () => {
  const authProvider = new GoogleAuth();
  return new AuthCallBack(authProvider);
};
