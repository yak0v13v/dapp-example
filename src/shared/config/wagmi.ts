import { sepolia } from "viem/chains";
import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

const wagmiConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  connectors: [injected()],
});

export { wagmiConfig };
