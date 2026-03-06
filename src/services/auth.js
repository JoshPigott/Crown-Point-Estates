import { getSession } from "./sessions.js";
import { dbGetLoginStatus } from "../database/sessions.js";

// Check user is login or not from sessions
export function getLoginStatus(req) {
  const sessionId = getSession(req);
  const login = dbGetLoginStatus(sessionId);

  if (login === 1) {
    return true;
  }
  return false;
}
