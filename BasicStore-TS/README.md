# BasicStore-TS

A modern e-commerce prototype built with React, TypeScript, and Zustand, showcasing modern web development practices and state management patterns.

## Technical Highlights

- Built with [React 18](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/), leveraging strict type safety
- State management using [Zustand](https://github.com/pmndrs/zustand) for efficient and scalable state handling
- Smooth animations powered by [Motion One](https://motion.dev/), a lightweight animation library
- Modern styling with [TailwindCSS](https://tailwindcss.com/) v4
- Built using [Vite](https://vitejs.dev/) for lightning-fast development experience
- Enhanced development experience with [SWC](https://swc.rs/) for fast compilation

## Key Implementation Features

- State management with Zustand for efficient cart operations
- Custom React hooks for cart management and state persistence
- Type-safe store implementation with TypeScript
- Component composition patterns for maintainable UI architecture

## Project Structure

```
BasicStore-TS/
├── public/           # Static assets
├── src/
│   ├── assets/      # Project assets and SVGs
│   ├── components/  # React components
│   └── store/       # Zustand store definitions
```

- `src/components/`: Contains modular React components with TypeScript definitions
- `src/store/`: Houses Zustand store configurations and custom hooks
- `src/assets/`: Contains optimized SVG icons and images

## Installation and Usage

```bash
# Clone the repository
git clone https://github.com/Ringor123/Portfolio.git

# Navigate to project directory
cd BasicStore-TS

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

# BasicStore-TS (Español)

Un prototipo de comercio electrónico moderno construido con React, TypeScript y Zustand, que muestra prácticas modernas de desarrollo web y patrones de gestión de estado.

## Aspectos Técnicos Destacados

- Construido con [React 18](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/), aprovechando la seguridad de tipos estricta
- Gestión de estado usando [Zustand](https://github.com/pmndrs/zustand) para un manejo de estado eficiente y escalable
- Animaciones fluidas impulsadas por [Motion One](https://motion.dev/), una biblioteca de animación ligera
- Estilizado moderno con [TailwindCSS](https://tailwindcss.com/) v4
- Construido usando [Vite](https://vitejs.dev/) para una experiencia de desarrollo ultrarrápida
- Experiencia de desarrollo mejorada con [SWC](https://swc.rs/) para una compilación rápida

## Características de Implementación Clave

- Gestión de estado con Zustand para operaciones eficientes del carrito
- Hooks personalizados de React para gestión del carrito y persistencia de estado
- Implementación de store con tipado seguro usando TypeScript
- Patrones de composición de componentes para una arquitectura UI mantenible

## Estructura del Proyecto

```
BasicStore-TS/
├── public/           # Activos estáticos
├── src/
│   ├── assets/      # Activos y SVGs del proyecto
│   ├── components/  # Componentes React
│   └── store/       # Definiciones de store Zustand
```

- `src/components/`: Contiene componentes React modulares con definiciones TypeScript
- `src/store/`: Aloja configuraciones de store Zustand y hooks personalizados
- `src/assets/`: Contiene iconos SVG e imágenes optimizadas

## Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/Ringor123/Portfolio.git

# Navegar al directorio del proyecto
cd BasicStore-TS

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

---

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