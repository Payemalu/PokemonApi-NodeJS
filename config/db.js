const mongoose = require('mongoose');
// require('dotenv').config({ path: 'variables.env' });


const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/Pokemon", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, console.log("MongoDB Server is connected successfully...!!!"))

        // await mongoose.connect(process.env.DB_MONGO, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // }, () => {
        //     console.log("MongoDB  Server is  connected successfully...!!!");
        // })
        
    } catch (error) {
        console.log(error);
        process.exit(1); // Stop the app
    }
}

module.exports = connectDB