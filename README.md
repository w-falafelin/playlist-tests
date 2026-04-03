Here's a clean, concise, and professional `README.md` file for your Playlist App test project:

# Playlist App - Playwright UI Tests

Automated UI tests for the Playlist App using Playwright.

## Test Cases Covered

- Search filters tracks correctly
- Add track using "+" button
- Verify total duration of the playlist (Summer + Autumn = 395 seconds)

## Tech Stack

- **Playwright**
- **JavaScript**
- **Page Object Model (POM)**

## Setup Instructions

### 1. Clone the project

```bash
git clone <your-repo-url>
cd playlist-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test files

```bash
# Search test only
npx playwright test tests/playlist/search.spec.js

# Add track test only
npx playwright test tests/playlist/add-track.spec.js

# Duration test only
npx playwright test tests/playlist/playlist-duration.spec.js
```

### Run tests in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run tests with UI Mode (interactive)

```bash
npx playwright test --ui
```

## Project Structure

```
playlist-tests/
├── tests/
│   └── playlist/
│       ├── search.spec.js
│       ├── add-track.spec.js
│       └── playlist-duration.spec.js
├── pages/
│   └── PlaylistPage.js
├── playwright.config.js
└── README.md
```

## Notes

- All tests use the **Page Object Model** for better maintainability.
- Tests are designed to be stable using reliable locators.
- Make sure the Playlist App is running locally at `http://localhost:3000` (or update `baseURL` in `playwright.config.js` if needed).
