import Elysia from "elysia";
import env from "./env";

const app = new Elysia();

app
  .onAfterHandle(({ set }) => {
    set.headers["X-Server-Location"] = env.LOCATION;
  })
  .get("/ping", () => {
    return "pong";
  })
  .get("/info", () => {
    return { instance: env.INSTANCE_ID, location: env.LOCATION };
  });

app.listen(env.PORT, () => {
  console.log(`Listening on port ${env.PORT}`);
});
