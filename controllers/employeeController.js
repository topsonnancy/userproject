const Employee = require("../models/Employee")

//retrieve
const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find(
            res.status(200).json(employees)
        )
    } catch (error) {
        re.status(500).json({ "Error": `${error.message}`})
    }

}

// create
const createEmployee = async (req, res) => {
    const{firstname, department} = req.body
    if (!firstname || !department) return res.status(400).json({"Message": "Fields cannot be empty"})
    try {
       const existEmployee = await Employee.findOne({ firstname}).exec()
       if(existEmployee) return res.status(401).json({"Message": "Firstname already exist"})
       const createEmployee = await Employee.create({
        "firstname": firstname,
        "department": department
    })
    res.status(200).json({ "Message": `Employee ${createEmployee.firstname} was created successfully` })

    } catch (error) {
        res.status(500).json({ "Error": `${error.message}`})
    }

}

// update
const updateEmployee = async (req, res) => {
    const { firstname, department, id} = req.body
    if (!firstname || !department) return res.status(400).json({"Message": "Fileds cannot be empty"})
    try {
        const foundEmployee = await Employee.findOne({_id: id}).exec()
        if(!foundEmployee) return res.status(400).json({"Message": "No user with this id found"})

        if (firstname) foundEmployee.firstname = firstname
        if (department) foundEmployee.department = department
        
        const result = await foundEmployee.save()
        res.status(200).json({ "Message": `Employee ${result.firstname} updated successfully`})

    } catch (error) {
       res.status(500).json("Error":`${error.message}`)
    }

}

// delete
const deleteEmployee = async (req, res) => {
    const {id} = req.body
    try {
       const foundEmployee = await Employee.findOne({_id:id}).exec()
       if(!foundEmployee) return res.status(400).json({"Message": "No user with this id found"})
       const result = await Employee.deleteOne({_id:id})
       res.status(200).json({"Message": "Employee delete successfully"})

    } catch (error) {
        res.status(500).json("Error":`${error.message}`)
    }

}

// Get One Employee
const getOneEmployee = async (req, res) => {
    const {id} = req.param
    try {
       const employees = await Employee.findOne({_id: id}) 
       res.status(200).json(employee)
    } catch (error) {
       res.status(500).json({"Error": `${error.message}`}) 
    }
}

module.exports = { getAllEmployee, createEmployee, updateEmployee, deleteEmployee, getOneEmployee}