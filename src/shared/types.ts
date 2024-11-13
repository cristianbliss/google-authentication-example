export type AuthUser = {
  id: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
};
export type AuthState = {
  successRedirect: string;
  failureRedirect: string;
};

declare module "fastify" {
  interface FastifyRequest {
    user?: AuthUser;
  }
}
