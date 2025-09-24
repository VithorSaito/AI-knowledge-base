import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CalledUseCase } from "../../usecases/calledUseCases/called.usecases";

export class CalledController {
  constructor(private calledUseCase: CalledUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
      response: z.string()
    }).parse(request.body)


    const result = await this.calledUseCase.execute(bodySchema)

    return reply.send(result).status(200)

  }
}