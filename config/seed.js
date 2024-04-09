import 'dotenv/config.js'
import './db.js'
import Profile from "../api/models/profileModel.js" 
import School from "../api/models/schoolModel.js" 

import profileData from '../data/profiles.json' assert {type: 'json'}
import schoolData from '../data/schools.json' assert {type: 'json'}


School.insertMany(schoolData)
.then(res => console.log(`Seeded school db, ${res}`))

Profile.insertMany(profileData)
.then(res => console.log(`Seeded profile db, ${res}`))
