const breakfastMenu = ['Pancakes- $23', 'Eggs Benedict- $26', 'Oatmeal- $98', 'Frittata- $76'];
const mainCourseMenu = ['Steak- $78', 'Pasta- $21', 'Burger- $32', 'Salmon- $54'];
const dessertMenu = ['Cake- $31', 'Ice Cream- $81', 'Pudding- $31', 'Fruit Salad- $63'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;