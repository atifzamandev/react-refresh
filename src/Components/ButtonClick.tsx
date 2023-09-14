import { Button } from "react-bootstrap"

interface Props {
  children: string
  onClick: () => void
  variant?: "primary" | "secondary" | "success"
}

const ButtonClick = ({ children, variant = "primary", onClick }: Props) => {
  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {children}
      </Button>
    </>
  )
}

export default ButtonClick
