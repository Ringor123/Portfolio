/**
 * PatientForm Component
 * Handles both creation and updating of patient records
 * Uses react-hook-form for form management and validation
 */

import { useForm } from "react-hook-form";
import Error from "./Error";
import { DraftPatient } from "../types";
import { usePatientsStore } from "../store/store";
import { useEffect, useRef } from "react";
import { toast, Bounce } from "react-toastify";

export default function PatientForm() {
  // Reference to form container for scroll functionality
  const formRef = useRef<HTMLDivElement>(null);

  /**
   * Form hook configuration with validation mode set to 'all'
   * Provides form state and helper methods
   */
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DraftPatient>({
    mode: "all",
  });

  // Access to global store state and actions
  const { addPatient, activeId, patients, updatePatient } = usePatientsStore();

  /**
   * Effect hook to populate form when editing an existing patient
   * Formats date to match input requirements
   */
  useEffect(() => {
    if (activeId) {
      const activePatient = patients.find((patient) => patient.id === activeId);

      if (activePatient) {
        setValue("name", activePatient.name);
        setValue("caretaker", activePatient.caretaker);
        setValue("email", activePatient.email);

        const date = new Date(activePatient.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        setValue("date", formattedDate);
        setValue("symptoms", activePatient.symptoms);
      }
    } else {
      reset();
    }
  }, [activeId, patients, setValue, reset]);

  useEffect(() => {
    if (activeId && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeId]);

  /**
   * Handles form submission for both new and existing patients
   * Displays success notification and resets form state
   */
  const registerPatient = (data: DraftPatient) => {
    const formattedData = {
      ...data,
      date: new Date(data.date),
    };

    if (activeId) {
      updatePatient(formattedData);
      toast.success(`Pacient ${data.name} updated`, {
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
    } else {
      addPatient(formattedData);
      toast.success(`Pacient ${data.name} added`, {
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
    reset();
  };

  return (
    <div ref={formRef} className="md:w-1/2 lg:w-2/5 mx-5">
      {/* Form header section */}
      <h2 className="font-black text-3xl text-center mt-20">
        Patient Tracking
      </h2>

      <p className="text-lg mt-2 text-center mb-8">
        Add Patients and {""}
        <span className="text-green-600 font-bold">Manage Them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Patient's name"
            {...register("name", {
              required: "Name of patient is required",
              maxLength: {
                value: 15,
                message: "Max. 15 characters",
              },
              minLength: {
                value: 2,
                message: "Min. 2 characters",
              },
            })}
          />
          {errors.name && <Error>{errors.name.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Care taker
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Care taker's name"
            {...register("caretaker", {
              required: "Name of care taker is required",
              maxLength: {
                value: 15,
                message: "Max. 15 characters",
              },
              minLength: {
                value: 2,
                message: "Min. 2 characters",
              },
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Register email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Entry date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && <Error>{errors.date.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Patient symptoms"
            {...register("symptoms", {
              required: "Symptoms are required",
            })}
          ></textarea>
          {errors.symptoms && (
            <Error>{errors.symptoms.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-green-600 rounded w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
          value={activeId ? "Update patient" : "Save patient"}
        />
      </form>
    </div>
  );
}
