# Calories Counter App

A modern, TypeScript-based calorie tracking application built with React and Context API. This application demonstrates advanced state management patterns and modern web development practices.

## Live Demo

Visit the live application at: [https://calories-blue.vercel.app/](https://calories-blue.vercel.app/)

## Technical Highlights

- Built with [React 18](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- State management using [React Context API](https://react.dev/reference/react/useContext)
- Responsive design implemented with [Tailwind CSS](https://tailwindcss.com/)
- Persistent storage using [localStorage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Smooth scrolling functionality using [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- Custom hooks for activity management
- UUID generation for unique activity identification

## Notable Dependencies

- [@heroicons/react](https://github.com/tailwindlabs/heroicons) - Beautiful hand-crafted SVG icons
- [@number-flow/react](https://github.com/number-flow/react) - Number input handling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [SWC](https://swc.rs/) - Used via Vite for fast compilation

## Project Structure

```
.
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── context/       # React Context definitions
│   ├── hooks/         # Custom React hooks
│   └── types/         # TypeScript type definitions
├── .vscode/           # VS Code configuration
└── ...config files    # Various configuration files
```

The `src/components` directory contains the core application components, while `src/context` manages the global state. Custom hooks in `src/hooks` provide reusable logic for activity management.

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

# Contador de Calorías

Una aplicación moderna de seguimiento de calorías desarrollada con React y Context API, utilizando TypeScript. Esta aplicación demuestra patrones avanzados de gestión de estado y prácticas modernas de desarrollo web.

## Demo en Vivo

Visita la aplicación en vivo en: [https://calories-blue.vercel.app/](https://calories-blue.vercel.app/)

## Aspectos Técnicos Destacados

- Construido con [React 18](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- Gestión de estado usando [React Context API](https://react.dev/reference/react/useContext)
- Diseño responsivo implementado con [Tailwind CSS](https://tailwindcss.com/)
- Almacenamiento persistente usando [localStorage Web API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- Funcionalidad de desplazamiento suave usando [Element.scrollIntoView()](https://developer.mozilla.org/es/docs/Web/API/Element/scrollIntoView)
- Hooks personalizados para la gestión de actividades
- Generación de UUID para identificación única de actividades

## Dependencias Notables

- [@heroicons/react](https://github.com/tailwindlabs/heroicons) - Iconos SVG hermosos hechos a mano
- [@number-flow/react](https://github.com/number-flow/react) - Manejo de entrada de números
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS basado en utilidades
- [SWC](https://swc.rs/) - Usado a través de Vite para compilación rápida

## Estructura del Proyecto

```
.
├── public/             # Recursos estáticos
├── src/
│   ├── components/     # Componentes React
│   ├── context/       # Definiciones de Context
│   ├── hooks/         # Hooks personalizados
│   └── types/         # Definiciones de tipos TypeScript
├── .vscode/           # Configuración de VS Code
└── ...archivos config # Varios archivos de configuración
```

El directorio `src/components` contiene los componentes principales de la aplicación, mientras que `src/context` gestiona el estado global. Los hooks personalizados en `src/hooks` proporcionan lógica reutilizable para la gestión de actividades.

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
