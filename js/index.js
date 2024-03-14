document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".relative p");
  const dropdowns = document.querySelectorAll("#aboba");

  let timeout;

  const handleMouseEnterButton = function (event) {
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
    dropdown.classList.remove("md:hidden"); // Add this line
  };

  const handleMouseLeaveButton = function (event) {
    timeout = setTimeout(() => {
      const dropdown = event.currentTarget
        ? event.currentTarget.nextElementSibling
        : null;
      if (dropdown) {
        const isCursorOnButton = event.currentTarget.contains(
          document.activeElement
        );
        if (!isCursorOnButton) {
          dropdown.classList.remove("opacity-100");
          dropdown.classList.add("opacity-0");
          dropdown.classList.add("md:hidden"); // Add this line
        }
      } else {
        const activeDropdown = document.querySelector("#aboba.opacity-100");
        if (activeDropdown) {
          activeDropdown.classList.remove("opacity-100");
          activeDropdown.classList.add("opacity-0");
          activeDropdown.classList.add("md:hidden"); // Add this line
        }
      }
    }, 200);
  };

  const handleMouseEnterDropdown = function () {
    clearTimeout(timeout);
  };

  const handleMouseLeaveDropdown = function (event) {
    event.currentTarget.classList.remove("opacity-100");
    event.currentTarget.classList.add("opacity-0");
    event.currentTarget.classList.add("md:hidden");
  };
  ///////////////////////////////////////////////////////////////////
  ////////////////////// MobileFunctions/////////////////////////////
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

  function updateEventListeners() {
    if (window.innerWidth > 767) {
      dropdowns.forEach((dropdown) => {
        dropdown.style.maxHeight = "";
      });
      dropdownButtons.forEach((button) => {
        button.removeEventListener("click", toggleOpacityDropdown);
        button.removeEventListener("click", toggleMaxHeightDropdown);
      });

      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", keepDropdownOpen);
      });

      dropdownButtons.forEach((button) => {
        button.addEventListener("mouseenter", handleMouseEnterButton);
        button.addEventListener("mouseleave", handleMouseLeaveButton);
      });
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", handleMouseEnterDropdown);
        dropdown.addEventListener("mouseleave", handleMouseLeaveDropdown);
      });
    } else {
      dropdowns.forEach((dropdown) => {
        dropdown.style.maxHeight = "0";
      });
      dropdownButtons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnterButton);
        button.removeEventListener("mouseleave", handleMouseLeaveButton);
      });
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", handleMouseEnterDropdown);
        dropdown.removeEventListener("mouseleave", handleMouseLeaveDropdown);
      });
      dropdownButtons.forEach((button) => {
        button.addEventListener("click", toggleOpacityDropdown);
        button.addEventListener("click", toggleMaxHeightDropdown);
      });

      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", keepDropdownOpen);
      });
    }
  }

  // Инициализация при загрузке
  updateEventListeners();

  // Обновление при изменении размера окна
  window.addEventListener("resize", updateEventListeners);
});

/////////////////////////////////////////////
document.querySelector("#searchButton").addEventListener("click", function () {
  var input = document.querySelector("#searchInput");
  if (input.classList.contains("w-0")) {
    input.classList.remove("w-0");
    input.classList.add("w-48");
  } else {
    input.classList.remove("w-48");
    input.classList.add("w-0");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector("#burgerButton");
  const navItems = document.querySelector("#menuItems");

  burgerButton.addEventListener("click", function () {
    navItems.classList.toggle("hidden"); // Переключает видимость
    navItems.classList.toggle("flex"); // Делает меню flex, чтобы оно показалось
  });
});
