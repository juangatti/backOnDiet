import { Schema } from "mongoose";

interface Diet {
  FirstWeek: Schema.Types.ObjectId;
  SecondWeek: Schema.Types.ObjectId;
  ThirdWeek: Schema.Types.ObjectId;
  FourthWeek: Schema.Types.ObjectId;
}

const schema = new Schema<Diet>({
  FirstWeek: { type: Schema.Types.ObjectId, required: true },
  SecondWeek: { type: Schema.Types.ObjectId, required: false },
  ThirdWeek: { type: Schema.Types.ObjectId, required: false },
  FourthWeek: { type: Schema.Types.ObjectId, required: false }
})

export default schema