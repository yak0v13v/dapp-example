import { SendUsdt } from "@/features/send-usdt";
import { useReadUsdtContract } from "@/shared/lib/hooks/use-read-usdt";
import { AssetCard } from "@/shared/ui/asset-card";

type Props = {
  chainId: number;
  accountAddress: `0x${string}`;
};

const UsdtBalance = ({ chainId, accountAddress }: Props) => {
  const { symbol, value } = useReadUsdtContract({
    chainId,
    accountAddress,
  });

  if (!value) {
    return null;
  }

  return (
    <AssetCard symbol={symbol} value={value}>
      <SendUsdt />
    </AssetCard>
  );
};

export { UsdtBalance };
