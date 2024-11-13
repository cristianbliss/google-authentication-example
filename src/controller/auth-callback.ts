import { makeAuthCallback } from "../useCase/auth-callback";

export const AuthCallbackController = makeAuthCallback().auth;
