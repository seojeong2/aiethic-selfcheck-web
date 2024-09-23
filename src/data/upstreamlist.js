const upstreamlist = [
  {
    id: 1,
    question:
      "For the data used in building the model, is the data size disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 2,
    question:
      "For all data used in building the model, are the data sources disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 3,
    question:
      "For all data used in building the model, is there some characterization of the people who created the data?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 4,
    question:
      "Are the selection protocols for including and excluding data sources disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 5,
    question:
      "For all data sources, are the curation protocols for those data sources disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 6,
    question:
      "Are any steps the developer takes to augment its data sources disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 7,
    question:
      "If data is filtered to remove harmful content, is there a description of the associated filter?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 8,
    question:
      "For all data used in building the model, is the associated copyright status disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 9,
    question:
      "For all data used in building the model, is the associated license status disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 10,
    question:
      "For all data used in building the model, is the inclusion or exclustion of personal information in that data disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 11,
    question:
      "Are the phases of data pipeline where human labor is involved disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 12,
    question:
      "Is the organization that directly employs the people involved in data labor disclosed for each phase of the data pipepline?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },

  {
    id: 13,
    question:
      "Is geographic information regarding the people invovled in data labor disaclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 14,
    question: "Are the wages for people who perform data labor disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 15,
    question:
      "Are the instructions given to people who perform data labor disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 16,
    question:
      "Are the labor protections for people who perform data labor disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 17,
    question:
      "Are the third parties who were or are involved in the development of the model disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 18,
    question:
      "Are external entities provided with queryable access to the data used to build the model?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 19,
    question:
      "Are external entities provided with direct access to the data used to build the model?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 20,
    question: "Is the compute required for building the model disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 21,
    question: "모델 구축 기간이 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 22,
    question:
      "모델을 구축하는데 필요한 기본 하드웨어의 양과 유형이 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 23,
    question: "모델 구축에 사용된 하드웨어의 소유자가 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 24,
    question: "모델 구축에 소비된 에너지량이 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 25,
    question: "모델 구축시 배출되는 탄소의 양이 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 26,
    question:
      "탄소배출 외에 모델 구축으로 인한 더 광범위한 환경 영향이 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 27,
    question: "모델 개발 프로세스의 모든 단계가 공개되나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 28,
    question:
      "설명된 모든 단계에, 관련 학습 목표에 대한 명확한 설명이 있거나 모델 업데이트의 성격에 대한 명확한 특성이 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 29,
    question: "모델 개발에 사용되는 핵심 프레임워크가 공개되어 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 30,
    question:
      "데이터, 컴퓨팅 및 코드 외에 공개된 모델을 구축하기 위해 필요한 것이 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 31,
    question:
      "공개된 데이터에서 PII(개인식별정보)의 존재를 완화하기 위해 개발자가 취하는 조치가 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 32,
    question:
      "공개된 데이터에서 저작권 정보의 존재를 완화하기 위해 개발자가 취하는 조치가 있나요?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
];
export default upstreamlist;
