// const axios = require('axios');
// const cheerio = require('cheerio');


// module.exports = async (req, res) => {
//     console.log(req.body);
//     const { locationData, comparisonData } = req.body;
//     try {
//         const data = await axios.get(`http://www.sentencingproject.org/the-facts/#detail?state1Option=${locationData}%20Total&state2Option=${comparisonData}`);
//         console.log(data);
        
//         const response = cheerio.load(data.data, {
//             normalizeWhitespace: true,
//             xmlMode: true,
//             lowerCaseTags: true
//         });

//         res.json(data);
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
