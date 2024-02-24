import { ConnectWallet } from "@/features/connect-wallet";
import { Wallet } from "@/widgets/wallet";
import { useAccount } from "wagmi";

const Home = () => {
  const { isConnected } = useAccount();

  if (isConnected) {
    return <Wallet />;
  }

  return <ConnectWallet />;
};

export { Home };
