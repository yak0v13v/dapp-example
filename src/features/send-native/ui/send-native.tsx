import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { sendFormSchema } from "../lib/send-form-schema";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { EstimateGasExecutionError, parseEther } from "viem";

type Props = {
  symbol: string;
};

const SendNative = ({ symbol }: Props) => {
  const formId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(sendFormSchema),
    mode: "all",
    defaultValues: {
      addressTo: "" as `0x${string}`,
      amount: 0,
    },
  });
  const { data: hash, sendTransactionAsync, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const submitHandler = handleSubmit(({ addressTo, amount }) => {
    sendTransactionAsync({ to: addressTo, value: parseEther(`${amount}`) })
      .then((hash) => {
        alert(`Transaction hash: ${hash}`);
      })
      .catch((error) => {
        if ("shortMessage" in error) {
          alert(error.shortMessage);
        }
      });
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">Send</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 400 }}>
        <Dialog.Title>Send {symbol}</Dialog.Title>

        <form onSubmit={submitHandler} id={formId}>
          <TextField.Input
            placeholder="Address"
            type="text"
            {...register("addressTo")}
            color={errors?.addressTo ? "red" : "lime"}
          />
          {errors?.addressTo && (
            <Text as="div" mt="1" color="red" size="1">
              {errors.addressTo.message}
            </Text>
          )}

          <TextField.Input
            mt="4"
            placeholder="Amount"
            type="text"
            {...register("amount")}
            color={errors?.amount ? "red" : "lime"}
          />
          {errors?.amount && (
            <Text as="div" mt="1" color="red" size="1">
              {errors.amount.message}
            </Text>
          )}
          {hash && (
            <Text as="div" size="1" mt="1">
              Transaction Hash: {hash}
            </Text>
          )}
          {isConfirming && (
            <Text as="div" size="1" mt="1">
              Waiting for confirmation...
            </Text>
          )}
          {isConfirmed && (
            <Text as="div" size="1" mt="1">
              Transaction confirmed.
            </Text>
          )}
        </form>

        <Flex gap="3" mt="4" justify="center" direction="column">
          <Button
            variant="solid"
            color="green"
            type="submit"
            form={formId}
            disabled={!isDirty || !isValid || isPending || isConfirming}
          >
            {isPending ? "Pending..." : "Approve"}
          </Button>

          <Dialog.Close>
            <Button variant="soft" color="red">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { SendNative };
