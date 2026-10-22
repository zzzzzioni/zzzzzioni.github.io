// =============================================================
// 여행 데이터: 다녀온 곳마다 객체를 하나씩 추가하면 지도에 핀이 생깁니다.
//
//  country : 나라 이름 (방문 국가 수는 이 값 기준으로 셉니다)
//  city    : 도시 이름 (선택)
//  lat/lng : 위도/경도. 구글 지도에서 장소 우클릭하면 복사할 수 있어요.
//  date    : 방문 시기 (자유 형식)
//  note    : 한 줄 메모 (선택)
//  photos  : images/travel/ 폴더에 사진을 넣고 경로를 적습니다.
//            "경로" 만 써도 되고, { src: "경로", caption: "설명" } 형태도 됩니다.
//
// 같은 나라의 여러 도시를 따로 찍고 싶으면 객체를 도시별로 나누면 됩니다.
// =============================================================

window.TRAVELS = [
  {
    country: "Japan",
    city: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    date: "2024.01",
    note: "첫 해외 학회 겸 여행",
    photos: [
      // { src: "images/travel/tokyo-1.jpg", caption: "시부야 야경" },
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
