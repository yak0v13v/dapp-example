import { type ReactNode } from "react";
import { Theme } from "@radix-ui/themes";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Theme appearance="dark" accentColor="lime">
      {children}
    </Theme>
  );
};

export { Providers };
