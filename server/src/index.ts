//* Libraries imports
import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

//* Routes imports
import { meal, meals } from "./routes/meal";

const app = new Elysia().use(cors()).use(meal).use(meals).listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
