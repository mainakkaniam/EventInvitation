const User = require("../model/User");

exports.signup = async (req, res) => {
    try
    {
        const user = await User.find(req.body);
        if (user)
        {
            res.status(500).json({ message: "User already registered !" });
        }
        else {
            await User.create(req.body);
            res.json({ message: "Registered successfully !" });
        } 
        
    }
    catch (e)
    {
        res.status(500).json({message:"Some error occurred !"})
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.find(req.body);
        if (user)
            res.status(200).json({ message: "Logged In Successfully !" });
        else
             res.status(500).json({ message: "User not registered !" });
    }
    catch (e)
    {
        res.status(500).json({ message: "Some error occurred !" });
    }

}