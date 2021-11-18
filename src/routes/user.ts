import express, { Request, Response, NextFunction, Application, Router } from 'express'

import { getUser, postUser, putUser, deleteUser } from './functions'
const route: Application = express()


route.get('/', async (req: Request, res: Response, next: NextFunction) => {

  try{
    
    const {mail, password} = req.body

    const data = await getUser(mail, password)
  
    if(data !== null){
    res.json(data)
    } else {
      res.status(404).json({message: 'Wrong Password'})
    }
  }catch(err){
    next(err)
  }

})


route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try{

       const {firstName, lastName, mail, password, phone, adress} = req.body
       const data = await postUser(firstName, lastName, mail, password, phone, adress)
        

        if(data === true){
            res.status(201).json({message: 'User created'})
        }
        else{
            res.status(404).json({message: 'User already exists'})
        }
    }
    catch(err: any){
      next(err)
    }
})

route.put('/ChangeUser', async (req:Request, res: Response, next: NextFunction )=>{
  try{
      
      const {firstName, lastName, mail, password, phone, adress, _id} = req.body
      const data = await putUser(firstName, lastName, mail, password, phone, adress, _id)
      
  
      if(data !== null){
          res.status(201).json({message: 'Succefully change user'})
      }
      else{
          res.status(404).json({message: 'User already exists'})
      }
  } catch(err: any){
    next(err)
  }
})


route.delete('/ChangeUser', async (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.body
  try{
    await deleteUser(id)

    res.status(201).json({message: 'User deleted'})

  } catch(err: any){
    next(err) 
  }
})



export default route