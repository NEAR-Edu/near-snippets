<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Language
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Difficulty (NEAR : Language)
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="example in examples" :key="example._id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <router-link :to="`/examples/${example._id}`">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="images[example.sdk.language]"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ example.sdk.version }}
                        </div>
                      </div>
                    </div>
                  </router-link>
                </td>
                <td class="px-6 py-4 text-left whitespace-nowrap">
                  <router-link :to="`/examples/${example._id}`">
                    <div class="text-sm text-gray-900">
                      {{ example.title }} ({{ example.repo }})
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ example.code.length }}
                    </div>
                  </router-link>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <router-link :to="`/examples/${example._id}`">
                    {{ example.difficulty.near }} :
                    {{ example.difficulty.language }} out of
                    {{ example.difficulty.max }}
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useExamples } from "@/composables/examples";

import rust from "@/assets/rust.png";
import assemblyscript from "@/assets/assemblyscript.png";

export default {
  name: "Examples",
  props: ["topic"],
  data: () => ({
    images: {
      rust,
      assemblyscript,
    },
  }),
  setup(props) {
    const { topic } = toRefs(props);
    const examples = useExamples(topic);

    return { examples };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
