# Entertainment App

A modern web application for browsing, filtering, and discovering movies and TV shows by genre, release date, and more. Built with React, Axios, and a clean, responsive UI.

## Features

- **Browse Movies & TV Shows:** Explore a large collection of entertainment content.
- **Filter by Genre:** Select multiple genres to refine your search.
- **Sort & Filter:** Sort results by popularity, release date, or rating.
- **Date Range Filter:** Pick custom date ranges for releases.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **HTTP Requests:** Axios
- **State Management:** useState, useEffect
- **Prop Validation:** PropTypes

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/entertainment-app.git
   cd entertainment-app
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    filter/
      DateInput.jsx
      Genres.jsx
      SortBy.jsx
    ...
  contexts/
    GenreContext.jsx
  data/
    objects.js
  App.jsx
  index.js
```

## API

This app expects an API endpoint for genres and content, such as:

- `/api/{type}/genre` for genres (where `{type}` is `movie` or `tv`)
- `/api/{type}/discover` for content discovery

You may need to set up a backend or use a public API (e.g., TMDB) and configure proxy settings if required.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

\*\*Enjoy discovering your next
