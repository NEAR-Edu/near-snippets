import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight(code, language, cb) {
    if (!language.startsWith("https://github.com")) return code;

    const url = new URL(language);
    const startLine = Number(url.hash.split("-")[0].slice(2)) - 1;
    const endLine = Number(url.hash.split("-")[1]?.slice(1) || startLine);
    const path = url.pathname.replace("/blob", "");

    return fetch(`https://raw.githubusercontent.com${path}`)
      .then((res) => res.text())
      .then((text) => text.split("\n").slice(startLine, endLine))
      .then((rawCode) => {
        const indentationLevel = rawCode[0].match(/\s*/)[0].length;
        const code = rawCode
          .map(
            (c, i) =>
              `${startLine + i + 1}\t${c.replace(
                new RegExp(`\\s{${indentationLevel}}`),
                ""
              )}`
          )
          .join("\n");
        cb(null, hljs.highlight(code, { language: "rust" }).value);
      });
  },
});

marked.use({
  renderer: {
    code(code, language) {
      if (!language.startsWith("https://github.com")) return false;
      return `<section>
        <pre class="hljs"><code>${code}</code></pre>
        <a href="${language}" class="block border p-2 text-center" style="background-color: #282c34; color: #abb2bf">Full Code</a>
      </section>`;
    },
  },
});

export const toHTML = (explainer) => {
  return new Promise((resolve, reject) => {
    marked(explainer, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
