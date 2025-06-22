function addDarkTheme() {
  document.body.classList.add("darkTheme");
  // esconder o ícone da lua
  document.getElementById("dark").style.display = "none";
  // mostrar o sol
  document.getElementById("light").style.display = "inline-block";
}

function removeDarkTheme() {
  document.body.classList.remove("darkTheme");
  // mostrar a lua
  document.getElementById("dark").style.display = "inline-block";
  // esconder o sol
  document.getElementById("light").style.display = "none";
}