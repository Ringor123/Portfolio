# BasicStore-Zustand

A modern React e-commerce prototype showcasing state management with Zustand and modern web development practices.

## Key Features & Technologies

### Core Technologies
- Built with [React 18](https://react.dev/) and [Vite](https://vitejs.dev/)
- State management using [Zustand](https://github.com/pmndrs/zustand) - A minimalist state management solution
- Styling with [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- Motion effects with [Motion One](https://motion.dev/) for smooth animations

### Technical Highlights
- Persistent shopping cart with local storage using Zustand persist middleware
- Component-based architecture with React
- State management with Zustand store
- Responsive design with Tailwind CSS

## Project Structure

```
BasicStore-Zustand/
├── public/           # Static assets and entry point
├── src/
│   ├── assets/      # Project images and static resources
│   ├── components/  # React components
│   ├── store/       # Zustand store definitions
│   └── db.js        # Mock database and data models
├── .vscode/         # Editor configuration
└── ...config files
```

- `src/components/`: Contains reusable UI components
- `src/store/`: Houses Zustand store configurations and state logic
- `src/assets/`: Manages static resources and images

## Development Stack

### Core Dependencies
- [Zustand](https://github.com/pmndrs/zustand) v5.0.3
- [React](https://react.dev/) v18.3.1
- [TailwindCSS](https://tailwindcss.com/) v4.0.0
- [Motion One](https://motion.dev/) v12.0.6

### Development Tools
- [Vite](https://vitejs.dev/) v6.0.5
- [ESLint](https://eslint.org/) v9.17.0 with React plugins
- SWC for fast compilation

## Installation and Usage

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Setup and Running
1. Clone the repository:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd BasicStore-Zustand
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

The development server will start at `http://localhost:5173` by default.

---

# BasicStore-Zustand (Español)

Un prototipo moderno de comercio electrónico en React que demuestra la gestión de estado con Zustand y prácticas modernas de desarrollo web.

## Características y Tecnologías Principales

### Tecnologías Base
- Construido con [React 18](https://react.dev/) y [Vite](https://vitejs.dev/)
- Gestión de estado usando [Zustand](https://github.com/pmndrs/zustand) - Una solución minimalista de gestión de estado
- Estilos con [TailwindCSS](https://tailwindcss.com/) para CSS basado en utilidades
- Efectos de movimiento con [Motion One](https://motion.dev/) para animaciones fluidas

### Aspectos Técnicos Destacados
- Carrito de compras persistente con almacenamiento local usando el middleware persist de Zustand
- Arquitectura basada en componentes con React
- Gestión de estado con Zustand store
- Diseño responsive con Tailwind CSS

## Estructura del Proyecto

```
BasicStore-Zustand/
├── public/           # Recursos estáticos y punto de entrada
├── src/
│   ├── assets/      # Imágenes y recursos estáticos
│   ├── components/  # Componentes React
│   ├── store/       # Definiciones de store de Zustand
│   └── db.js        # Base de datos simulada y modelos de datos
├── .vscode/         # Configuración del editor
└── ...archivos de configuración
```

- `src/components/`: Contiene componentes UI reutilizables
- `src/store/`: Aloja configuraciones de store de Zustand y lógica de estado
- `src/assets/`: Gestiona recursos estáticos e imágenes

## Stack de Desarrollo

### Dependencias Principales
- [Zustand](https://github.com/pmndrs/zustand) v5.0.3
- [React](https://react.dev/) v18.3.1
- [TailwindCSS](https://tailwindcss.com/) v4.0.0
- [Motion One](https://motion.dev/) v12.0.6

### Herramientas de Desarrollo
- [Vite](https://vitejs.dev/) v6.0.5
- [ESLint](https://eslint.org/) v9.17.0 con plugins de React
- SWC para compilación rápida

## Instalación y Uso

### Prerrequisitos
- Node.js 18.x o superior
- npm 9.x o superior

### Configuración y Ejecución
1. Clonar el repositorio:
```bash
git clone https://github.com/Ringor123/Portfolio.git
cd BasicStore-Zustand
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

El servidor de desarrollo se iniciará en `http://localhost:5173` por defecto.
