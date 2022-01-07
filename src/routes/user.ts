import express, { Request, Response, NextFunction, Application, Router } from 'express'

import { getUser, postUser, putUser, deleteUser } from './functions'
const route: Application = express()


route.post('/login', async (req: Request, res: Response, next: NextFunction) => {

  try{
    
    const { mail, password} = req.body

    const data = await getUser(mail, password)
  
    res.json(data)
    
  }catch(err){
    next(err)
  }

})


route.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try{

       const { firstName, lastName, mail, password, phone, adress, location, postalCode } = req.body
       const data = await postUser(firstName, lastName, mail, password, phone, adress, location, postalCode)

        res.json(data)
    }
    catch(err: any){
      next(err)
    }
})

route.put('/ChangeUser', async (req:Request, res: Response, next: NextFunction )=>{
  try{
      
      const {firstName, lastName, mail, password, phone, adress, _id, token} = req.body
      const data = await putUser(firstName, lastName, mail, password, phone, adress, _id, token)
      
  
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
  const {id, token} = req.body
  try{
    await deleteUser(id, token)

    res.status(201).json({message: 'User deleted'})

  } catch(err: any){
    next(err) 
  }
})



export default route