import { escapeHtml } from "../utils/escape-html.js";

// A more conise listing
export function listingView(listing) {
  const html = /*html*/ `
    <a href="/get-listing-page/${listing.id}">
      <img class=listing-preview__image src="/assets/listings-pics/${
    escapeHtml(listing?.imageFileName)
  }.jpg"
       alt="${escapeHtml(listing?.name)} image">
    </a>  
    <div class="listing-preview__text">
      <h2>${escapeHtml(listing?.name)}</h2>
      <p>${escapeHtml(listing.address)}</p>
      <p>${escapeHtml(listing.area)}</p>
    </div>
  `;

  return html;
}
