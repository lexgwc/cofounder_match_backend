import 'dotenv/config.js'
import './db.js'
import Profile from "../api/models/profileModel.js" 

import profileData from '../data/profiles.json' assert {type: 'json'}

Profile.insertMany(profileData)
.then(res => console.log(`Seeded db, ${res}`))