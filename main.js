import { Application, send } from 'oak';
import { router } from '@/routes/mod.js';
import { registerMiddlewares } from '@/middlewares/mod.js';
import 'std/dotenv/load.ts';

// try to load plugins
// >> perform migrations
// >> validate
// >> mount
// await load();
const app = new Application();

const ROOT_DIR = 'public';
const ROOT_DIR_PATH = '/public';
app.use(async (ctx, next) => {
  if (!ctx.request.url.pathname.startsWith(ROOT_DIR_PATH)) {
    next();
    return;
  }
  const filePath = ctx.request.url.pathname.replace(ROOT_DIR_PATH, '');
  await send(ctx, filePath, {
    root: ROOT_DIR,
  });
});

app.use(router.routes());
registerMiddlewares(app);

await app.listen({ port: 8001 });
