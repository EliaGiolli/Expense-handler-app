# Expense Manager App

## Description
Expense Manager App is a React-based application that allows users to track their expenses efficiently. It features a state management system using `useReducer` for handling complex state updates and `react-parallax` for adding visually appealing scrolling effects. The project is built with Vite for a fast development experience and styled using Tailwind CSS.

## Features
- **Expense Tracking**: Add, edit, and remove expenses dynamically.
- **State Management**: Uses `useReducer` for better state control.
- **Parallax Effects**: Implements `react-parallax` to enhance the UI experience.
- **FAQ Section**: Custom accordion-based FAQ implementation.
- **Reusable Components**: Modularized components for better maintainability.
- **Tailwind CSS**: Utility-first CSS framework for responsive and scalable design.

## Installation
To set up the project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- Node.js (latest stable version recommended)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/your-username/expense-manager.git
cd expense-manager
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

## Running the App
To start the development server, run:
```bash
npm run dev
# or
yarn dev
```

This will launch the app on `http://localhost:5173/` (default Vite port).

## Building for Production
```bash
npm run build
# or
yarn build
```
This will generate optimized static files in the `dist/` directory.

## Project Structure
```
expense-manager/
│── public/
│   ├── img/
│   │   ├── business1.jpg
│   │   ├── business2.jpg
│   │   ├── logo.png
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── FAQ.jsx
│   │   ├── Input.jsx
│   ├── data/
│   ├── layouts/
│   │   ├── AccordionSection.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── ImgParallaxOne.jsx
│   │   ├── ImgParallaxTwo.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── README.md
```

## State Management with `useReducer`
The app utilizes `useReducer` to manage complex state changes efficiently. This approach is preferable over `useState` when handling multiple related states, as it allows for a more structured state update logic.

### Why `useReducer`?
- Reduces complexity for managing multiple states.
- Keeps business logic separate from component rendering.
- Enhances performance for state updates involving deep object mutations.

## Parallax Effect with `react-parallax`
To create a visually engaging scrolling effect, the app integrates `react-parallax`.

### Installation
```bash
npm install react-parallax
# or
yarn add react-parallax
```

### Usage
The `ImgParallaxOne.jsx` and `ImgParallaxTwo.jsx` components implement parallax scrolling to enhance the user experience.

## Styling with Tailwind CSS
Tailwind CSS is used for styling, allowing for rapid UI development with utility-first classes.

### Installing Tailwind (Already Installed)
```bash
npm install tailwindcss
# or
yarn add tailwindcss
```

### Using Tailwind in Components
Tailwind classes are applied directly in JSX elements, making styling intuitive and efficient.

## Contributing
Feel free to fork this repository and submit pull requests with improvements or new features.

## License
This project is licensed under the MIT License.
