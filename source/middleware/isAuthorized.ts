import { Request, Response, NextFunction } from 'express'

function isAuthorized(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if (request.session?.isLoggedIn) {
    next()
  } else {
    response.status(403)
    response.send('Error - You must be logged in')
  }
}

export { isAuthorized }
