import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type ChatbotResponseCreateInput = {
  message?: MessageWhereUniqueInput | null;
  responseText?: string | null;
};
