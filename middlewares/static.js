import { send } from 'oak';
const ROOT_DIR = 'public';
const ROOT_DIR_PATH = '/public';

export async function staticServer(ctx, next) {
  if (!ctx.request.url.pathname.startsWith(ROOT_DIR_PATH)) {
    return next();
  }
  const filePath = ctx.request.url.pathname.replace(ROOT_DIR_PATH, '');
  await send(ctx, filePath, {
    root: ROOT_DIR,
  });
}
