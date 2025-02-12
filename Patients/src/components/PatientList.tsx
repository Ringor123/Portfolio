/**
 * PatientList Component
 * Displays a list of all patients or a message when no patients exist
 * Renders individual PatientDetails components for each patient
 */

import { usePatientsStore } from "../store/store";
import PatientDetails from "./PatientDetails";

export default function PatientList() {
  // Access patients data from global store
  const { patients } = usePatientsStore();

  console.log(patients);
  return (
    <div className="md:w-1/2 lg:3/5 mt-20 md:h-screen hidden:overflow-y-scroll">
      {patients.length ? (
        <>
          {/* Header section when patients exist */}
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-2 mb-8 text-center">
            Manage your {""}
            <span className="text-green-600 font-bold">
              patients and appointments
            </span>
          </p>
          {/* Map through patients array to render individual patient cards */}

            {patients.map((patient) => (
              <PatientDetails key={patient.id} patient={patient} />
            ))}

        </>
      ) : (
        <>
          {/* Empty state message when no patients exist */}
          <h2 className="font-black text-3xl text-center">
            There are not patients
          </h2>
          <p className="text-xl mt-2 mb-10 text-center">
            Start adding patients {""}
            <span className="text-green-600 font-bold">
              and they will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
