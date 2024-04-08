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
  industryInterests: {
    type: [{
      type: String,
      enum: [
        'Tech',
        'Healthcare',
        'Finance',
        'Education',
        'Energy',
        'Real Estate',
        'Manufacturing',
        'Consumer Retail',
        'Entertainment',
        'Media',
        'Transportation',
        'Logistics',
        'Agriculture',
        'Food & Beverage',
        'Hospitality',
        'Tourism',
        'Legal',
        'Environmental',
        'Biotechnology',
        'Pharmaceuticals',
        'Art & Design',
        'Non-Profit',
        'Government',
        'Defense & Space',
        'Telecommunications',
        'Publishing',
        'Fashion',
        'Sports',
        'Gaming',
        'Virtual Reality',
        'Augmented Reality',
        'Artificial Intelligence',
        'Machine Learning',
        'Blockchain',
        'Cryptocurrency',
        'Other'
      ]
    }],
    required: true },
  isTechnical: { type: Boolean, required: true },
  linkedinURL: { type: String, required: false },
  email: { type: String, required: true },
  location: { type: String, required: false },
  aboutMe: { type: String, required: true },
  education: { type: String, required: true },
  employmentHistory: { type: String, required: true },
  gender: { type: String, required: false },
  schedulingURL: { type: String, required: false },
  hasIdea: {
    type: String,
    enum: [
      "Committed to an idea",
      "Have ideas but not committed",
      "Don't have an idea yet"
    ],
    required: true
  },
  ideasInterestedIn: { type: String, required: false },
  areasOfResponsibility: {
    type: [{ type: String, enum: [
      'Business Strategy',
      'Product Development',
      'Marketing and Sales',
      'Technology and Engineering',
      'Operations',
      'Finance and Fundraising',
      'Legal and Compliance'
    ]}],
    required: true},
    timelineForFulltime: {
      type: String,
      enum: [
        'Immediately', 
        'Within 6 Months',
        'Within a Year', 
        'More than a Year', 
        'Undecided'
      ],
      required: true },
  cofounderDesiredQualities: { type: String, required: false },
  impressiveAccomplishment: { type: String, required: false },
  lastSeen: { type: Date, required: true }
})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile