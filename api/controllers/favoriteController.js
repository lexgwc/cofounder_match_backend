//TODO: functions to create and export are getFavorite, addFavorite, removeFavorite


import User from '../models/userModel.js'
import Profile from '../models/profileModel.js'

export const createFavorite = async (req, res) => {
  const profileId = req.body.profileId; // The quote ID to add to favorites
  const userId = req.payload.username; // Extracting the userId from the JWT payload

  try {
      // Using the userId from JWT payload to ensure action on the logged-in user
      const user = await User.findOneAndUpdate(
          { username: userId }, 
          { $addToSet: { favorites: quoteId } }, // $addToSet prevents duplicates
          { new: true, runValidators: true }
      ).populate('favorites'); // Optionally populate 'favorites' to return the updated list

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Error adding favorite', error: error.message });
  }
}

export const removeFavorite = async (req, res) => {
  const quoteId = req.body.quoteId; // The quote ID to remove from favorites
  const userId = req.payload.username; // Extracting the userId from the JWT payload

  try {
      // Using the userId from JWT payload to ensure action on the logged-in user
      const user = await User.findOneAndUpdate(
          { username: userId }, 
          { $pull: { favorites: quoteId } }, // $pull removes the item from the array
          { new: true, runValidators: true }
      ).populate('favorites'); // Optionally populate 'favorites' to return the updated list

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Error removing favorite', error: error.message });
  }
};

export const getFavorites