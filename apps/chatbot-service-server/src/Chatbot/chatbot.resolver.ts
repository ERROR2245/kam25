import * as graphql from "@nestjs/graphql";
import { StartConversationDto } from "../chatbot/StartConversationDto";
import { SendMessageDto } from "../chatbot/SendMessageDto";
import { ConversationHistoryDto } from "../chatbot/ConversationHistoryDto";
import { ChatbotService } from "./chatbot.service";

export class ChatbotResolver {
  constructor(protected readonly service: ChatbotService) {}

  @graphql.Query(() => String)
  async GetConversationHistory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetConversationHistory(args);
  }

  @graphql.Mutation(() => StartConversationDto)
  async InitiateConversation(
    @graphql.Args()
    args: StartConversationDto
  ): Promise<StartConversationDto> {
    return this.service.InitiateConversation(args);
  }

  @graphql.Mutation(() => SendMessageDto)
  async PostMessage(
    @graphql.Args()
    args: SendMessageDto
  ): Promise<SendMessageDto> {
    return this.service.PostMessage(args);
  }

  @graphql.Query(() => ConversationHistoryDto)
  async RetrieveConversationHistory(
    @graphql.Args()
    args: string
  ): Promise<ConversationHistoryDto> {
    return this.service.RetrieveConversationHistory(args);
  }

  @graphql.Query(() => String)
  async SendMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendMessage(args);
  }

  @graphql.Query(() => String)
  async StartConversation(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.StartConversation(args);
  }
}
