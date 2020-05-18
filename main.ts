import { Application, Router, Context } from 'https://deno.land/x/oak/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const app = new Application();
const router = new Router();
const port = +config()['PORT'];

router.get('/', (ctx: Context) => {
    ctx.response.body = 'Hello World';
});

router.get('/api/usersCount', (ctx: Context) => {
    ctx.response.body = {
        count: 1938
    };
});

app.use(router.routes());
app.use((ctx: Context) => {
    ctx.response.status = 404;
    ctx.response.body = 'Page not found';
});

console.log(`Start listening on port: ${port}`);
await app.listen({ port: port });
