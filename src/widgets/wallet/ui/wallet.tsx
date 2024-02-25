import { Container } from "@radix-ui/themes";
import { UserCard } from "./user-card";
import { AssetCard } from "@/shared/ui/asset-card";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
import { UsdtBalance } from "./usdt-balance";
import { isUsdtSupported } from "@/shared/lib/usdt";

const Wallet = () => {
  const { address, chainId } = useAccount();
  const { data: mainBalance } = useBalance({ address });

  return (
    <Container size="2">
      <UserCard />
      {mainBalance && (
        <AssetCard symbol={mainBalance.symbol} value={formatEther(mainBalance.value)} />
      )}
      {address && chainId && isUsdtSupported(chainId) && (
        <UsdtBalance accountAddress={address} chainId={chainId} />
      )}
    </Container>
  );
};

export { Wallet };
