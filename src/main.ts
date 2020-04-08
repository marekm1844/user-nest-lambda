
import { bootstrap as fastify } from './app.fastify';


async function startLocal() {
    const fastifyInstance = await fastify();
    fastifyInstance.listen(3000);
}

startLocal();
