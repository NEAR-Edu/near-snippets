<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md mt-2 mb-5">
    <ul class="divide-y divide-gray-200">
      <li v-for="example in examples" :key="example._id">
        <RouterLink
          :to="`/examples/${example._id}`"
          class="block hover:bg-gray-50"
        >
          <div class="px-4 py-4 sm:px-6">
            <img
              :src="images[example.sdk.language]"
              class="h-10 w-10 mr-4 float-left mt-2"
            />
            <div class="flex items-center justify-between">
              <div class="flex-1 min-w-0">
                {{ example.title }}
              </div>
              <div class="ml-2 flex-shrink-0 flex">
                <span
                  :class="colorizeDifficulty('language', example)"
                  class="px-3 inline-flex text-xs leading-5 rounded-full"
                >
                  {{ verbalizeDifficulty(example.difficulty.language) }}
                  {{ example.sdk.language }}
                </span>
                <span
                  :class="colorizeDifficulty('near', example)"
                  class="px-3 text-xs ml-2 leading-5 rounded-full"
                >
                  {{ verbalizeDifficulty(example.difficulty.near) }} NEAR
                </span>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CodeIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-400"
                    aria-hidden="true"
                  />
                  @ {{ example.repo }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                {{ readableVersion(example.sdk.version) }}
              </div>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { CodeIcon } from "@heroicons/vue/solid";

import { toRefs } from "vue";
import { useExamples } from "@/composables/examples";

import rust from "@/assets/rust.png";
import assemblyscript from "@/assets/assemblyscript.png";

export default {
  name: "Examples",
  props: ["topic"],
  components: {
    CodeIcon,
  },
  data: () => ({
    images: {
      rust,
      assemblyscript,
    },
  }),
  setup(props) {
    const { topic } = toRefs(props);
    const examples = useExamples(topic);

    return {
      examples,
      colorizeDifficulty,
      verbalizeDifficulty,
      readableVersion,
    };
  },
};

// TODO: where should these helper functions live?  why not here?
function verbalizeDifficulty(level) {
  const difficulty = ["simple", "moderate", "difficult"];
  return difficulty[level - 1];
}

function colorizeDifficulty(attribute, example) {
  const difficulty = example.difficulty[attribute];
  return [
    { "bg-green-100": true, "text-green-800": true },
    { "bg-yellow-100": true, "text-yellow-800": true },
    { "bg-red-100": true, "text-red-800": true },
  ][difficulty - 1];
}

function readableVersion(version) {
  return version.split("@").join(" @ ");
}
</script>
