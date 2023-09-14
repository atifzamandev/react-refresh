import { ReactNode } from "react"
import { Alert } from "react-bootstrap"

interface Props {
  children: ReactNode
  onClose: () => void
}

const ButtonAlert = ({ children, onClose }: Props) => {
  return (
    <>
      <Alert dismissible onClose={onClose}>
        {children}
      </Alert>
    </>
  )
}

export default ButtonAlert
