
const fetch = require('node-fetch');
const db = require('./connection');
const { State, StateData } = require('../models');
const { URLSearchParams } = require('url');
const encodedParams = new URLSearchParams();
require('dotenv').config()

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
