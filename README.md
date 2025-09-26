
# BookFinder-App
<<<<<<< HEAD
=======
=======
# BookFinder-App
>>>>>>> c52fd59 (Removed Lovable branding and updated assets)

## Project Walkthrough

BookFinder-App is a modern React application for searching and exploring books. It uses Vite for fast development, TypeScript for type safety, shadcn-ui for UI components, and Tailwind CSS for styling.

### Getting Started

**Prerequisites:**
- Node.js & npm ([Download Node.js](https://nodejs.org/))

**Setup:**
```sh
git clone <YOUR_GIT_URL>
cd ignite-react-code-main
npm install
npm run dev
```
Visit [http://localhost:8080](http://localhost:8080) to view the app.

---

## Project Structure & Components

### Main Files
- `src/App.tsx`: Main app component, sets up routing and layout.
- `src/main.tsx`: Entry point, renders the app.
- `src/index.css`: Global styles (Tailwind CSS).

### BookFinder Components (`src/components/BookFinder/`)
- `BookFinder.tsx`: Main container for the book search experience. Handles search logic and API integration.
- `SearchBar.tsx`: Input for searching books by title, author, etc.
- `BookList.tsx`: Displays a list of book results from the API.
- `BookCard.tsx`: Shows summary info for each book in the list.
- `BookDetail.tsx`: Shows detailed info for a selected book.
- `WelcomeMessage.tsx`: Initial welcome screen.
- `ErrorMessage.tsx`: Displays errors (e.g., API/network issues).
- `LoaderSkeleton.tsx`: Loading skeleton for async states.
- `Header.tsx` & `Footer.tsx`: App header and footer.
- `types.ts`: TypeScript types for book data and API responses.

### UI Components (`src/components/ui/`)
Reusable UI elements (accordion, button, card, dialog, toast, etc.) built with shadcn-ui and styled with Tailwind CSS.

### Hooks (`src/hooks/`)
- `use-mobile.tsx`: Detects mobile device usage.
- `use-toast.ts`: Toast notification logic.

### Utilities (`src/lib/utils.ts`)
Helper functions for formatting, data manipulation, etc.

### Pages (`src/pages/`)
- `Index.tsx`: Home page.
- `NotFound.tsx`: 404 page.

---

## API Integration

BookFinder integrates with a book data API (such as Google Books API or Open Library API). The main logic for fetching and displaying book data is in:
- `BookFinder.tsx`: Handles search queries and API requests.
- `BookList.tsx` & `BookCard.tsx`: Render results from API responses.
- `BookDetail.tsx`: Fetches and displays detailed info for a selected book.
- `types.ts`: Defines the structure of API data.

API calls are typically made using `fetch` or `axios` inside React hooks (`useEffect`, etc.), with error handling and loading states managed by `ErrorMessage.tsx` and `LoaderSkeleton.tsx`.

---

## Customization & Extending

- Add new UI components in `src/components/ui/`.
- Extend book data types in `src/components/BookFinder/types.ts`.
- Integrate additional APIs by updating fetch logic in `BookFinder.tsx`.

---

## Deployment

To deploy, build the app with:
```sh
npm run build
```
Then serve the `dist/` folder using your preferred static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## Technologies Used
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---
Feel free to explore the codebase, customize components, and integrate new features!
>>>>>>> e57a509 (Your commit message)
