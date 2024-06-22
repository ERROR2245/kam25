import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  endTime?: Date | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
  startTime?: Date | null;
  status?: "Option1" | null;
};
