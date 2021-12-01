import express, { Application, Request, Response, NextFunction } from "express"
import { postCombinations, getCombinations } from './functions'

const routes: Application = express()

routes.post('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    const { Name, Launch, LunchDessert, Dinner, DinnerDessert } = req.body
    
    const data = await postCombinations( Name, Launch, LunchDessert, Dinner, DinnerDessert )
    
    res.json( data)
    
  }
  catch(err: any) {
    next(err)
  }
})

routes.get('/', async (req: Request, res: Response, next: NextFunction) => {

  try{

    const data = await getCombinations()

    res.json(data)
  }
  catch(err: any) {
    next(err)
  }
})
export default routes