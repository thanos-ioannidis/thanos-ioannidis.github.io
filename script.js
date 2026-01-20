// Theme switch
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
};
if (localStorage.theme === "dark") document.body.classList.add("dark");

// Mobile nav
const hamburger = document.getElementById("hamburgerBtn");
const menu = document.getElementById("navbarMenu");
hamburger.onclick = () => menu.classList.toggle("active");

// Reveal on scroll
const sections = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries =>
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"))
);
sections.forEach(s => observer.observe(s));

// Form success
function onFormSubmit(e) {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  e.target.submit();
}
