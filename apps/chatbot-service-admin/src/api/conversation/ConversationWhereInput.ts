import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ConversationWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
};
