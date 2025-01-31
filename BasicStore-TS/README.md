# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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

---

# BasicStore-TS 

## English
A modern e-commerce store built with TypeScript and React, featuring a clean and responsive design.

###  Technologies
- **React 18** - UI Library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **Motion** - Animation library

###  Technical Features
- Type-safe development with TypeScript
- Component-based architecture
- React Hooks for state and lifecycle management
- Modern state management with Zustand
- Smooth animations with Motion library
- Responsive design with Tailwind CSS
- ESLint configuration for code quality

###  Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Español
Una tienda de comercio electrónico moderna construida con TypeScript y React, con un diseño limpio y responsive.

###  Tecnologías
- **React 18** - Biblioteca de UI
- **TypeScript** - JavaScript con tipos
- **Vite** - Herramienta de construcción y servidor de desarrollo
- **Tailwind CSS** - Framework CSS basado en utilidades
- **Zustand** - Gestión de estado
- **Motion** - Biblioteca de animaciones

###  Características Técnicas
- Desarrollo seguro con TypeScript
- Arquitectura basada en componentes
- Hooks de React para gestión de estado y ciclo de vida
- Gestión de estado moderna con Zustand
- Animaciones fluidas con Motion
- Diseño responsive con Tailwind CSS
- Configuración de ESLint para calidad de código

###  Desarrollo
```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```
