import { connect, keyStores, WalletConnection } from "near-api-js";

export const getNear = async () => {
  return connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
};

export const getWallet = async () => {
  return new WalletConnection(await getNear(), "near-snippets");
};
