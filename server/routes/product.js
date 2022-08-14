const express = require('express');
const { addProduct, getProduct, delProduct, editProduct} = require('../controllers/product.controller');
const { productRules, validator } = require('../middlewares/validator');
const isAuth = require('../middlewares/verifyAuth');
const roleValidation = require('../middlewares/role');

const router = express.Router();

router.post('/addProduct', productRules(), validator, isAuth, roleValidation(['Admin']), addProduct);
router.get('/productList', getProduct);
router.delete('/delete/:id', isAuth, roleValidation(['Admin']), delProduct);
router.put('/update/:id', isAuth, roleValidation(['Admin']), editProduct);

module.exports = router;