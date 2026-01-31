AOS.init({
  duration: 1000,
  once: true,
});

function nextSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

let giftOpened = false;

function openGift() {
  if (giftOpened) return;
  giftOpened = true;

  document.querySelector(".gift-box").classList.add("open");

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    nextSection("heart");
  }, 1400);
}

function specialDay() {
  document.getElementById("danaSurprise").classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 },
  });
}
