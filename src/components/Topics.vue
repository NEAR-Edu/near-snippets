<template>
  <!-- This is an example component -->
  <div class="min-h-screen bg-white">
    <nav class="h-screen flex flex-col w-64 bg-gray-50">
      <div class="p-4">
        <img
          src="https://learnnear.club/wp-content/uploads/2021/02/cropped-LeranNEAR-1-200x49.png"
        />
      </div>
      <ul
        class="p-2 space-y-2 flex-1 overflow-auto"
        style="scrollbar-width: thin"
      >
        <li v-for="topic in topics" v-bind:key="topic._id">
          <router-link
            :to="`/topics/${topic.name}`"
            class="
              flex
              justify-end
              space-x-2
              items-center
              text-gray-600
              p-2
              bg-gray-200
              rounded-lg
            "
          >
            <span class="text-gray-900">{{ topic.name }}</span>
            <span class="rounded-min text-white bg-indigo-500 px-2 py-1 text-xs font-bold">{{ topic.exampleCount }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
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
