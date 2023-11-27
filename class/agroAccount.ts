import { DioAccount } from "./DioAccount"

export class agroAccount extends DioAccount{

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number) => {
        super.deposit(amount)

        const bonus = 10

        const total = this.balance + bonus
        console.log(`Total: R$ ${total}`)

    }

     getCredit = (amount: number) => {
        if(this.validateStatus()){
            if(amount > 0) {
                this.deposit(amount)
                console.log(`Linha de credito disponivel`)
            }else{
                console.log("Linha de credito indisponivel no momento.")
            }
        }
    }


}


