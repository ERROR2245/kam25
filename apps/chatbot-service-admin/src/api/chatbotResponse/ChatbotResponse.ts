import { Message } from "../message/Message";

export type ChatbotResponse = {
  createdAt: Date;
  id: string;
  message?: Message | null;
  responseText: string | null;
  updatedAt: Date;
};
