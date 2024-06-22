import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ChatbotService } from "./chatbot.service";
import { StartConversationDto } from "../chatbot/StartConversationDto";
import { SendMessageDto } from "../chatbot/SendMessageDto";
import { ConversationHistoryDto } from "../chatbot/ConversationHistoryDto";

@swagger.ApiTags("chatbots")
@common.Controller("chatbots")
export class ChatbotController {
  constructor(protected readonly service: ChatbotService) {}

  @common.Get("/:id/get-conversation-history")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetConversationHistory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetConversationHistory(body);
      }

  @common.Post("/initiate-conversation")
  @swagger.ApiOkResponse({
    type: StartConversationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateConversation(
    @common.Body()
    body: string
  ): Promise<StartConversationDto> {
        return this.service.InitiateConversation(body);
      }

  @common.Post("/post-message")
  @swagger.ApiOkResponse({
    type: SendMessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PostMessage(
    @common.Body()
    body: string
  ): Promise<SendMessageDto> {
        return this.service.PostMessage(body);
      }

  @common.Get("/retrieve-conversation-history/:id")
  @swagger.ApiOkResponse({
    type: ConversationHistoryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveConversationHistory(
    @common.Body()
    body: string
  ): Promise<ConversationHistoryDto> {
        return this.service.RetrieveConversationHistory(body);
      }

  @common.Get("/:id/send-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMessage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendMessage(body);
      }

  @common.Get("/:id/start-conversation")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartConversation(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StartConversation(body);
      }
}
