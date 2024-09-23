const modellist = [
  {
    id: 100,
    question: "Are the input modalities for the model dislosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 101,
    question: "Are the output modalities for the model disclosed?",
    type: "Model",
  },
  {
    id: 102,
    question: "Are all components of the model disclosed",
    type: "Model",
  },
  {
    id: 103,
    question:
      "For all components of the model, is the associated model size disclosed?",
    type: "Model",
  },
  {
    id: 104,
    question: "Is the model architecture disclosed?",
    type: "Model",
  },
  {
    id: 105,
    question:
      "모델 카드와 같은 중앙 집중식 아티팩트에 모델에 대한 주요 정보가 포함되어 있나요?",
    type: "Model",
  },
  {
    id: 106,
    question:
      "외부 엔터티에게 모델 엑세스 권한을 부여하는 프로토콜이 공개되어 있나요?",
    type: "Model",
  },
  {
    id: 107,
    question: "블랙박스 모델 접근이 외부 엔터티에도 제공되나요?",
    type: "Model",
  },
  {
    id: 108,
    question: "외부 엔터티에 대해서도 전체 접근이 가능하도록 제공하나요?",
    type: "Model",
  },
  {
    id: 109,
    question: "해당 데이터에 포함된 개인정보가 공개되거나 제외됩니까?",
    type: "Model",
  },
  {
    id: 110,
    question: "인간 노동이 관련된 파이프라인의 단계가 공개됩니까?",
    type: "Model",
  },
  {
    id: 111,
    question:
      "데이터 노동에 참여하는 사람들을 직접 고용하는 조직이 공개되나요?",
    type: "Model",
  },

  {
    id: 112,
    question: "데이터 작업 관련 사람들의 지리적 정보가 공개됩니까?",
    type: "Model",
  },
  {
    id: 113,
    question: "모델에 대한 충분한 설명서가 있나요?",
    type: "Model",
  },
  {
    id: 114,
    question: "기능 시연에 대한 정의가 되어 있나요?",
    type: "Model",
  },
  {
    id: 115,
    question: "모델 평가가 엄격하게 진행되나요?",
    type: "Model",
  },
  {
    id: 116,
    question: "해당 모델에 대해서 외부주체에 의한 성능 재현이 가능한가요?",
    type: "Model",
  },
  {
    id: 117,
    question: "제 3자에 의해 평가되는 모델인가요?",
    type: "Model",
  },
  {
    id: 118,
    question: "모델의 한계에 대해 공개되어 있나요?",
    type: "Model",
  },
  {
    id: 119,
    question: "모델의 한계가 입증되어 있나요?",
    type: "Model",
  },
  {
    id: 120,
    question: "모델의 한계가 제 3자에 의해 평가되었나요?",
    type: "Model",
  },
  {
    id: 121,
    question: "모델의 위험성이 공개되어 있나요?",
    type: "Model",
  },
  {
    id: 122,
    question: "모델에 대한 위험성 평가가 출시 이전과 출시 이후에 되었나요?",
    type: "Model",
  },
  {
    id: 123,
    question: "비의도적인 유해성이 외부에서 재현 가능 한가요?",
    type: "Model",
  },
  {
    id: 124,
    question: "의도적인 유해성 평가가 가능한가요?",
    type: "Model",
  },
  {
    id: 125,
    question: "제 3자에 의한 위험성 평가가 되었나요?",
    type: "Model",
  },
  {
    id: 126,
    question: "모델에 대한 완화가 공개되었나요?",
    type: "Model",
  },
  {
    id: 127,
    question: "Are the model mitigations demonstrated?",
    type: "Model",
  },
  {
    id: 128,
    question:
      "Are the model mitigations rigorously evaluated with the results of these evaluations reported?",
    type: "Model",
  },
  {
    id: 129,
    question:
      "Are the model mitigation evaluations reproducible by external entities?",
    type: "Model",
  },
  {
    id: 130,
    question: "Can the model mitigations be evaluated byt third parites?",
    type: "Model",
  },
  {
    id: 131,
    question:
      "Is the trustworthiness of the model rigorously evaluated, with the results of these evaluations disclosed?",
    type: "Model",
  },
  {
    id: 132,
    question:
      "Are the trustworthiness eavluations reproducible by external entities?",
    type: "Model",
  },
  {
    id: 133,
    question:
      "Is the time required for model inference disclosed for a clearly-specified?",
    type: "Model",
  },
  {
    id: 134,
    question:
      "Is the compute usage for model inference disclosed for a clearly-specified?",
    type: "Model",
  },
];
export default modellist;
