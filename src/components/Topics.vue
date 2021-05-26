<template>
  <h1 class="sr-only">Explore NEAR Examples</h1>
  <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-4 lg:gap-8">
    <!-- Left column -->
    <div class="grid grid-cols-1 gap-4">
      <nav class="flex flex-col">
        <ul  class="p-2 space-y-2 flex-1" style="scrollbar-width: thin">
          <li v-for="topic in topics" v-bind:key="topic._id">
            <router-link :to="`/topics/${topic.name}`" class="flex justify-between lg:justify-end lg:space-x-2 items-center text-gray-600 p-2 bg-gray-200 rounded-lg">
              <span class="text-gray-900 mr-2">{{ topic.name }}</span>
              <span class="rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold">
                {{ topic.exampleCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Right column -->
    <div class="grid grid-cols-1 gap-4 lg:col-span-3">
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </div>
</template>


<script>
import { useTopics } from "@/composables/topics";

export default {
  name: "Topics",
  props: ["topic"],
  setup() {
    const topics = useTopics();

    return { topics };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
