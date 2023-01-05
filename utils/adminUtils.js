const db = require('../models/index');

async function makeSteward(user_id){
    try{
        //look up user by user_id
        const callOne = await db.User.findAll({where: {id: user_id}});
        const newSteward = callOne.dataValues;
        const shared_store_number = newSteward.store_number;

        //find current steward of store_number of user_id
        const callTwo = await db.User.findAll({where: {store_number: shared_store_number, role: 'steward'}})
        const oldSteward = callTwo.dataValues;
        
        //make that person a member, and user_id a steward
        oldSteward.role = 'member';
        newSteward.role = 'steward';

        //write both transactions back to db
        await db.User.update(oldSteward, {where: {id: oldSteward.id}});
        await db.User.update(newSteward, {where: {id: newSteward.id}});
        return true;

    }catch(err){
        console.log(err.stack);
        return false;
    }
}

async function removeStewardByUserId(user_id){
    try{
        const callOne = await db.User.findAll({where: {id: user_id, role: 'steward'}});
        const oldSteward = callOne.dataValues;
        oldSteward.role = 'member';
        await db.User.update(oldSteward, {where: {id: oldSteward.id}});
        return true;
    }catch(err){
        console.log(err.stack);
        return false;
    }
}

async function removeStewardByStoreId(store_number){
    try{
        const callOne = await db.User.findAll({where: {store_number, role: 'steward'}});
        const oldSteward = callOne.dataValues;
        oldSteward.role = 'member';
        await db.User.update(oldSteward, {where: {id: oldSteward.id}});
        return true;
    }catch(err){
        console.log(err.stack);
        return false;
    }
}