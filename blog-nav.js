(() => {
  const nav = document.querySelector("header nav");
  const home = nav?.querySelector('a[href="./"]');
  if (!nav || !home || nav.querySelector(".nav-dropdown")) return;

  const file = location.pathname.split("/").pop() || "index.html";
  const blogPages = new Set([
    "blog.html", "blog-weldability.html", "blog-high-strength-steel.html",
    "blog-qualification.html", "blog-testing-inspection.html",
    "heat-input.html", "carbon-equivalent-preheat.html",
    "t8-5-cooling-time.html", "hydrogen-cracking.html", "s960-welding.html",
    "q690qe-grade.html", "z-quality-lamellar-tearing.html", "strength-matching.html", "wps-pqr.html",
    "wps-essential-variables.html", "ctod-eca.html", "weld-hardness.html",
    "ndt-acceptance.html", "hong-kong-weld-inspection.html"
  ]);

  home.textContent = "Home";
  if (file === "index.html") home.setAttribute("aria-current", "page");
  else home.removeAttribute("aria-current");

  const dropdown = document.createElement("div");
  dropdown.className = "nav-dropdown";
  dropdown.innerHTML = `
    <a class="nav-dropdown-trigger" href="blog.html"${blogPages.has(file) ? ' aria-current="page"' : ""}>Blog <span aria-hidden="true">⌄</span></a>
    <div class="nav-dropdown-menu">
      <a href="blog-weldability.html">Weldability &amp; Metallurgy</a>
      <a href="blog-high-strength-steel.html">High-Strength Steel &amp; Joint Design</a>
      <a href="blog-qualification.html">Procedures &amp; Qualification</a>
      <a href="blog-testing-inspection.html">Testing &amp; Inspection</a>
    </div>`;
  home.insertAdjacentElement("afterend", dropdown);
})();
