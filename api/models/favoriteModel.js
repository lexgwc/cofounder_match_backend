import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  favoritedProfileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  }
}, { timestamps: true })

const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite