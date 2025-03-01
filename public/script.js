const navbar = document.querySelector(".navbar");
const langContainer = document.querySelector(".lang-container");

function checkFullscreen() {
    if (window.innerHeight === screen.height) {
        navbar.style.display = "none";
        langContainer.style.marginTop = "0";
    } else {
        navbar.style.display = "flex";
        langContainer.style.marginTop = "50px";
    }
}
window.addEventListener("resize", checkFullscreen);


function redirectTo(page) {
    window.location.href = page;
}
const buttons = document.querySelectorAll('.navbar-btn');
const webview = document.querySelector('webview');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        webview.src = url;
    });
});

document.querySelector('.minimize-btn').addEventListener('click', () => {
    window.electron.minimizeWindow();
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    window.electron.closeWindow();
  });
  