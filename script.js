gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const p = section.querySelectorAll("p");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "+=200",
        scrub: 1.5,
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
});

gsap.from(".card", {
  y: 100,
  opacity: 0,
  stagger: 0.3,

  scrollTrigger: {
    trigger: "#services",
    start: "top 50%",
    end: "+=200",
    scrub: 1,
  },
});

const colorSections = [...document.querySelectorAll("[data-color]")];

colorSections.forEach((section, i) => {
  const color = section.dataset.color;

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => gsap.to("body", { background: color }),
    onEnterBack: () => gsap.to("body", { background: color }),
  });
});
