export function adminLoginView(message = "") {
  return /*html*/ `
  <div class="login">
    <form class="login__form" hx-post="/login" hx-target=".login" hx-swap="outerHTML">
      <div>
        <label for="username">Username</label>
        <input
         type="text"
         name="username"
         id="username"
         maxlength="16"
         required>
      </div>

      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          maxlength="16"
          minlength="6"
          required>
      </div>
      <div class="login__buttons">
        <button class="login__button" type="submit" class="admin-page__button">Login</button>
        <button class="login__button" type="submit" formaction="/new-account" class="admin-page__button">New account</button>
      </div>
    </form>
    <h3 class="login__message">${message}</h3>
    <img class=login__image src="/assets/login-pic.jpg" alt="luxury sea view image">
  </div>`;
}
