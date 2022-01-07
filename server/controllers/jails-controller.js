// const db = require('../models');

// module.exports = {
//     // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
//     async createJailLocation(req, res) {
//         console.log(req.body);
        
//         // if (!user) {
//         //     return res.status(400).json({ message: 'Something is wrong!' });
//         // }
//         return await res.json();
//     },
//     findAll: async (req, res) => {
//         try {
//             res.json(await db.Jail.find(req.query));
//         } catch(err) {
//             res.status(422).json(err);
//         }
//     },
//     create: async (req, res) => {
//         try {
//             res.json(await db.Jail.create(req.body));
//         } catch(err) {  
//             res.status(422).json(err);
//         }
//     },
// }