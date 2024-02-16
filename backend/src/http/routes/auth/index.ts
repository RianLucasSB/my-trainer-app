import { FastifyInstance } from "fastify";
import { signUp } from "./sign-up";

export async function auth(app: FastifyInstance) {
  app.post('/sign-up', signUp)
  app.get('/sign-up', signUp)
}