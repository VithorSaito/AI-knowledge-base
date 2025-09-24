import { PrismaClient } from "@prisma/client"
import { openai } from "../../lib/openai"

interface DataDTO {
  title: string
  description: string
  response: string
}

export class CalledUseCase {
  constructor(private database: PrismaClient) { }

  async execute(data: DataDTO) {

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: [data.title, data.description, data.response]
    })

    const response = await this.database.$executeRaw`
      INSERT INTO called (title, description, response, embedding)
      VALUES (${data.title}, ${data.description}, ${data.response}, ${embedding.data[0].embedding} )
    `

    return response

  }
}