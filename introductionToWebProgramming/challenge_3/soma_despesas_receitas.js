const users = [
  {
    name: "Salvio",
    income: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    income: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];
function sumOfNumbers(numbers) {
  const total = numbers.reduce(function (total, number) { return total + number }, 0);
  return total;
}
function calculateBalance(income, expenses) {
  const totalIncome = sumOfNumbers(income);
  const totalexpenses = sumOfNumbers(expenses);
  return totalIncome - totalexpenses;
}

for (let user of users) {
  const balance = calculateBalance(user.income, user.expenses);
  if (balance > 0) {
    console.log(`${user.name} possui balance POSITIVO de ${balance}`);
  } else {
    console.log(`${user.name} possui balance NEGATIVO de ${balance}`);
  };
};