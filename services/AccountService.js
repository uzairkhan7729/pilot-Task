const User = require('../model/User');


const createUser = async (req) => {
    const { email, password } = req.body;
    console.log(req.body);
    let foundUser = await User.findOne({ email });
    if (foundUser) { 
        return res.status(403).json({ error: 'Email is already in use'});
    }
    
    const newUser = new User({ email, password})
    await newUser.save()

    const token =await signToken(newUser)
    return token;

};
module.exports = {
    createUser,
   
}