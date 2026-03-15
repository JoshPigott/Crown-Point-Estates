import { escapeHtml } from "../../utils/escape-html.js";

// Adds listing to watchlist
export function addButtonView(listingId) {
  return /*html*/ `<button hx-post="/watch-list-add/${listingId}" hx-swap="outerHTML" class="watchlist__buttons">Add To Watch List</button>`;
}

// Removes listing from watchlist
export function removeButtonView(listingId) {
  return /*html*/ `<button hx-delete="/watch-list-delete/${listingId}" hx-swap="outerHTML" class="watchlist__buttons">Remove From Watch List</button>`;
}

// Returns a detail version of the listing
export function listingFullView(listing, inWatchlist) {
  const html = /*html*/ `
    <img class="listing-full__image" 
    src="/assets/listings-pics/${escapeHtml(listing?.imageFileName)}.jpg"
    alt="${escapeHtml(listing?.name)} image">
    
    <div class="listing-full__text">
      <div class="listing-full__title">
        <h2>${escapeHtml(listing?.name)}</h2>
        <!-- Only puts common in if there is an address-->
        <h3>${escapeHtml(listing?.address)} ${
    listing?.address !== "" ? "," : ""
  } ${escapeHtml(listing?.area)}</h3>
        <p class="listing-full__description">${
    escapeHtml(listing?.description)
  }</p>
    
      </div>
  
      
      
      <div class="listing-full__details">
        <h3>Details</h3>
        <div class="listing-full__details-info">
        <p>List Price: $${listing?.price?.toLocaleString()} NZD</p>
        <p>Status: ${listing?.status}</p>
        <p>Rating: ${listing?.rating}/10</p>
        <p>Veiwings: By Appointment</p>
        </div>
      </div>
  
      <div class="listing-full__contact">
        <h3>Contact</h3>
        <div class="listing-full__contact-info">
        <p>Crown Point Estates Team</p>
        <p><a class="footer__link" href="mailto:crownpointestates@gmail.com"
        >crownpointestates@gmail.com</a></p>
        <p>+64 21 784 7129</p>
        </div>
      </div>

      <div class="listing-full__button">
        ${
    inWatchlist ? removeButtonView(listing?.id) : addButtonView(listing?.id)
  }
      </div>
    <div>
  `;

  return html;
}

// The listing page itself
function listingPageView(listing, inWatchlist) {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Crown Point Estates</title>
      <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js" integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="/style.css">
      <link rel="icon" href="assets/favicon.png">
    </head>
    <body>
      <header>
        <h1>Crown Point Estates</h1>
        <a href="/index.html" class="header__link">Home</a>
        <a href="/watchlist.html" class="header__link">Watch list</a>
      </header>
      <main>
        ${listingFullView(listing, inWatchlist)}
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
      <script src="/setup-session.js" type="module"></script>
    </body>
  </html>

    `;
}

export default listingPageView;
