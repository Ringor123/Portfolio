/**
 * Reusable error message component for displaying validation errors and alerts.
 * Renders children content within a styled error container.
 */
import { ReactNode } from 'react'

type ErrorMessageProps = {
  children: ReactNode  // Content to be displayed within the error message
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <div className="error-message">
      {children}
    </div>
  )
}
