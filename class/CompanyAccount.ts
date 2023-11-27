import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

   getLoan = (amount : number) => {
    if(this.validateStatus()){
      if(amount > 0) {
         this.balance += amount

         console.log(`Empréstimo efetuado: R$ ${this.balance}`)
      }else{
        console.log('Emprestimo minimo precisa ser maior que zero!')
      }
    }
  }

}
