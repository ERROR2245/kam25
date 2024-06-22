import { SortOrder } from "../../util/SortOrder";

export type ChatbotResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  responseText?: SortOrder;
  updatedAt?: SortOrder;
};
