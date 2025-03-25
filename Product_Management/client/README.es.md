# Frontend de Gestión de Productos

Una aplicación moderna de React para la gestión de inventario de productos. Este cliente frontend proporciona una interfaz amigable para crear, ver, actualizar y eliminar productos.

## Tecnologías

- [React 19](https://react.dev/) - Última versión de React con renderizado y rendimiento mejorados
- [TypeScript](https://www.typescriptlang.org/) - Seguridad de tipos en toda la aplicación
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS basado en utilidades
- [React Router 7](https://reactrouter.com/) - Enrutamiento moderno del lado del cliente con APIs de datos
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notificaciones toast
- [Zod](https://zod.dev/) - Validación de esquemas orientada a TypeScript
- [Vite](https://vitejs.dev/) - Herramientas frontend de próxima generación
- [SWC](https://swc.rs/) - Compilador de JavaScript/TypeScript súper rápido

## Características

- **Patrones Modernos de React** - Utiliza las últimas características y patrones de React
- **Obtención de Datos con React Router** - Aprovecha las APIs de datos de React Router para una obtención eficiente
- **Actualizaciones Optimistas de UI** - Proporciona retroalimentación inmediata antes de la confirmación del servidor
- **Validación de Formularios** - Validación del lado del cliente para todos los formularios
- **Diseño Responsivo** - Interfaz completamente responsiva utilizando Tailwind CSS
- **Notificaciones Toast** - Retroalimentación amigable para todas las acciones

## Estructura del Proyecto

```bash
client/
├── src/
│   ├── actions/          # Funciones de acción de React Router
│   ├── components/       # Componentes UI reutilizables
│   │   ├── ErrorMessage.tsx
│   │   ├── ProductDetails.tsx
│   │   └── ProductForm.tsx
│   ├── layouts/          # Componentes de diseño con Outlet
│   │   └── Layout.tsx
│   ├── pages/            # Componentes de página
│   │   ├── EditProduct.tsx
│   │   ├── NewProduct.tsx
│   │   └── Products.tsx
│   ├── services/         # Funciones de servicio API
│   │   └── ProductService.ts
│   ├── types/            # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── utils/            # Funciones de utilidad
│   │   └── formatCurrency.ts
│   ├── main.tsx          # Punto de entrada de la aplicación
│   └── router.tsx        # Configuración de React Router
├── public/               # Activos estáticos
├── package.json          # Dependencias y scripts
└── tailwind.config.js    # Configuración de Tailwind CSS
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación de producción
npm run preview

# Linteo de código
npm run lint
```

## Características Clave

### APIs de Datos de React Router

La aplicación utiliza las APIs de datos de React Router para una obtención y mutación eficiente de datos:

```tsx
// Ejemplo de función loader
export const loader = async () => {
  const products = await getProducts();
  return products;
};

// Ejemplo de función action
export const action = async ({ request, params }) => {
  const data = Object.fromEntries(await request.formData());
  // Procesar datos y devolver respuesta
};
```

### Actualizaciones Optimistas de UI

La aplicación implementa actualizaciones optimistas de UI para una mejor experiencia de usuario:

```tsx
<fetcher.Form method="POST">
  <button
    className={`text-sm rounded-full p-2 hover:cursor-pointer ${
      isAvailable
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
    type='submit'
    name="id"
    value={product.id}
  >
    {isAvailable ? "Disponible" : "No Disponible"}
  </button>
</fetcher.Form>
```
