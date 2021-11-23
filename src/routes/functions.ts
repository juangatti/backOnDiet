import { FoodModel, UserModel, CominacionsModel,DietModel } from '../models/models'
import argon2 from 'argon2'
import { validationEmail, validationName, validationIdMongoDB, ValidationArray } from './validations'


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

interface day {
  Combinations: string;
}

/// Function get all foods
export async function getFood(): Promise<any> {
  try {

    const data: Array<foodContent> = await FoodModel.find().lean()

    return data

  } catch (err: any) {

    throw Error(err)
  }
}

/// Function post food

export async function postFood(Name: string, Description?: string) : Promise <any> {
  
  try{

    validationName(Name)
      

    const compare: foodContent | null  = await FoodModel.findOne({ Name }).lean()

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
    throw Error(err)
  }
}

/// Function put food

export async function putFood(id : string, Name : string, Description : string): Promise<any> {

  try{

    validationName(Name) 
    validationIdMongoDB(id)

    await FoodModel.findByIdAndUpdate({_id: id}, {Name, Description})

    const compare: foodContent | null  = await FoodModel.findById({ _id: id }).lean()

    if(compare && compare.Name ===  Name){
      
      return compare
    }
    else{
      
      return null
    }
  }
  catch(err: any){
    throw Error(err)
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
    throw Error(err)
  }
}


/// function post user
export async function postUser(firstName: string, lastName: string, mail: string, password: string, phone: string, adress: string, location: string): Promise<any> {
  try {
    
    validationEmail(mail)
    validationName(firstName)
    validationName(lastName)
    validationName(location)
    let hash = await argon2.hash(password)

    await UserModel.create({ firstName, lastName, mail, password: hash, phone, adress, location })
    return true

  } catch (err: any) {
    throw Error(err)
  }
}

/// function put User
export async function putUser(id:string, firstName: string, lastName: string, mail: string, password: string, phone: string, adress: string): Promise<any> {
  try {
    validationIdMongoDB(id)

    await UserModel.findByIdAndUpdate({ _id: id }, { firstName, lastName, mail, password, phone, adress })

    const compare: userContent | null = await UserModel.findById({ _id: id })

    if(compare && compare.firstName === firstName && compare.lastName === lastName && compare.mail === mail && compare.phone === phone && compare.adress === adress){
      return compare
    }else{
      return null
    }
  } catch (err: any) {
    throw Error(err)
  }
}

/// Function Delete user
export async function deleteUser(id: string): Promise<void> {
  try {
    validationIdMongoDB(id)
    await UserModel.findByIdAndDelete({ _id: id }) 

  } catch (err: any) {

    throw Error(err)
  }
}

/// Function post combinations
export async function postCombinations( Lunch: string, LunchDessert: string, Dinner: string, DinnerDessert: string ): Promise<any>{

  try{
    validationIdMongoDB(Lunch)
    validationIdMongoDB(LunchDessert)
    validationIdMongoDB(Dinner)
    validationIdMongoDB(DinnerDessert)

    await CominacionsModel.create({ Lunch, LunchDessert, Dinner, DinnerDessert})
  
    return { Lunch, LunchDessert, Dinner, DinnerDessert}
  }
  catch(err : any) {
    throw Error(err)
  }
}

/// Function get combinations
export async function getCombinations(): Promise<any>{

  try{

    const data = await CominacionsModel.find()
      .populate({path: 'Lunch', select: 'Name'})
      .populate({path: 'LunchDessert', select: 'Name'})
      .populate({path: 'Dinner', select: 'Name'})
      .populate({path: 'DinnerDessert', select: 'Name'})
      .lean()

    return data
  }
  catch(err : any) {
    throw Error(err)
  }
}

//// Function get Diets
export async function getDiets() : Promise<any>{

  try{

    const data = await DietModel.find()
      .populate({path: 'Week.Combinations', select: 'Name'})
      .lean()

    return data
  }
  catch(err : any) {
    throw Error(err)
  }
}

/// Function post Diet

export async function postDiets(Name: string, Week: Array<day>): Promise<any> {

  try{
    ValidationArray(Week)
    
    await DietModel.create({ Name, Week })

    return { Name, Week}
  }
  catch (err: any) {
    throw Error(err)
  }
}