import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // Ensure bcrypt is imported

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    maxlength: 20
  }
});

userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }

  // Define the password complexity requirement regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
  // Check if the password meets the complexity requirements
  if (!passwordRegex.test(this.password)) {
    return next(new Error('Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number.'));
  }
  
  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);
export default User