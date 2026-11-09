const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-category]");
projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.getAttribute("data-project-filter");
    projectFilters.forEach((item) => item.classList.toggle("active", item === filter));
    projectCards.forEach((card) => {
      card.hidden = category !== "all" && card.getAttribute("data-project-category") !== category;
    });
  });
});
