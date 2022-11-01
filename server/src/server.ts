import Fastify from "fastify";

async function start(){
  const fastify = Fastify({
    logger: true,
  })

  fastify.get('/pools/count', () =>{
    return { count : 1231}
  })

  await fastify.listen({port: 3333});
}

start();