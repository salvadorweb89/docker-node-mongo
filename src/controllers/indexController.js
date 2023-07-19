import { DEFAULT_USER_EMAIL} from "../config.js";
import User from "../models/User.js";


export const initContent = async (req, res) => {

  //Let's check if default user is created
  const findUser = await User.findOne({ email: DEFAULT_USER_EMAIL });
  console.log()
  const msg = findUser ? `Default User ${DEFAULT_USER_EMAIL} found!` : `Default User ${DEFAULT_USER_EMAIL} NOT found!`


  res.send(msg);
};