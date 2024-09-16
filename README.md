# Pokémon Memory Card Game

## Overview

This project is a simple memory card game built with React, TypeScript, and Vite. The goal is to click on different Pokémon without selecting the same one twice. Every click shuffles the cards, and the game tracks both the current score and high score. Try to click on all Pokémon once to win!

[Click here to play!](https://memory-game-3eh812qcg-jpcookie290s-projects.vercel.app)

## Features

- **Interactive Memory Game:** Select each Pokémon only once to increase your score.
- **Shuffle Mechanism:** Cards shuffle after each click.
- **Score Tracking:** Keeps track of both your current score and high score.
- **Visual Feedback:** Pokémon sprites and names are displayed to help players keep track.

## Technologies Used

- **React:** Fast UI development.
- **TypeScript:** Type safety and modern JavaScript features.
- **Vite:** Super fast development environment.
- **PokéAPI:** Fetches Pokémon data.

## Getting Started

### Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/pokemon-memory-card-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pokemon-memory-card-game
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Technical Details

This project uses the **React + TypeScript + Vite** stack for fast development and HMR (Hot Module Replacement). Below is a quick overview of the setup and additional tools used:

- **React + Vite Setup:**
  - This template provides a minimal setup to get React working in Vite with hot module replacement (HMR).
  - ESLint is configured with recommended rules for TypeScript and React.

### Expanding the ESLint Configuration

If you are developing a production-level application, it is recommended to expand the ESLint configuration for better type-checking:

1. Update the `parserOptions`:

   ```js
   export default {
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
       project: ["./tsconfig.json", "./tsconfig.node.json"],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. Replace `plugin:@typescript-eslint/recommended` with:

   - `plugin:@typescript-eslint/recommended-type-checked` or
   - `plugin:@typescript-eslint/strict-type-checked`

3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked` for stricter stylistic checks.

4. Install `eslint-plugin-react` and add these configurations to the `extends` list:
   - `plugin:react/recommended`
   - `plugin:react/jsx-runtime`

## Future Improvements

- Add more Pokémon to the memory card pool.
- Implement levels of difficulty.
- Add animations for better visual feedback.
- Allow users to save their high scores.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
