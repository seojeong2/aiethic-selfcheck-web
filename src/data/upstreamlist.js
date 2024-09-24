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
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 15,
    question:
      "Are the instructions given to people who perform data labor disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 16,
    question:
      "Are the labor protections for people who perform data labor disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
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
    question: "Is the amount of time required to build the model disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 22,
    question:
      "For the primary hardware used to build the model, is the amount and type of hardward disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 23,
    question:
      "For the primary hardware used in building the model, is the owner of the hardware disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 24,
    question:
      "Is the amount of energy expended in building the model disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 25,
    question:
      "Is the amount of carbon eitted (associated with the energy used) in building the model disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 26,
    question:
      "Are any broader environmental impacts from building the model besides cardbon emissions disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 27,
    question: "Are all stages in the model development process disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 28,
    question:
      "For all stages that are described, is there a clear description of the associated learning objectivies or a clear characterization of the nature of this update to the model?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 29,
    question: "Are the core frameworks used for model development disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "no" },
    ],
  },
  {
    id: 30,
    question:
      "Are any dependencies required to build the model disclosed besides data, compute, and code?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 31,
    question:
      "Are any steps the developer takes to mitigate the presence of PII in the data disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "yes" },
      { subject: "믿음", response: "yes" },
    ],
  },
  {
    id: 32,
    question:
      "Are any steps the developer takes to mitigate the presence of copyrighted information in the data disclosed?",
    type: "Upstream",
    response: [
      { subject: "AICC", response: "no" },
      { subject: "믿음", response: "no" },
    ],
  },
];
export default upstreamlist;
