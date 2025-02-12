/**
 * Error Component
 * Reusable component for displaying error messages
 * Used primarily in form validation contexts
 */

import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode  // The error message to display
}

export default function Error({children}: ErrorProps) {
  return (
    <p className="px-2 text-red-600 text-sm">{children}</p>
  )
}
