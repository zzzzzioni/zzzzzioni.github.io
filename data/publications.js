// =============================================================
// 논문 데이터: 객체를 하나 추가하면 해당 연도 아래에 자동으로 정렬됩니다.
//
//  year    : 연도 (이 값으로 묶여서 최신 연도부터 표시)
//  title   : 논문 제목
//  authors : 저자 목록. 본인 이름은 ME 와 똑같이 적으면 굵게 표시됩니다.
//            공동 1저자는 이름 뒤에 * 를 붙이세요.
//  venue   : 학회/저널 이름
//  note    : Oral, Spotlight, Under review 등 (선택)
//  links   : { pdf, arxiv, code, project, slides, bibtex } 중 있는 것만 (선택)
// =============================================================

window.ME = "Your Name";

window.PUBLICATIONS = [
  {
    year: 2026,
    title: "Paper Title Goes Here",
    authors: ["Your Name*", "Co Author*", "Advisor Name"],
    venue: "Conference Name (CONF 2026)",
    note: "Under review",
    links: { arxiv: "https://arxiv.org/abs/xxxx.xxxxx", code: "https://github.com/" },
  },
  {
    year: 2026,
    title: "Another Paper Title",
    authors: ["Co Author", "Your Name", "Advisor Name"],
    venue: "Workshop Name @ CONF 2026",
    links: { pdf: "files/paper2.pdf" },
  },
  {
    year: 2025,
    title: "Earlier Paper Title",
    authors: ["Your Name", "Advisor Name"],
    venue: "Journal Name",
    links: { pdf: "files/paper3.pdf" },
  },
];
