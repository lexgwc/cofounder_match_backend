import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const SECRET = process.env.SECRET

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    const passwordIsValid = await bcrypt.compare(password, user.password)

    if(!passwordIsValid) {
      return res.status(401).json({
        passwordError: `The password was incorrect`
      })
    }

    const token = jwt.sign(
      { id: user._id },
      SECRET,
      { expiresIn: '1d' }
    )

    return res.json({
      token: token
    })
  } catch (error) {
    console.error(error)
  }
}

export const signup = async (req, res) => {
  try {
    const userData = req.body
    userData.password = await bcrypt.hash(userData.password, 8)
    const user = await User.create(userData)

    res.json({
      successMessage: `The user ${user.email} has been created successfully`
    })
  } catch (error) {
    console.error(error)
  }
}
export const logout = async (req, res) => { 
  res.clearCookie('token').json({ message: 'Logout successful' });
}