import { USDT_CONTRACTS_ADDRESSES } from "../constant/usdt-contracts_addresses";

export const isUsdtSupported = (chainId?: number) => {
  return typeof chainId === "number" && USDT_CONTRACTS_ADDRESSES[chainId];
};
