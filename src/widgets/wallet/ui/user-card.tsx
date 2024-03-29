import { Avatar, Button, Card, DropdownMenu, Grid, Text } from "@radix-ui/themes";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import styles from "./user-card.module.css";

const UserCard = () => {
  const { address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { chains, switchChain } = useSwitchChain();

  return (
    <Card>
      <Grid columns="40px 1fr 32px" gap="3" align="center">
        <Avatar size="3" radius="full" fallback="T" />
        <Grid>
          <Text as="div" size="1" weight="bold" className={styles.clamp}>
            {address}
          </Text>
          <Text as="div" size="1" color="gray" className={styles.clamp}>
            {chain?.name}
          </Text>
        </Grid>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content>
            {chains.map((item) => (
              <DropdownMenu.Item
                key={item.id}
                color="blue"
                onClick={() => switchChain({ chainId: item.id })}
                disabled={chain?.id === item.id}
              >
                Switch to {item.name}
              </DropdownMenu.Item>
            ))}

            <DropdownMenu.Separator />

            <DropdownMenu.Item color="red" onClick={() => disconnect()}>
              Disconnect
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Grid>
    </Card>
  );
};

export { UserCard };
