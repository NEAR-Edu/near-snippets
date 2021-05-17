<template>
  <suspense>
    <template #default>
      <div class="flex">
        <topics />
        <router-view />
      </div>
    </template>
    <template #fallback>
      <h1>Loading......</h1>
    </template>
  </suspense>
</template>

<script>
import Topics from "@/components/Topics";

export default {
  name: "App",
  components: {
    topics: Topics,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
