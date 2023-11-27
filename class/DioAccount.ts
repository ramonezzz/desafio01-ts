export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number, status: boolean){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
  }

  //setName = (name: string): string => {
  //  this.name = name
  //  return 'Nome Alterado'
  //}

  getName = (): string => {
    return this.name
  }

  public deposit (amount : number) {
    if(this.validateStatus()){
      if(amount > 0){
        this.balance += amount

        console.log(`Deposito Realizado: R$ ${this.balance}` )

      }else{
        console.log("Deposito minimo precisa ser maior que zero!")
      }
    }
  }

  withdraw = (amount : number) => {
    if(this.validateStatus()){
      if(amount > 0 && amount <= this.balance){
        this.balance -= amount
        console.log(`Saque Realizado: R$ ${amount}`)
        console.log(`Saldo Atual: R$ ${this.balance}`)
      }else{
        console.log('Saldo insuficiente para saque')
      }

    }
  }

  getBalance = (): any => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return true
    }else{
      console.error('Conta inválida')
      return false
    }
  }

  getAccountNumber = () =>{
    return this.accountNumber
  }

}
