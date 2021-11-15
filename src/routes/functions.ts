import { FoodModel } from '../models/models'


/// interfaces
interface foodContent {
  _id: string;
  Name: string;
  Description: string;
}

/// Function get all foods
export async function getFood(): Promise <any> {
  try{


    const data: Array<foodContent> = await FoodModel.find().lean()

    return data

  }catch(err: any){
    
    return console.error(err)
  }
}

/// Function post food

export async function postFood(Name: string, Description?: string) : Promise <void> {
  
  try{
    if(Description){

      await FoodModel.create({ Name, Description})

    }else{
      await FoodModel.create({ Name })
    }

  }
  catch(err: any){
    console.log(err)
  }
}