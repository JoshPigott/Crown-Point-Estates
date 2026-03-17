import { escapeHtml } from "../../utils/escape-html.js";

// Creates an interface to be able to delete listings
export function deleteListingsView(listings) {
  return listings.map((listing) =>
    /*html*/ ` 
    <div class="listing-delete">
      <p>${escapeHtml(listing.name)}</p>
      <button hx-delete="/delete-listing/${listing.id}" hx-swap="delete" hx-target="closest div" class="button">Delete listing</button>
    </div>
    `
  ).join("");
}
