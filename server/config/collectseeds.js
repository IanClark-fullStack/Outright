const { StringStream } = require("scramjet");
const request = require("request");
const db = require('./connection'); 
const { CountyData } = require('../models');

// let collectedData; 
// module.exports = {

// async collectSeeds() {
    let resultsArray = [];
    let objectData
const collectSeeds = async () => {
    let date = new Date();
    date.setDate(date.getDate() - 2);
    let dateToMatch = date.toISOString().split('T')[0].toString();
    console.log(dateToMatch);
    try {
        const res = await request.get("https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv")   // fetch csv
        .pipe(new StringStream())
                       // pass to stream
        .CSVParse({
            step: async function(results, parser) {
                if (results.data.includes(dateToMatch)) {
                    const [flip_code, last_update, jail_population, name, state_name, place_type, title, resident_population, incarceration] = await results.data;

                    
                    objectData = {flip_code: Number(flip_code), last_update, jail_population: Number(jail_population), name, state_name, place_type, title, resident_population: Number(resident_population), incarceration: Number(incarceration) }; 
                    resultsArray.push({...objectData});
                //    console.log(resultsArray)

                    // .then(() => console.log('connected'))
                    // .catch((err) => console.log(err));
                    // // console.log(objectData);
                    // resultsArray.push(objectData);
                    // let countyData = new CountyData({
                    //     ...objectData
                    // })
                    // countyData.save(() => {
                    //     console.log("save successful");
                    // })
                    // db.disconnect()
                    // .then(() => console.log('disconnected'))
                    // .catch((err) => console.log(err));
                }
                
            },
            
           
                    // .then(() => console.log('connected'))
                    // .catch((err) => console.log(err));
                    // // console.log(objectData);
                    // resultsArray.push(objectData);
                    // let countyData = new CountyData({
                    //     ...objectData
                    // })
                    // countyData.save(() => {
                    //     console.log("save successful");
                    // })
                    // db.disconnect()
                    // .then(() => console.log('disconnected'))
                    // .catch((err) => console.log(err));
                
            })
            return res;

        } catch (err) {
          console.log(err);
        }   

      }
    
      
 collectSeeds();  

//  db.on('open', async () => {
                    
                            
//     await CountyData.deleteMany();

//     console.log('County Data cleared from database');
//     console.log(resultsArray);
//     const countydata = await CountyData.insertMany([
    
//         ...resultsArray
//     ])
//     console.log(`County data seeded with ${countydata}`)
//     process.exit();
 
// })

// const seeder = async (dataBack) => {
//   db.once('open', async (dataBack) => {
//     await CountyData.deleteMany();
//     console.log('County Data cleared from database');
//     const countydata = await CountyData.insertMany([
//       {
//         flip_code: dataBack[0],
//         last_update: dataBack[1], 
//         jail_population: dataBack[2],
//         name: dataBack[4],
//         title: dataBack[6], 
//         resident_population: dataBack[7],
//         incarceration:dataBack[8],
//       },
      
//     ]);
//     console.log(`County data seeded with ${countydata}`)
//     process.exit();
//   })
// }
// db.once('open', async (dataBack) => {
//   await CountyData.deleteMany();
//   console.log('County Data cleared from database');
//   const countydata = await CountyData.insertMany([
    
//   ])
// })

// const collectData = async () => {
//   try {
//     await request.get("https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv")   // fetch csv
//     .pipe(new StringStream())
//                     // pass to stream
//     .CSVParse({
//         step: async function(results, parser) {
//           if (results.data.includes(dateToMatch)) {
//             const [flip_code, last_update, population, county_name, state_name, type, title, res_pop, rate] = results.data;

//             collectedData = {flip_code, last_update, population, county_name, state_name, type, title, res_pop, rate}
//             console.log(collectedData);
//             return {flip_code, last_update, population, county_name, state_name, type, title, res_pop, rate};
          
//           }
//         }, 
       
//     })
    
//         // console.log("Row errors:", results.errors);
//   } 
      
    
//     // parse into objects
//     //  .map(object => console.log("Row:", object))  // do whatever you like with the objects

//   catch (err) {
//     console.log(err);
//   }   
// };


// collectData();               
    



