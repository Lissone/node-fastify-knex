import { randomUUID } from 'crypto';
import { FastifyInstance } from 'fastify';
import knex from 'knex';
import { z } from 'zod';
import { checkSessionIdExists } from '../middleware/checkSessionIdExists';

export async function transactionsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', checkSessionIdExists);

  app.get('/', async (req) => {
    const { sessionId } = req.cookies;
    const transactions = await knex('transactions')
      .where('session_id', sessionId)
      .select();

    return { transactions };
  });

  app.get('/:id', async (req) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getTransactionParamsSchema.parse(req.params);

    const { sessionId } = req.cookies;
    const transaction = await knex('transactions')
      .where({
        id,
        sessionId,
      })
      .first();

    return { transaction };
  });

  app.get('/summary', async (req) => {
    const { sessionId } = req.cookies;
    const summary = await knex('transactions')
      .where('sessionId', sessionId)
      .sum('amount', { as: 'amount' })
      .first();

    return { summary };
  });

  // reply = response
  app.post('/', async (req, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    });

    let sessionId = req.cookies.sessionId;
    if (!sessionId) {
      sessionId = randomUUID();

      reply.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });
    }

    const { title, amount, type } = createTransactionBodySchema.parse(req.body);

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
