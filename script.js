const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("show");
});