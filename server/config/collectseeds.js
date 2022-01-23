const { StringStream } = require("scramjet");
const fetch = require('node-fetch');
const db = require('./connection');
const { State, StateData } = require('../models');
const { URLSearchParams } = require('url');
const encodedParams = new URLSearchParams();
require('dotenv').config()
// let collectedData; 
// module.exports = {

const { concatenateTypeDefs } = require("graphql-tools");
const censusUrl = `https://api.census.gov/data/2021/pep/population?get=group(NST_EST2021_POP)&for=state:*&key=${process.env.CENSUS1}`;
const censusPrisonUrl = `https://api.census.gov/data/2020/dec/pl?get=group(P5),NAME&for=state:*&key=${process.env.CENSUS1}`;
let resData;
let results;
let dataArray = [];
let prisonArray = [];
let totalData = [];

let ranking = [];
const getRating = async () => {
    try {
        encodedParams.set('action', 'load_dataset');
        encodedParams.set('dataset', 'SIR');
        
        let url = 'https://www.sentencingproject.org/wp-admin/admin-ajax.php';
        
        let options = {
            method: 'POST',
            qs: {'': ''},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                cookie: 'X-Mapping-kpfbnfen=985626C0F491DEFE1E62176EB6F1A42D; '
            },
            body: encodedParams
        };
        
        const response = await fetch(url, options)
        const json = await response.json();
        ranking.push(json);
        const elementObj = ranking[0];
        const newArr = Object.keys(elementObj).map(key => {
            return elementObj[key];
        })
        
        newArr.shift();
        
        // console.log(ranking)
        // const rank = [{...ranking}];
        // console.log(rank)
        return newArr;
    } catch (err) {
        console.log(err);
    }
   
    
}

const fetchStatePopulations = async (url) => {
    try {
        const response = await fetch(url)
        const json = await response.json();
        resData = [...json]; 
        resData.shift();
        for (let i=0; i < resData.length; i++) {
            let currTotals = resData[i];
            let stateData = {
                geo_id: currTotals[0], 
                state_name: currTotals[1], 
                resident_population: Number(currTotals[3]), 
                fips_code: currTotals[5],
            };

            dataArray.push(stateData);
        }

        
        return dataArray;
    } catch (err) {
        console.log(err);
    }   
}

const fetchStatePrisons = async (prisonUrl) => {
    try {
        
        
        const res = await fetch(prisonUrl)
        
        const json = await res.json();
        results = [...json]; 
        results.shift();
        // console.log(results)
        for (let i=0; i < results.length; i++) {
            let currIncarcerated = results[i];

            let incarceratedData = {
                incarcerated_population: Number(currIncarcerated[5]),
                state_name: currIncarcerated[2],
                fips_code: currIncarcerated[currIncarcerated.length - 1], 
            };
            
            prisonArray.push(incarceratedData);
        }
        return prisonArray;
    } catch (err) {
        console.log(err);
    }   
}


