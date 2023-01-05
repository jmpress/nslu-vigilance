const db = require('../models/index');
const Router = require('express-promise-router');
const adminRouter = new Router();
const { authorizeAdmin } = require('../utils/authUtils');
const { formatUlpdata } = require('../utils/utils');

// const { makeAdmin } = require('../utils/adminUtils');

adminRouter.get('/users/all', authorizeAdmin, async (req, res, next) => {
    const rawUsers = await db.User.findAll();
    const formattedUsers = formatUlpdata(rawUsers);
    res.status(200).send(formattedUsers);
});

adminRouter.get('/users/stewards', authorizeAdmin, async (req, res, next) => {
    const rawUsers = await db.User.findAll({where: {role: 'steward'}});
    const formattedUsers = formatUlpdata(rawUsers);
    res.status(200).send(formattedUsers);
});

module.exports = adminRouter;