<template>
  <h1>{{ example.title }}</h1>
</template>

<script>
import { findExampleById } from "@/services/examples";

export default {
  name: "Example",
  props: ["id"],
  async setup(props) {
    const example = await findExampleById(props.id);
    return { example };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
