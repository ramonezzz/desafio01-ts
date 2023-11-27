import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { agroAccount } from './class/agroAccount'


const personAccount : PeopleAccount =  new PeopleAccount(71182204180, 'Ramon', 10)
console.log(`${personAccount.getName()} - ${personAccount.getAccountNumber()}`)
personAccount.deposit(1000)
//personAccount.getBalance()

personAccount.withdraw(50)
//personAccount.getBalance()


const companyloan : CompanyAccount = new CompanyAccount('DeathStar Enterprises', 100)
console.log(`${companyloan.getName()} - ${companyloan.getAccountNumber()}`)
companyloan.getLoan(100)

const farmAccount : agroAccount = new agroAccount("Fazenda Tatooine", 225)
console.log(`${farmAccount.getName()} - ${farmAccount.getAccountNumber()}`)
farmAccount.getCredit(0)
