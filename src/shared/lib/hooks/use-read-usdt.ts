import { useReadContract } from "wagmi";
import { erc20Abi, formatUnits } from "viem";
import { USDT_CONTRACTS_ADDRESSES } from "../../constant/usdt-contracts_addresses";

type Parameters = {
  chainId: keyof typeof USDT_CONTRACTS_ADDRESSES;
  accountAddress: `0x${string}`;
};

const useReadUsdtContract = ({ chainId, accountAddress }: Parameters) => {
  const { data } = useReadContract({
    address: USDT_CONTRACTS_ADDRESSES[chainId],
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [accountAddress],
  });

  return { symbol: "USDT", value: typeof data === "bigint" ? formatUnits(data, 6) : "" };
};

export { useReadUsdtContract };
