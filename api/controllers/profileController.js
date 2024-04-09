import Profile from '../models/profileModel.js'
import School from '../models/schoolModel.js'


export const addProfile = async (req, res) => {
  try {
    const { currentSchool, ...profileData } = req.body;
    // Use the userId from req.user.id, which is set by the verifyAuth middleware
    const userId = req.user.id;

    // Verify the school exists and get its ObjectId
    const school = await School.findOne({ schoolName: currentSchool })
    console.log(`School: ${school}`);
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }

    const newProfile = new Profile({
      ...profileData,
      userId, // Set the userId for the profile to the logged-in user's ID
      currentSchool: school._id,
    });

    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

export const getProfiles = async (req, res) => {
  try {
    const { currentSchool, isTechnical, gender } = req.query;

    let query = {}; // Initialize query object

    if (currentSchool) {
      const school = await School.findOne({ schoolName: currentSchool });
      if (!school) {
        return res.status(404).json({ message: "School not found" });
      }
      query.currentSchool = school._id; // Correct field name to match schema
    }

    if (isTechnical) {
      query.isTechnical = isTechnical 
    }

    if (gender) {
      query.gender = gender; 
    }

    const profiles = await Profile.find(query);
    res.json(profiles);
  } catch (error) {
    console.error(error); // It's helpful to log the error for debugging
    res.status(500).send({ message: error.message });
  }
};

// export const deleteProfile = async (req, res) => {
// }

// export const updateProfile = async (req, res) => {
// }

