import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Layout() {
  return (
    <>
      <Header />
      <main className=" container max-w-[96%] mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Modal />
    </>
  );
}
