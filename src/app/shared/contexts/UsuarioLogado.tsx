import React, { createContext } from 'react'

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string
}

interface IUsuarioLogadoProvider {
  children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
)

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProvider> = ({
  children
}) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Deyvson' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}
