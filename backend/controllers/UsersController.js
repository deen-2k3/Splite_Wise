import User from "../module/user.js";
import bcrypt from "bcryptjs";
//import _ from "lodash";
import _ from "underscore";



export const register = async (req, res) => {
  try {
    const { fullname, name, email, password } = req.body;

    if (!fullname || !name || !email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User with email already exists.",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      name,
      email,
      password: hashpassword,
    });

    return res.status(201).json({
      message: "User created successfully.",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
   
  
   

    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email or password is incorrect.",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Password is incorrect.",
        success: false,
      });
    }
    const token =user.generateAuthToken();
    res.cookie("token",token,{httpOnly:true})
    .send(_.pick(user, ["_id", "name"]));

    // return res.status(200).json({
    //   message: `Welcome back ${user.fullname}`,
    //   success: true,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
export const logout=async(req,res)=>{
  try {
    res.clearCookies("token",{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
    });
    res.status(200).json({
      success:true,
      message:"Logout successfully."
    })
    
  } catch (error) {
   return res.status(500).json({
    success:false,
    message:"Something went worng"
   })
    
  }
}
