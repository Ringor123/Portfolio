/**
 * Store implementation for managing veterinary patients using Zustand
 * Includes state persistence and dev tools integration
 */

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

/**
 * Defines the shape of our patient state and available actions
 * Manages a list of patients and tracks the currently active patient
 */
type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  setActiveId: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

/**
 * Helper function to create a new patient with a unique ID
 * Transforms the draft patient data into a full patient record
 */
const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4(), date: new Date(patient.date) };
};

/**
 * Main store implementation using Zustand
 * Features:
 * - Persistent storage using localStorage
 * - Dev tools integration for debugging
 * - CRUD operations for patient management
 */
export const usePatientsStore = create<PatientState>()(
  devtools(
    persist(
      (set, get) => ({
        patients: [],
        activeId: "",

        /**
         * Creates and adds a new patient to the store
         */
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },

        /**
         * Removes a patient from the store and clears active selection
         */
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
            activeId: "",
          }));
        },

        /**
         * Sets the currently active patient for editing/viewing
         */
        setActiveId: (id) => {
          set({
            activeId: id,
          });
        },

        /**
         * Updates an existing patient's information
         */
        updatePatient: (data) => {
          const { activeId } = get();
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === activeId
                ? { id: activeId, ...data, date: new Date(data.date) }
                : patient
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "veterinary-storage",

        /**
         * Handles data rehydration when the application loads
         * Ensures dates are properly converted from storage
         */
        onRehydrateStorage: () => {
          return (state) => {
            if (state) {
              state.patients = state.patients.map((patient) => ({
                ...patient,
                date: new Date(patient.date),
              }));
            }
          };
        },
      }
    )
  )
);
