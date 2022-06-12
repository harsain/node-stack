import Fastify from "fastify";
import swagger from "@fastify/swagger";
import phNumberRoutes from './services/phone_number/routes';

function startServer() {
  const server = Fastify({
    logger: true
  });

  server.register(swagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'API Demo App',
        description: 'API Demo with Postgres',
        version: '0.1.0'
      },
      host: `localhost:${process.env.PORT}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true
  });
  server.register(phNumberRoutes, { prefix: "/phone-numbers" });

  return server;
}

export default startServer;