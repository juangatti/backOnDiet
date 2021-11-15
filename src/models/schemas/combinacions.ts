import { Schema } from "mongoose";

interface Combinations {
  Lunch: Schema.Types.ObjectId;
  LunchDessert: Schema.Types.ObjectId;
  Dinner: Schema.Types.ObjectId;
  DinnerDessert: Schema.Types.ObjectId;
}

const schema = new Schema<Combinations>({
  Lunch: { type: Schema.Types.ObjectId, required: true },
  LunchDessert: { type: Schema.Types.ObjectId, required: false },
  Dinner: { type: Schema.Types.ObjectId, required: true },
  DinnerDessert: { type: Schema.Types.ObjectId, required: false }
})

export default schema