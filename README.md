## Crown Point Estates

- This project recreates real estate webstite

## Features

- Adding listings
- A watch-list to check track of the listings
- A buy option
- filters

## Requirements

- Install deno
- Run `iwr https://deno.land/install.ps1 -useb | iex` (windows)

## How to run

- This will come later once I build the html

## Note for real estate agents

- Your username must start with agent

## File structure

```text
├── deno.json
├── deno.lock
├── flow.md
├── README.md
│
├── .vscode
│   └── settings.json
│
├── data
│   ├── .gitkeep
│   └── database
│
└── src
    ├── server.js
    │
    ├── database
    │   ├── admin-accounts.js
    │   ├── connection.js
    │   ├── listings.js
    │   ├── schema.js
    │   ├── sessions.js
    │   └── watchlist.js
    │
    ├── handlers
    │   ├── account.js
    │   ├── admin.js
    │   ├── listings.js
    │   ├── new-session.js
    │   └── watchlist.js
    │
    ├── middleware
    │   ├── get-subdomain.js
    │   ├── protect-routes.js
    │   └── server-static-files.js
    │
    ├── public
    │   ├── index.html
    │   ├── setup-session.js
    │   ├── watchlist.html
    │   │
    │   └── assets
    │       └── listings-pics
    │           ├── bella-italia.jpg
    │           ├── big-sky.jpg
    │           ├── focal-point.jpg
    │           ├── grandeur.jpg
    │           ├── la-belle-vie.jpg
    │           ├── lifestyle-collective.jpg
    │           ├── maison-du-soleil.jpg
    │           ├── safehaven.jpg
    │           ├── sky-view.jpg
    │           ├── substance.jpg
    │           ├── the-beacon.jpg
    │           ├── town-country.jpg
    │           └── watercolours.jpg
    │
    ├── routes
    │   └── index.js
    │
    ├── services
    │   ├── auth.js
    │   ├── get-listings.js
    │   └── sessions.js
    │
    ├── utils
    │   ├── html-response.js
    │   └── json.js
    │
    └── views
        ├── listing.js
        │
        ├── admin
        │   ├── admin-login.js
        │   └── admin-page.js
        │
        ├── listings
        │   ├── create-listing.js
        │   ├── listings-page.js
        │   └── listings.js
        │
        └── watchlist
            └── watchlist-listing.js
```

# Key Logic

## Flow

- HTMX request → middleware → router → handler → service → database → handler →
  view → HTML response
- Note: Not all requests follow this flow (e.g. some do not use a service
  layer).

## Admin

- Admin is accessed via a subdomain.
- Users can sign up and log in.
- After logging in, agents can create new property listings.
- This feature is intended for real estate agents to add listings.

## Watchlist

- Allows users to save listings to view later.

## Website Flow

- Users land on the homepage displaying all listings.
- Clicking a listing opens a page for that individual property.
- On this page, users can add or remove the listing from their watchlist.
- The watchlist can be accessed from the homepage.

## Known Problems

- Watchlists are session-based. When the session expires, the watchlist is lost.
