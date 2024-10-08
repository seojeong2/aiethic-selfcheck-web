const korchecklist = [
  {
    id: 1,
    type: "인권보장",
    question:
      "인공지능시스템이 인간의 생명과 안전에 관한 권리를 침해하지 않도록 개발/운영하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 2,
    type: "인권보장",
    question:
      "인공지능시스템이 모든 인간을 평등한 존재로 대우함으로써 성별, 연령, 지역, 종교, 인종, 민족, 경제적 수준, 성적 지향, 정치적 성향, 장애 등을 이유로 차별하지 않도록 개발/운영하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 3,
    type: "인권보장",
    question:
      "인공지능시스템이 사용자의 자율적 행동이나 결정을 방해하지 않도록 개발/운영하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 4,
    type: "인권보장",
    question:
      "인공지능시스템이 사용자의 언론/출판/집회/결사 등 표현의 자유를 침해 하지 않도록 개발/운영하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 5,
    type: "인권보장",
    question:
      "인공지능시스템이 사용자에게 불쾌감을 주지 않는 등 인간을 인격적으로 대우하도록 개발/운영하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 6,
    type: "프라이버시 보호",
    question:
      "인공지능시스템의 개발/운영 과정에서 개인정보를 수집/활용하는 경우, 개인정보 보호법 등 관련 법령 준수에 필요한 개인정보 보호 위원회의 [인공지능(AI) 개인정보보호 자율점검표]에 따른 점검을 수행하였는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 7,
    type: "프라이버시 보호",
    question:
      "인공지능시스템의 개발/운영 과정에서 사생활의 비밀과 자유를 침해할 우려에 대해 검토하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 8,
    type: "다양성 존중",
    question:
      "인공지능시스템 활용에 사회적 약자의 접근 가능성을 고려하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 9,
    type: "다양성 존중",
    question:
      "인공지능시스템 개발/운영 과정에서 데이터의 성별, 인종, 민족, 국가 등 편향 가능성을 정기적으로 내부 전담부서 혹은 외부 전문가나 기관을 통해 객관적으로 판단하고 이를 최소화하기 위해 노력하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 10,
    type: "다양성 존중",
    question:
      "인공지능시스템의 개발/운영 단계에서 다양한 의견을 청취,검토,평가,반영할 수 있는 일련의 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 11,
    type: "다양성 존중",
    question:
      "인공지능시스템을 사용할 때 편향이나 차별, 소외 등이 발견되거나 발생한 경우, 개발자, 운영자, 사용자 모두 내부 또는 인공지능시스템 개발 조직과 운영업체에 알리고, 이를 내부적으로 검토, 평가, 반영할 수 있는 일련의 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 12,
    type: "다양성 존중",
    question:
      "인공지능시스템 개발자를 대상으로 인공지능시스템에서 발생할 수 있는 편향성의 인지 또는 분석 능력 향상을 위한 교육훈련의 기회를 제공하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 13,
    type: "침해금지",
    question:
      "인공지능시스템이 인간의 생명, 신체, 정신 또는 재산에 피해를 발생시킬 우려가 있는지를 사전에 검토하고 이를 예방하기 위한 조치를 취하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 14,
    type: "침해금지",
    question:
      "인공지능시스템의 목적 외 사용으로 인해 인간의 생명, 신체, 정신 또는 재산에 피해를 발생시킬 개연성이 확인된 경우, 사용자에게 고지하는 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 15,
    type: "침해금지",
    question:
      "인공지능시스템의 활용 과정에서 예상하지 못한 피해가 발생할 때, 사용자가 해당 피해를 신고하고 의견을 제시할 수 있는 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 16,
    type: "침해금지",
    question:
      "인공지능시스템의 활용 과정에서 예상하지 못한 중대한 피해가 발생할 때, 피해의 확산을 방지하기 위해 이미 상용화된 시스템의 사용중단 또는 리콜, 정부 소관기관에 보고, 사용자에게 고지 등의 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 17,
    type: "공공성",
    question:
      "인공지능시스템이 사회경제적으로 미치는 긍정적/부정적 영향에 대하여 내부적으로 검토하거나 외부 전문가의 의견을 청취하였는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 18,
    type: "공공성",
    question:
      "인공지능시스템 사용으로 폭력성, 음란성, 사행성, 중독성이 조장되는 등 부작용이 발생할 개연성이 있는지를 고려하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 19,
    type: "연대성",
    question:
      "인공지능시스템 개발/운영 목적의 범위 내에서 다양한 배경의 개발자나 사용자가 의사소통이나 상호작용할 수 있는 기회를 제공하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 20,
    type: "연대성",
    question:
      "인공지능시스템의 사용이 지역,성별,세대,계층 간 갈등을 유발하는 등 사회통합을 저해할 개연성이 있는지를 고려하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 21,
    type: "연대성",
    question:
      "탄소중립을 위한 국제사회의 노력에 협력하기 위해 인공지능 시스템의 개발/운영 과정에서 탄소배출이 적은 방법을 사용하도록 고려하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 22,
    type: "데이터 관리",
    question:
      "인공지능시스템의 개발/운영에 활용되는 데이터의 수집과 처리 업무의 감독을 위한 절차를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 23,
    type: "데이터 관리",
    question:
      "인공지능시스템의 개발에 활용되는 데이터의 출처/처리의 주요 과정을 기록하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 24,
    type: "데이터 관리",
    question:
      "인공지능시스템의 개발/운영에 활용되는 데이터의 분석과 관리 업무에 대한 기술적/물리적 통제방안을 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 25,
    type: "책임성",
    question:
      "인공지능시스템을 개발/운영하는 과정에서 윤리기준 준수를 보장하기 위해 담당자 지정 등 적절한 방안을 마련하였는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 26,
    type: "책임성",
    question:
      "인공지능시스템 개발자 또는 개발부서는 다음의 역량을 향상하기 위해 노력하고 있는가? -인공지능 시스템이 활용되는 분야의 적합성을 판단하고 위험성을 인지하는 능력",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 27,
    type: "책임성",
    question:
      "인공지능 시스템의 개발/운영에서 발생하는 손해 또는 손실의 책임 소재를 명확히 하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 28,
    type: "책임성",
    question:
      "인공지능 시스템의 사용으로 발생한 피해에 대해여 합리적인 배상과 보상을 제공하기 위해 준비 방안(배상책임보험의 가입이나 유보금을 적립하는 방안 등)을 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 29,
    type: "투명성·안정성",
    question:
      "인공지능시스템의 비정상 동작이나 예기치 못한 오류에 대한 안전조치 기능과 안전조치 기능의 한계에 대해 이해관계자와 사용자에게 충분한 정보를 제공하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 30,
    type: "투명성·안정성",
    question:
      "인공지능시스템과 인간의 상호작용에서 발생할 수 있는 위험(인공지능에 의한 감시, 중독, 과의존 등)을 사전에 평가하고, 이를 완화하기 위해 노력하고 있는가?",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 31,
    type: "투명성·안정성",
    question:
      "인공지능시스템의 결과에 대한 안정성을 지속적으로 평가하기 위한 절차 (정기적으로 내부부서 또는 외부기관을 통한 전문가 평가, 사용자 피드백 반영 등)를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 32,
    type: "투명성·안정성",
    question:
      "인공지능시스템의 활용한 제품 또는 서비스가 인공지능 알고리즘 기반의 결정을 한다는 사실과 사용자가 인공지능과 상호작용하고 있다는 사실을 사용자에게 고지하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 33,
    type: "투명성·안정성",
    question:
      "인공지능시스템을 목적에 맞게 사용하기 위해 이해관계자와 사용자에게 관련 정보 (예: 가이드북, 매뉴얼 등)를 제공하고 있는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 34,
    type: "투명성·안정성",
    question:
      "인공지능시스템의 결과에 대한 안정성을 지속적으로 평가하기 위한 절차 (정기적으로 내부부서 또는 외부기관을 통한 전문가 평가, 사용자 피드백 반영 등)를 마련하였는가?",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
];

export default korchecklist;
