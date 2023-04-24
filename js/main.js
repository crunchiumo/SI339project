var mainbutton = document.getElementById("mainButton");
mainbutton.addEventListener("click", function() {
window.location.href = "main.html";
});

var pcbutton = document.getElementById("pcButton");
pcbutton.addEventListener("click", function() {
window.location.href = "cpu.html";
});

var buildbutton = document.getElementById("buildButton");
buildbutton.addEventListener("click", function() {
window.location.href = "motherboard.html";
});

function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }

  window.addEventListener('keydown', handleFirstTab);