# Crypto Price Converter

A modern cryptocurrency price converter built with React and TypeScript. Get real-time cryptocurrency prices and statistics using the CryptoCompare API.

## Installation

```bash
# Clone the repository
git clone https://github.com/Ringor123/Portfolio.git

# Navigate to project directory
cd crypto-price-converter

# Install dependencies
npm install
```

## Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features

- Real-time cryptocurrency price tracking
- Support for multiple fiat currencies
- 24-hour price statistics
- Modern, responsive UI
- Type-safe data handling

## Technical Implementation

### Core Technologies

- [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for build tooling
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [Zod](https://zod.dev/) for runtime type validation
- [Axios](https://axios-http.com/) for API requests

### Notable Technical Features

- [Custom hooks](https://react.dev/reference/react) for state management
- Runtime type validation using [Zod schemas](https://zod.dev/)
- [Async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) for API handling
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for responsive layouts

## Project Structure

```
crypto-price-converter/
├── public/
├── src/
│   ├── components/     # React components
│   ├── data/          # Static data and constants
│   ├── schema/        # Zod validation schemas
│   ├── services/      # API integration
│   └── types/         # TypeScript type definitions
```

- `components/`: Contains reusable React components with TypeScript
- `schema/`: Zod schemas for API response validation
- `services/`: CryptoCompare API integration layer

## API Integration

Uses the [CryptoCompare API](https://min-api.cryptocompare.com/) for real-time cryptocurrency data.

---

# Convertidor de Precios de Criptomonedas

Un convertidor moderno de precios de criptomonedas construido con React y TypeScript. Obtén precios y estadísticas de criptomonedas en tiempo real usando la API de CryptoCompare.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Ringor123/Portfolio.git

# Navegar al directorio del proyecto
cd crypto-price-converter

# Instalar dependencias
npm install
```

## Ejecutar la Aplicación

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Características Principales

- Seguimiento de precios de criptomonedas en tiempo real
- Soporte para múltiples monedas fiat
- Estadísticas de precios de 24 horas
- Interfaz moderna y responsiva
- Manejo seguro de tipos de datos

## Implementación Técnica

### Tecnologías Principales

- [React 18](https://react.dev/) con [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para herramientas de construcción
- [Zustand](https://zustand-demo.pmnd.rs/) para gestión de estado
- [Zod](https://zod.dev/) para validación de tipos en tiempo de ejecución
- [Axios](https://axios-http.com/) para peticiones API

### Características Técnicas Destacadas

- [Hooks personalizados](https://react.dev/reference/react) para gestión de estado
- Validación de tipos en tiempo de ejecución usando [esquemas Zod](https://zod.dev/)
- [Async/await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function) para manejo de API
- [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) para layouts responsivos

## Estructura del Proyecto

```
crypto-price-converter/
├── public/
├── src/
│   ├── components/     # Componentes React
│   ├── data/          # Datos estáticos y constantes
│   ├── schema/        # Esquemas de validación Zod
│   ├── services/      # Integración con API
│   └── types/         # Definiciones de tipos TypeScript
```

- `components/`: Contiene componentes React reutilizables con TypeScript
- `schema/`: Esquemas Zod para validación de respuestas API
- `services/`: Capa de integración con la API de CryptoCompare

## Integración API

Utiliza la [API de CryptoCompare](https://min-api.cryptocompare.com/) para datos de criptomonedas en tiempo real.