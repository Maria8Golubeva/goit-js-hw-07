const navCategoryQuantity = document.querySelectorAll('li.item').length;
console.log(`В списке ${navCategoryQuantity} категории.`);

const categoryName = document.querySelectorAll('li.item');
categoryName.forEach(function (element) {
    console.log('Категория:', element.firstElementChild.textContent);
    console.log('Количество элементов:', element.lastElementChild.children.length);
});
