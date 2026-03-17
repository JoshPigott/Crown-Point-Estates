import { adminLoginView } from "./admin-login.js";
import { createListingView } from "./create-listing.js";
import { deleteListingsView } from "./delete-listings.js";

export function adminPageView(loginStatus, listings) {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Crown Point Estates Admin</title>
      <script
        src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"
        integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz"
        crossorigin="anonymous"
      ></script>
      <link rel="stylesheet" href="/style.css">
      <link rel="icon" href="/assets/favicon.png">
    </head>
    <body>
      <header>
        <h1>Crown Point Estates</h1>
      </header>
      <main>
        ${loginStatus ? adminMainView(listings) : adminLoginView()}
      </main>
      <footer>
      <div class="footer__description">
        <h2 class="footer__description">Crown Point Estates</h2>
        <p>
          At Crown Point Estates, we specialize in luxury properties and provide
          unmatched service with meticulous attention to detail.
        </p>
      </div>
      <div class="footer__email">
        <p>For any question or querrys email</p>
        <a class="footer__link" href="mailto:crownpointestates@gmail.com"
        >crownpointestates@gmail.com</a>
      </div>
    </footer>
      <script src="/scripts/setup-session.js" type="module"></script>
    </body>
  </html>
`;
}

// Main veiw when login
export function adminMainView(listings) {
  const html = /*html*/ `
    <div class="listings-create">
      <h2 class="listings-create__title">Create New Listing</h2>
      <div class="listings-create__container">${createListingView()}</div>
    </div>
  
  
    <div class="listings-delete">
      <h2 class="listings-delete__title">Delete Listing</h2>
      <div class="listings-delete__container">${
    deleteListingsView(listings)
  }</div>
    </div>
  `;
  return html;
}
