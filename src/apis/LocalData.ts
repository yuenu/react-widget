export const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among enginers",
  },
  {
    title: "How do you use React?",
    content: "You user React by creating components",
  },
];

export const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Bule",
    value: "blue",
  },
];

export const Langs = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Chinese",
    value: "zh-TW",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

export type Item = {
  title: string,
  content: string
}

export type Lang = {
  label: string
  value: string
}

export type Option = {
  label: string
  value: string
} 