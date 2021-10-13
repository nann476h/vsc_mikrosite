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
        scrub: true,
        markers: true,
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
      stagger: 1,
    });
});

//const sections = gsap.utils.toArray('section');
const colorSections = [...document.querySelectorAll("[data-color]")];

colorSections.forEach((section, i) => {
  const color = section.dataset.color;

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    markers: true,
    onEnter: () => gsap.to("body", { background: color }),
    onEnterBack: () => gsap.to("body", { background: color }),
  });
});

// Background color change end.

// slider
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();
