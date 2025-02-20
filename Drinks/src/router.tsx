import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { useAppStore } from "./stores/useAppStore";

export default function AppRouter() {

  const { fetchCategories } = useAppStore()

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
