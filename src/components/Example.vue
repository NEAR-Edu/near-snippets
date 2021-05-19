<template>
  <section class="w-full">
    <h1 class="text-center text-4xl m-6">
      {{ example.title }}
      <router-link v-for="topic in example.topics" v-bind:key="topic" :to="`/topics/${topic}`" class="rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold">{{ topic }}</router-link>
      <span v-for="tag in example.tags" v-bind:key="tag" class="rounded-min text-white bg-green-500 px-2 py-1 text-xs font-bold">{{ tag }}</span>
    </h1>
    <article class="explainer" v-html="example.explainer"></article>
    <code-embed v-for="code in example.code" v-bind:key="code.link" :url="code.link" />
  </section>
</template>

<script>
import { findExampleById } from "@/services/examples";
import CodeEmbed from '@/components/CodeEmbed.vue';

export default {
  name: "Example",
  components: {
    CodeEmbed
  },
  props: ["id"],
  async setup(props) {
    const example = await findExampleById(props.id);
    return { example };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.explainer {
  font-size: 1.1rem;
  line-height: 1.5rem;
}
.explainer h2 {
  background-color: #282c34;
  color: #abb2bf;
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
}

.explainer table {
  margin: 1rem;
}

.explainer table th, .explainer table td {
  padding: 0.4rem
}
</style>
