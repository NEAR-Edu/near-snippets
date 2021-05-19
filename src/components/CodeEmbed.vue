<template>
  <section class="p-4">
    <pre ref="root" class="rust border"><code>{{ code }}</code></pre>
    <a :href="url" class="link block border p-2 text-center">Full Code</a>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import hljs from 'highlight.js';

export default {
  name: "CodeEmbed",
  props: ["url"],
  async setup(props) {
    const root = ref(null);

    onMounted(() => hljs.highlightElement(root.value));

    const url = new URL(props.url);
    const startLine = Number(url.hash.split('-')[0].slice(2)) - 1;
    const endLine = Number(url.hash.split('-')[1]?.slice(1) || startLine);
    const path = url.pathname.replace('/blob', '');

    const res = await fetch(`https://raw.githubusercontent.com${path}`);
    const text = await res.text();

    const code = text.split('\n').slice(startLine, endLine);
    const indentationLevel = code[0].match(/\s*/)[0].length;
    
    return {
      root,
      code: code.map((c, i) => `${startLine + i + 1}\t${c.replace(new RegExp(`\\s{${indentationLevel}}`), '')}`).join('\n')
    }
  }
}
</script>

<style scoped>
.link {
  background: #282c34;
  color: white;
}
</style>