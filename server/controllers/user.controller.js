const user = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');


exports.register = async(req, res) => {
    const {fullName, email, password, registerDate, userRole} = req.body;
    const existantUser = await user.findOne({email});
    if (existantUser) return res.status(409).json({msg:'User already exists'});
    try {
        const newUser = new user ({
            fullName,
            email,
            password,
            registerDate,
            userRole,
        });
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        newUser.password = hash;
        await newUser.save();
        const payload = {
            id : newUser._id
        };
        let token = jwt.sign(payload, secret );
        res.send({
            token,
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                registerDate: newUser.registerDate,
                userRole: newUser.userRole,
            }
        })
        //res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.login = async(req, res) => {
    const {email, password} = req.body;
    try {
        const userLog = await user.findOne({email});
        if(!userLog) return res.status(404).json({msg:'E-mail or password is incorrect'});
        const isMatch = await bcrypt.compare(password, userLog.password);
        if (!isMatch) return res.status(404).json({msg:'E-mail or password is incorrect'});    
        const payload = {
            id : userLog._id,
        };
        let token = jwt.sign(payload, secret );
        res.send({
            token,
            user: {
                id: userLog._id,
                fullName: userLog.fullName,
                email: userLog.email,
            },
        });
    } catch (error) {
        res.status(500).json({msg:error.message})
    };
};


exports.auth = (req, res) => {
     res.send(req.userVerified);
};