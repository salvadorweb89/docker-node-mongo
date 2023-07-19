import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwd: { type: String, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

/**
 * Encrypt user password. Defined as async arrowfunction.
 * @param {String} passwd 
 * @returns 
 */
userSchema.methods.encryptPasswd = async (passwd) => {
  const salt = await bcrypt.genSalt(5);
  return await bcrypt.hash(passwd, salt);
};


/**
 * Checks if given password matchs with user password
 * @param {String} passwd 
 * @returns 
 */
userSchema.methods.comparePasswd = async (passwd) => {
  return await bcrypt.compare(passwd, this.passwd);
};

export default mongoose.model("User", userSchema);