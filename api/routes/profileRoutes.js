//TODO import verifyAuth

// Define the route
router.get('/profiles', async (req, res) => {
  try {
    const school = req.query.school;
    const isTechnical = req.query.isTechnical === 'true'; // Convert query param to boolean
    const gender = req.query.gender;

    // Call a function to get filtered profiles based on the criteria
    const profiles = await getFilteredProfiles({ school, isTechnical, gender });

    res.json(profiles);
  } catch (error) {
    res.status(500).send(error.message);
  }
})