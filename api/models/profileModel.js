import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  currentSchool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  programType: {type: String, required: true},
  industryInterests: { type: String, required: true },
  isTechnical: { type: Boolean, required: true },
  linkedinURL: { type: String, required: false },
  email: { type: String, required: true },
  location: { type: String, required: false },
  aboutMe: { type: String, required: true },
  education: { type: String, required: true },
  employmentHistory: { type: String, required: true },
  gender: { type: String, required: false },
  schedulingURL: { type: String, required: false },
  hasIdea: { type: String, required: true },
  ideasInterestedIn: { type: String, required: false },
  areasOfResponsibility: { type: String, required: true },
  timelineForFulltime: { type: String, required: true },
  cofounderDesiredQualities: { type: String, required: false },
  impressiveAccomplishment: { type: String, required: false },
  lastSeen: { type: Date, required: true }
})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile