/**
 * PatientDetailsItem Component
 * Reusable component for displaying a single field of patient information
 * Handles formatting of both string and Date type data
 */

type PatientDetailsItemProps = {
  label: string,  // Label to display before the data
  data: string | Date  // The actual data to display, can be string or Date
}

export default function PatientDetailsItem({label, data}: PatientDetailsItemProps) {
  /**
   * Formats the data for display
   * Converts Date objects to DD/MM/YYYY format
   * Returns strings as-is
   */
  const formatData = (data: string | Date) => {
    if (data instanceof Date) {
      const day = data.getDate().toString().padStart(2, '0');
      const month = (data.getMonth() + 1).toString().padStart(2, '0');
      const year = data.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return data;
  }

  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
        {label}<span className="font-normal normal-case">{formatData(data)}</span>
    </p>
  )
}
