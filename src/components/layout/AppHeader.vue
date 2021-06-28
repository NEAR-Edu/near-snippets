<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
        "
      >
        <div class="flex items-center">
          <a href="/">
            <span class="sr-only">NEAR Snippets</span>
            <img
              class="h-20 w-auto"
              src="@/assets/near_logo_stack_wht_sq.png"
            />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              active-class="text-xl font-medium bg-indigo-700 text-white px-5 py-3 rounded-lg"
              class="
                lg:text-2xl
                font-medium
                text-white
                hover:bg-indigo-500 hover:bg-opacity-75
                px-5
                py-3
                rounded-lg
              "
              >{{ link.name }}</router-link
            >
          </div>
        </div>
        <span class="text-4xl font-extrabold text-white">NEAR Snippets</span>
        <div class="ml-10 space-x-4">
          <a
            @click="handleAuth"
            class="
              inline-block
              bg-indigo-500
              hover:bg-yellow-300
              py-2
              px-4
              border border-transparent
              rounded-md
              text-sm
              lg:text-xl
              font-medium
              text-white
              hover:text-gray-600
              cursor-pointer
            "
          >
            {{ accountId || "Login with NEAR Wallet" }}
          </a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          active-class="text-lg font-medium bg-indigo-700 text-white px-3 py-2 rounded-lg"
          class="text-lg font-medium text-white hover:text-indigo-50 px-3 py-2"
          >{{ link.name }}</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import { useNearAuth, useWallet } from "../../composables/near";

const navigation = [
  { name: "Explore", href: "/topics" },
  { name: "Search", href: "/search" },
];

export default {
  methods: {
    async handleAuth() {
      if (this.wallet.isSignedIn()) {
        this.wallet.signOut();
        window.location.reload();
      } else {
        this.wallet.requestSignIn({
          contractId: "rnm.testnet",
        });
      }
    },
  },
  setup() {
    const wallet = useWallet();
    const { accountId } = useNearAuth();

    return {
      wallet,
      accountId,
      navigation,
    };
  },
};
</script>
