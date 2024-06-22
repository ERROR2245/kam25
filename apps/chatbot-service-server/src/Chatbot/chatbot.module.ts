import { Module } from "@nestjs/common";
import { ChatbotService } from "./chatbot.service";
import { ChatbotController } from "./chatbot.controller";
import { ChatbotResolver } from "./chatbot.resolver";

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotResolver],
  exports: [ChatbotService],
})
export class ChatbotModule {}
