import { FastifyInstance } from "fastify";
import { AuthCallbackController } from "../controller/auth-callback";
import { PostLoginController } from "../controller/post-login";
import { LoginController } from "../controller/login";

export async function authRoutes(route: FastifyInstance) {
  route.get(
    "/login",
    async (request: any, response) => await LoginController(request, response)
  );

  route.get(
    "/auth/google/callback",
    { preValidation: AuthCallbackController },
    async (req: any, res) => await PostLoginController(req, res)
  );
}
