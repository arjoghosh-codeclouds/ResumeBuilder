import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();


// Generate JWT token

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}



export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })
    if (userExist) {
      return res.status(400).json({ message: 'User already exists' })
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    const userExist = await User.findOne({ email })
    if (!userExist) {
      return res.status(400).json({ message: 'No such user exists' })
    }

    const isMatch = await bcrypt.compare(password, userExist.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' })
    }

    res.status(200).json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      token: generateToken(userExist._id)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
//reset password
export const fetchEmail=async (req, res) =>
{
  try{
  console.log('Received email:', req.query.email);
  const email=req.query.email;
  if (!email ) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const userExist = await User.findOne({ email })
    if (!userExist) {
      return res.status(404).json({ message: 'User not found' });
    }
   return res.status(200).json({
      email: userExist.email,
      message: 'User found successfully'
    });
  }
  catch(error)
  {
    console.log(error)
    res.status(500).json({message:"Server Error"})
  }
  }
    
export const resetPassword=async(req,res)=>
{
  const {  email, password } = req.body
  try{
    const userExist = await User.findOne({ email })
    if (!userExist) {
      return res.status(400).json({ message: 'User doesnot already exists' })
    }
     const hashedPassword = await bcrypt.hash(password, 10);
     await User.updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );

    res.status(200).json({
      message:"Password updated successfully"
    })
  }
  catch(error)
  {
    
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  
}
  }
