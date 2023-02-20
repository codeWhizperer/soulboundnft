import "@styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig, goerli } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Layout from "src/layout";
configureChains;

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [goerli],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! })],
    publicProvider() as any
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
