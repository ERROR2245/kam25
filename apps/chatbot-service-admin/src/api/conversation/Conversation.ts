import { Message } from "../message/Message";

export type Conversation = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  messages?: Array<Message>;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
