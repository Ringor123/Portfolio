import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

export default function Error({children}: ErrorProps) {
  return (
    <div>{children}</div>
  )
}
