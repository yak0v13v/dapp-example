import { Card, Text } from "@radix-ui/themes";
import cn from "classnames";
import styles from "./asset-card.module.css";

type Props = {
  className?: string;
  symbol?: string;
  value?: string;
};

const AssetCard = ({ className, symbol, value }: Props) => {
  const classes = cn(styles.card, className);

  return (
    <Card className={classes}>
      <Text as="span" size="2" weight="bold">
        {symbol + ": "}
      </Text>
      <Text as="span" size="2" color="gray">
        {value}
      </Text>
    </Card>
  );
};

export { AssetCard };
