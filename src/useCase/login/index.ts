import { GoogleAuth } from "../../infra/auth-provider/google/google-auth";
import { Base64Provider } from "../../infra/base64Provider";
import { Login } from "./login";

export const makeLogin = () => {
  const base64Provider = new Base64Provider();
  const authProvider = new GoogleAuth();
  return new Login(authProvider, base64Provider);
};
