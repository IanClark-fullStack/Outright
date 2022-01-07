import { readRemoteFile } from 'react-papaparse';
export const getData = () => 
    readRemoteFile(`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`, {
        step: (results, parser) => {
            console.log("Row data:", results.data);
            console.log("Row errors:", results.errors);
        }
    })





// import Papa from 'papaparse';
// // export const searchData = () => {
// //     const response = fetch(`https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv`).then(response => Papa.parse(response, {
// //         download: true,
// //         worker: true,
// //         delimiter: ",",
        
// //         complete: function(results) {
// //           // You can access the data here
// //             console.log(results.data); 
// //         }
// //     })
// // )}

// export default searchData;
