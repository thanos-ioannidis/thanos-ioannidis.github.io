// Dark mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark");
};

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
});
reveals.forEach(r => observer.observe(r));

// Form success
function showSuccess(e) {
  e.preventDefault();
  document.getElementById("success").style.display = "block";
  e.target.submit();
}
