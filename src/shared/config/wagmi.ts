import { sepolia, goerli, mainnet } from "viem/chains";
import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

const wagmiConfig = createConfig({
  chains: [sepolia, goerli, mainnet],
  transports: {
    [sepolia.id]: http(),
    [goerli.id]: http(),
    [mainnet.id]: http(),
  },
  connectors: [injected()],
});

export { wagmiConfig };
