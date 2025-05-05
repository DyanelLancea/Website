document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");
    const introSection = document.querySelector("#intro");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          backToTop.classList.remove("d-none");
        } else {
          backToTop.classList.add("d-none");
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(introSection);
  });