import express, { Application, Request, Response, NextFunction } from "express"
import { getDiets,} from './functions'


const routes: Application = express()

routes.get('/', async (req: Request, res: Response, next: NextFunction) => {

    try{
  
      const data = await getDiets()
  
      res.json(data)
    }
    catch(err: any) {
      next(err)
    }
  })
  export default routes