import { FoodModel, UserModel } from '../models/models'
import argon2 from 'argon2'
import { validationEmail, validationName } from './validations'


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
export async function getFood(): Promise<any> {
  try {

    const data: Array<foodContent> = await FoodModel.find().lean()

    return data

  } catch (err: any) {

    return console.log(err)
  }
}

/// Function post food

export async function postFood(Name: string, Description?: string) : Promise <any> {
  
  try{

    const compare: foodContent | null  = await FoodModel.findOne({ Name })

    if(compare !== null) {

      return null
    }

    if(Description){

      await FoodModel.create({ Name, Description})
      return { Name, Description }

    }else{

      await FoodModel.create({ Name })
      return { Name }
    }

  }
  catch (err: any) {
    console.log(err)
  }
}

/// Function put food

export async function putFood(id : string, Name : string, Description : string): Promise<any> {

  try{

    await FoodModel.findByIdAndUpdate({_id: id}, {Name, Description})

    const compare: foodContent | null  = await FoodModel.findById({ _id: id })

    if(compare && compare.Name ===  Name){
      
      return compare
    }
    else{
      
      return null
    }
  }
  catch(err: any){
    console.log(err)
  }
}

/// Function get users  
export async function getUser(mail: string, password: string): Promise<any> {
  try {
    const data: userContent = await UserModel.findOne({ mail }).lean()

    if (await argon2.verify(data.password, password)) {
      // password match
      return data
    } else {
      // password did not match
      return null
    }

  } catch (err: any) {

    return console.log(err)
  }
}


//function post user
export async function postUser(firstName: string, lastName: string, mail: string, password: string, phone: string, adress: string): Promise<any> {
  try {
    let emailValidate = validationEmail(mail)
    let nameValidate = validationName(firstName)
    let lastNameValidate = validationName(lastName)

    if (emailValidate && nameValidate && lastNameValidate) {
      let hash = await argon2.hash(password);
      await UserModel.create({ firstName, lastName, mail, password: hash, phone, adress })
      return true
    } else {
      return false
    }
  } catch (err: any) {
    console.log("error en functions")
  }
}