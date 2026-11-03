// Replace placeholders with your public professional contact information.
const CONTACT = {
  email: "lokeshraghavendra606@gmail.com",
  github: "", // e.g. "https://github.com/yourusername"
  linkedin: "https://www.linkedin.com/in/k-raghavendra"
};
document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("email-link");
if (CONTACT.email && !CONTACT.email.startsWith("YOUR_")) emailLink.href = `mailto:${CONTACT.email}`;
else { emailLink.removeAttribute("href"); emailLink.textContent = "Email coming soon"; emailLink.classList.add("disabled"); }
for (const key of ["github", "linkedin"]) {
  const link = document.getElementById(`${key}-link`);
  if (CONTACT[key]) { link.href = CONTACT[key]; link.hidden = false; link.target = "_blank"; link.rel = "noopener noreferrer"; }
}
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => { const opened = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(opened)); });
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), {threshold: .08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
