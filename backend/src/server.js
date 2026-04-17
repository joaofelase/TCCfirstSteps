import { pedidosRoutes } from "./routes/pedidos.routes.js";
import { produtosRoutes } from "./routes/produtos.routes.js";
import { clientesRoutes } from "./routes/clientes.routes.js"

import Fastify from 'fastify';

const fastify = Fastify();

fastify.register(clientesRoutes,{
  prefix: "/clientes"
});

// registra as rotas de produtos com o prefixo "/produtos" no fastify
fastify.register(produtosRoutes, {
  prefix: "/produtos"
});

fastify.register(pedidosRoutes,{
  prefix: "/pedidos"
}
)


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