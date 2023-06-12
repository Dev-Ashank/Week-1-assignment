/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// Create an array to store transactions
const transactions = [];

// Function to add a transaction to the list
function addTransaction(itemName, category, price) {
  const transaction = {
    itemName: itemName,
    category: category,
    price: price,
    timestamp: new Date(),
  };
  transactions.push(transaction);
}

// Example usage
addTransaction("Shoes", "Clothing", 49.99);
addTransaction("Tshirts","Clothing",20.00);
addTransaction("Headphones", "Electronics", 79.99);
addTransaction("Samrtphones","Electronics",400.00);
addTransaction("Book", "Books", 19.99);

// Display the list of transactions
console.log(transactions);



function calculateTotalSpentByCategory(transactions) {
  const categoryPrices = [];
  for(let transaction of transactions) {
    const{category,price} = transaction;
    if(categoryPrices[category])
    {
      categoryPrices[category] += price;
    }
    else{
      categoryPrices[category] = price;
    }
  }


  return categoryPrices;
}
console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
