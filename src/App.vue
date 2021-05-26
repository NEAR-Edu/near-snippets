<template>
  <AppHeader />
  <div class="bg-gray-100">
    <main>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <RouterView />
      </div>
    </main>
  </div>
  <AppFooter />
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
