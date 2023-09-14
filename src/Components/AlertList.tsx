import { ReactNode } from "react"
import { Alert } from "react-bootstrap"

interface AlertProps {
  children: ReactNode
}

const AlertList = ({ children }: AlertProps) => {
  return (
    <>
      <Alert variant="primary">{children}</Alert>
    </>
  )
}

export default AlertList
