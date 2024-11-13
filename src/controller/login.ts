import { FastifyReply, FastifyRequest } from "fastify";
import { makeLogin } from "../useCase/login";

export const LoginController = async (
  request: FastifyRequest<{ Querystring: LoginQueryParams }>,
  response: FastifyReply
) => {
  try {
    const { query } = request;

    const metadata = {
      failureRedirect: query.failureRedirect,
      successRedirect: query.successRedirect,
    };

    return makeLogin().execute(request, response, metadata);
  } catch (e) {
    response.status(e?.statusCode).send(e);
  }
};

type LoginQueryParams = {
  failureRedirect: string;
  successRedirect: string;
};
