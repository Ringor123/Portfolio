# 🍸 Drinks Recipe Explorer | Explorador de Recetas de Bebidas

## English

A modern React application for exploring drink recipes using [TheCocktailDB API](https://www.thecocktaildb.com/api.php). Built with TypeScript and modern web technologies.

## Live Demo

Visit the live application at: [https://drinks-eight.vercel.app/](https://drinks-eight.vercel.app/)

### Technical Highlights

- State Management using [Zustand](https://github.com/pmndrs/zustand) with sliced stores for modular state organization
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for optimized image loading
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for responsive drink card organization
- Type-safe API integration with TypeScript
- [React Suspense](https://react.dev/reference/react/Suspense) for lazy-loaded components
- Toast notifications system for user feedback

### Technologies & Libraries

- [React 18](https://react.dev/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router v6](https://reactrouter.com/) for navigation
- [Vite](https://vitejs.dev/) as build tool
- [Headless UI](https://headlessui.com/) for accessible UI components

### Project Structure

```
drinks/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Layout components
│   ├── pages/        # Route components
│   ├── services/     # API integration
│   ├── stores/       # Zustand store slices
│   └── types/        # TypeScript definitions
```

The `components` directory contains atomic UI elements, while `stores` implements a modular state management approach using Zustand slices.

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Ringor123/Portfolio.git

# Navigate to project directory
cd drinks

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Español

Una aplicación moderna en React para explorar recetas de bebidas usando [TheCocktailDB API](https://www.thecocktaildb.com/api.php). Construida con TypeScript y tecnologías web modernas.

## Demo en Vivo

Visita la aplicación en vivo en: [https://drinks-eight.vercel.app/](https://drinks-eight.vercel.app/)

### Aspectos Técnicos Destacados

- Gestión de estado usando [Zustand](https://github.com/pmndrs/zustand) con stores divididos para organización modular
- [API Intersection Observer](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API) para carga optimizada de imágenes
- [CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) para organización responsiva de tarjetas
- Integración API con seguridad de tipos usando TypeScript
- [React Suspense](https://react.dev/reference/react/Suspense) para componentes con carga diferida
- Sistema de notificaciones toast para feedback del usuario

### Tecnologías y Librerías

- [React 18](https://react.dev/) con TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [React Router v6](https://reactrouter.com/) para navegación
- [Vite](https://vitejs.dev/) como herramienta de construcción
- [Headless UI](https://headlessui.com/) para componentes UI accesibles

### Estructura del Proyecto

```
drinks/
├── public/           # Recursos estáticos
├── src/
│   ├── components/   # Componentes UI reutilizables
│   ├── layouts/      # Componentes de diseño
│   ├── pages/        # Componentes de ruta
│   ├── services/     # Integración API
│   ├── stores/       # Slices del store Zustand
│   └── types/        # Definiciones TypeScript
```

El directorio `components` contiene elementos UI atómicos, mientras que `stores` implementa un enfoque modular de gestión de estado usando slices de Zustand.

### Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/Ringor123/Portfolio.git

# Navegar al directorio del proyecto
cd drinks

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`
