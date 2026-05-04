const usuarios = [
  {
    id: 1,
    nome: 'Fernando Santos',
    email: 'fernando.santos@pgats.com',
    senha: 'fsSenhaCerta123',
    expirado: false
  },
  {
    id: 2,
    nome: 'João Augusto',
    email: 'joao.augusto@pgats.com',
    senha: 'jaSenhaCerta123',
    expirado: true
  }
]

export function fazerLogin(email, senha) {
  if (!email || !senha) {
    throw new Error('Email e senha são obrigatórios.')
  }

  for (let i=0; i < usuarios.length; i++) {
    if (usuarios[i].email == email && usuarios[i].senha == senha) {
      if (usuarios[i].expirado) {
        return ('Renove suas credenciais.')
      }
      return ('Login realizado com sucesso.')
    }
  }
  return ('Credenciais incorretas.')
}