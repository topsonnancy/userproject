const express = require("express")
const router = express.Router()
const employeeController = require("../controllers/employeeController")

router.router("/")
    .get(employeeController.getAllEmployee)
    .post(employeeController.createEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

router.route("/:id")
    .get(employeeController.getOneEmployee)

module.exports = router
    