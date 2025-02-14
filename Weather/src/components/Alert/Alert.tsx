import { ReactNode } from "react"
import style from './Alert.module.css'

type AlertProps = {
  children: ReactNode
}

export default function Alert({children}: AlertProps) {
  return (
    <div className={style.alert}>{children}</div>
  )
}
