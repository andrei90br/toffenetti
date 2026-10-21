// Toffenetti Val di Sole — interazioni del sito

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Slider della home
  const slides = document.querySelectorAll(".hero-slide");
  const captions = document.querySelectorAll(".hero-caption [data-slide]");
  if (slides.length > 1) {
    let current = 0;
    const show = (i) => {
      slides.forEach((s, n) => s.classList.toggle("active", n === i));
      captions.forEach((c, n) => (c.hidden = n !== i));
    };
    show(0);
    setInterval(() => {
      current = (current + 1) % slides.length;
      show(current);
    }, 6000);
  }

  // Filtri della galleria
  const filters = document.querySelectorAll(".filters button");
  const items = document.querySelectorAll(".gallery figure");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.toggle("active", b === btn));
      const f = btn.dataset.filter;
      items.forEach((it) => (it.hidden = f !== "tutti" && it.dataset.cat !== f));
    });
  });

  // Lightbox
  const lb = document.querySelector(".lightbox");
  if (lb) {
    const lbImg = lb.querySelector("img");
    items.forEach((it) =>
      it.addEventListener("click", () => {
        const img = it.querySelector("img");
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
      })
    );
    lb.addEventListener("click", (e) => {
      if (e.target !== lbImg) lb.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  // Modulo contatti: compone il messaggio e lo apre su WhatsApp
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const text =
        `Buongiorno, sono ${d.get("nome")}` +
        (d.get("email") ? ` (${d.get("email")})` : "") +
        `.\n\n${d.get("messaggio")}`;
      window.open(`https://wa.me/39335706447?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
