import { FastifyReply, FastifyRequest } from 'fastify';

const postPhoneNUmbersHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.code(201).send({'id': '1', 'phone_number': '786876878'});
};

export default postPhoneNUmbersHandler;