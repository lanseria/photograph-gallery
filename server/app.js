const Koa = require('koa')
const app = new Koa()
const port = 7981

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(port)
