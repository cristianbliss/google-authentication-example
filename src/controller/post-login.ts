import { FastifyReply, FastifyRequest } from "fastify";
import { makePostLogin } from "../useCase/post-login";

export const PostLoginController = async (
  request: FastifyRequest<{ Querystring: PostLoginQueryParams }>,
  response: FastifyReply
) => {
  try {
    const { query } = request;
    const user = request.user;
    const metadata = query.state;

    return makePostLogin().execute(response, user, metadata);
  } catch (e) {
    response.status(e?.statusCode).send(e);
  }
};

type PostLoginQueryParams = {
  state: string;
};
