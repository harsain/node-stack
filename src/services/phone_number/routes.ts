import { FastifyInstance } from 'fastify';
import postPhoneNUmbersHandler from './controller';

const phNumberRoutes = async (server: FastifyInstance) => {
  server.post(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            raw_phone_numbers: { type: 'string'}
          }
        },
      },
    },
    postPhoneNUmbersHandler
  );
}

export default phNumberRoutes;