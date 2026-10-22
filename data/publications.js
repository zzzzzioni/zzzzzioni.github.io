// =============================================================
// 논문 데이터: 객체를 하나 추가하면 해당 연도 아래에 자동으로 정렬됩니다.
//
//  year    : 연도 (이 값으로 묶여서 최신 연도부터 표시)
//  title   : 논문 제목
//  authors : 저자 목록. 본인 이름은 ME 와 똑같이 적으면 굵게 표시됩니다.
//            공동 1저자는 이름 뒤에 * 를 붙이세요.
//  venue   : 학회/저널 약칭 (태그로 표시, 예: "NeurIPS")
//  track   : Main, Findings, Workshop 등 (선택, 태그로 표시)
//  oral    : 구두 발표면 true (선택, Oral 태그로 표시)
//  note    : Spotlight, Under review 등 그 밖의 태그 (선택)
//  links   : { pdf, arxiv, code, project, slides, bibtex } 중 있는 것만 (선택)
// =============================================================

window.ME = "Jiwon Jeong";

window.PUBLICATIONS = [
  {
    year: 2026,
    title: "PRISMIC: Reconstructing User Preference via Intent Decomposition and Consolidation",
    authors: ["Donghee Han", "Jiwon Jeong", "Hwanjun Song", "Mun Yong Yi"],
    venue: "NeurIPS",
  },
  {
    year: 2026,
    title: "Selective Answering for Medical VQA via Parallel Independent Claim Verification",
    authors: ["Donghee Han", "Jiwon Jeong", "Mun Yong Yi"],
    venue: "NeurIPS",
  },
  {
    year: 2026,
    title: "Illuminating the Path: Reachability-Aware Supervision Curation for LLM-Based Recommendation",
    authors: ["Donghee Han", "Jiwon Jeong", "Hwanjun Song", "Mun Yong Yi"],
    venue: "EMNLP",
    track: "Main",
  },
  {
    year: 2026,
    title: "No Logs, Only Catalogs: Catalog-to-Supervision Training for Recommendation with LLM-Simulated Preferences",
    authors: ["Donghee Han", "Jiwon Jeong", "Hwanjun Song", "Mun Yong Yi"],
    venue: "CIKM",
    oral: true,
  },
  {
    year: 2026,
    title: "TAG-Rec: Grounding LLM-based Recommendation via Trigger-Anchored GRPO",
    authors: ["Donghee Han", "Jiwon Jeong", "Hwanjun Song", "Mun Yong Yi"],
    venue: "CIKM",
  },
  {
    year: 2026,
    title: "LiteUP4Rec: Efficient User Profiling from LLM-Derived Semantic Supervision",
    authors: ["Donghee Han", "Daeyoung Roh", "Jiwon Jeong", "Mun Yong Yi"],
    venue: "CIKM",
  },
  {
    year: 2026,
    title: "Knowledge World Model: Latent Rollouts for Learning Path Recommendation",
    authors: ["Jongwoo Kim", "Seongyeub Chu", "Jeongwhan Choi", "Jiwon Jeong", "Mun Yong Yi"],
    venue: "CIKM",
  },
  {
    year: 2026,
    title: "DiagMIL: Uncertainty-Gated Coarse-to-Fine Multi-Resolution MIL for WSI Diagnosis",
    authors: ["Jiwon Jeong", "Sungrae Hong", "Donghee Han", "Jisu Shin", "Kyungeun Kim", "Mun Yong Yi"],
    venue: "MICCAI",
  },
  {
    year: 2026,
    title: "RaLMPH: Reliability-aware Learning for Multi-Pathologist Harmonization in Whole-Slide Image Classification",
    authors: ["Sungrae Hong", "Jiwon Jeong", "Soeun Cheon", "Donghee Han", "Sol Lee", "Jisu Shin", "Kyungeun Kim", "Mun Yong Yi"],
    venue: "MICCAI",
  },
  {
    year: 2026,
    title: "One Sequential Recommendation Model Pretrained from Synthetic Priors Predicts Multiple Datasets",
    authors: ["Woosung Kang", "Jiwon Jeong", "Jonghyeok Shin", "Jeongwhan Choi", "Noseong Park"],
    venue: "KDD",
    oral: true,
    links: { arxiv: "https://arxiv.org/abs/2606.15752", pdf: "https://arxiv.org/pdf/2606.15752" },
  },
  {
    year: 2026,
    title: "Every Preference Has Its Strength: Injecting Ordinal Semantics into LLM-Based Recommenders",
    authors: ["Jiwon Jeong", "Donghee Han", "Sungrae Hong", "Woosung Kang", "Mun Yong Yi"],
    venue: "SIGIR",
  },
  {
    year: 2026,
    title: "Every Error has Its Magnitude: Asymmetric Mistake Severity Training for Multiclass Multiple Instance Learning",
    authors: ["Sungrae Hong", "Jiwon Jeong", "Jisu Shin", "Donghee Han", "Sol Lee", "Kyungeun Kim", "Mun Yi"],
    venue: "CVPR",
  },
  {
    year: 2026,
    title: "Diagnose Like A REAL Pathologist: An Uncertainty-Focused Approach for Trustworthy Multi-Resolution Multiple Instance Learning",
    authors: ["Sungrae Hong", "Sol Lee", "Jisu Shin", "Jiwon Jeong", "Mun Yi"],
    venue: "WACV",
  },
];
