import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: String,
    followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    followings: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

type userSchemaInferType = InferSchemaType<typeof userSchema>;
export default model<userSchemaInferType>("users", userSchema);