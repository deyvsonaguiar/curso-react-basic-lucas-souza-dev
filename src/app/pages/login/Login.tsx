import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleEntrar = () => {
    console.log("Email: " + email)
    console.log("Senha: " + password)
  }
  return (
    <div>
      <form>
        <div>
          <label>
            <span>Email</span>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <span>Senha</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={handleEntrar}>Entrar</button>
        </div>
      </form>
    </div>
  )
}