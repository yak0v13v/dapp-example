import { sepolia, goerli, mainnet } from "viem/chains";
import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

const chains = [sepolia, goerli, mainnet] as const;

export const SUPPORTED_CHAINS_IDS = new Set<number | undefined>(chains.map((chain) => chain.id));

const wagmiConfig = createConfig({
  chains,
  transports: {
    [sepolia.id]: http(),
    [goerli.id]: http(),
    [mainnet.id]: http(),
  },
  connectors: [injected()],
});

export { wagmiConfig };
