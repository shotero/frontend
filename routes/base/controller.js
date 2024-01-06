import { logger } from '@/middlewares/logger.js';
import * as path from 'std/path/mod.ts';
import { Eta } from 'eta';

const __dirname = new URL('.', import.meta.url).pathname;
const view = new Eta({ views: path.join(__dirname, '..') });

export class BaseController {
  constructor() {}

  render(template, data) {
    try {
      return view.renderAsync(template, data);
    } catch (err) {
      logger.error(err);
    }
  }
}
