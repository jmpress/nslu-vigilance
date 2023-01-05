const db = require('../models/index');

function authorizeAdmin(req, res, next){
    if(req.user.role === 'admin'){
        console.log('user is admin: ok');
        next();
    } else {
        res.status(403).send();
    }
}

function authorizeSteward(req, res, next){
    if(req.user.role === 'steward' || req.user.role === 'admin'){
        console.log('user is steward or admin: ok');
        next();
    } else {
        res.status(403).send();
    }
}

async function authorizeSelf(req, res, next){
    const txSubmitId = await db.Ulpdata.findOne({where: {id:req.params.id}},{attributes: ['submitted_by']})
    if(txSubmitId){
        if(req.user.id === txSubmitId.dataValues.submitted_by || req.user.role === 'steward' || req.user.role === 'admin'){
            console.log('user is authorized')

            next();
        } else {
            res.status(403).send();
        }
    } else {
        res.status(404).send();
    }
}

module.exports = { authorizeAdmin, authorizeSteward, authorizeSelf };