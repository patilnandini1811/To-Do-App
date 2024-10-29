# React + TypeScript + Vi

---

# To-Do App

This is a simple To-Do application built with **React**, **TypeScript**, and **Vite**. It allows users to manage tasks efficiently.

## Features

- **Add Tasks**: Easily add new tasks to your list.
- **Mark as Completed or Active**: Toggle tasks between active and completed states.
- **Delete Tasks**: Remove tasks when they're no longer needed.

This app is a basic yet effective tool for managing daily tasks with a clean and user-friendly interface.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
<img width="1053" alt="Screenshot 2024-10-29 at 14 44 16" src="https://github.com/user-attachments/assets/3731ca4f-55c4-4624-ba9d-a8161842eea1">



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

```

