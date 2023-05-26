const mongoose = require('mongoose');

/*
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
           // useCreateIndex : true,
           // useFindAndModify : false,
            useUnifiedTopology : true


        });
        

        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);       
    }
}
*/

const connectDB = () => {

    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
       // useCreateIndex : true,
       // useFindAndModify : false,
        useUnifiedTopology : true


    }).then(()=>{
        console.log(`MongoDB connected `);
    }).catch((error)=>{
        console.log(error);
    })

}



module.exports = connectDB;