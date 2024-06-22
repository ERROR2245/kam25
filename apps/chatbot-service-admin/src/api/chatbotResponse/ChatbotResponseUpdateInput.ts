import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type ChatbotResponseUpdateInput = {
  message?: MessageWhereUniqueInput | null;
  responseText?: string | null;
};
