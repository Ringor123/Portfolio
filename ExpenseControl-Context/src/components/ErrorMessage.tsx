import { ReactNode } from "react"


type ErrorMessageProps = {
  children: ReactNode
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p className="bg-red-600 py-2 text-center text-white rounded">{children}</p>
  )
}
