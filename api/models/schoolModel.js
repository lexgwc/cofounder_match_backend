import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schoolSchema = new Schema({
  schoolName: { type: String, required: true, unique: true, enum: ['Harvard', 'Stanford', 'Wharton'] },
})

const School = mongoose.model('School', schoolSchema);

export default School