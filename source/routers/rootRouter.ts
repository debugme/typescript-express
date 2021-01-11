import { Router, Request, Response } from 'express'

const rootRouter = Router()

rootRouter.get('/', (request: Request, response: Response) => {
  const isLoggedIn = request.session?.isLoggedIn
  if (isLoggedIn) {
    const html = `
			<div>
				<div>You are logged in</div>
				<a href="/logout">Log Out</a>
			</div>
		`
    response.send(html)
  } else {
    const html = `
			<div>
				<div>You are not logged in</div>
				<a href="/login">Log In</a>
			</div>
		`
    response.send(html)
  }
})

export { rootRouter }
