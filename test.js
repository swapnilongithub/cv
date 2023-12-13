console.log("hellow");
document.addEventListener("DOMContentLoaded", function () {
  const filterInput = document.getElementById("filterInput");
  const listItems = document.querySelectorAll(".list-item");

  filterInput.addEventListener("input", function () {
    const filterText = filterInput.value.toLowerCase();

    listItems.forEach(function (item) {
      const itemText = item.textContent.toLowerCase();

      if (itemText.includes(filterText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

