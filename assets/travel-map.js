(function () {
  const trips = window.TRAVELS || [];

  // Number of countries visited
  const countries = new Set(trips.map((t) => t.country));
  document.getElementById("country-count").textContent = countries.size;

  // Map (OpenStreetMap tiles, no API key needed)
  const map = L.map("map", { worldCopyJump: true, scrollWheelZoom: false }).setView([25, 30], 2);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);
  map.on("click", () => map.scrollWheelZoom.enable());

  const pinIcon = L.divIcon({
    className: "pin",
    html: '<span class="pin-dot"></span>',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });

  const bounds = [];
  trips.forEach((t) => {
    const m = L.marker([t.lat, t.lng], { icon: pinIcon, title: t.city ? `${t.city}, ${t.country}` : t.country }).addTo(map);
    const n = (t.photos || []).length;
    m.bindTooltip(`${t.city ? t.city + ", " : ""}${t.country}${n ? ` · ${n} photo${n > 1 ? "s" : ""}` : ""}`, { direction: "top", offset: [0, -8] });
    m.on("click", () => openGallery(t));
    bounds.push([t.lat, t.lng]);
  });
  if (bounds.length > 1) map.fitBounds(bounds, { padding: [40, 40], maxZoom: 4 });

  // Gallery
  const g = document.getElementById("gallery");
  const titleEl = document.getElementById("gallery-title");
  const metaEl = document.getElementById("gallery-meta");
  const img = document.getElementById("gallery-img");
  const cap = document.getElementById("gallery-caption");
  const thumbs = document.getElementById("gallery-thumbs");
  const empty = document.getElementById("gallery-empty");
  const fig = g.querySelector("figure");
  const prev = g.querySelector(".prev");
  const next = g.querySelector(".next");
  let photos = [];
  let idx = 0;

  const norm = (p) => (typeof p === "string" ? { src: p, caption: "" } : p);

  function openGallery(t) {
    photos = (t.photos || []).map(norm);
    idx = 0;
    titleEl.textContent = t.city ? `${t.city}, ${t.country}` : t.country;
    metaEl.textContent = [t.date, t.note].filter(Boolean).join(" · ");
    const has = photos.length > 0;
    fig.hidden = !has;
    empty.hidden = has;
    prev.hidden = next.hidden = photos.length < 2;
    thumbs.innerHTML = photos
      .map((p, i) => `<button data-i="${i}" aria-label="Photo ${i + 1}"><img src="${p.src}" alt="" loading="lazy"></button>`)
      .join("");
    if (has) show(0);
    g.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function show(i) {
    idx = (i + photos.length) % photos.length;
    const p = photos[idx];
    img.src = p.src;
    img.alt = p.caption || titleEl.textContent;
    cap.textContent = p.caption || "";
    thumbs.querySelectorAll("button").forEach((b, j) => b.classList.toggle("on", j === idx));
  }

  function close() {
    g.hidden = true;
    document.body.style.overflow = "";
  }

  prev.addEventListener("click", () => show(idx - 1));
  next.addEventListener("click", () => show(idx + 1));
  thumbs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) show(+b.dataset.i);
  });
  g.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (g.hidden) return;
    if (e.key === "Escape") close();
    if (photos.length > 1 && e.key === "ArrowLeft") show(idx - 1);
    if (photos.length > 1 && e.key === "ArrowRight") show(idx + 1);
  });
})();
