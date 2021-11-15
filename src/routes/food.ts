import express, { Request, Response, NextFunction, Application } from 'express'
import { getFood, postFood } from './functions'

const route: Application = express()

route.get('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    
    const data = await getFood()
  
    res.json(data)

  }catch(err: any){

    next(err)
  }
})

route.post('/', async(req: Request, res: Response, next: NextFunction) => {

  try{
    const { Name, Description } = req.body
    await postFood(Name, Description)

    res.send('Created')
  }
  catch(err: any){
    next(err)
  }
})
export default route