import { ConnectWallet } from "@/features/connect-wallet";
import { SUPPORTED_CHAINS_IDS } from "@/shared/config/wagmi";
import { Unsupported } from "@/widgets/unsupported";
import { Wallet } from "@/widgets/wallet";
import { useAccount } from "wagmi";

const Home = () => {
  const { isConnected, chainId } = useAccount();

  if (isConnected && !SUPPORTED_CHAINS_IDS.has(chainId)) {
    return <Unsupported />;
  }

  if (isConnected) {
    return <Wallet />;
  }

  return <ConnectWallet />;
};

export { Home };
