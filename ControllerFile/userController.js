const { dataBaseName } = require("../config/db");

const employeeCollection = dataBaseName.collection("employeeDetails")

const listAll = async (req, res) => {
    const result = await employeeCollection.find({}).toArray()

    console.log(result);
    return res.send(result)
}
const greaterSalary = async (req, res) => {
    const result = await employeeCollection.find({ "salary": { $gt: "30000" } }).toArray()
    console.log(result);
    return res.send(result)
}
const overallExp = async (req, res) => {
    const result = await employeeCollection.find({ "overallExp": { $gt: "2" } }).toArray()
    console.log(result);
    return res.send(result)
}
const greaterYear = async (req, res) => {
    const result = await employeeCollection.find({
        "yearGrad": { $gt: "2015" },
        "overallExp": { $gt: "1" }
    }).toArray()
    console.log(result);
    return res.send(result)
}
const updateSalary = async (req, res) => {
    const result = await employeeCollection.updateMany(
        { "salary": { $gt: "70000" } },
        { $set: { "salary": "65000" } }
    )
    console.log(result);
    return res.send(result)
}
const deleteCompany = async (req, res) => {
    const result = await employeeCollection.deleteMany({ "lastCompany": "Y" })
    console.log(result);
    return res.send(result)
}

module.exports = {
    listAll,
    greaterSalary,
    overallExp,
    greaterYear,
    updateSalary,
    deleteCompany
}