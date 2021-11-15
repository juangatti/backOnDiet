import { FoodModel } from '../models/models'

export async function getFood(): Promise <any> {
  try{

    const data = await FoodModel.find().lean()

    return data

  }catch(err: any){
    
    throw Error(err)
  }
}