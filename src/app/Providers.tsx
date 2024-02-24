import { type ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/shared/config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/config/queryClient";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Theme appearance="dark" accentColor="lime">
          {children}
        </Theme>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export { Providers };
