import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UsuarioLogadoContext } from './../../shared/contexts/UsuarioLogado'

export const Dashboard = () => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext)

  return (
    <>
      <h1>Dashboard</h1>
      <p>{usuarioLogadoContext.nomeDoUsuario}</p>
      <Link to="/entrar">Entrar</Link>
    </>
  )
}
