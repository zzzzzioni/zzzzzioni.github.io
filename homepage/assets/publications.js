(function () {
  const pubs = window.PUBLICATIONS || [];
  const me = window.ME || "";
  const list = document.getElementById("pub-list");
  const nav = document.getElementById("year-nav");

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fmtAuthors = (authors) =>
    authors
      .map((a) => {
        const name = a.replace(/\*$/, "");
        const star = a.endsWith("*") ? "*" : "";
        return name === me ? `<strong>${esc(name)}${star}</strong>` : `${esc(name)}${star}`;
      })
      .join(", ");

  const byYear = {};
  pubs.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
  const years = Object.keys(byYear).sort((a, b) => b - a);

  if (!years.length) {
    list.innerHTML = '<p class="muted">아직 등록된 논문이 없습니다.</p>';
    return;
  }

  nav.innerHTML = years.map((y) => `<a href="#y${y}">${y}</a>`).join("");

  list.innerHTML = years
    .map(
      (y) => `
      <section class="pub-year" id="y${y}">
        <h2>${y}</h2>
        <ol class="pubs">
          ${byYear[y]
            .map(
              (p) => `
            <li>
              <p class="pub-title">${esc(p.title)}</p>
              <p class="pub-authors">${fmtAuthors(p.authors || [])}</p>
              <p class="pub-venue"><em>${esc(p.venue || "")}</em>${p.note ? ` <span class="badge">${esc(p.note)}</span>` : ""}</p>
              ${
                p.links
                  ? `<p class="pub-links">${Object.entries(p.links)
                      .filter(([, url]) => url)
                      .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(k)}</a>`)
                      .join("")}</p>`
                  : ""
              }
            </li>`
            )
            .join("")}
        </ol>
      </section>`
    )
    .join("");
})();
