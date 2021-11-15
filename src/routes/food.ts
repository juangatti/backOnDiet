import express, { Request, Response, NextFunction, Application } from 'express'
import { getFood } from './functions'

const route: Application = express()

route.get('/', (req: Request, res: Response, next: NextFunction) => {

  const data = getFood()

  res.json(data)
})

export default route