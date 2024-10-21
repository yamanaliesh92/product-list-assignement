# Product Listing E-Commerce

## Get Started

Install Dependencies

### `npm i`

Run the server (will be running on port 5000)

### `npm run server`

Run the app (will be running on port 3000)

### `npm run start`

## App Pages

**/sign-up**: Handles new user registrations

**/login**: Handle users login

**/**: List products Page

## Folder Structure

### components:

**Glossary**: Contains all the UI components (buttons, modals .. etc)

**Technology/Libs Used**: Tailwind, react icons

### fetcher

**Glossary**: Contains all functions used to communicate with the HTTP server

**Technology/Libs Used**: Browser Fetch API

### lib:

**Glossary**: Contains the utility libraries used within the application

**Technology/Libs Used**: Zod for form schema validation

### page:

**Glossary**: Contains the pages (logins, registration, product list .. etc)

### Main Technologies:

**tailwind** Used for styling the ui components, configurable via `tailwind.config.js`

**react-query**: Used for fetching data from the HTTP server, offers some caching capabilities and data-state management (error, loading, data states)

**pagination-style**: We are using infinite-scroll style of pagination in product list page with a combination of `useInfiniteQuery` and `react-intersection-observer` allowing for gracious data fetching.
