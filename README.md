## Crown Point Estates

- This project recreates real estate webstite

## Features

- Adding listings
- A watch-list to check track of the listings
- Adding and deleting listing by admin
- filters (Not fully shipped yet)

## Requirements

- Install deno
- Run `iwr https://deno.land/install.ps1 -useb | iex` (windows)

## How to run

- run `deno task` the terminal
- type `http://localhost:8000/` in the browser

## Note for real estate agents

- Your username must start with agent

## File structure

```text
├── deno.json
├── deno.lock
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
    │   ├── style.css
    │   ├── watchlist.html
    │   │
    │   ├── scripts
    │   │   └── setup-session.js   
    │   │   
    │   └── assets
    │       ├── favicon.png
    │       ├── login-pic.jpg
    │       │
    │       └── listings-pics
    │           ├── Bella_Italia-1773453498168.jpg
    │           ├── Big_Sky-1773454110662.jpg
    │           ├── Focal_Point-1773453784714.jpg
    │           ├── Grandeur-1773454024283.jpg
    │           ├── La_Belle_Vie-1773454137163.jpg
    │           ├── Lifestyle_Collective-1773453942002.jpg
    │           ├── Maison_du_Soleila-1773453918668.jpg
    │           ├── Safehaven-1773454158341.jpg
    │           ├── SkyView-1773453857656.jpg
    │           ├── Substance-1773453824042.jpg
    │           ├── The_Beacon-1773454060955.jpg
    │           └── Watercolours-1773464328913.jpg
    │
    ├── routes
    │   └── index.js
    │
    ├── services
    │   ├── auth.js
    │   ├── create-listing.js
    │   ├── get-listings.js
    │   └── sessions.js
    │
    ├── utils
    │   ├── escape-html.js
    │   ├── html-response.js
    │   └── json.js
    │
    └── views
        ├── listing.js
        │
        ├── admin
        │   ├── admin-login.js
        │   ├── admin-page.js
        │   ├── create-listing.js
        │   └── delete-listings.js
        │
        ├── home
        │   └── listings.js
        │
        ├── listings
        │   └── listings-page.js
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
- This feature is for real estate agents to add and delete listings.

## Watchlist

- Allows users to save listings to view later.

## Website Flow

- Users land on the homepage displaying all listings.
- Clicking a listing opens a page for that individual property.
- On this page, users can add or remove the listing from their watchlist.
- The watchlist can be accessed from the homepage.

## Known Problems

- Watchlists are session-based. When the session expires, the watchlist is lost.
- When the session expires, using the same tab causes errors. A new tab must be
  opened to start a new session.
- Not all filter code is used.
- Nothing redirect from admin page with create and delete listing when session
  expires.
- Anyone can create an admin account if they know the username must start with
  **agent** and use the admin subdomain.
- The css on listing-create and listing-delete page could be better.
