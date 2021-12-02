import { Schema } from "mongoose";

interface day {
  Combinations: Schema.Types.ObjectId;
}

interface Diet {
  Name: string;
  Price: number;
  Week : Array<day>
}

const schema = new Schema<Diet>({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Week : [
    {
      Combinations: { type: Schema.Types.ObjectId, required: true, ref:'cominacion'}
    }
  ]
})

export default schema