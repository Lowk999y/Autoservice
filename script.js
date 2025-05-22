// Обработка формы записи на сервис
document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    if (name.trim() === "" || phone.trim() === "" || date.trim() === "") {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    alert(`Спасибо, ${name}! Вы записаны на ${date}. Мы свяжемся с вами по номеру ${phone}.`);
});

// Функция для горизонтального перенаправления
// Перенаправление на другие страницы
function navigateTo(page) {
    if (page) {
        window.location.href = page;
    } else {
        console.error("Страница для перенаправления не указана!");
    }
}


// Функция для вертикального перенаправления
function navigateToVertical(page) {
    if (page) {
        window.location.href = page;
    } else {
        console.error("Страница для перенаправления не указана!");
    }
}
