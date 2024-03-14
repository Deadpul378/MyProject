document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".relative p");
  const dropdowns = document.querySelectorAll(".relative ul");

  let timeout;

  function toggleOpacityDropdown(event) {
    clearTimeout(timeout);

    dropdownButtons.forEach((otherButton) => {
      if (otherButton !== event.currentTarget) {
        otherButton.nextElementSibling.classList.remove("opacity-100");
        otherButton.nextElementSibling.classList.add("opacity-0");
      }
    });

    const dropdown = event.currentTarget.nextElementSibling;
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("opacity-100");
  }

  function toggleMaxHeightDropdown(event) {
    const dropdown = event.currentTarget.nextElementSibling;

    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.style.maxHeight = "0";
      }
    });

    dropdown.style.maxHeight =
      dropdown.style.maxHeight === "0px" ? "100%" : "0";
  }

  function keepDropdownOpen() {
    clearTimeout(timeout);
  }

  // Изначально скрываем все выпадающие списки
  dropdowns.forEach((dropdown) => {
    dropdown.style.maxHeight = "0";
  });

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", toggleOpacityDropdown);
    button.addEventListener("click", toggleMaxHeightDropdown);
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", keepDropdownOpen);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector("#burgerButton");
  const navItems = document.querySelector("#menuItems");

  burgerButton.addEventListener("click", function () {
    navItems.classList.toggle("hidden"); // Переключает видимость
    navItems.classList.toggle("flex"); // Делает меню flex, чтобы оно показалось
  });
});
