import fastify from "fastify";
import { knex } from "./database";
import crypto from "node:crypto";
import { env } from "./env";

const app = fastify();

app.get("/insert", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: crypto.randomUUID(),
      title: "TraNSAÇÃO DE TESTE",
      amount: 1000,
    })
    .returning("*");

  return transaction;
});

app.get("/select", async () => {
  const transactions = await knex("transactions").select("*");

  return transactions;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server is running on port: ${env.PORT}`);
  });
