import { DioAccount } from "./DioAccount"
//classe que simula linha de credito mediante deposito
//a mesma tambem soma R$ em bonus ao deposito efetuado
export class agroAccount extends DioAccount{

    constructor(name:string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
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
            }//caso nao efetuado deposito, linha de credito e bonus nao serao acionados
        }
    }


}


