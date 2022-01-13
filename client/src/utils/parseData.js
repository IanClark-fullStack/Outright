import { readRemoteFile } from 'react-papaparse';

// export const getCountyData = (url, county, state) => {
//     if (county && state) {
//             readRemoteFile(url, {
//                 complete: (results) => {
//                     // console.log("Row data:", results.data);
//                     return getRelevantData(results.data, county, state);
                    
//                 },  
                
//             })
//     } else {
//         console.log('loading...')
//     }
// }
const parseFile = () => new Promise((resolve) => {
            readRemoteFile(`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`, {
                complete: (results) => {
                    // console.log("Row data:", results.data);
                    resolve(results.data); 
                },  
            })
});




// Using full state data array and County names 
const findOnlyOne = (fullArr, counties) => {
    let indexArr = [];
    let finalCountyDataArray = [];
    // Loop through the county names 
    for (let i = 0; i < counties.length; i++) {
        let currRow = counties[i]; 
        // Create a call back function to return the first occurence of the county name within state data
        const doesMatch = (row) => row.county_name === currRow;
        // Push Indexes to an Array 
        indexArr.push(fullArr.findIndex(doesMatch));
    }
    // For each index, 
    indexArr.forEach((position) => {
        // Push to array, the most recent updated data. 
        finalCountyDataArray.push(fullArr[position])
        
    })
    return finalCountyDataArray;
}
            
         
            // el = {
            //     flip_code: Number(fullArr[i].flip_code), 
            //     last_update: fullArr[index].last_update, 
            //     jail_population: Number(fullArr[index].jail_population), 
            //     name: el.name, 
            //     state_name: fullArr[index].state_name, 
            //     place_type: fullArr.place_type, 
            //     title: fullArr.title, 
            //     resident_population: Number(fullArr.resident_population), incarceration: Number(fullArr.incarceration)
            // }
        

        
   
  
    
   
            // const [flip_code, last_update, jail_population, name, state_name, place_type, title, resident_population, incarceration] = currRow;

            // objectData = {flip_code: Number(flip_code), last_update, jail_population: Number(jail_population), name, state_name, place_type, title, resident_population: Number(resident_population), incarceration: Number(incarceration)};
        
        



// // Sort Objects by Date (last_updated)
// const findLastUpdated = async (array) => {
//     try {
//         let sortData = array.slice();
//         let dataSorted = sortData.sort((a, b) => {
//             /*   console.log(`A: ${a.name}`)
//             console.log(`B: ${b.name}`) */
        
//             if (a.state_name === b.state_name && a.name === b.name) {
                
//                 let xDate = new Date(a.last_update);
//                 let yDate = new Date(b.last_update);
//                 if (xDate > yDate) {
//                     // console.log(`county a: ${a.name} updated at ${a.last_update}`)
//                     return -1;
//                 } else {
//                     // console.log(`county b: ${b} updated at ${b.last_update}`)
//                     return 1
//                 }
                
//             }
        
//         })
        
//         return dataSorted;

//     } catch (err) {
//         console.log(err)
//     }
    
// }
    


