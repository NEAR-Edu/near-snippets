<template>
  <suspense>
    <template #default>
      <div class="flex">
        <topics />
        <main class="h-screen w-full overflow-scroll">
          <section class="max-w-7xl m-auto">
            <router-view />
          </section>
        </main>
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
  color: #2c3e50;
}
</style>
