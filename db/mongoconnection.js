const mongoose = require("mongoose")
const connectmongoosedb = async () => {
    try {
        const con = await mongoose.connect(`${process.env.MONGO_CONNECTION}`)
        console.log(`connected to server ${con.connection.host}`)
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = connectmongoosedb