export const getRelevantData = async (county, state) => {
    try {
        const parsedData = await parseFile();
        let resultingJailData = { countySpecificData: undefined, stateSpecificData: undefined };
        let finalRes = [];
        let countyArea = [];
        let stateArea = [];
        let countyData = {};
        let stateData = {};
        let countyNameArr = []
            for (let i = 0; i < parsedData.length; i++) {
                let currentRow = parsedData[i];
                if (currentRow.includes(county) && currentRow.includes(state)) {
                    
                    const [flip_code, last_update, jail_population, county_name, state_name, place_type, title, resident_population, incarceration] = await currentRow;

                    // Create County Specific Data in Object Structure
                    countyData = await {flip_code: Number(flip_code), last_update, jail_population: Number(jail_population), county_name, state_name, place_type, title, resident_population: Number(resident_population), incarceration: Number(incarceration)};
                    
                    
                    countyArea.push(countyData);
                    
                } else if (currentRow.includes(state)) {
                    // Each in array format
                    const [flip_code, last_update, jail_population, county_name, state_name, place_type, title, resident_population, incarceration] = await currentRow;
                    
                    // Create County Specific Data in Object Structure
                    stateData = await {flip_code: Number(flip_code), last_update, jail_population: Number(jail_population), county_name, state_name, place_type, title, resident_population: Number(resident_population), incarceration: Number(incarceration)};

                    // Push all County Objects to an Array 
                    if (!stateArea.includes(stateData.county_name)) {
                        stateArea.push(stateData);
                    }
                } 
                
            };
            // Creating an Array of Each County Name 
            stateArea.map((el) => {
                if (countyNameArr.indexOf(el.county_name) === -1) {
                    return countyNameArr.push(el.county_name);
                } else { 
                    return
                }
            })

            // let sortData = array.slice();
            const sortedCounties = await stateArea.sort((a, b) => {
                if (a.state_name === b.state_name && a.county_name === b.county_name) { 
                    let xDate = new Date(a.last_update);
                    let yDate = new Date(b.last_update);
                    if (xDate > yDate) {
                        // console.log(`county a: ${a.county_name} updated at ${a.last_update}`)
                        return -1;
                    } else {
                        // console.log(`county b: ${b} updated at ${b.last_update}`)
                        return 1
                    }   
                }
            })
    
            console.log(sortedCounties)
            // Sort the State Array by Date (Most Recent)
            // const sortedCounties = await findLastUpdated(stateArea);

            
            // Pass in the Complete State Data (Arrray), And array of county Names (Array)
            const stateCounties = await findOnlyOne(sortedCounties, countyNameArr);
            const resultData = { stateCounties, county: countyArea[countyArea.length - 1] }
            return resultData;
            // console.log({ stateData: [...stateCounties], countyData: countyArea[0] })
            // return resultingJailData = await { stateData: [...stateCounties], countyData: countyArea[0] };
        
            
        

            

            

            
        //     resultingJailData.countySpecificData = countyArea[0];
        //     console.log(countyData)
            
        

        // resultingJailData.stateSpecificData = [...finalRes];

       
        
    } catch (err) {
        console.log(err);
    }
    // console.log(resultingJailData);
    // return resultData; 
}


// export const getCountyData = (county, state) => {
//     readRemoteFile(`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`, {
//         complete: (results, file) => {
//             return results.data;
//             console.log("Row data:", results.data);
//         }   
//     })

   
// }


// const getData = res => {
//     console.log(res)
// }


// const getRelevantData = newdata => { 
//     console.log(newdata);
//     const date=new Date();
//     date.setDate(date.getDate() - 2);
//     let dateYesterday = date.toISOString().split('T')[0].toString();
//     // console.log(dateYesterday);
//     let area = [];
//     let countyData = {};
//     let stateArea = [];
//     let countyArea = [];
//     for (let i = 0; i < newdata.length; i++) {
//         if (newdata[i].includes(matchCounty) && newdata[i].includes(matchState)) {
//             countyArea.push(newdata[i]);
            
//         } else if (newdata[i].includes(matchState)) {
//             stateArea.push(newdata[i]);
//             // Each in array format
//             const [flip_code, last_update, jail_population, name, state_name, place_type, title, resident_population, incarceration] = newdata[i];
//             // Check for the Last Occurence of the County Name 
//             countyData = {flip_code: Number(flip_code), last_update, jail_population: Number(jail_population), name, state_name, place_type, title, resident_population: Number(resident_population), incarceration: Number(incarceration) };
//             // console.log(countyData)
            
//         }
//     }
    
//     for (const county of stateArea) {
//         // console.log(`State County data: ${county}`)
//     }
//     console.log(countyArea);
//     // const userCountyJailData = countyArea[countyArea.length -1];
//     // console.log(`Your Location -- Last Updated at: ${userCountyJailData}`);
//     return countyData; 
//     // console.log(stateArea);
        
// }



// export const parseData = (county, state) => () => getCountyData().then(getData).then(getRelevantData);


// export function idbPromise(storeName, method, object) {
// return new Promise((resolve, reject) => {
//     const request = window.indexedDB.open('shop-shop', 1);
//     let db, tx, store;
//     request.onupgradeneeded = function(e) {
//     const db = request.result;
//     db.createObjectStore('products', { keyPath: '_id' });
//     db.createObjectStore('categories', { keyPath: '_id' });
//     db.createObjectStore('cart', { keyPath: '_id' });
//     };

//     request.onerror = function(e) {
//     console.log('There was an error');
//     };

//     request.onsuccess = function(e) {
//     db = request.result;
//     tx = db.transaction(storeName, 'readwrite');
//     store = tx.objectStore(storeName);

//     db.onerror = function(e) {
//         console.log('error', e);
//     };

//     switch (method) {
//         case 'put':
//         store.put(object);
//         resolve(object);
//         break;
//         case 'get':
//         const all = store.getAll();
//         all.onsuccess = function() {
//             resolve(all.result);
//         };
//         break;
//         case 'delete':
//         store.delete(object._id);
//         break;
//         default:
//         console.log('No valid method');
//         break;
//     }

//     tx.oncomplete = function() {
//         db.close();
//     };
//     };
// });
// }