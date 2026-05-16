const categories = document.querySelectorAll('#categories .item');

// console.log(categories);

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryHeader = category.querySelector('h2');
  const categoryItemsList = category.querySelectorAll('li');
  console.log(`Category: ${categoryHeader.textContent}`);
  console.log(`Number of items: ${categoryItemsList.length}`);
});
