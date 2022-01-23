import { readRemoteFile } from 'react-papaparse';
let matchCounty = '';
let matchState = '';
let matchCity = '';
export const geoLocate = () =>
    new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject("Browser does not support geolocation API");
        }
        
        navigator.geolocation.getCurrentPosition(
            location => {
                console.log(`User Latitude: ${location.coords.latitude}
                User Longitude: ${location.coords.longitude}`);
                resolve(location.coords);
            },
            error => {
                switch (error.code) {
                case "PERMISSION_DENIED":
                    return reject("Permission denied to get location");
                case "TIMEOUT":
                    return reject("Timeout waiting for user response");
                case "POSITION_UNAVAILABLE":
                default:
                    return reject("Cannot detect user location");
                }
            },
        );
    });



const findAddress = apiK => ({ latitude, longitude }) => 
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GEO}`, { mode: 'cors' })
        .then(res => {
            if (res.ok) {
                const results = res.json();
                return results;
            } 
            throw new Error(`Google Maps API error. ${res.error_message} ${res.status}`);
        }).then(results => {
            if (results.status === 'OK') {
                return results;
            }
            throw new Error(`Google Maps API error. ${results.error_message} ${results.status}`);
        })
        .catch(e => {
            throw new Error(`Cannot query Google Maps API: ${e}`);
        });


const findUserData = res => {
    try {
        const newResult = res.results
        .reduce((comps, res) => comps.concat(res.address_components[0]), [])
        .filter((el) => {
            if (el.types.includes('locality') || el.types.includes('administrative_area_level_2') || el.types.includes('administrative_area_level_1')) {
                return el.long_name;
            }
        })
        return newResult;
        
    } catch (e) {
        throw new Error(`Cannot get country code from Google Maps response`);
    }
}


export const browserLocation = apiKey => () => geoLocate()
    .then(findAddress(process.env.REACT_APP_GEO)).then(findUserData);


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
