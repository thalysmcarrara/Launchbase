const user = {
    getTransactionsCount: 'Thays',
    transactions: [],
    balance: 0
};


function createTransaction(transaction) {

    const boolean = verifyBalance(transaction);
    if (boolean) {
        reloadBalance(transaction);
        addToTransactions(transaction);
    } else {
        console.log("saldo insuficiente");
    }
}


function verifyBalance(transaction) {

    if (transaction.type === 'debit' && transaction.value > user.balance) {
        return false;
    } else {
        return true;
    }
}


function reloadBalance(transaction) {

    if (transaction.type === 'debit') {
        user.balance -= transaction.value;
    } else {
        user.balance += transaction.value;
    };
}

function addToTransactions(transaction) {

    user.transactions.push(transaction);
}

function getHigherTransactionByType(type) {
    let lastMaxValue = 0;
    let index = 0;
    let findIndex = 0;
    for (let transaction of user.transactions) {
        if (type === transaction.type) {
            if (transaction.value > lastMaxValue) {
                lastMaxValue = transaction.value;
                findIndex = index;
            }
        }
        index = index + 1;
    }
    return user.transactions[findIndex];
}

function getAverageTransactionValue() {
    let sum = 0;
    for (let transaction of user.transactions) {
        sum += transaction.value;
    }

    return sum / user.transactions.length;
}

function getTransactionsCount() {
    let countCredit = 0;
    let countDebit = 0;
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            countCredit = countCredit + 1;
        } else {
            countDebit = countDebit + 1;
        }
    }

    return { credit: countCredit, debit: countDebit };
}







createTransaction({ type: 'credit', value: 50.0 });

createTransaction({ type: 'credit', value: 120.0 });

createTransaction({ type: 'debit', value: 80.0 });

createTransaction({ type: 'debit', value: 30.0 });


console.table(user);

const objectCredit = getHigherTransactionByType('credit');
console.log(objectCredit);

const objectDebit = getHigherTransactionByType('debit');
console.log(objectDebit);

const average = getAverageTransactionValue();
console.log(average);

const numberOfTypes = getTransactionsCount();
console.log(numberOfTypes);



