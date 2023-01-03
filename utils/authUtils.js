const db = require('../models/index');


async function isSteward(req, res, next){
    try{
        let { dataValues } = await db.Steward.findOne({where: {steward_id: req.user.id}});
        if(!dataValues){
            res.redirect('/ulp/mine');
        }else{
            return(next());
        }
        
    }catch(err){
        next(err);
    }
    
}

/*
async function isAdmin(req, res, next){
    try{
        let { dataValues } = await db.Admin.findOne({where: {admin_id: req.user.id}});
        if(!dataValues){
            res.redirect('/ulp/mine');
        }else{
            return(next());
        }
        
    }catch(err){
        next(err);
    }
    
}
*/

module.exports = { isSteward };