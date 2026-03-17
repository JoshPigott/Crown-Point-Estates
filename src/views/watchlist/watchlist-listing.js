import { listingView } from "../listing.js";

// Renders watchlist listings with a button to remove listings
function watchlistListingView(listings) {
  const html = listings.map((listing) =>
    /*html*/ ` 
      <div class="watchlist__listing">
      ${listingView(listing)}
      <!--When the button is pressed, the listing is delete from the watchlist.
          Because hx-swap="delete" is used, the returned HTML is ignored.-->
      <button hx-delete="/watchlist-delete/${listing.id}" hx-target="closest div"
       hx-swap="delete" hx-trigger="click" class="button">Remove From Watch List</button>
      </div>
    `
  ).join("");
  return html;
}
export default watchlistListingView;
