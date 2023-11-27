# Desenvolvendo o Dio Bank

desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias

- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências

    npm install

3 - Execute o projeto

    npm run dev

#### Desafios

[ ✅ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

- Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
- Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ✅ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount

- Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
- Apenas contas com o status true podem fazer empréstimo

[ ✅ ] Criar um novo tipo de conta a partir da DioAccount

- Esta conta não deve receber novos atributos
- Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[ ✅ ] Todos os atributos de qualquer conta devem ser privados

[ ✅ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ✅ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

---

# Projeto Atualizado:

   Introduzi um método validateStatus para garantir que apenas contas com status verdadeiro são consideradas válidas.

   Na classe DioAccount, todos os atributos foram marcados como privados para fortalecer o encapsulamento.

   Na classe DioAccount, os métodos setName foram removidos para evitar alterações externas nos atributos name e accountNumber.

   Na classe DioAccount, o método deposit agora apenas adiciona ao saldo e inclui validações adequadas.

   Na classe AgroAccount, sobrescrevi o método deposit para adicionar um bônus de 10 ao valor do depósito.

   Na classe CompanyAccount, adicionei um método getLoan que deposita um valor e valida a conta antes de conceder o empréstimo.

   Reforcei o princípio de encapsulamento, evitando acesso direto a atributos privados e incentivando o uso de métodos público

# Observações:

  Introduzi a herança de métodos e a sobreposição em AgroAccount e CompanyAccount.
  Os métodos getLoan e deposit foram modificados para garantir comportamentos específicos e validações necessárias.
  O método validateStatus agora é crucial para verificar a validade de uma conta antes de realizar operações.
