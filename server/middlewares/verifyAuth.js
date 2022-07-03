const jwt = require('jsonwebtoken');
const config = require('config');
const user = require('../models/user');
const secret =  config.get('secret');



const verifyAuth = async(req, res, next) => {
   let token = req.headers.authorization; 

   try {
    const decoded = await jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({msg:'invalid token'});
    const userVerified = await user.findById(decoded.id).select('-password');
    if (!userVerified) return res.status(400).json({msg:'unauthorized'});
    else {
    req.userVerified = userVerified
    next()
   }
   } catch (error) {
    res.status(500).json({msg:error.message})
   }
};

module.exports = verifyAuth;