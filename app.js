document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header ul li a, aside ul li a");

  const sections = {
    About: document.querySelector(".about"),
    Projects: document.querySelector(".my_projects"),
    Skills: document.querySelector(".skills"),
    Contacts: document.querySelector(".contact"),
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const text = link.innerText.trim();
      const section = sections[text];

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
