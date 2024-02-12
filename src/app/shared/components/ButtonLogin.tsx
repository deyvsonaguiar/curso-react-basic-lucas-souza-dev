import React from "react"

interface IButtonLoginProps {
  onClick: () => void
  type?: 'button' | 'submit' | 'reset',
  children?: React.ReactNode
}

export const ButtonLogin  = React.forwardRef<HTMLButtonElement, IButtonLoginProps>(({type, onClick, children}, ref) => {
  return (
    <button type={type} ref={ref} onClick={onClick}>
      {children}
    </button>
  )
})