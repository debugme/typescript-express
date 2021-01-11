import { Router, Request, Response } from 'express'

const protectedRouter = Router()

protectedRouter.get('/protected', (request: Request, response: Response) => {
  response.send(`
		<div>Welcome to protected route, logged in user</div>
	`)
})

export { protectedRouter }
