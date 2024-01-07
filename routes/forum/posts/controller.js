import { BaseController } from '@/routes/base/controller.js';
import { api } from '@/utils/api.js';

export class PostController extends BaseController {
  constructor() {
    super();
  }

  async list(context, next) {
    const res = await api.get('posts');
    const posts = await res.json();

    const page = await this.render('forum/posts/list.ejs', {
      posts,
      page: {
        title: 'Posts',
      },
    });

    context.response.body = page;
    return next();
  }

  async create(context) {
    console.log('create');
    return await this.render(
      'forum/posts/create.ejs',
      context,
      posts.push({
        id: 3,
        title: 'Hello World 3',
        body: 'This is my third post',
      }),
    );
  }
}
