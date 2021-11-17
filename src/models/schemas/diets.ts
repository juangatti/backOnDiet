import { Schema } from "mongoose";

interface Diet {
  FirstWeek: Schema.Types.ObjectId;
  SecondWeek: Schema.Types.ObjectId;
  ThirdWeek: Schema.Types.ObjectId;
  FourthWeek: Schema.Types.ObjectId;
}

const schema = new Schema<Diet>({
  FirstWeek: { type: Schema.Types.ObjectId, required: true , ref:"day"},
  SecondWeek: { type: Schema.Types.ObjectId, required: false, ref: "day" },
  ThirdWeek: { type: Schema.Types.ObjectId, required: false, ref: "day" },
  FourthWeek: { type: Schema.Types.ObjectId, required: false, ref: "day" }
})

export default schema