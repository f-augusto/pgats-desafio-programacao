## Proposta
Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

### Recursos

- Node.js (>= 20 recomendado)
- npm

### Instalação

Abra um terminal na pasta do projeto e execute:

```cmd
npm install
```

### Rodar os testes

Os testes usam Mocha. Para executar todos os testes:

```cmd
npm test
```

### Relatório de testes

Este projeto está configurado para gerar um relatório com o Mochawesome.
Após rodar os testes, abra o arquivo `mochawesome-report/mochawesome.html` no navegador.

No Windows você pode abrir direto com:

```cmd
start .\mochawesome-report\mochawesome.html
```

### Estrutura

- `src/` - código fonte
- `test/` - arquivos de teste
- `mochawesome-report/` - relatório HTML gerado pelo Mochawesome
