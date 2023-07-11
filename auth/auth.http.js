const userController = require('./users.controller');
const jwt = require('jsonwebtoken');
const {to} = require('../tools/to');

const loginUser = async (req, res) => {
    if(!req.body){
        return res.status(400).json({
            message: 'Missing data'
        });
    }else if(!req.body.user || !req.body.password){
        return res.status(400).json({
            message: 'Missing data'
        });
    }

    // Verify credentials
    let [err, resp] = await to(userController.checkUserCredentials(req.body.user, req.body.password));
    
    // If they are not valid, an error is displayed
    if(err || !resp){
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }
    // If they are valid we generate a JWT and return it
    let user = await userController.getUserIdFromUserName(req.body.user);
    const token = jwt.sign({
        userId: user.userId
    }, 'secretPassword');

    res.status(200).json({
        token: token
    });
};

exports.loginUser = loginUser;