import { FoodModel, UserModel } from '../models/models'


interface foodContent {
  _id: string;
  Name: string;
  Description: string;
}

interface userContent {
  _id: string;
  admin: boolean;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  phone: string;
  adress: string;
}



/// Function get all foods
export async function getFood(): Promise <any> {
  try{


    const data: Array<foodContent> = await FoodModel.find().lean()

    return data

  }catch(err: any){
    
    return console.log(err)
  }
}

/// Function post food

export async function postFood(Name: string, Description: string) : Promise <void> {
  
  try{

    await FoodModel.create({ Name, Description})

  }
  catch(err: any){
    console.log(err)
  }
}


/// Function get users  
export async function getUser(): Promise <any> {
  try{  
    const data: Array<userContent> = await UserModel.find().lean()

    return data

  }catch(err: any){
    
    return console.log(err)
  } 
}