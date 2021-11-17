import { Schema } from "mongoose";

interface Days {
  Monday: Schema.Types.ObjectId;
  Tuesday: Schema.Types.ObjectId;
  Wednesday: Schema.Types.ObjectId;
  Thursday: Schema.Types.ObjectId;
  Friday: Schema.Types.ObjectId;
  Saturday: Schema.Types.ObjectId;
  Sunday: Schema.Types.ObjectId;
}

const schema = new Schema<Days>({
  Monday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion'  },
  Tuesday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
  Wednesday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
  Thursday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
  Friday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
  Saturday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
  Sunday: { type: Schema.Types.ObjectId, required: true, ref:'cominacion' },
});

export default schema