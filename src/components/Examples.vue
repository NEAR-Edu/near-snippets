<template>
  <ul>
    <li v-bind:key="example._id" v-for="example in examples">
      {{ example.title }}
    </li>
  </ul>
</template>

<script>
import Example from '../models/Example';

export default {
  name: 'Examples',
  data: () => ({ examples: [] }),
  async beforeMount() {
    const examples = await Example.find();
    this.examples = examples;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
