const { listAll, greaterSalary, overallExp, greaterYear, updateSalary, deleteCompany } = require("../ControllerFile/userController");
const employeeRouter=require("express").Router();

employeeRouter.get("/employee1",listAll)

employeeRouter.get("/salary",greaterSalary)

employeeRouter.get("/experience",overallExp)

employeeRouter.get("/year",greaterYear)

employeeRouter.get("/update",updateSalary)

employeeRouter.get("/delete",deleteCompany)

module.exports=employeeRouter;