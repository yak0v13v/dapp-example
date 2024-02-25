import { goerli, mainnet, sepolia } from "viem/chains";

const USDT_CONTRACTS_ADDRESSES: Record<number, `0x${string}`> = {
  [sepolia.id]: "0x419fe9f14ff3aa22e46ff1d03a73edf3b70a62ed",
  [mainnet.id]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  [goerli.id]: "0x509Ee0d083DdF8AC028f2a56731412edD63223B9",
};

export { USDT_CONTRACTS_ADDRESSES };
