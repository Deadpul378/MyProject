document.getElementById("myForm").addEventListener("submit", function (event) {
  // Проверка обязательных полей
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  if (!name || !email || !comment) {
    alert("Пожалуйста, заполните все обязательные поля.");
    event.preventDefault();
  } else {
    // Очистка формы
    event.preventDefault();
    document.getElementById("myForm").reset();
  }
});
