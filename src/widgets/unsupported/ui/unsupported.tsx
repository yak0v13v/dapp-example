import { Button, Container, Grid, Heading, Text } from "@radix-ui/themes";
import { sepolia } from "viem/chains";
import { useDisconnect, useSwitchChain } from "wagmi";

const Unsupported = () => {
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  return (
    <Container size="2">
      <Heading>This chain is not currently supported</Heading>
      <Text as="p" mt="4">
        Please use Sepolia
      </Text>
      <Grid columns="1fr 1fr" gap="1" mt="4">
        <Button onClick={() => switchChain({ chainId: sepolia.id })}>Switch to Sepolia</Button>
        <Button onClick={() => disconnect()} color="red">
          Disconnect
        </Button>
      </Grid>
    </Container>
  );
};

export { Unsupported };
