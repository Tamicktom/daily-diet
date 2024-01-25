//* Libraries imports
import { edenTreaty } from "@elysiajs/eden";

//* Backend imports
import type { App } from "@server/index";

export const api = edenTreaty<App>("http://192.168.100.10:3000");