import { DEFAULT_USER_EMAIL, DEFAULT_USER_NAME, DEFAULT_USER_PASSWORD } from "../config.js";
import User from "../models/User.js";

export const createDefaultUser = async (req, res) => {
  const findUser = await User.findOne({ email: DEFAULT_USER_EMAIL });

  if (findUser) res.send(`Default user ${DEFAULT_USER_EMAIL} found, nothing to do here`);

  //If default user is not found, let's create it
  const defaultUser = new User({
    name: DEFAULT_USER_NAME,
    email: DEFAULT_USER_EMAIL,
  });

  defaultUser.passwd = await defaultUser.encryptPasswd(DEFAULT_USER_PASSWORD);

  const user = await defaultUser.save();
  const msg = `Default user created ${user.name} - ${user.email}`;
  console.log(`Default user created ${msg}`);

  res.send(msg);
};