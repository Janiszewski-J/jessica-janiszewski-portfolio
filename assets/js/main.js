document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.append(new Date().getFullYear());
  }

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Lightbox functionality
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

document.querySelectorAll(".lightbox-item img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    lightbox.innerHTML = "";
    lightbox.appendChild(fullImg);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});