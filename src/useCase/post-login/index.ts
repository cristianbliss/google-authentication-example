import { Base64Provider } from "../../infra/base64Provider";
import { JwtProvider } from "../../infra/jwt-provider";
import { envs } from "../../shared/config/envs";
import { PostLogin } from "./post-login";

export const makePostLogin = () => {
  const jwtProvider = new JwtProvider();
  const JWT_SECRET = envs.APP.JWT_SECRET;
  const base64Provider = new Base64Provider();
  return new PostLogin(jwtProvider, JWT_SECRET, base64Provider);
};
