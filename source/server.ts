import express from 'express'
import cookieSession from 'cookie-session'
import chalk from 'chalk'

import { rootRouter } from './routers/rootRouter'
import { loginRouter } from './routers/loginRouter'
import { protectedRouter } from './routers/protectedRouter'
import { isAuthorized } from './middleware/isAuthorized'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieSession({ keys: ['salt'] }))

server.use(rootRouter)
server.use(loginRouter)
server.use(isAuthorized, protectedRouter)

const {
  env: { EXPRESS_PORT = 3000 },
} = process

const callback = () => {
  const text = `[server] http:://localhost:${EXPRESS_PORT}`
  console.log(chalk.blue(text))
}

server.listen(EXPRESS_PORT, callback)
