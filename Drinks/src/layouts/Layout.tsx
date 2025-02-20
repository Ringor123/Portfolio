import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container max-w-[96%] mx-auto px-4 py-16">
        <Outlet />
      </main>
    </>
  );
}
