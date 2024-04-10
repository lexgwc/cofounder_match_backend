import Profile from '../models/profileModel.js'

// create function to get industryInterests from Profile Model

export const getIndustryInterests = async (req, res) => {
  try {
    const industryInterests = await Profile.distinct('industryInterests');
    res.json(industryInterests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
} 

// create function to get timelineForFulltime from Profile

export const getTimelineForFulltime = async (req, res) => {
  try {
    const timelineForFulltime = await Profile.distinct('timelineForFulltime');
    res.json(timelineForFulltime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

// create function to get areasOfResponsibility from Profile

export const getAreasOfResponsibility = async (req, res) => {
  try {
    const areasOfResponsibility = await Profile.distinct('areasOfResponsibility');
    res.json(areasOfResponsibility);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

// create function to get hasIdea from Profile

export const getHasIdea = async (req, res) => {
  try {
    const hasIdea = await Profile.distinct('hasIdea');
    res.json(hasIdea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