const getData = async () => {
    const statePopulations = await fetchStatePopulations(censusUrl);
    console.log(statePopulations.length)
    let statePrisons = await fetchStatePrisons(censusPrisonUrl);
    console.log(statePrisons.length);
    let output = 0;
    let totalNation = 0;
    const rates = await getRating(); 
    let totals = {}
    // console.log(rates)
    for (let i = 0; i < statePopulations.length; i++) {
       let currState = statePopulations[i]
        statePrisons.forEach((prison) => {
            
            if (currState.fips_code === prison.fips_code) {
                // let diff = (prison.incarcerated_population / item.resident_population);
                // // console.log(diff);
                // let by100 = Math.round(item.resident_population * 100000)
                // console.log(by100)
                totals = {
                    state_name: currState.state_name,
                    fips_code: currState.fips_code,
                    resident_population: currState.resident_population,
                    incarcerated_population: prison.incarcerated_population,
                    geo_id: currState.geo_id,
                }
                totalData.push(totals);
                
                
            }
        })
        

   
    }
    for (let j=0; j<totalData.length; j++) {
        let currState = totalData[j];
        rates.forEach((rank) => {
            if (currState.state_name === rank.state) {
              currState.incarceration_rate = (rank.hover);
            } 
            
        })
    }
    // console.log(totalData)
    // db.once('open', async () => {
    //     try {
    //         console.log('db Opened');
    //         await State.deleteMany({});
    //         for (let i=0; i < totalData.length; i++) {
    //             let state = totalData[i];
    //             await State.insertMany([{
    //                 state_name: state.state_name, 
    //                 fips_code: state.fips_code, 
    //                 resident_population: state.resident_population, 
    //                 incarcerated_population: state.incarcerated_population,
    //                 geo_id: state.geo_id, 
    //                 incarceration_rate: state.incarceration_rate,
    //             }]);
    //         }
            

            
            
            
    //         console.log('all done!');
    //         process.exit(0);
    //     } catch (err) {
    //         throw err;
    //     }
    // })
    
        console.log(totalData)
        return totalData
    
}

const dataSorting = async (arrayOfTotals) => {
    // Set first value as minimum
    // let minRate = arrayOfTotals[0].incarceration_rate.slice();
    
    for (let i = 0; i < arrayOfTotals.length; i++) {
        let minIndex = i;
         // For each unsorted value, 
        for (let j = i + 1; j < arrayOfTotals.length; j++) {
            if (arrayOfTotals[minIndex].incarceration_rate > arrayOfTotals[j].incarceration_rate) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let tmp = arrayOfTotals[i];
            arrayOfTotals[i] = arrayOfTotals[minIndex];
            arrayOfTotals[minIndex] = tmp;
        }

    }
    arrayOfTotals.map((total, index) => {
        if (total.state_name !== 'District of Columbia') {
            return total.rank = index - 1;
        }
        
    })
    
    return arrayOfTotals;
}


    db.once('open', async () => {
        try {
            const data = await getData();
            const sortedData = await dataSorting(data);
            console.log(sortedData);
            console.log('db Opened');
            // console.log(data)
            await State.deleteMany({});
            
            const states = await State.insertMany([...sortedData]);
            
            
            console.log('all done!');
            process.exit(0);

        } catch (err) {
            throw err;
        }
    });





