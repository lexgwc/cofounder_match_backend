import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
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
    required: false
  },
  programType: {type: String, required: true},
  industryInterests: {
    type: [{
      type: String,
      enum: [
        'Agriculture',
        'Art & Design',
        'Artificial Intelligence',
        'Augmented Reality',
        'Biotechnology',
        'Blockchain',
        'Consumer Retail',
        'Cryptocurrency',
        'Defense & Space',
        'Education',
        'Energy',
        'Entertainment',
        'Environmental',
        'Fashion',
        'Finance',
        'Food & Beverage',
        'Gaming',
        'Government',
        'Healthcare',
        'Hospitality',
        'Legal',
        'Logistics',
        'Machine Learning',
        'Manufacturing',
        'Media',
        'Non-Profit',
        'Pharmaceuticals',
        'Publishing',
        'Real Estate',
        'Sports',
        'Tech',
        'Telecommunications',
        'Tourism',
        'Transportation',
        'Virtual Reality',
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
  impressiveAccomplishment: { type: String, required: false }
})

const Profile = mongoose.model('Profile', profileSchema);

export default Profile