import "@styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Layout from "src/layout";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { polygon } from "@wagmi/chains";
export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [polygon],
    [
      jsonRpcProvider({
        rpc: (chain: any) => ({
          http: `https://polygon-mainnet.g.alchemy.com/v2/tiuYdkP4DRSPX1otnf6jf7eraBLAgF6s`,
          webSocket: `wss://polygon-mainnet.g.alchemy.com/v2/tiuYdkP4DRSPX1otnf6jf7eraBLAgF6s`,
        }),
      }),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: process.env.NEXT_APP_NAME as string,
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
