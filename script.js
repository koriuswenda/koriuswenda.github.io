// Toggle navbar mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Toggle chat
function toggleChat() {
  document.getElementById("chat-box").classList.toggle("hidden");
}