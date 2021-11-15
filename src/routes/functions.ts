import { FoodModel } from '../models/models'

/// Function get all foods
export async function getFood(): Promise <any> {
  try{

    interface foodContent {
      _id: string;
      Name: string;
      Description: string;
    }

    const data: Array<foodContent> = await FoodModel.find().lean()

    return data

  }catch(err: any){
    
    return console.error(err)
  }
}