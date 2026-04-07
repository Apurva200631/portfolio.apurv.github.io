// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// SCROLL ANIMATION
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
}

// TYPING
const text = "Apurva Nimbarge | AI & ML Student";
let index = 0;

function typing() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 60);
  }
}
window.onload = typing;

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});
