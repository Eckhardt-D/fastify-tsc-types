import Fastify from "fastify";

const app = Fastify();


app.get("/", () => "Hello, World!");

app.listen({
  port: 0,
}).then(console.log)