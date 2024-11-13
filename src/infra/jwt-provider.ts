import jwt, { PrivateKey, Secret, SignOptions } from "jsonwebtoken";

export class JwtProvider {
  sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret | PrivateKey,
    options?: SignOptions
  ): string {
    return jwt.sign(payload, secretOrPrivateKey, options);
  }
}
