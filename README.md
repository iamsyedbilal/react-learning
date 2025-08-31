# 🚀 My React.js Learning Journey

Welcome to my React.js learning journal!  
This repository documents my step-by-step progress as I explore and practice React concepts — from the basics to advanced topics.

---

## 📚 Episodes

- [Episode 1](./epi_1) → **Getting Started with React**

  - **epi_1.1** → Three ways to add an `<h1>`:
    1. Manually inside HTML
    2. Dynamically with Vanilla JS (`document.createElement`)
    3. Preparing React setup via CDN
  - **epi_1.2** → First React code:

    - Using `React.createElement` to build an `<h1>`
    - Rendering with `ReactDOM.createRoot().render()`
    - **epi_1.3** → Separating concerns:
    - Moved React code to a separate **`app.js`** file
    - Added external **`style.css`** for styling
    - Wrote cleaner, modular code (HTML + JS + CSS separated)
    - **epi_1.4** → Nested & sibling elements:
    - Built nested elements using `React.createElement`
    - Added multiple siblings inside a parent
    - Observed how verbose and hard-to-read core React code becomes
    - Motivation for moving towards **JSX**

- [Episode 2](./epi_2) → **Setting up a React Project**

  - Installed **React** and **ReactDOM** from npm
  - Introduced **Parcel bundler** for development
  - Used **ES6 imports** instead of CDN scripts
  - Rendered first element (`<h1>Hey There Everyone</h1>`) with modern setup
  - Learned how `index.html`, `app.js`, and `package.json` work together

- [Episode 3](./epi_3) → **React Components**

  - Introduced **React Components** (the building blocks of any React app)
  - Learned the two types:
    - **Class-based components** → older way, rarely used now
    - **Function-based components** → modern standard (99% developers use these)
  - Created first **functional component (`App`)** that returns JSX
  - Added another simple component (`AnotherApp`) for practice
  - Setup `package.json` scripts:
    - `npm start` → runs app with Parcel and opens in browser
    - `npm run build` → builds production-ready files

- (More episodes coming soon...)

## 🎯 Goals of This Repo

- Keep track of my React learning journey
- Share simple, runnable code examples
- Build a solid foundation before moving to advanced concepts

---

## 🛠️ How to Run

1. Clone this repo:
   ```bash
   git clone https://github.com/iamsyedbilal/react-learning.git
   cd react
   ```
