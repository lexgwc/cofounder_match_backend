//TODO: functions to create and export are: updateUser, deleteUser
// Make sure controller logic fetches the user ID from the authentication token or session (typically done within the isUserLoggedIn middleware) to identify which user to update or delete.

import User from '../models/userModel.js';

// All below needs to be checked and verified

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // Assuming the user's ID is stored in req.user.id after authentication
    const userId = req.user.id;
    
    const user = await User.findByIdAndDelete(userId);
    if (user) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: error.message });
  }
}