// Dark mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
};

if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}

// Mobile menu
const burger = document.getElementById("hamburger");
const nav = document.getElementById("navLinks");
burger.onclick = () => nav.classList.toggle("active");

// Reveal
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(entries =>
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"))
);
reveals.forEach(r => obs.observe(r));

// Form success
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  e.target.submit();
}
