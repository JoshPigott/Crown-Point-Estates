import { createSession } from "../services/sessions.js";

function newSession(_ctx) {
  const sessionId = createSession();
  console.log("session created:", sessionId);
  return new Response(null, {
    status: 204,
    headers: {
      "Set-Cookie": `sessionId=${sessionId}; HttpOnly; SameSite=Strict; path=/`,
    },
  });
}
export default newSession;
