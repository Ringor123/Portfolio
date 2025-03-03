/**
 * Main layout component that wraps all pages.
 * Features:
 * - Common header with navigation and search
 * - Responsive container for main content
 * - Global modal for recipe details
 * - Global notification system
 * - Uses React Router's Outlet for dynamic content
 */

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";

export default function Layout() {
  return (
    <>
      <Header />
      <main className=" container max-w-[96%] mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
}
