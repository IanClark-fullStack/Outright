const axios = require('axios');
const cheerio = require('cheerio');

let userStateLocation = 'Alabama';
let comparisonStateLocation = 'California';
const stateUrl = `https://www.sentencingproject.org/the-facts/#detail?state1Option=${userStateLocation}%20Total&state2Option=${comparisonStateLocation}`;  

module.exports = {
    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createJailLocation(req, res) {
        console.log(req.body);
        
        // if (!user) {
        //     return res.status(400).json({ message: 'Something is wrong!' });
        // }
        return res.json();
    }
}