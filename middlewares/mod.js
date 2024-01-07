import { logHandler } from '@/middlewares/logger.js';
import { errorHandler } from '@/middlewares/error.js';
import { staticServer } from '@/middlewares/static.js';

export function registerMiddlewares(app) {
  app.use(logHandler);
  app.use(errorHandler);
  app.use(staticServer);
}
