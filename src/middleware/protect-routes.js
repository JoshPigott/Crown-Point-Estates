import { getLoginStatus } from "../services/auth.js";

// Restricts certain routes to logged-in users only
export function isLogin(handler) {
  // Is login
  return async (ctx) => {
    const login = getLoginStatus(ctx.req);
    if (login === false) {
      return new Response("Unauthorised access", { status: 401 });
    }
    return await handler(ctx);
  };
}
