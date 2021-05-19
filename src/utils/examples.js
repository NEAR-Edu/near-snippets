import marked from "marked";

export const fetchExplainer = async(example) => {
  if(!example.explainer) return '';

  const res = await fetch(example.explainer);
  const markdown = await res.text();

  return marked(markdown);
}