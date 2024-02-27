import { Blockquote, Button, Container, Flex, Heading } from "@radix-ui/themes";
import { useConnect } from "wagmi";
import styles from "./connect-wallet.module.css";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();

  return (
    <Container size="2">
      <Heading align="center">Connect your wallet:</Heading>
      <Flex direction="column" gap="3" align="start" className={styles.btnContainer}>
        {connectors.map((connector) => (
          <Button key={connector.uid} onClick={() => connect({ connector })} className={styles.btn}>
            {connector.name}
          </Button>
        ))}
      </Flex>
      <Blockquote mt="4" color="blue">
        Use Sepolia, Goerli or Etherium Mainnet
      </Blockquote>
    </Container>
  );
};

export { ConnectWallet };
