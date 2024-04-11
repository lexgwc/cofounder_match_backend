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
    const { currentSchool, isTechnical, timelineForFulltime, industryInterests, userId } = req.query;

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

    if (timelineForFulltime) {
      query.timelineForFulltime = timelineForFulltime; 
    }

    if (industryInterests) {
      query.industryInterests = industryInterests; 
    }

    if (userId) {
      query.userId = userId 
    }

    const profiles = await Profile.find(query);
    res.json(profiles);
  } catch (error) {
    console.error(error); // It's helpful to log the error for debugging
    res.status(500).send({ message: error.message });
  }
};


export const deleteProfile = async (req, res) => {
  try {
    // Assuming the user's ID is stored in req.user.id after authentication
    const userId = req.user.id;
    console.log(`Attempting to delete profile for userId: ${userId}`)
    const profile = await Profile.findOneAndDelete({ userId })
    console.log(`Profile deletion result: ${profile ? 'Success' : 'Not Found'}`)
    if (profile) {
      res.json({ message: 'Profile deleted' });
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: error.message });
  }
}

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(`userId: ${userId}`)
    const { currentSchool, ...profileData } = req.body;

    let updateData = { ...profileData };
    console.log(updateData)

    // Conditionally add currentSchool to updateData if it's included in the request
    if (currentSchool) {
      const school = await School.findOne({ name: currentSchool });
      if (!school) {
        return res.status(404).json({ message: "School not found" });
      }
      updateData.currentSchool = school._id;
    }
  
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId }, // Mongoose automatically handles casting to ObjectId
      updateData,
      { new: true, runValidators: true } // Return the updated document and run schema validators
    )

    console.log(`Updated profile: ${updatedProfile}`)

    if (updatedProfile) {
      res.json(updatedProfile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
