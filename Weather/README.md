# Weather App

A modern weather application built with React and TypeScript that provides real-time weather information with a clean, responsive interface.

## Live Demo

Visit the live application at: [https://weather-ten-flame.vercel.app/](https://weather-ten-flame.vercel.app/)

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/Ringor123/Portfolio.git

# Navigate to project directory
cd weather

# Install dependencies
npm install

# Create .env.local file and add your OpenWeather API key
echo "VITE_API_KEY=your_api_key_here" > .env.local
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technical Highlights

- Built with [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- Implements custom React hooks for weather data management
- Uses [CSS Modules](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_modules) for scoped styling
- Type-safe API responses using [Zod](https://zod.dev/) schema validation
- Modern async/await patterns with [Axios](https://axios-http.com/) for HTTP requests

## Notable Technologies

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [SWC](https://swc.rs/) - Super-fast TypeScript/JavaScript compiler
- [Valibot](https://valibot.dev/) - Type-safe schema validation
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Axios](https://axios-http.com/) - Promise-based HTTP client

## Project Structure

```
weather/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── data/        # Data models and constants
│   ├── types/       # TypeScript type definitions
│   └── utils/       # Utility functions
```

The `components` directory contains modular React components with their respective CSS modules.
The `hooks` directory includes custom React hooks for weather data fetching and state management.

## Environment Variables

```bash
VITE_API_KEY=your_openweather_api_key
```

You'll need to obtain an API key from [OpenWeather](https://openweathermap.org/api) to use this application.

---

# Aplicación del Tiempo

Una aplicación meteorológica moderna construida con React y TypeScript que proporciona información meteorológica en tiempo real con una interfaz limpia y responsive.

## Demo en Vivo

Visita la aplicación en vivo en: [https://weather-ten-flame.vercel.app/](https://weather-ten-flame.vercel.app/)

## Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/Ringor123/Portfolio.git

# Navegar al directorio del proyecto
cd weather

# Instalar dependencias
npm install

# Crear archivo .env.local y añadir tu clave API de OpenWeather
echo "VITE_API_KEY=tu_clave_api_aqui" > .env.local
```

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción localmente
- `npm run lint` - Ejecutar ESLint

## Aspectos Técnicos Destacados

- Construida con [React 19](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- Implementa hooks personalizados de React para la gestión de datos meteorológicos
- Implementa [CSS Modules](https://developer.mozilla.org/es/docs/Web/CSS/CSS_modules) para estilos modulares
- Respuestas de API tipadas usando validación de esquemas con [Zod](https://zod.dev/)
- Patrones modernos async/await con [Axios](https://axios-http.com/) para peticiones HTTP

## Tecnologías Destacadas

- [Vite](https://vitejs.dev/) - Herramienta de desarrollo frontend de nueva generación
- [SWC](https://swc.rs/) - Compilador ultra rápido de TypeScript/JavaScript
- [Valibot](https://valibot.dev/) - Validación de esquemas con seguridad de tipos
- [Zod](https://zod.dev/) - Validación de esquemas orientada a TypeScript
- [Axios](https://axios-http.com/) - Cliente HTTP basado en promesas

## Estructura del Proyecto

```
weather/
├── public/           # Activos estáticos
├── src/
│   ├── components/   # Componentes React
│   ├── hooks/       # Hooks personalizados
│   ├── data/        # Modelos de datos y constantes
│   ├── types/       # Definiciones de tipos TypeScript
│   └── utils/       # Funciones utilitarias
```

El directorio `components` contiene componentes React modulares con sus respectivos módulos CSS.
El directorio `hooks` incluye hooks personalizados de React para la obtención y gestión del estado de datos meteorológicos.

## Variables de Entorno

```bash
VITE_API_KEY=tu_clave_api_openweather
```

Necesitarás obtener una clave API de [OpenWeather](https://openweathermap.org/api) para usar esta aplicación.
