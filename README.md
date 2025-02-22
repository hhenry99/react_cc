# React Crash Course

**Credits:**

- [Traversy Media - React Crash Course](https://youtu.be/LDB4uaJ87e0?si=Sie282s62WMMNaXN)
- [Programming with Mosh - React Tutorial](https://www.youtube.com/watch?v=SqcY0GlETPk)
- Formatted and refurbished by ChatGPT

---

## What is React?

- **React** is a **JavaScript library** created by **Facebook** for building user interfaces.
- It helps developers build web apps by breaking them into **components** (reusable pieces of UI).
- React is primarily focused on the **view layer** (how things appear and behave on the screen).

### Key Features:

- **Component-Based:** Breaks the UI into independent, reusable components.
- **Fast Performance:** Uses the **Virtual DOM** for efficient updates.
- **Large Ecosystem:** Includes tools like **Next.js** (for SSR) and **React Native** (for mobile apps).

---

## Why Use React?

✅ **Dynamic & Interactive:** React enables smooth, real-time UI updates.\
✅ **Efficient Rendering:** Uses a **Virtual DOM** to update only necessary parts of the page.\
✅ **Reusable Components:** Build once, reuse everywhere!\
✅ **Strong Ecosystem:** Easily integrates with libraries like Redux, Tailwind CSS, and Material UI.

---

## Core React Concepts

### Components

- **Definition:** A **component** is a small, reusable piece of UI.
- **Example:** Buttons, forms, navigation bars, etc.
- **Types of Components:**
  - **Functional Components** (recommended)
  - **Class Components** (older, less common now)

#### Example Component:

```jsx
function Message() {
  return <h1>Hello, React!</h1>;
}
```

---

### State

- **Definition:** State holds data that can change within a component.
- **Examples:**
  - Form input values
  - Fetched API data
  - UI changes (e.g., open/close a modal)

#### Example using `useState`:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

### Hooks

- **Definition:** Hooks enable state and lifecycle features in functional components.
- **Common Hooks:**
  - `useState` - Manages local component state.
  - `useEffect` - Runs code when a component mounts, updates, or unmounts.
  - `useContext` - Shares state between components without prop drilling.

---

## What is the Virtual DOM?

- The **DOM** (Document Object Model) is how browsers represent a webpage.
- React creates a **Virtual DOM**, an in-memory copy of the real DOM.
- When something changes, React:
  1. Updates the **Virtual DOM**.
  2. Compares it with the previous version (diffing).
  3. Updates only the necessary parts of the **real DOM** (reconciliation).

✅ **Benefit:** Faster performance compared to manually updating the DOM.

---

## Vite - The Fastest React Setup

- **What is Vite?** A modern front-end build tool that is super fast.
- **Why use it?** Uses **ESBuild**, making it faster than Webpack.

#### Installation:

```bash
npm create vite@latest
```

---

## React Project Structure

```
my-react-app/
│── node_modules/     # Installed dependencies
│── public/           # Static assets
│── src/              # Your React components and code
│   ├── App.tsx       # Main component
│   ├── index.tsx     # Entry file
│── index.html        # Main HTML file
│── package.json      # Project metadata and dependencies
│── vite.config.ts    # Vite configuration
```

---

## Creating a React Component

- **File Extensions:**
  - `.jsx` → React components in **JavaScript**
  - `.tsx` → React components in **TypeScript** (recommended for type safety)

#### Example:

```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

---

## React Commands

### 1️⃣ Create a React App with Vite:

```bash
npm create vite@latest
cd my-react-app
npm install
npm run dev
```

### 2️⃣ Start the Development Server:

```bash
npm run dev
```

---

## Summary

- **React** is a powerful library for building **fast**, **interactive**, and **reusable** UIs.
- It uses **components**, **state**, **hooks**, and the **Virtual DOM** to make development easy.
- Tools like **Vite** help speed up the setup and development process.
- Learn **React + Next.js + TypeScript** for even more powerful apps!

---

🚀 **Happy Coding with React!** 🎉
