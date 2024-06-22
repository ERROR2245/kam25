import { ChatbotResponseCreateNestedManyWithoutMessagesInput } from "./ChatbotResponseCreateNestedManyWithoutMessagesInput";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chatbotResponses?: ChatbotResponseCreateNestedManyWithoutMessagesInput;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
