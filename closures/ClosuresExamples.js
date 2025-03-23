//closure

function bankAccount(initialBalance){
    let balance = initialBalance;
    return {
        getBalance:function(){
            return balance;
        },
        deposit:function(amount){
            balance += amount;
            return balance;
        }
    }
}

const account = bankAccount(100)
console.log(account.getBalance())
account.deposit(50)
console.log(account.getBalance())