import { BaseController } from '@/routes/base/controller.js';
import { api } from '@/utils/api.js';

const posts = [
  {
    id: 1,
    title: 'Hello World',
    body: 'This is my first post',
  },
  {
    id: 2,
    title: 'Hello World 2',
    body: 'This is my second post',
  },
];

export class PostController extends BaseController {
  constructor() {
    super();
  }

  async list(context, next) {
    // const res = await api.get('posts');
    // const posts = await res.json();

    const page = await this.render('forum/posts/list.ejs', {
      context,
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
