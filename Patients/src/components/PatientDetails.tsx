/**
 * PatientDetails Component
 * Displays detailed information for a single patient
 * Provides options to edit or delete the patient record
 */

import { usePatientsStore } from "../store/store";
import { toast, Bounce } from "react-toastify";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  // Access delete and setActive actions from global store
  const { deletePatient, setActiveId } = usePatientsStore()

  /**
   * Handles patient deletion and shows a confirmation toast
   */
  const handleClickDelete = (id: Patient['id']) => {
    deletePatient(id)
    toast.error(`Patient ${patient.name} deleted`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <div className="mx-5 my-5 px-5 py-10 bg-white shadow-md rounded-xl">
      
      {/* Display individual patient details using PatientDetailsItem component */}
      <PatientDetailsItem label="Patient: " data={patient.name} />
      <PatientDetailsItem label="Care Taker: " data={patient.caretaker} />
      <PatientDetailsItem label="Email: " data={patient.email} />
      <PatientDetailsItem label="Date: " data={patient.date} />
      <PatientDetailsItem label="Symptoms: " data={patient.symptoms} />

      {/* Action buttons for editing and deleting patient */}
      <div className="flex flex-col lg:flex-row xl:mx-30 justify-between mt-10 gap-2">
        <button
          type="button"
          onClick={() => setActiveId(patient.id)}
          className="py-2 px-10 text-center bg-green-600 hover:bg-green-700 
        text-white font-bold uppercase rounded cursor-pointer"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => handleClickDelete(patient.id)}
          className="py-2 px-10 text-center bg-red-600 hover:bg-red-700 
        text-white font-bold uppercase rounded cursor-pointer"
        >
          Delete
        </button>
      </div>

    </div>
  );
}
