import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { getWallet } from "../services/near";

export const useWallet = () => {
  const wallet = ref();

  onMounted(async () => {
    wallet.value = await getWallet();
  });

  return wallet;
};

export const useNearAuth = () => {
  const accountId = ref();
  const wallet = useWallet();

  onMounted(() => {
    if (wallet.value?.isSignedIn())
      accountId.value = wallet.value.getAccountId();
  });

  watch(wallet, () => {
    accountId.value = wallet.value.getAccountId();
  });

  return {
    accountId,
  };
};
