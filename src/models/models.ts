import {model} from 'mongoose';
import Cominacions from './schemas/combinacions'
import Diet from  './schemas/diets'
import Day from './schemas/day'
import Food from './schemas/food'
import User from './schemas/user'



export const CominacionsModel = model('cominacion', Cominacions);
export const DietModel = model('diet', Diet);
export const DayModel = model('day', Day);
export const FoodModel = model('food', Food);
export const UserModel = model('user', User);
