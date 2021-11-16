import express, { Request, Response, NextFunction, Application } from 'express'
import { getFood, postFood, putFood } from './functions'

const route: Application = express()

route.get('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    
    const data = await getFood()
  
    res.json(data)
  }
  catch(err: any){

    next(err)
  }
})

route.post('/', async(req: Request, res: Response, next: NextFunction) => {

  try{

    const { Name, Description } = req.body

    const data = await postFood(Name, Description)

    if(data === null){

      res.status(502).json({ message: 'Food exist'})
    }
    else{

      res.json(data)
    }
  }
  catch(err: any){
    next(err)
  }
})


route.put('/Changed', async (req: Request, res: Response, next: NextFunction) => {

  try{

    const { _id, Name, Description } = req.body

    const data = await putFood(_id, Name, Description)

    if(data != null){

      res.json(data)
    }
    else{

      res.status(502).json({ message: 'No changed'})
    }
  }
  catch(err: any){
    next(err)
  }
})

export default route