import { type ReactNode } from "react";
import { Box, Card, Grid, Text } from "@radix-ui/themes";
import cn from "classnames";
import styles from "./asset-card.module.css";

type Props = {
  className?: string;
  symbol?: string;
  value?: string;
  children?: ReactNode;
};

const AssetCard = ({ className, symbol, value, children }: Props) => {
  const classes = cn(styles.card, className);

  return (
    <Card className={classes}>
      <Grid columns="1fr 1fr" align="center">
        <Box>
          <Text as="span" size="2" weight="bold">
            {symbol + ": "}
          </Text>
          <Text as="span" size="2" color="gray">
            {value}
          </Text>
        </Box>

        <Box className={styles.slot}>{children}</Box>
      </Grid>
    </Card>
  );
};

export { AssetCard };
