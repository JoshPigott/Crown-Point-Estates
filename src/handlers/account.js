import * as bcrypt from "@da/bcrypt";
import { updateLoginStatus } from "../services/sessions.js";
import {
  dbAddAccount,
  dbGetHashedPassword,
  dbUniqueUsername,
} from "../database/admin-accounts.js";

// Logs in user in if username and password are valid
export async function isValidPassword(ctx) {
  const formData = await ctx.req.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const hashedPassword = dbGetHashedPassword(username);
  const valid = await bcrypt.compare(password, hashedPassword);

  if (valid) {
    updateLoginStatus(ctx.req);
    return new Response("Valid credentials", { status: 200 });
  } else {
    return new Response("Invalid credentials", { status: 401 });
  }
}

// Checks if username start with agent and is a unique username
function isValidUsername(username) {
  if (!username.startsWith("agent")) {
    return false;
  }
  if (!dbUniqueUsername(username)) {
    return false;
  }
  return true;
}

// Makes a new account if username is valid
export async function newAccount(ctx) {
  const formData = await ctx.req.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // Checks if username is valid
  const valid = isValidUsername(username);
  if (!valid) {
    console.log("Username invalid");
    return new Response("Invalid Credentials", { status: 401 });
  }

  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  dbAddAccount(username, hashedPassword);
  updateLoginStatus(ctx.req);
  return new Response("Account has been made!", { status: 200 });
}