// async collectSeeds() {
//     let nameArr = ["GEO_ID","NAME","POP_2020","POP_2021","POP_BASE2020","state"];
//     let resultsArray = [];
//     let incarceratedTotals = [
//         ["39749","Alabama","01"],
// ["7177","Alaska","02"],
// ["64154","Arizona","04"],
// ["27079","Arkansas","05"],
// ["201570","California","06"],
// ["32307","Colorado","08"],
// ["13581","Connecticut","09"],
// ["4801","Delaware","10"],
// ["2278","District of Columbia","11"],
// ["10931","Idaho","16"],
// ["149333","Florida","12"],
// ["91932","Georgia","13"],
// ["3752","Hawaii","15"],
// ["59075","Illinois","17"],
// ["41962","Indiana","18"],
// ["13064","Iowa","19"],
// ["18204","Kansas","20"],
// ["38346","Kentucky","21"],
// ["51241","Louisiana","22"],
// ["3360","Maine","23"],
// ["27040","Maryland","24"],
// ["17969","Massachusetts","25"],
// ["54748","Michigan","26"],
// ["16672","Minnesota","27"],
// ["30745","Mississippi","28"],
// ["37079","Missouri","29"],
// ["5774","Montana","30"],
// ["8998","Nebraska","31"],
// ["19575","Nevada","32"],
// ["4395","New Hampshire","33"],
// ["36851","New Jersey","34"],
// ["14807","New Mexico","35"],
// ["62707","New York","36"],
// ["59099","North Carolina","37"],
// ["2571","North Dakota","38"],
// ["67080","Ohio","39"],
// ["38455","Oklahoma","40"],
// ["20434","Oregon","41"],
// ["81297","Pennsylvania","42"],
// ["3082","Rhode Island","44"],
// ["31693","South Carolina","45"],
// ["6709","South Dakota","46"],
// ["47728","Tennessee","47"],
// ["248764","Texas","48"],
// ["10680","Utah","49"],
// ["1219","Vermont","50"],
// ["57014","Virginia","51"],
// ["26677","Washington","53"],
// ["19669","West Virginia","54"],
// ["32853","Wisconsin","55"],
// ["3352","Wyoming","56"],
// ["11192","Puerto Rico","72"]
//     ]
//     let populationTotals = [
//         ["0400000US40","Oklahoma","3962031","3986639","3959353","40"],
//         ["0400000US31","Nebraska","1961455","1963692","1961504","31"],
//         ["0400000US15","Hawaii","1451911","1441553","1455271","15"],
//         ["0400000US46","South Dakota","887099","895376","886667","46"],
//         ["0400000US47","Tennessee","6920119","6975218","6910840","47"],
//         ["0400000US32","Nevada","3114071","3143991","3104614","32"],
//         ["0400000US35","New Mexico","2117566","2115877","2117522","35"],
//         ["0400000US19","Iowa","3188669","3193079","3190369","19"],
//         ["0400000US20","Kansas","2935880","2934582","2937880","20"],
//         ["0400000US11","District of Columbia","690093","670050","689545","11"],
//         ["0400000US48","Texas","29217653","29527941","29145505","48"],
//         ["0400000US29","Missouri","6154481","6168187","6154913","29"],
//         ["0400000US05","Arkansas","3012232","3025891","3011524","05"],
//         ["0400000US26","Michigan","10067664","10050811","10077331","26"],
//         ["0400000US33","New Hampshire","1377848","1388992","1377529","33"],
//         ["0400000US37","North Carolina","10457177","10551162","10439388","37"],
//         ["0400000US39","Ohio","11790587","11780017","11799448","39"],
//         ["0400000US45","South Carolina","5130729","5190705","5118425","45"],
//         ["0400000US56","Wyoming","577267","578803","576851","56"],
//         ["0400000US06","California","39499738","39237836","39538223","06"],
//         ["0400000US38","North Dakota","778962","774948","779094","38"],
//         ["0400000US22","Louisiana","4651203","4624047","4657757","22"],
//         ["0400000US24","Maryland","6172679","6165129","6177224","24"],
//         ["0400000US10","Delaware","991886","1003384","989948","10"],
//         ["0400000US42","Pennsylvania","12989625","12964056","13002700","42"],
//         ["0400000US13","Georgia","10725800","10799566","10711908","13"],
//         ["0400000US41","Oregon","4241544","4246155","4237256","41"],
//         ["0400000US27","Minnesota","5707165","5707390","5706494","27"],
//         ["0400000US08","Colorado","5784308","5812069","5773714","08"],
//         ["0400000US34","New Jersey","9279743","9267130","9288994","34"],
//         ["0400000US21","Kentucky","4503958","4509394","4505836","21"],
//         ["0400000US53","Washington","7718785","7738692","7705281","53"],
//         ["0400000US23","Maine","1362280","1372247","1362359","23"],
//         ["0400000US50","Vermont","642495","645570","643077","50"],
//         ["0400000US16","Idaho","1847772","1900923","1839106","16"],
//         ["0400000US18","Indiana","6785644","6805985","6785528","18"],
//         ["0400000US30","Montana","1086193","1104271","1084225","30"],
//         ["0400000US36","New York","20154933","19835913","20201249","36"],
//         ["0400000US72","Puerto Rico","3281538","3263584","3285874","72"],
//         ["0400000US09","Connecticut","3600260","3605597","3605944","09"],
//         ["0400000US12","Florida","21569932","21781128","21538187","12"],
//         ["0400000US51","Virginia","8632044","8642274","8631393","51"],
//         ["0400000US25","Massachusetts","7022220","6984723","7029917","25"],
//         ["0400000US17","Illinois","12785245","12671469","12812508","17"],
//         ["0400000US28","Mississippi","2956870","2949965","2961279","28"],
//         ["0400000US04","Arizona","7177986","7276316","7151502","04"],
//         ["0400000US49","Utah","3281684","3337975","3271616","49"],
//         ["0400000US55","Wisconsin","5892323","5895908","5893718","55"],
//         ["0400000US01","Alabama","5024803","5039877","5024279","01"],
//         ["0400000US54","West Virginia","1789798","1782959","1793716","54"],
//         ["0400000US44","Rhode Island","1096229","1095610","1097379","44"],
//         ["0400000US02","Alaska","732441","732673","733391","02"]
//     ];




