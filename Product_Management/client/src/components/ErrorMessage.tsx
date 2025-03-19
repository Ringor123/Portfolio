import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5 rounded">
      <p className="font-bold">Error</p>
      <p>{children}</p>
    </div>
  )
}
