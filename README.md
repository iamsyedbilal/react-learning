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

- [Episode 4](./epi_4) → **Food Ordering App (Basic Structure)**

  - Built an `App Component`
  - Built a `Header Component` with:
    - Logo
    - Navigation Items
    - Cart section
  - Built a `Body Component`
  - Built a `RestaurantCard Component`
  - Used **static mock data** initially (from `mockData.js`)
  - Made cards **dynamic with props**:
    - Props = just a JavaScript object
    - Destructured props for cleaner code (`const { name, cuisines } = props`)
  - Rendered multiple restaurants dynamically using **Array.map()**

- [Episode 5](./epi_5) → **Folder Structure, Hooks & Props Deep Dive**
  - Organized project with proper **folder structure**:
    - `components/` → React Components
    - `utils/` → constants, mock data, helpers
  - Introduced **React Hooks**:
    - `useState` → to manage state (example: filtering restaurants)
  - Built a **Filter button** to show _Top Rated Restaurants_
  - Reinforced the concept of **Props**:
    - Props = just a JavaScript object
    - Used **destructuring** for cleaner code:
      ```js
      const { name, cuisines } = props;
      ```
  - Discussed **Config-driven UI**:
    - Real-world apps render UI based on backend data/config
    - This allows flexibility and scalability
    - A good frontend engineer = good UI layer + good data layer

---

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
