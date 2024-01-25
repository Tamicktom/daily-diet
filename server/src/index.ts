//* Libraries imports
import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .group("/api", (app) =>
    app
      .get("/", () => "Hi Elysia")
      .get("/id/:id", ({ params: { id } }) => id)
      .post("/mirror", ({ body }) => body, {
        body: t.Object({
          id: t.Number(),
          name: t.String(),
        }),
      })
      .post("/banana", ({ body }) => body, {
        body: t.Object({
          id: t.String(),
          name: t.String(),
        }),
      })
      .use(new Elysia().get("/melancia", () => "Melancia"))
  )
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
