/**
 * Main application component that serves as the root layout
 * Integrates the patient management interface with toast notifications
 */

import { ToastContainer, Bounce } from "react-toastify";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      {/* Main container with responsive layout */}
      <div className="container mx-auto mt-10">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Patients Tracker {""}
          <span className="text-green-600">Veterinary</span>
        </h1>
      

      {/* Flex container for form and list with responsive layout */}
      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>

      {/* Toast notification configuration for user feedback */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
      </div>
    </>
  );
}

export default App;
