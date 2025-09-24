import dotenv from "dotenv"
import fastify from "fastify"
import { routes } from "./src/routes/called.routes"

dotenv.config()

const Fastify = fastify()

Fastify.register(routes)

Fastify.listen({ port: 3333 }, (add, port) => {
  console.log(port)
})