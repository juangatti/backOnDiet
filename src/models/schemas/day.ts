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
  Monday: { type: Schema.Types.ObjectId, required: true },
  Tuesday: { type: Schema.Types.ObjectId, required: true },
  Wednesday: { type: Schema.Types.ObjectId, required: true },
  Thursday: { type: Schema.Types.ObjectId, required: true },
  Friday: { type: Schema.Types.ObjectId, required: true },
  Saturday: { type: Schema.Types.ObjectId, required: true },
  Sunday: { type: Schema.Types.ObjectId, required: true },
});

export default schema