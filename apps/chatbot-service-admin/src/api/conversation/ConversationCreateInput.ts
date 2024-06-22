import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  endTime?: Date | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  startTime?: Date | null;
  status?: "Option1" | null;
};
