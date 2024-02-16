import fastify from 'fastify'
import { auth } from './routes/auth'

const app = fastify()

app.register(auth, {prefix: '/auth'})

app.listen({ port: 5555, host: '0.0.0.0' }).then((port) => {
  console.log(`Server running on port ${port}`)
})