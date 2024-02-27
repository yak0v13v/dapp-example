import { Blockquote, Container } from "@radix-ui/themes";
import { UserCard } from "./user-card";
import { AssetCard } from "@/shared/ui/asset-card";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
import { UsdtBalance } from "./usdt-balance";
import { isUsdtSupported } from "@/shared/lib/usdt";
import { SendNative } from "@/features/send-native";
import { sepolia } from "viem/chains";

const Wallet = () => {
  const { address, chainId } = useAccount();
  const { data: mainBalance } = useBalance({ address });

  return (
    <Container size="2">
      <UserCard />
      {mainBalance && (
        <AssetCard symbol={mainBalance.symbol} value={formatEther(mainBalance.value)}>
          <SendNative symbol={mainBalance.symbol} />
        </AssetCard>
      )}
      {address && chainId && isUsdtSupported(chainId) && (
        <UsdtBalance accountAddress={address} chainId={chainId} />
      )}
      {chainId === sepolia.id && (
        <Blockquote mt="4" color="blue">
          Use{" "}
          <a
            href="https://www.okx.com/ru/x1/faucet/sepoliafaucet"
            target="_blank"
            rel="noopener noreferrer"
          >
            OKX faucet to get USDT
          </a>
        </Blockquote>
      )}
    </Container>
  );
};

export { Wallet };
