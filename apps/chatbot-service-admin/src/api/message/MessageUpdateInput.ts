import { ChatbotResponseUpdateManyWithoutMessagesInput } from "./ChatbotResponseUpdateManyWithoutMessagesInput";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  chatbotResponses?: ChatbotResponseUpdateManyWithoutMessagesInput;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
