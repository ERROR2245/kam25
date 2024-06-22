import { ChatbotResponse as TChatbotResponse } from "../api/chatbotResponse/ChatbotResponse";

export const CHATBOTRESPONSE_TITLE_FIELD = "id";

export const ChatbotResponseTitle = (record: TChatbotResponse): string => {
  return record.id?.toString() || String(record.id);
};
