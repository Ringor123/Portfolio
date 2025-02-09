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

# Expense Control App

A modern expense tracking application built with React and TypeScript, featuring real-time budget management and category-based expense organization. This application demonstrates advanced React patterns and modern web development practices.

## Key Technical Features

- Built with [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- Context-based state management using [React Context API](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_context)
- Persistent storage using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Responsive design with [Tailwind CSS](https://tailwindcss.com/)
- Progress bar component from [@headlessui/react](https://headlessui.com/)
- Interactive swipeable lists using [react-swipeable-list](https://github.com/sandstreamdev/react-swipeable-list)
- Unique ID generation with [UUID](https://github.com/uuidjs/uuid)

## Notable Technologies

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [SWC](https://swc.rs/) - Super-fast JavaScript/TypeScript compiler
- [ESLint](https://eslint.org/) with React Hooks plugin for code quality
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## Project Structure

```
ExpenseControl-Context/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── reducers/
│   └── types/
├── package.json
└── vite.config.ts
```

The `src/context` directory contains the budget management logic using React Context.
The `src/hooks` directory includes custom hooks for budget operations and state management.
The `src/components` directory houses reusable UI components built with Tailwind CSS.
The `src/reducers` directory contains the state management logic using reducers.

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd ExpenseControl-Context
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

---

# Aplicación de Control de Gastos

Una aplicación moderna de seguimiento de gastos construida con React y TypeScript, que ofrece gestión de presupuesto en tiempo real y organización de gastos basada en categorías. Esta aplicación demuestra patrones avanzados de React y prácticas modernas de desarrollo web.

## Características Técnicas Principales

- Construida con [React 19](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- Gestión de estado basada en contexto usando [React Context API](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_context)
- Almacenamiento persistente usando [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Diseño responsive con [Tailwind CSS](https://tailwindcss.com/)
- Componente de barra de progreso de [@headlessui/react](https://headlessui.com/)
- Listas deslizables interactivas usando [react-swipeable-list](https://github.com/sandstreamdev/react-swipeable-list)
- Generación de IDs únicos con [UUID](https://github.com/uuidjs/uuid)

## Tecnologías Destacadas

- [Vite](https://vitejs.dev/) - Herramienta de desarrollo frontend de próxima generación
- [SWC](https://swc.rs/) - Compilador ultra rápido de JavaScript/TypeScript
- [ESLint](https://eslint.org/) con plugin de React Hooks para calidad de código
- [Tailwind CSS](https://tailwindcss.com/) para estilos utility-first

## Estructura del Proyecto

```
ExpenseControl-Context/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── reducers/
│   └── types/
├── package.json
└── vite.config.ts
```

El directorio `src/context` contiene la lógica de gestión de presupuesto usando React Context.
El directorio `src/hooks` incluye hooks personalizados para operaciones de presupuesto y gestión de estado.
El directorio `src/components` aloja componentes UI reutilizables construidos con Tailwind CSS.
El directorio `src/reducers` contiene la lógica de gestión de estado usando reducers.

## Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd ExpenseControl-Context
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Compilación para Producción

Para crear una compilación de producción:
```bash
npm run build
```

Para previsualizar la compilación de producción:
```bash
npm run preview
```
