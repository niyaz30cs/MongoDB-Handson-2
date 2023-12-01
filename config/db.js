const { MongoClient } = require("mongodb");

// const mongodburl = "mongodb://127.0.0.1:27017"
const mongocloudurl="mongodb+srv://niyaz30cs:Niyaz786@cluster0.kxsn674.mongodb.net/?retryWrites=true&w=majority"

const mongoServer = new MongoClient(mongocloudurl);

const employeeConnection = async () => {
    try {
        console.log("Connection Done SuccessFully..!!");
        await mongoServer.connect();
    }
    catch (err) {
        console.log(`Error occured in Mongo connection ${err}`);
    }
}
const dataBaseName=mongoServer.db("HR-Resource");

module.exports = {employeeConnection,dataBaseName};