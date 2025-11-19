// Alternar entre modo claro e modo escuro
const darkBtn = document.getElementById("darkModeBtn");


darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
darkBtn.textContent = document.body.classList.contains("dark-mode")
? "Normal Mode"
: "Techno Mode";
});


// Botão "Subir ao topo"
const btnTopo = document.getElementById("btnTopo");


window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
btnTopo.style.display = "block";
} else {
btnTopo.style.display = "none";
}
});


btnTopo.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});