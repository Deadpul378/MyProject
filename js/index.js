document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".relative p");
  const dropdowns = document.querySelectorAll(".relative .absolute");

  let timeout;

  dropdownButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      clearTimeout(timeout);

      dropdownButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.nextElementSibling.classList.remove("opacity-100");
          otherButton.nextElementSibling.classList.add("opacity-0");
        }
      });

      const dropdown = button.nextElementSibling;
      dropdown.classList.toggle("opacity-0");
      dropdown.classList.toggle("opacity-100");
    });

    button.addEventListener("mouseleave", function () {
      timeout = setTimeout(() => {
        const dropdown = button.nextElementSibling;
        dropdown.classList.remove("opacity-100");
        dropdown.classList.add("opacity-0");
      }, 200);
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(timeout);
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("opacity-0");
    });
  });
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
