

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        }, 
        location: {
            type: Schema.Types.ObjectId, 
            ref: 'Location',
            // required: true,
        },
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // },
);

// Hash the users password 
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRoundss = 10; 
//         this.password = await bcrypt.hash(this.password, saltRoundss);
//     }
//     next();
// });

// // Attach a method for password comparasion and validation 
// userSchema.method.isTruePassword = async function (password) {
//     return bcrypt.compare(password, this.password); 
// };

// when we query a user, we'll also get another field called `petitionCount` with the number of signedPetitions we have
// userSchema.virtual('petitionCount').get(function () {
//     return this.signedPetitions.length;
// });

