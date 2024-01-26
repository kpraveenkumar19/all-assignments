/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction and accumulate the total spent for each category
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!categoryMap[category]) {
      // If the category is not in the map, initialize it with the current transaction price
      categoryMap[category] = price;
    } else {
      // If the category is already in the map, add the current transaction price to it
      categoryMap[category] += price;
    }
  });

  // Convert the categoryMap to the desired output format
  const result = Object.keys(categoryMap).map(category => ({
    [category]: categoryMap[category]
  }));

  return result;
}

// Example usage:
const transactions = [
  { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: '2024-01-26' },
  { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: '2024-01-27' },
  { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: '2024-01-28' },
  // Add more transactions as needed
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

