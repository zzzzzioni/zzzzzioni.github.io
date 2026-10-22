// =============================================================
// Travels: add one object per place visited and a pin appears on the map.
//
//  country : country name (the visited-country count is based on this)
//  city    : city name (optional)
//  lat/lng : latitude/longitude. Right-click a place in Google Maps to copy them.
//  date    : when you visited (any format)
//  note    : one-line note (optional)
//  photos  : put photos in images/travel/ and list their paths.
//            Use a plain "path" or { src: "path", caption: "text" }.
//
// To pin several cities in the same country, add one object per city.
// =============================================================

window.TRAVELS = [
  {
    country: "Japan",
    city: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    date: "2024.01",
    note: "First overseas conference trip",
    photos: [
      // { src: "images/travel/tokyo-1.jpg", caption: "Shibuya at night" },
      // "images/travel/tokyo-2.jpg",
    ],
  },
  {
    country: "France",
    city: "Paris",
    lat: 48.8566,
    lng: 2.3522,
    date: "2023.07",
    note: "",
    photos: [],
  },
  {
    country: "United States",
    city: "San Francisco",
    lat: 37.7749,
    lng: -122.4194,
    date: "2025.06",
    note: "",
    photos: [],
  },
  {
    country: "Vietnam",
    city: "Da Nang",
    lat: 16.0544,
    lng: 108.2022,
    date: "2022.12",
    note: "",
    photos: [],
  },
];
