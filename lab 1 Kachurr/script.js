// Функція для додавання страви до замовлення
function addToOrder(item) {
    let orderStatus = document.getElementById('order-status');
    orderStatus.textContent = 'Ви замовили: ' + item;
}

// Додаємо обробники подій для всіх кнопок замовлення
let orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let item = button.getAttribute('data-item');
        addToOrder(item);
    });
});

// Функція для виділення всіх страв
document.getElementById('highlight-menu').addEventListener('click', function() {
    let menuItems = document.getElementsByClassName('menu-item');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.toggle('highlight');
    }
});

// Зміна кольору опису страв при наведенні
let descriptions = document.getElementsByTagName('p');
for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].addEventListener('mouseover', function() {
        descriptions[i].style.color = 'blue';
    });
    descriptions[i].addEventListener('mouseout', function() {
        descriptions[i].style.color = '';
    });
}

// Обробник події на клавішу "Escape" для скасування замовлення
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('order-status').textContent = 'Замовлення скасовано.';
    }
});
