import { Injectable } from "@nestjs/common";
import { StartConversationDto } from "../chatbot/StartConversationDto";
import { SendMessageDto } from "../chatbot/SendMessageDto";
import { ConversationHistoryDto } from "../chatbot/ConversationHistoryDto";

@Injectable()
export class ChatbotService {
  constructor() {}
  async GetConversationHistory(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitiateConversation(args: StartConversationDto): Promise<StartConversationDto> {
    throw new Error("Not implemented");
  }
  async PostMessage(args: SendMessageDto): Promise<SendMessageDto> {
    throw new Error("Not implemented");
  }
  async RetrieveConversationHistory(args: string): Promise<ConversationHistoryDto> {
    throw new Error("Not implemented");
  }
  async SendMessage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartConversation(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
