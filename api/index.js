import { Hono } from 'hono'

const app = new Hono()

app.get('/', (ctx) => ctx.text('Esta será la api para obtener la información de la tienda!'))

export default app
