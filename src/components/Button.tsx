import React from 'react'

interface BtnProps {
    children: string,
    color: "primary" | "secondary"
    onClick: ()=>void
}


const Button = ({children, color, onClick}: BtnProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>

  )
}

export default Button