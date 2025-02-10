# Calories Counter App

A modern, responsive calorie tracking application built with React and TypeScript. This application helps users track their daily caloric intake through an intuitive and efficient interface.

## Technical Highlights

- Built with [React 18](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/), leveraging modern features like the [`useReducer`](https://react.dev/reference/react/useReducer) hook for state management
- Uses [Tailwind CSS](https://tailwindcss.com/) for responsive and utility-first styling
- Persistent storage using [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## Notable Technologies

- [HeroIcons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [@number-flow/react](https://www.npmjs.com/package/@number-flow/react) - Efficient number input handling
- [SWC](https://swc.rs/) - Used via Vite for super-fast compilation
- [UUID](https://www.npmjs.com/package/uuid) - Unique identifier generation

## Project Structure

```
.
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── reducers/       # State management
│   ├── data/          # Application data and constants
│   └── types/         # TypeScript type definitions
├── .vscode/           # Editor configuration
└── ...config files    # Various configuration files
```

The `src/components` directory contains modular React components, while `src/reducers` implements the state management logic using the reducer pattern. The `src/data` directory houses static data and configuration constants.

## Development Stack

- [Vite](https://vitejs.dev/) with [React](https://react.dev/) - Next Generation Frontend Tooling
- [ESLint](https://eslint.org/) with TypeScript configuration
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Installation and Usage

1. Clone the repository:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd calories
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

The development server will start at `http://localhost:5173` by default.

---

# Aplicación Contador de Calorías

Una aplicación moderna y responsiva para el seguimiento de calorías construida con React y TypeScript. Esta aplicación ayuda a los usuarios a realizar un seguimiento de su ingesta calórica diaria a través de una interfaz intuitiva y eficiente.

## Aspectos Técnicos Destacados

- Construida con [React 18](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/), aprovechando características modernas como el hook [`useReducer`](https://react.dev/reference/react/useReducer) para la gestión del estado
- Utiliza [Tailwind CSS](https://tailwindcss.com/) para estilos responsivos basados en utilidades
- Almacenamiento persistente usando [Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)

## Tecnologías Notables

- [HeroIcons](https://heroicons.com/) - Iconos SVG hermosos hechos a mano
- [@number-flow/react](https://www.npmjs.com/package/@number-flow/react) - Manejo eficiente de entradas numéricas
- [SWC](https://swc.rs/) - Usado a través de Vite para compilación ultra rápida
- [UUID](https://www.npmjs.com/package/uuid) - Generación de identificadores únicos

## Estructura del Proyecto

```
.
├── public/             # Recursos estáticos
├── src/
│   ├── components/     # Componentes React
│   ├── reducers/       # Gestión de estado
│   ├── data/          # Datos y constantes de la aplicación
│   └── types/         # Definiciones de tipos TypeScript
├── .vscode/           # Configuración del editor
└── ...archivos config # Varios archivos de configuración
```

El directorio `src/components` contiene componentes React modulares, mientras que `src/reducers` implementa la lógica de gestión de estado usando el patrón reducer. El directorio `src/data` aloja datos estáticos y constantes de configuración.

## Stack de Desarrollo

- [Vite](https://vitejs.dev/) con [React](https://react.dev/) - Herramientas de Frontend de Nueva Generación
- [ESLint](https://eslint.org/) con configuración TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilos

## Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd calories
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

El servidor de desarrollo se iniciará en `http://localhost:5173` por defecto.
