const express = require('express');
const { check, validationResult } = require('express-validator');

exports.regiterRules = () => [
     check('fullName','Name is required').notEmpty(),
     check('email', 'this field should be a valid email').isEmail(),
     check('password', 'this field should be at least 6 character').isLength({
          min:6,
     }),
];

exports.loginRules = () => [
     check('email', 'this field should be a valid email').isEmail(),
     check('password','password is required').notEmpty(),
];

exports.productRules = () => [
     check('code', 'Code is required').notEmpty(),
     check('name', 'Nom is required').notEmpty(),
     check('price', 'Prix should be a number').isNumeric(),
     check('stock', 'Stock should be a number').isNumeric(),
     check('minStock', 'min Stock should be a number').isNumeric(),
];

exports.validator = (req, res, next) => {
     const errors = validationResult(req);
     errors.isEmpty()? next() : res.status(406).json({errors:errors.array()});
     // errors.isNumeric()? next() : res.status(406).json({errors:errors.array()});
};





