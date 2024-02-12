import { useRef, useState } from "react"
import { InputLogin } from "../../shared/components"
import { ButtonLogin } from "../../shared/components/ButtonLogin"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputPassordRef = useRef<HTMLInputElement>(null)
  const buttonEnterRef = useRef<HTMLButtonElement>(null)


  const handleEntrar = () => {
    if (!email || !password) {
      console.log("Preencha os campos de email e senha")
    } else {
      console.log("Email: " + email)
      console.log("Senha: " + password)
      console.log("Usuário logado com sucesso!")
    }

    
  }

  const handleCadastrar = () => {
    if ((email || password === '') && (!email || !password) ) {
      console.log("Preencha os campos de email e/ou senha")
    } else {
      console.log("O email " + email + " foi cadastrado com sucesso! Logue novamente clicando em ENTRAR")
    }
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
          {/* <button 
            type="button"
            ref={buttonEnterRef}
            onClick={handleEntrar}>
              Entrar
          </button> */}

          <ButtonLogin
            type='button'
            ref={buttonEnterRef}
            onClick={handleEntrar}>
              Entrar
          </ButtonLogin>
          <ButtonLogin
            type='button'
            ref={buttonEnterRef}
            onClick={handleCadastrar}>
            Cadastrar
          </ButtonLogin>
        </div>
      </form>
    </div>
  )
}