// const collectSeeds = (statesArray) => {
//     let dataArray = [];
//     let stateData = {
//         geo_id: undefined, 
//         state_name: undefined, 
//         resident_population: undefined, 
//         fips_code: undefined,
//         difference: 0 
//     };
//     for (let i=0; i < statesArray.length; i++) {
//         let currTotals = statesArray[i];
        
        
//         let stateData = {
//             geo_id: currTotals[0], 
//             state_name: currTotals[1], 
//             resident_population: Number(currTotals[3]), 
//             fips_code: currTotals[5],

//         };
//         dataArray.push(stateData);

//     }
//     return dataArray;

    
// }

// const collectPrisonTotals = (incarceratedArray) => {
//     let incarceratedData = [];
    

//     for (let i=0; i < incarceratedArray.length; i++) {

//         let currIncarcerated = incarceratedArray[i];
//         let ratesData = {
//             state_name: currIncarcerated[1], 
//             incarcerated_population: Number(currIncarcerated[0]), 
//             fips_code: currIncarcerated[2], 
//             difference: undefined
//         };
        
        
//         incarceratedData.push(ratesData);

//     }
    
    
//     return incarceratedData;

//     console.log(incarceratedData);
//     // console.log(statePopulation)
// }


   
//         const response = await request.get(
//             `https://api.census.gov/data/2021/pep/population?get=group(NST_EST2021_POP)&for=state:*&key=6c81ff30d529280f747a0f7a8a330f162f30c474`)
//             .then(data => {
//                 let labels = data[0].map(datum => datum.toUpperCase());
//                 let rows = data.slice(1);
//                 let objArray = rows.map(row => { return Object.assign(
//                 {},
//                 ...labels.map((key, idx) => ({ [key]: row[idx] }))
//                 );
//                 });
    
//         console.log(objArray)
//     }) 
        
    
    
// }

// const collectPercentages = (resPopulation, totalIncarcerated) => {
//     // console.log(resPopulation)
//     let output = [];
//     let collectTotals = {
//         state_name: undefined, 
//         geo_id: undefined,
//         resident_population: undefined, 
//         incarcerated_population: undefined, 
//         difference: 0, 
//         incarceration_rate: undefined, 
//         fips_code: undefined, 
//     }
//     for (let i=0; i < resPopulation.length; i++) {
//         let currentState = resPopulation[i]
    
//         totalIncarcerated.forEach((el, j) => {
//             if (currentState.fips_code === el.fips_code) {
//                 el.resident_population = currentState.resident_population; 
//                 el.geo_id = currentState.geo_id;
//                 let diff = Math.abs(el.incarcerated_population / currentState.resident_population);
//                 console.log(diff)
//                 el.difference = diff * 100000;
              
//                 console.log(el)

//             }
//         })
//     }
    // console.log(totalIncarcerated)
        
        
        
    
//   return resPopulation
    
    
    
// }

// const population = collectSeeds(populationTotals);  
// const totalIncarcerated = collectPrisonTotals(incarceratedTotals)

// const totals = collectPercentages(population, totalIncarcerated);
// console.log(totals)
