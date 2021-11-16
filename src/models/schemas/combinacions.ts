import { Schema } from "mongoose";

interface Combinations {
  Lunch: Schema.Types.ObjectId;
  LunchDessert: Schema.Types.ObjectId;
  Dinner: Schema.Types.ObjectId;
  DinnerDessert: Schema.Types.ObjectId;
}

const schema = new Schema<Combinations>({
  Lunch: { type: Schema.Types.ObjectId, required: true, ref:'food' },
  LunchDessert: { type: Schema.Types.ObjectId, required: false, ref:'food' },
  Dinner: { type: Schema.Types.ObjectId, required: true, ref:'food' },
  DinnerDessert: { type: Schema.Types.ObjectId, required: false, ref:'food' }
})

export default schema