# Product Management Frontend

A modern React application for managing product inventory. This frontend client provides a user-friendly interface for creating, viewing, updating, and deleting products.

## Technologies

- [React 19](https://react.dev/) - Latest version of React with improved rendering and performance
- [TypeScript](https://www.typescriptlang.org/) - Type safety throughout the application
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router 7](https://reactrouter.com/) - Modern client-side routing with data APIs
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [SWC](https://swc.rs/) - Super-fast JavaScript/TypeScript compiler

## Features

- **Modern React Patterns** - Uses the latest React features and patterns
- **Data Fetching with React Router** - Leverages React Router's data APIs for efficient data fetching
- **Optimistic UI Updates** - Provides immediate feedback before server confirmation
- **Form Validation** - Client-side validation for all forms
- **Responsive Design** - Fully responsive interface using Tailwind CSS
- **Toast Notifications** - User-friendly feedback for all actions

## Project Structure

```bash
client/
├── src/
│   ├── actions/          # React Router action functions
│   ├── components/       # Reusable UI components
│   │   ├── ErrorMessage.tsx
│   │   ├── ProductDetails.tsx
│   │   └── ProductForm.tsx
│   ├── layouts/          # Layout components with Outlet
│   │   └── Layout.tsx
│   ├── pages/            # Page components
│   │   ├── EditProduct.tsx
│   │   ├── NewProduct.tsx
│   │   └── Products.tsx
│   ├── services/         # API service functions
│   │   └── ProductService.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   └── formatCurrency.ts
│   ├── main.tsx          # Application entry point
│   └── router.tsx        # React Router configuration
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Key Features

### React Router Data APIs

The application uses React Router's data APIs for efficient data fetching and mutations:

```tsx
// Example loader function
export const loader = async () => {
  const products = await getProducts();
  return products;
};

// Example action function
export const action = async ({ request, params }) => {
  const data = Object.fromEntries(await request.formData());
  // Process data and return response
};
```

### Optimistic UI Updates

The application implements optimistic UI updates for a better user experience:

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
    {isAvailable ? "Available" : "Not Available"}
  </button>
</fetcher.Form>
