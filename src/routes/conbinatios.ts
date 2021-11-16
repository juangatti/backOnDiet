import express, { Application, Request, Response, NextFunction } from "express"
import { postCombinations } from './functions'

const routes: Application = express()

routes.post('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    const { Launch, LunchDessert, Dinner, DinnerDessert } = req.body
    
    const data = await postCombinations( Launch, LunchDessert, Dinner, DinnerDessert )

    if( data === null ){

      res.status(502).json({message: 'No changed'})
    }else{

      res.json( data)
    }
  }
  catch(err: any) {

  }
})

export default routes