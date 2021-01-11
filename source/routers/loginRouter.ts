import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const loginRouter = Router()

loginRouter.get('/login', (request: Request, response: Response) => {
  response.send(`
    <form method="post">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

loginRouter.post('/login', (request: RequestWithBody, response: Response) => {
  const { email, password } = request.body
  if (email === 'debugme@hotmail.com' && password === 'password') {
    request.session = { isLoggedIn: true }
    response.redirect('/')
  } else {
    response.send('Invalid email or password')
  }
})

loginRouter.get('/logout', (request: RequestWithBody, response: Response) => {
  if (request.session?.isLoggedIn) {
    request.session.isLoggedIn = false
    response.redirect('/')
  } else {
    response.send('Error - You are already logged out')
  }
})

export { loginRouter }
