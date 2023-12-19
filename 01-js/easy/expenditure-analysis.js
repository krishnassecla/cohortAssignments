/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // 			{ category: 'Food', totalSpent: 60 }, {} ... list
  let totalByCategory = {};

  transactions.forEach(transaction => {
    let {category, price} = transaction;
    if (!totalByCategory.hasOwnProperty(category)){
      totalByCategory[category] = price;
    }else{
      totalByCategory[category] += price;
    }
  });
  const allKeys = Object.keys(totalByCategory);
  const totalByCategoryList = allKeys.map(key=>{
    return {category: key, totalSpent: totalByCategory[key]}
  })
  return totalByCategoryList;
}

module.exports = calculateTotalSpentByCategory;
