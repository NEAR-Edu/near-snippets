<template>
  <ul>
    <li v-bind:key="example._id" v-for="example in examples">
      {{ example.title }}
    </li>
  </ul>
</template>

<script>
import useExamples from '@/composables/useExamples';

export default {
  name: 'Examples',
  setup() {
    const examples = useExamples('x');
    return { examples };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
