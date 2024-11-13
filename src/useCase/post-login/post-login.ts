import { FastifyReply } from "fastify";
import { AuthState, AuthUser } from "../../shared/types";
import { JwtProvider } from "../../infra/jwt-provider";
import { Base64Provider } from "../../infra/base64Provider";

export class PostLogin {
  constructor(
    private readonly jwtProvider: JwtProvider,
    private readonly JWT_SECRET: string,
    private readonly base64Provider: Base64Provider
  ) {}

  execute(reply: FastifyReply, user: AuthUser, metadata: string) {
    const state = <AuthState>this.base64Provider.base64ToJson(metadata);
    const token = this.jwtProvider.sign(user, this.JWT_SECRET);
    reply.redirect(`${state.successRedirect}?token=${token}`);
  }
}
