import { FastifyReply, FastifyRequest } from "fastify";
import { Base64Provider } from "../../infra/base64Provider";
import { GoogleAuth } from "../../infra/auth-provider/google/google-auth";

type MetaData = {
  successRedirect: string;
  failureRedirect: string;
};

export class Login {
  constructor(
    private readonly authProvider: GoogleAuth,
    private readonly base64Provider: Base64Provider
  ) {}

  execute(req: FastifyRequest, res: FastifyReply, metadata: MetaData) {
    const state = this.base64Provider.jsonToBase64(metadata);
    this.authProvider.login("google", {
      scope: ["profile", "email"],
      session: false,
      state,
      failureRedirect: metadata.failureRedirect,
    })(req.raw, res.raw);
  }
}
