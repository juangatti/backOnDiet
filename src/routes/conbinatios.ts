import express, { Application, Request, Response, NextFunction } from "express"
import { postCombinations } from './functions'

const routes: Application = express()

routes.post('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    const { Launch, LunchDessert, Dinner, DinnerDessert } = req.body
    
    console.log("callme" )
    const data = await postCombinations( Launch, LunchDessert, Dinner, DinnerDessert )
    console.log("callme" )
    res.json( data)
    
  }
  catch(err: any) {

  }
})

export default routes