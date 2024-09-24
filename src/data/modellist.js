const modellist = [
  {
    id: 100,
    question: "Are the input modalities for the model dislosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 101,
    question: "Are the output modalities for the model disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 102,
    question: "Are all components of the model disclosed",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 103,
    question:
      "For all components of the model, is the associated model size disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 104,
    question: "Is the model architecture disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 105,
    question:
      "Is key information about the model included in a centralized artifact such as a model card?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 106,
    question:
      "Is a protocol for granting external entities acceess to the model disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 107,
    question: "Is black box model access provided to external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 108,
    question: "Is full model access provided to external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },

  {
    id: 109,
    question: "Are the model's capabilities described?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 110,
    question: "Are the model's capabilities demonstrated?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 111,
    question:
      "Are the model's capabilities rigorously evaluated with the results of these evaluations reported prior to or concurrent with the initial release of the model?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 112,
    question:
      "Are the evalutaions of the model's capabilities reproducible by external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 113,
    question: "Are the model's capabilities evaluated by third parties?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 114,
    question: "Are the model's limitations disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 115,
    question: "Are the model's limitations demonstrated?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 116,
    question: "Can the model's limitations be evaluated by third parties?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 117,
    question: "Are the model's risks disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 118,
    question: "Are the model's risks demonstrated?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 119,
    question:
      "Are the model's risks related to unintentional harm rigorously evaluated, with the results of these evaluations reported prior to or concurrent with the initial release of the model?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 120,
    question:
      "Are the evaluations of the model's risks related to unintentional harm reproducible by external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 121,
    question:
      "Are the model's risks related tot intentional harm rigorously evaluted, with the results of these evaluations reported prior to or concurrent with the initial release of the model?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 122,
    question:
      "Are the evaluations of the model's risks related to intentional harm reproducible by external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 123,
    question: "Are the model's risks evaluated by third parties?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 124,
    question: "Are the model mitigations disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 125,
    question: "Are the model mitigations demonstrated?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 126,
    question:
      "Are the model mitigations rigorously evaluated with the results of these evaluations reported?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 127,
    question:
      "Are the model mitigation evaluations reproducible by external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 128,
    question: "Can the model mitigations be evaluated by third parites?",
    type: "Model",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 129,
    question:
      "Is the trustworthiness of the model rigorously evaluated, with the results of these evaluations disclosed?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 130,
    question:
      "Are the trustworthiness evaluations reproducible by external entities?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 131,
    question:
      "Is the time required for model inference disclosed for a clearly-specified?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 132,
    question:
      "Is the compute usage for model inference disclosed for a clearly-specified?",
    type: "Model",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
];
export default modellist;
