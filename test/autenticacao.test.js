import { fazerLogin } from '../src/autenticacao.js'
import assert from 'node:assert'

describe('Testes de Autenticação', function() {
  it('Deve realizar login com credenciais válidas', function() {
    const resultado = fazerLogin('fernando.santos@pgats.com', 'fsSenhaCerta123')
    assert.equal(resultado, 'Login realizado com sucesso.')
  })

  it('Deve retornar erro para login com conta expirada', function() {
    const resultado = fazerLogin('joao.augusto@pgats.com', 'jaSenhaCerta123')
    assert.equal(resultado, 'Renove suas credenciais.')
  })

  it('Deve retornar erro para usuario não encontrado', function() {
    const resultado = fazerLogin('usuario.inexistente@pgats.com', 'senhaCerta123')
    assert.equal(resultado, 'Credenciais incorretas.')
  })

  it('Deve retornar erro para login com senha errada', function() {
    const resultado = fazerLogin('fernando.santos@pgats.com', 'fsSenhaErrada123')
    assert.equal(resultado, 'Credenciais incorretas.')
  })  
})