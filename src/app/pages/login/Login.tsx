import { useRef, useState } from "react"
import { InputLogin } from "../../shared/components"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputPassordRef = useRef<HTMLInputElement>(null)
  const buttonEnterRef = useRef<HTMLButtonElement>(null)


  const handleEntrar = () => {
    console.log("Email: " + email)
    console.log("Senha: " + password)
  }
  return (
    <div>
      <form>
        <div>
          <InputLogin 
            type="text"
            label="Email"
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPassordRef.current?.focus()}
          />
        </div>
        <div>
          <InputLogin
            type="password"
            label="Senha"
            value={password}
            ref={inputPassordRef}
            onPressEnter={() => buttonEnterRef.current?.focus()}
            onChange={newValue => setPassword(newValue)}
          />
          <button 
            type="button"
            ref={buttonEnterRef}
            onClick={handleEntrar}>Entrar</button>
        </div>
      </form>
    </div>
  )
}