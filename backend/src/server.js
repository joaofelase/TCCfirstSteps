import { produtosRoutes } from "./routes/produtos.routes.js";

import Fastify from 'fastify';

const fastify = Fastify();

// registra as rotas de produtos com o prefixo "/produtos" no fastify
fastify.register(produtosRoutes, {
  prefix: "/produtos"
});


fastify.get("/health", async (request, reply) => {
  return { 
    status: "ok" 
  }
});




fastify.listen({port: 5312}, (err) => {
    if(err){
    console.error(err);
    process.exit(1);
    }
    console.log('Servidor em execução');
    });