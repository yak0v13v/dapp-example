import { USDT_CONTRACTS_ADDRESSES } from "@/shared/constant/usdt-contracts_addresses";
import { erc20Abi } from "viem";
import { useAccount, useChainId, useWriteContract } from "wagmi";

type Params = {
  addressTo: `0x${string}`;
  amount: bigint;
};

const useSendUSDT = () => {
  const { writeContractAsync } = useWriteContract();
  const chainId = useChainId();
  const { address: accountAddress } = useAccount();

  const send = ({ addressTo, amount }: Params) =>
    writeContractAsync({
      chainId: chainId,
      address: USDT_CONTRACTS_ADDRESSES[chainId],
      abi: erc20Abi,
      functionName: "transfer",
      args: [addressTo, amount],
      account: accountAddress,
    });

  return {
    send,
  };
};

export { useSendUSDT };
