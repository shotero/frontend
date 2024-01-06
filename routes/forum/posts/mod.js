import { PostController } from '@/routes/forum/posts/controller.js';
import { Router } from 'oak';

const router = new Router();
const controller = new PostController();

router.get('/', controller.list.bind(controller));
router.post('/', controller.create.bind(controller));

export { router };
