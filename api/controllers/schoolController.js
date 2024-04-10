import School from '../models/schoolModel.js'

// create function to get schools list

export const getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

