<template>
  <h1 class="sr-only">Search NEAR Examples</h1>
  <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
    <!-- Left column -->
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">Search Filters</h2>
        <div class="rounded-lg bg-white overflow-hidden shadow">
          <div class="p-6 space-y-8">
            <div id="clear-refinements"></div>
            <div class="ml-1 space-y-8 divide-y divide-gray-200">
              <div>
                <h3 class="text-indigo-600 pt-6 pb-4 text-xl font-extralight">
                  Languages
                </h3>
                <div id="language-list"></div>
              </div>
              <div>
                <h3 class="text-indigo-600 pt-6 pb-4 text-xl font-extralight">
                  Topics
                </h3>
                <div id="topics-list"></div>
              </div>
              <div>
                <h3 class="text-indigo-600 pt-6 pb-4 text-xl font-extralight">
                  Tags
                </h3>
                <div id="tags-list"></div>
              </div>
              <div>
                <h3 class="text-indigo-600 pt-6 pb-4 text-xl font-extralight">
                  SDK Version
                </h3>
                <div id="version-list"></div>
              </div>
            </div>
          </div>
        </div>
        <img class="mx-auto py-6" src="@/assets/search-by-algolia.png" />
      </section>
    </div>
    <!-- Right column -->
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">Section title</h2>
        <div class="rounded-lg bg-white overflow-hidden shadow">
          <div class="p-6">
            <div class="w-full" id="searchbox"></div>
            <ul class="divide-y divide-gray-200" id="hits"></ul>
            <div class="w-full pt-10 pb-5" id="pagination"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { onMounted } from "vue";
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  clearRefinements,
  refinementList,
  pagination,
} from "instantsearch.js/es/widgets";
import "instantsearch.css/themes/satellite.css";

import { BookOpenIcon, CogIcon } from "@heroicons/vue/solid";

export default {
  components: {
    BookOpenIcon,
    CogIcon,
  },
  setup() {
    onMounted(() => {
      const searchClient = algoliasearch(
        "81IVK7LVY2",
        "a344f8d44b676b8362e8de6c40371d17"
      );

      const search = instantsearch({
        indexName: "dev_examples",
        searchClient,
      });

      search.addWidgets([
        searchBox({
          container: "#searchbox",
        }),
        clearRefinements({
          container: "#clear-refinements",
          templates: {
            resetLabel: "Clear Filters",
          },
        }),
        refinementList({
          container: "#language-list",
          attribute: "sdk.language",
          cssClasses: {
            labelText: "uppercase",
          },
        }),
        refinementList({
          container: "#topics-list",
          attribute: "topics",
        }),
        refinementList({
          container: "#tags-list",
          attribute: "tags",
          cssClasses: {
            labelText: "uppercase",
          },
        }),
        refinementList({
          container: "#version-list",
          attribute: "sdk.version",
        }),
        hits({
          container: "#hits",
          transformItems(items) {
            return items.map((item) => ({
              ...item,
              language: {
                color: colorizeDifficulty(item.difficulty.language),
                level: verbalizeDifficulty(item.difficulty.language),
              },
              near: {
                color: colorizeDifficulty(item.difficulty.near),
                level: verbalizeDifficulty(item.difficulty.near),
              },
            }));
          },
          templates: {
            item: `
              <li class="w-full hover:bg-gray-200">
                <a href="/examples/{{ _id.$oid }}">
                  <div class="sm:px-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-lg font-medium text-gray-700 truncate">
                          {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
                        </p>
                        <p class="text-xs font-light text-gray-500">
                          {{#helpers.highlight}}{ "attribute": "repo" }{{/helpers.highlight}}
                        </p>
                      </div>
                      <div class="ml-2 flex-shrink-0 flex">
                        <p class="px-2 inline-flex text-xs leading-5 rounded-full {{ language.color }}">
                          {{ language.level }} {{ sdk.language }}
                        </p>
                        <p class="px-3 ml-2 inline-flex text-xs leading-5 rounded-full {{ near.color }}">
                          {{ near.level }} NEAR
                        </p>
                      </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                      <div class="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        {{#helpers.highlight}}{ "attribute": "topics.0" }{{/helpers.highlight}}
                        </p>
                      </div>
                      <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium">
                          {{ sdk.version }}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            `,
          },
        }),
        pagination({
          container: "#pagination",
        }),
      ]);

      search.start();
    });
  },
};

// TODO: where should these helper functions live?  why not here?
// note they're slightly different from Examples.vue bc this is all rendered client-side by Algolia
function verbalizeDifficulty(level) {
  const difficulty = ["simple", "moderate", "difficult"];
  return difficulty[level - 1];
}

function colorizeDifficulty(level) {
  return [
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
  ][level - 1];
}
</script>
