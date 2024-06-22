import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ConversationHistoryDtoObject")
class ConversationHistoryDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    conversationId!: string;

    @Field(() => [GraphQLJSON])
    history!: InputJsonValue;
}

export { ConversationHistoryDto as ConversationHistoryDto };