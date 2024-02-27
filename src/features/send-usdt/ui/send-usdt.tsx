import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { sendFormSchema } from "../lib/send-form-schema";
import { useSendUSDT } from "../lib/use-send-usdt";
import { ContractFunctionExecutionError, TransactionExecutionError, parseUnits } from "viem";

const SendUsdt = () => {
  const { send } = useSendUSDT();
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

  const submitHandler = handleSubmit(({ addressTo, amount }) => {
    send({ addressTo: addressTo, amount: parseUnits(`${amount}`, 6) })
      .then((hash) => {
        alert(`Transaction hash: ${hash}`);
      })
      .catch((error) => {
        if (
          error instanceof ContractFunctionExecutionError ||
          error instanceof TransactionExecutionError
        ) {
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
        <Dialog.Title>Send USDT</Dialog.Title>

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
        </form>

        <Flex gap="3" mt="4" justify="center" direction="column">
          <Button
            variant="solid"
            color="green"
            type="submit"
            form={formId}
            disabled={!isDirty || !isValid}
          >
            Approve
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

export { SendUsdt };
