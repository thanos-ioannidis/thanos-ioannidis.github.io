function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  e.target.submit();
}
