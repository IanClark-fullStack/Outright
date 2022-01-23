

// create a new class to instantiate for a user
class LocalService {

    // isTokenExpired(token) {
    //     // Decode the token to get its expiration time that was set by the server
    //     const decoded = decode(token);
    //     // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    //     if (decoded.exp < Date.now() / 1000) {
    //     localStorage.removeItem('id_token');
    //     return true;
    //     }
    //     // If token hasn't passed its expiration time, return `false`
    //     return false;
    // }

    
    getLocation() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('location');
    }

    writeInLocation(locationState) {
        // Saves user token to localStorage and reloads the application for logged in status to take effect
        localStorage.setItem('location', locationState);
        // localStorage.setItem('long_name', locationArr[1].long_name);
        // localStorage.setItem('long_name', locationArr[2].long_name);

        };

    writeInData(locationObject) {
        // Saves user token to localStorage and reloads the application for logged in status to take effect
        const location = this.getLocation();
        if (location === locationObject.state_name) {
            localStorage.setItem('locationData', JSON.stringify(locationObject));
        }
        
        // localStorage.setItem('long_name', locationArr[1].long_name);
        // localStorage.setItem('long_name', locationArr[2].long_name);

    };
    getLocationData() {
        // Retrieves the user token from localStorage
        const stateData = localStorage.getItem('locationData');
        return JSON.parse(stateData)
    }
       
};

    // logout() {
    //     // Clear user token and profile data from localStorage
    //     localStorage.removeItem('id_token');
    //     // this will reload the page and reset the state of the application
    //     window.location.reload();
    // }


export default new LocalService();
