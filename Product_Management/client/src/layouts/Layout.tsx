import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-[90%] py-10">
          <h1 className="text-4xl text-white font-extrabold">
            Product Management
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-[90%] p-10 bg-white shadow">
        <Outlet />
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
