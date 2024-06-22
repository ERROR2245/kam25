import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatbotResponseWhereInput = {
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  responseText?: StringNullableFilter;
};
