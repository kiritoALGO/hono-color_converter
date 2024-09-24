import { Hono } from 'hono'
import { keyword } from 'color-convert'
import { KEYWORD } from 'color-convert/conversions'

const app = new Hono()

app.get('/', (c) => c.text('hello world'))

app.get('/:colorformat/:colorname', (ctx) => {
	const colorname: KEYWORD = ctx.req.param("colorname") as KEYWORD
	const colorformat: string = ctx.req.param("colorformat")

	if(colorformat == "hex"){
		return ctx.text("#" + keyword.hex(colorname));
	}
	else if(colorformat == "rgb"){
		return ctx.text("(" + keyword.rgb(colorname).toString() + ")");
	}
	else{
		return ctx.text("Invalid color format. Use 'hex' or 'rgb'.");
	}
})


export default app
