const { StringStream } = require("scramjet");
const request = require("request");
const db = require('./connection');
const { collectSeeds } = require('./collectseeds');  
const { User, Location, State, StateData, County, CountyData } = require('../models'); 


  db.once('open', async () => {
    const newSeeds = await collectSeeds(); 
    if (newSeeds) { console.log(newSeeds) };
    await CountyData.deleteMany();
    
  
    console.log('County Data cleared from database');
    const countydata = await CountyData.insertMany(newSeeds);
    console.log(`County data seeded with ${countydata.flip_code}`)
    process.exit();
  });



