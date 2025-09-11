# Stryve Dashboard

This project demonstrates converting a Figma dashboard design into a React application using Tailwind CSS for styling.

## Features

- Single-page dashboard layout
- Custom decorative background shapes
- Sticky top navigation bar and vertical sidebar
- Hero section with breadcrumbs, scan info, tabs, and more
- Tailwind CSS utility classes for styling

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**

   Visit [http://localhost:5173](http://localhost:5173) to view the dashboard.

## Project Structure

```txt
src/
  components/
    BackgroundShapes.jsx
    Layout/
      Navbar.jsx
      SideNavbar.jsx
    Sections/
      Hero.jsx
  App.jsx
  main.jsx
```

## Notes

- The design and layout closely follow the provided Figma mockup.
- Responsiveness is a work in progress and not fully implemented yet.
- The code is organized for clarity and maintainability, with reusable components and Tailwind utility classes.
