const User = require("../models/User")

const bcrypt = require("bcrypt")

const handleLogin = async (req,res) => {

     const {user, pwd} = req.body
     if (!user || !pwd) return res.status(400).json( {"Message": "Field cannot be empty"})

     try{
        const foundUser = await User.findOne({username: user}).exec()
        if (!foundUser) return res.status(401).json({"Message": "User not found"})

        const match = await bcrypt.compare(pwd, foundUser.password)

     
     }
     
}