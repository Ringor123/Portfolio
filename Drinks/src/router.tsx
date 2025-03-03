/**
 * Main router component for the application.
 * Features:
 * - Lazy loading of FavoritesPage for better initial load performance
 * - Common Layout wrapper for all routes
 * - Fetches drink categories on initial load
 * - Suspense fallback for loading states
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { useAppStore } from "./stores/useAppStore";

/** Lazy loaded FavoritesPage component to reduce initial bundle size */
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export default function AppRouter() {
  const { fetchCategories } = useAppStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Loading...">
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
