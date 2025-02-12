/**
 * Type definitions for the Patient Management System
 * Contains the core data structures used throughout the application
 */

/**
 * Patient type
 * Represents a complete patient record in the system
 * Contains all necessary information for patient tracking
 */
export type Patient = {
  id: string;         // Unique identifier for the patient
  caretaker: string;  // Name of the person responsible for the patient
  date: Date;         // Appointment or registration date
  email: string;      // Contact email
  name: string;       // Patient's name
  symptoms: string;   // Description of symptoms or condition
};

/**
 * DraftPatient type
 * Used when creating or editing a patient record
 * Omits the id field (auto-generated) and allows string format for date
 */
export type DraftPatient = Omit<Patient, 'id' | 'date'> & {
  date: string | Date  // Accepts both string (from form input) and Date objects
}