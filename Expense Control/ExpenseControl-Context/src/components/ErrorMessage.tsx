/**
 * Reusable error message component
 * Displays children content in a styled red box for error visibility
 * Used throughout the application for consistent error presentation
 */
import { ReactNode } from "react"

// Props type definition for the ErrorMessage component
type ErrorMessageProps = {
  children: ReactNode  // Content to display within the error message
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p className="bg-red-600 py-2 text-center text-white rounded">{children}</p>
  )
}
